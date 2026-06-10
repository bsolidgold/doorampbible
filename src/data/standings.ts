export interface Team {
  name: string;
  wins: number;
  losses: number;
  elo: string;
  logo?: string;
  logoSize?: number; // override display size in px, defaults to 60
}

export const standings: Team[] = [
  { name: "Murray Mice", wins: 1, losses: 0, elo: "27", logo: "/images/teams/murray-mice.png" },
  { name: "Trampoline Titans", wins: 0, losses: 0, elo: "---", logo: "/images/teams/trampoline-titans.png" },
  { name: "River Kings", wins: 0, losses: 1, elo: "9", logo: "/images/teams/river-kings.png" },
  { name: "Freaky Fredholers", wins: 0, losses: 0, elo: "---", logo: "/images/teams/freaky-fredholers.png", logoSize: 70 },
  { name: "BDT's", wins: 0, losses: 0, elo: "---", logo: "/images/teams/bdts.png" },
];
