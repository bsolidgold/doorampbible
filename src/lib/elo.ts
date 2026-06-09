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

export const K_FACTOR = 40;
export const PARTICIPATION_BONUS = 5; // Both teams earn this just for playing — teams never lose ELO
export const ELO_SCALE = 400;

// More players = more reward for wins. Range tightened so fewer players can't win as much.
const PLAYER_COUNT_WIN_MULT: Record<number, number> = {
  1: 0.60,
  2: 0.75,
  3: 1.10,
  4: 1.30,
};

export function expectedScore(teamElo: number, opponentElo: number): number {
  return 1 / (1 + Math.pow(10, (opponentElo - teamElo) / ELO_SCALE));
}

export function avgTier(roster: DraftRound[]): number {
  return roster.reduce((sum, r) => sum + TIER_WEIGHT[r], 0) / roster.length;
}

export function rosterScore(roster: DraftRound[]): number {
  return roster.reduce((sum, r) => sum + TIER_WEIGHT[r], 0);
}

// Lower draft picks = more reward when winning
export function draftTierWinMult(avg: number): number {
  return 0.6 + avg * 0.2;
}

// Bonus when winner used weaker avg tier than loser — uses avg so player count doesn't dilute it
export function upsetBonus(winnerAvg: number, loserAvg: number): number {
  if (winnerAvg <= loserAvg) return 1;
  return Math.pow(winnerAvg / loserAvg, 1.2);
}

// Bonus when winner had fewer players than loser — outnumbered and still won
export function outnumberedBonus(winnerCount: number, loserCount: number): number {
  if (loserCount <= winnerCount) return 1;
  return Math.pow(loserCount / winnerCount, 0.6);
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
  const lp = loserRoster.length;
  const wa = avgTier(winnerRoster);
  const la = avgTier(loserRoster);

  const winMult =
    PLAYER_COUNT_WIN_MULT[wp] *
    draftTierWinMult(wa) *
    upsetBonus(wa, la) *
    outnumberedBonus(wp, lp);

  const winnerDelta =
    PARTICIPATION_BONUS + Math.round(K_FACTOR * winMult * (1 - expected));

  // Losers earn participation bonus scaled by their draft tier — harder roster = more reward even in a loss
  const lossMult = PLAYER_COUNT_WIN_MULT[lp] * draftTierWinMult(la);
  const loserDelta = PARTICIPATION_BONUS + Math.round((K_FACTOR * 0.3) * lossMult * expected);

  return {
    winnerElo: wElo + winnerDelta,
    loserElo: lElo + loserDelta,
    winnerDelta,
    loserDelta,
  };
}
