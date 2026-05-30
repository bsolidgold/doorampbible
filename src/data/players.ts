export type PlayerStatus = "active" | "retired";

export interface PlayerStats {
  ppg: string;
  apg: string;
  bpg: string;
  fpg: string;
  threepg: string;
  twopg: string;
}

export interface Player {
  id: string;
  name: string;
  photo: string;
  status: PlayerStatus;
  seasonAverages: PlayerStats;
  seasonTotals: PlayerStats;
  allTimeTotals: PlayerStats;
  nicknames: string;
  description: string;
  accolades: string;
}

const blank: PlayerStats = {
  ppg: "---",
  apg: "---",
  bpg: "---",
  fpg: "---",
  threepg: "---",
  twopg: "---",
};

export const players: Player[] = [
  {
    id: "adam-swarzfager",
    name: "Adam Swarzfager",
    photo: "/images/adam-swarzfager.png",
    status: "active",
    seasonAverages: blank,
    seasonTotals: blank,
    allTimeTotals: blank,
    nicknames: "---",
    description: "---",
    accolades: "---",
  },
  {
    id: "ashton-anderegg",
    name: "Ashton Anderegg",
    photo: "/images/ashton-anderegg.jpg",
    status: "active",
    seasonAverages: blank,
    seasonTotals: blank,
    allTimeTotals: blank,
    nicknames: "---",
    description: "---",
    accolades: "---",
  },
  {
    id: "finn-anderegg",
    name: "Finn Anderegg",
    photo: "/images/finn-anderegg.jpg",
    status: "active",
    seasonAverages: blank,
    seasonTotals: blank,
    allTimeTotals: blank,
    nicknames: "---",
    description: "---",
    accolades: "---",
  },
  {
    id: "grant-bowers",
    name: "Grant Bowers",
    photo: "/images/grant-bowers.png",
    status: "active",
    seasonAverages: blank,
    seasonTotals: blank,
    allTimeTotals: blank,
    nicknames: "---",
    description: "---",
    accolades: "---",
  },
  {
    id: "david-anderegg",
    name: "David Anderegg",
    photo: "/images/david-anderegg.jpg",
    status: "active",
    seasonAverages: blank,
    seasonTotals: blank,
    allTimeTotals: blank,
    nicknames: "---",
    description: "---",
    accolades: "---",
  },
];
