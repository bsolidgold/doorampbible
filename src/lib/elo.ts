// NDL ELO System
// Fully designed but not yet wired to the website.
// Connect to standings and game results when the season starts.
//
// Pending before wiring up:
//   - Get BDT's 3rd round pick name
//   - Enter real game results

export type DraftRound = "captain" | "first" | "second" | "third";

// Lower picks (higher tier weight) earn more reward for wins
export const TIER_WEIGHT: Record<DraftRound, number> = {
  captain: 1,
  first: 2,
  second: 3,
  third: 4,
};

// Inverted: Captain = 4 (high strength), 3rd round = 1 (low strength)
const STRENGTH: Record<DraftRound, number> = {
  captain: 4,
  first: 3,
  second: 2,
  third: 1,
};

export const K_FACTOR = 40;
export const PARTICIPATION_BONUS = 5; // Both teams earn this just for playing — teams never lose ELO
export const ELO_SCALE = 400;

// Solo play removed from NDL. 2 players is the minimum and baseline.
// More players = slightly more reward as coordinating larger rosters adds difficulty.
const PLAYER_COUNT_WIN_MULT: Record<number, number> = {
  2: 1.00,
  3: 1.15,
  4: 1.30,
};

export function expectedScore(teamElo: number, opponentElo: number): number {
  return 1 / (1 + Math.pow(10, (opponentElo - teamElo) / ELO_SCALE));
}

export function avgTier(roster: DraftRound[]): number {
  return roster.reduce((sum, r) => sum + TIER_WEIGHT[r], 0) / roster.length;
}

// Average strength of a roster — Captain contributes 4, 3rd round contributes 1
// Adding weak players lowers the average (easier opponent), adding strong players raises it (harder opponent)
export function avgStrength(roster: DraftRound[]): number {
  return roster.reduce((sum, r) => sum + STRENGTH[r], 0) / roster.length;
}

// Lower draft picks = more reward when winning
export function draftTierWinMult(avg: number): number {
  return 0.6 + avg * 0.2;
}

// Bonus when winner's strength is lower than loser's (weaker roster beat a stronger one)
// Uses total strength so adding a Captain to Team B gives a bigger bonus than adding a 3rd round
export function upsetBonus(winnerStrength: number, loserStrength: number): number {
  if (winnerStrength >= loserStrength) return 1;
  return Math.pow(loserStrength / winnerStrength, 1.0);
}

// How the opponent's player count affects the winner's reward.
// 2 players = baseline (1.0×). For 3+ players, extra picks adjust the reward
// based on their quality: strong extras (captain) make the opponent harder to beat
// so winner earns more; weak extras (3rd round) dilute the opponent so winner earns less.
export function opponentCountMult(loserRoster: DraftRound[]): number {
  const lp = loserRoster.length;
  if (lp <= 2) return 1.0;
  // Players beyond the first 2 — their avg strength shifts reward up or down
  const extraPlayers = loserRoster.slice(2);
  const extraAvgStrength = extraPlayers.reduce((s, r) => s + STRENGTH[r], 0) / extraPlayers.length;
  // extraAvgStrength ranges 1–4. At 2.5 (midpoint) = no change.
  // Above 2.5 (stronger) = slight bonus; below 2.5 (weaker) = slight penalty.
  const adjustment = (extraAvgStrength - 2.5) * 0.08;
  return Math.max(0.75, Math.min(1.25, 1.0 + adjustment));
}

export interface EloResult {
  winnerElo: number;
  loserElo: number;
  winnerDelta: number;
  loserDelta: number;
}

// Pass null for ELO when a team hasn't played yet — treated as 50/50
export function calculateElo(
  winnerElo: number | null,
  loserElo: number | null,
  winnerRoster: DraftRound[],
  loserRoster: DraftRound[]
): EloResult {
  const firstGame = winnerElo === null || loserElo === null;
  const wElo = winnerElo ?? 0;
  const lElo = loserElo ?? 0;

  const expected = firstGame ? 0.5 : expectedScore(wElo, lElo);

  const wp = winnerRoster.length;
  const wa = avgTier(winnerRoster);
  const ws = avgStrength(winnerRoster);
  const ls = avgStrength(loserRoster);

  const winMult =
    PLAYER_COUNT_WIN_MULT[wp] *
    draftTierWinMult(wa) *
    upsetBonus(ws, ls) *
    opponentCountMult(loserRoster);

  const winnerDelta =
    PARTICIPATION_BONUS + Math.round(K_FACTOR * winMult * (1 - expected));

  // Losers earn base participation bonus + a small bonus per later-round pick used.
  // Captain/1st = +0, 2nd round = +1, 3rd round = +2 — incentivizes bringing later picks.
  const LOSS_ROUND_BONUS: Record<DraftRound, number> = { captain: 0, first: 0, second: 1, third: 2 };
  const lossRoundBonus = loserRoster.reduce((sum, r) => sum + LOSS_ROUND_BONUS[r], 0);
  const loserDelta = PARTICIPATION_BONUS + lossRoundBonus;

  return {
    winnerElo: wElo + winnerDelta,
    loserElo: lElo + loserDelta,
    winnerDelta,
    loserDelta,
  };
}
