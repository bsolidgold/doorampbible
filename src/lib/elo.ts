// NDL ELO System
// Fully designed but not yet wired to the website.
// Connect to standings and game results when the season starts.
//
// Pending before wiring up:
//   - Confirm captain assignments for Trampoline Titans, BDT's, Freaky Fredholers
//   - Get BDT's 3rd round pick name
//   - Enter real game results

export type DraftRound = "captain" | "first" | "second" | "third";

// Lower picks (higher tier weight) earn more reward for wins and less penalty for losses
export const TIER_WEIGHT: Record<DraftRound, number> = {
  captain: 1,
  first: 2,
  second: 3,
  third: 4,
};

export const K_FACTOR = 40;
export const PARTICIPATION_BONUS = 5; // Both teams earn this just for playing
export const ELO_SCALE = 400;

// More players used = less penalty for losses
const PLAYER_COUNT_LOSS_MULT: Record<number, number> = {
  1: 1.30,
  2: 1.10,
  3: 0.85,
  4: 0.60,
};

// More players used = more reward for wins
const PLAYER_COUNT_WIN_MULT: Record<number, number> = {
  1: 0.70,
  2: 0.90,
  3: 1.15,
  4: 1.40,
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

// Lower draft picks = less penalty when losing
export function draftTierLossMult(avg: number): number {
  return 1.4 - avg * 0.2;
}

// Lower draft picks = more reward when winning
export function draftTierWinMult(avg: number): number {
  return 0.6 + avg * 0.2;
}

// Bonus when winner's roster score is lower than loser's (depth upset)
export function upsetBonus(winnerScore: number, loserScore: number): number {
  if (loserScore <= winnerScore) return 1;
  return Math.pow(loserScore / winnerScore, 1.2);
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
  const ws = rosterScore(winnerRoster);
  const ls = rosterScore(loserRoster);

  const winMult =
    PLAYER_COUNT_WIN_MULT[wp] *
    draftTierWinMult(avgTier(winnerRoster)) *
    upsetBonus(ws, ls);

  const lossMult =
    PLAYER_COUNT_LOSS_MULT[lp] * draftTierLossMult(avgTier(loserRoster));

  const winnerDelta =
    PARTICIPATION_BONUS + Math.round(K_FACTOR * winMult * (1 - expected));
  const loserDelta =
    PARTICIPATION_BONUS - Math.round(K_FACTOR * lossMult * expected);

  return {
    winnerElo: wElo + winnerDelta,
    loserElo: lElo + loserDelta,
    winnerDelta,
    loserDelta,
  };
}
