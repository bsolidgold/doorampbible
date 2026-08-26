export interface Team {
  name: string;
  wins: number;
  losses: number;
  logo?: string;
}

export const standings: Team[] = [
  { name: "Murray Mice", wins: 4, losses: 1, logo: "/images/teams/murray-mice.png" },
  { name: "Trampoline Titans", wins: 0, losses: 1, logo: "/images/teams/trampoline-titans.png" },
  { name: "River Kings", wins: 2, losses: 3, logo: "/images/teams/river-kings.png" },
  { name: "Freaky Fredholers", wins: 0, losses: 1, logo: "/images/teams/freaky-fredholers.png" },
  { name: "BDT's", wins: 1, losses: 1, logo: "/images/teams/bdts.png" },
];
