export interface Team {
  name: string;
  wins: number;
  losses: number;
  elo: string;
  logo?: string;
}

export const standings: Team[] = [
  { name: "Murray Mice", wins: 2, losses: 0, elo: "46", logo: "/images/teams/murray-mice.png" },
  { name: "Trampoline Titans", wins: 0, losses: 1, elo: "1", logo: "/images/teams/trampoline-titans.png" },
  { name: "River Kings", wins: 1, losses: 3, elo: "22", logo: "/images/teams/river-kings.png" },
  { name: "Freaky Fredholers", wins: 0, losses: 0, elo: "---", logo: "/images/teams/freaky-fredholers.png" },
  { name: "BDT's", wins: 1, losses: 0, elo: "19", logo: "/images/teams/bdts.png" },
];
