export interface UpcomingGame {
  id: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  time?: string;
  /** Used for special events (All-Star Game, etc.) instead of home/away. */
  title?: string;
  home?: string;
  away?: string;
  location?: string;
}

export const upcomingGames: UpcomingGame[] = [
  {
    id: "halloween-tournament-2026",
    date: "2026-10-31",
    title: "NDL Halloween 1v1 Tournament",
    location: "Dooramp",
  },
];
