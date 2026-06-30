export interface GamePlayerStats {
  playerId: string;
  onePtMade: number | null;
  onePtAtt: number | null;
  twoPtMade: number | null;
  twoPtAtt: number | null;
  threePtMade: number | null;
  threePtAtt: number | null;
  assists: number | null;
  blocks: number | null;
  rebounds: number | null;
}

export interface GameTeam {
  name: string;
  score: number | null;
  players: GamePlayerStats[];
}

export interface Game {
  id: string;
  date: string;
  season: string;
  gameNumber: number;
  teams: [GameTeam, GameTeam];
  winner: string; // team name
  notes?: string;
  newsSlug?: string;
}

export const games: Game[] = [
  {
    id: "game-2-2026",
    date: "June 27, 2026",
    season: "2026",
    gameNumber: 2,
    winner: "BDT's",
    notes: "David Anderegg hit a game-winning one-pointer with five seconds left to seal the victory.",
    newsSlug: "bdts-beat-river-kings",
    teams: [
      {
        name: "BDT's",
        score: 5,
        players: [
          {
            playerId: "david-anderegg",
            onePtMade: 5, onePtAtt: 11,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 5,
            assists: 0, blocks: 2, rebounds: 0,
          },
          {
            playerId: "atlee-gallagher",
            onePtMade: 0, onePtAtt: 4,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            assists: 0, blocks: 5, rebounds: 0,
          },
        ],
      },
      {
        name: "River Kings",
        score: 4,
        players: [
          {
            playerId: "ashton-anderegg",
            onePtMade: 4, onePtAtt: 9,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 3,
            assists: 0, blocks: 3, rebounds: 0,
          },
          {
            playerId: "eli-huntsman",
            onePtMade: 0, onePtAtt: 2,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            assists: 1, blocks: 6, rebounds: 1,
          },
        ],
      },
    ],
  },
  {
    id: "game-1-2026",
    date: "June 9, 2026",
    season: "2026",
    gameNumber: 1,
    winner: "Murray Mice",
    notes: "Adam Swarzfager played solo as captain and defeated the River Kings in the 2026 season opener.",
    newsSlug: "game1-adam-victory",
    teams: [
      {
        name: "Murray Mice",
        score: null,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 9, onePtAtt: 26,
            twoPtMade: 0, twoPtAtt: 1,
            threePtMade: 0, threePtAtt: 0,
            assists: 0, blocks: 8, rebounds: 3,
          },
        ],
      },
      {
        name: "River Kings",
        score: null,
        players: [
          {
            playerId: "ashton-anderegg",
            onePtMade: 4, onePtAtt: 8,
            twoPtMade: 0, twoPtAtt: 1,
            threePtMade: 1, threePtAtt: 3,
            assists: 0, blocks: 5, rebounds: 2,
          },
          {
            playerId: "jack-baker",
            onePtMade: 1, onePtAtt: 9,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            assists: 2, blocks: 0, rebounds: 0,
          },
        ],
      },
    ],
  },
];
