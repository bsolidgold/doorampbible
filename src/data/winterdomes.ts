export interface BracketSlot {
  name: string;
  seed?: number;
  note?: string; // e.g. "DQ", "sub"
}

export interface BracketMatch {
  top: BracketSlot;
  bottom: BracketSlot;
  winner?: string;
  score?: string;
}

export interface BracketRound {
  name: string;
  matches: BracketMatch[];
}

export interface BracketData {
  rounds: BracketRound[];
  note?: string;
}

export interface WinterdomePlayer {
  name: string;
  playerId?: string; // links to players.ts if they're on the NDL roster
  dnp?: boolean;
}

export interface WinterdomeTeam {
  name: string;
  players: WinterdomePlayer[];
}

export interface WinterdomeMatchup {
  round: string;
  teamA: string;
  teamB: string;
  winner?: string;
  score?: string;
  notes?: string;
}

export interface Winterdome {
  year: number;
  teams: WinterdomeTeam[];
  matchups?: WinterdomeMatchup[];
  champion?: string;
  notes?: string;
  bracket?: BracketData;
}

export const winterdomes: Winterdome[] = [
  {
    year: 2025,
    champion: "Murray Mice",
    notes: "Round robin qualifying with the top two teams advancing to the final.",
    bracket: {
      note: "Top 2 teams from round robin qualifying advanced to the final.",
      rounds: [
        {
          name: "Final",
          matches: [
            { top: { name: "Murray Mice", seed: 1 }, bottom: { name: "Bowling Bobblers", seed: 2 }, winner: "Murray Mice" },
          ],
        },
      ],
    },
    matchups: [
      { round: "Round Robin", teamA: "Murray Mice", teamB: "Reno Reapers", winner: "Murray Mice", score: "3–1" },
      { round: "Round Robin", teamA: "Murray Mice", teamB: "Jolly Jackrackers", winner: "Murray Mice", score: "31–2" },
      { round: "Round Robin", teamA: "Murray Mice", teamB: "Bowling Bobblers", winner: "Murray Mice" },
      { round: "Round Robin", teamA: "Reno Reapers", teamB: "Jolly Jackrackers", winner: "Reno Reapers" },
      { round: "Round Robin", teamA: "Bowling Bobblers", teamB: "Reno Reapers", winner: "Bowling Bobblers", score: "7–6" },
      { round: "Round Robin", teamA: "Bowling Bobblers", teamB: "Jolly Jackrackers", winner: "Bowling Bobblers", score: "11–1" },
      { round: "Final", teamA: "Murray Mice", teamB: "Bowling Bobblers", winner: "Murray Mice" },
    ],
    teams: [
      {
        name: "Murray Mice",
        players: [
          { name: "Adam Swarzfager", playerId: "adam-swarzfager" },
          { name: "Ben Martinsen", playerId: "ben-martinsen" },
          { name: "Orion Anderegg" },
          { name: "Isaac Cameron", playerId: "isaac-cameron" },
          { name: "Frank Patrone", playerId: "frank-patrone" },
        ],
      },
      {
        name: "Reno Reapers",
        players: [
          { name: "Ashton Anderegg", playerId: "ashton-anderegg" },
          { name: "Eli Huntsman", playerId: "eli-huntsman" },
          { name: "Jaxon Gladhart", playerId: "jaxon-gladhart" },
          { name: "Zachary Armijo" },
        ],
      },
      {
        name: "Jolly Jackrackers",
        players: [
          { name: "Jack Baker", playerId: "jack-baker" },
          { name: "Finn Anderegg", playerId: "finn-anderegg" },
          { name: "Cooper Armijo" },
          { name: "Archer Rugh" },
        ],
      },
      {
        name: "Bowling Bobblers",
        players: [
          { name: "Owen Buckwalter" },
          { name: "Grant Bowers", playerId: "grant-bowers" },
          { name: "Owen Simmons" },
          { name: "Liam Cook", dnp: true },
          { name: "Max Goodman", dnp: true },
        ],
      },
    ],
  },
  {
    year: 2024,
    champion: "Owen Buckwalter",
    notes: "Single-elimination 1v1 bracket tournament with 8 players seeded 1–4 per half.",
    bracket: {
      rounds: [
        {
          name: "Round of 8",
          matches: [
            { top: { name: "Owen Buckwalter", seed: 1 }, bottom: { name: "Liam Cook", seed: 4 }, winner: "Owen Buckwalter" },
            { top: { name: "Eli Huntsman", seed: 3 }, bottom: { name: "Zach Armijo", seed: 2 }, winner: "Eli Huntsman" },
            { top: { name: "Daniel McCullough", seed: 1 }, bottom: { name: "Mason Pay", seed: 4, note: "DQ" }, winner: "Mason Pay" },
            { top: { name: "Grant Bowers", seed: 3 }, bottom: { name: "Jack Baker", seed: 2 }, winner: "Grant Bowers" },
          ],
        },
        {
          name: "Semifinal",
          matches: [
            { top: { name: "Owen Buckwalter" }, bottom: { name: "Eli Huntsman" }, winner: "Owen Buckwalter" },
            { top: { name: "Max Mitchell", note: "sub" }, bottom: { name: "Grant Bowers" }, winner: "Max Mitchell" },
          ],
        },
        {
          name: "Final",
          matches: [
            { top: { name: "Owen Buckwalter" }, bottom: { name: "Max Mitchell" }, winner: "Owen Buckwalter", score: "2–1" },
          ],
        },
      ],
    },
    matchups: [
      { round: "Round of 8", teamA: "Owen Buckwalter", teamB: "Liam Cook", winner: "Owen Buckwalter" },
      { round: "Round of 8", teamA: "Eli Huntsman", teamB: "Zach Armijo", winner: "Eli Huntsman" },
      { round: "Round of 8", teamA: "Mason Pay", teamB: "Daniel McCullough", winner: "Mason Pay", notes: "Mason Pay disqualified after this match — replaced by Max Mitchell." },
      { round: "Round of 8", teamA: "Grant Bowers", teamB: "Jack Baker", winner: "Grant Bowers" },
      { round: "Semifinal", teamA: "Owen Buckwalter", teamB: "Eli Huntsman", winner: "Owen Buckwalter" },
      { round: "Semifinal", teamA: "Max Mitchell", teamB: "Grant Bowers", winner: "Max Mitchell" },
      { round: "Final", teamA: "Owen Buckwalter", teamB: "Max Mitchell", winner: "Owen Buckwalter", score: "2–1" },
    ],
    teams: [
      {
        name: "Participants",
        players: [
          { name: "Owen Buckwalter", playerId: "owen-buckwalter" },
          { name: "Liam Cook", playerId: "liam-cook" },
          { name: "Eli Huntsman", playerId: "eli-huntsman" },
          { name: "Zach Armijo", playerId: "zachary-armijo" },
          { name: "Mason Pay", playerId: "mason-pay" },
          { name: "Daniel McCullough", playerId: "daniel-mccullough" },
          { name: "Grant Bowers", playerId: "grant-bowers" },
          { name: "Jack Baker", playerId: "jack-baker" },
        ],
      },
    ],
  },
];
