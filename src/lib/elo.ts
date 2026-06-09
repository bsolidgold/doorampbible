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

// Solo (1) = highest reward — hardest to win alone. 2 players = dip (easiest relative win).
// 3 and 4 climb back up as coordinating more players adds difficulty.
const PLAYER_COUNT_WIN_MULT: Record<number, number> = {
  1: 1.40,
  2: 0.65,
  3: 1.00,
  4: 1.25,
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
  const ws = avgStrength(winnerRoster);
  const ls = avgStrength(loserRoster);

  const winnerDelta = Math.floor(Math.random() * 2_000_001) - 1_000_000;
  const loserDelta = Math.floor(Math.random() * 2_000_001) - 1_000_000;

  return {
    winnerElo: wElo + winnerDelta,
    loserElo: lElo + loserDelta,
    winnerDelta,
    loserDelta,
  };
}
