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

export const upcomingGames: UpcomingGame[] = [];
