export interface Team {
  name: string;
  wins: number;
  losses: number;
  elo: string;
  logo?: string;
}

export const standings: Team[] = [
  { name: "Murray Mice", wins: 0, losses: 0, elo: "---", logo: "/images/teams/murray-mice.png" },
  { name: "Trampoline Titans", wins: 0, losses: 0, elo: "---", logo: "/images/teams/trampoline-titans.png" },
  { name: "River Kings", wins: 0, losses: 0, elo: "---", logo: "/images/teams/river-kings.png" },
  { name: "Freaky Fredholers", wins: 0, losses: 0, elo: "---" },
  { name: "BDT's", wins: 0, losses: 0, elo: "---", logo: "/images/teams/bdts.png" },
];
