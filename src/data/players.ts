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
    seasonTotals: {
      ppg: "4/9",
      twopg: "---",
      threepg: "0/3",
      apg: "0",
      bpg: "3",
      fpg: "0",
    },
    allTimeTotals: blank,
    nicknames: "---",
    description: "---",
    accolades: "---",
  },
  {
    id: "eli-huntsman",
    name: "Eli Huntsman",
    photo: "/dooSilhouette.png",
    status: "active",
    seasonAverages: blank,
    seasonTotals: {
      ppg: "0/2",
      twopg: "---",
      threepg: "0/1",
      apg: "1",
      bpg: "6",
      fpg: "1",
    },
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
    seasonTotals: {
      ppg: "5/11",
      twopg: "---",
      threepg: "0/5",
      apg: "0",
      bpg: "2",
      fpg: "0",
    },
    allTimeTotals: blank,
    nicknames: "---",
    description: "---",
    accolades: "---",
  },
  {
    id: "atlee-gallagher",
    name: "Atlee Gallagher",
    photo: "/dooSilhouette.png",
    status: "active",
    seasonAverages: blank,
    seasonTotals: {
      ppg: "0/4",
      twopg: "---",
      threepg: "0/1",
      apg: "0",
      bpg: "5",
      fpg: "0",
    },
    allTimeTotals: blank,
    nicknames: "---",
    description: "---",
    accolades: "---",
  },
];
