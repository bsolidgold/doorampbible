export interface Team {
  name: string;
  wins: number;
  losses: number;
  elo: string;
}

export const standings: Team[] = [
  { name: "Murray Mice", wins: 0, losses: 0, elo: "---" },
  { name: "Trampoline Titans", wins: 0, losses: 0, elo: "---" },
  { name: "River Kings", wins: 0, losses: 0, elo: "---" },
  { name: "Freaky Fredholers", wins: 0, losses: 0, elo: "---" },
];
