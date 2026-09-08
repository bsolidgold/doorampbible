export interface UpcomingGame {
  id: string;
  date: string;
  time?: string;
  home: string;
  away: string;
  location?: string;
}

export const upcomingGames: UpcomingGame[] = [];
