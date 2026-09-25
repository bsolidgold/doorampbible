export interface GamePlayerStats {
  playerId: string;
  onePtMade: number | null;
  onePtAtt: number | null;
  twoPtMade: number | null;
  twoPtAtt: number | null;
  threePtMade: number | null;
  threePtAtt: number | null;
  ftMade?: number | null;
  ftAtt?: number | null;
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
  /** Exhibition games (e.g. the All-Star Game) — shown on the site but excluded from standings and totals. */
  isAllStar?: boolean;
  /** Players who appeared for both teams; listed once in their own section rather than under either roster. */
  sharedPlayers?: {
    label: string;
    note?: string;
    players: GamePlayerStats[];
  };
}

export const games: Game[] = [
  {
    id: "game-11-2026",
    date: "September 25, 2026",
    season: "2026",
    gameNumber: 11,
    winner: "Murray Mice",
    notes: "Three overtimes, and it ended on a bounce. Ben Martinsen's only make of the night bounced in to win it 10-9 for the Murray Mice. Adam Swartzfager went 9-for-13 from the one-point line but missed all 18 of his two and three-point attempts. David Anderegg answered with 7 on 64% shooting in defeat. Aiden Shipp played his first NDL game after signing with the BDT's.",
    newsSlug: "mice-outlast-bdts-triple-overtime",
    teams: [
      {
        name: "Murray Mice",
        score: 10,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 9, onePtAtt: 13,
            twoPtMade: 0, twoPtAtt: 6,
            threePtMade: 0, threePtAtt: 12,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 4, rebounds: 0,
          },
          {
            playerId: "ben-martinsen",
            onePtMade: 1, onePtAtt: 4,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 2, rebounds: 0,
          },
        ],
      },
      {
        name: "BDT's",
        score: 9,
        players: [
          {
            playerId: "david-anderegg",
            onePtMade: 7, onePtAtt: 11,
            twoPtMade: 0, twoPtAtt: 2,
            threePtMade: 0, threePtAtt: 7,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 3, rebounds: 0,
          },
          {
            playerId: "aiden-shipp",
            onePtMade: 2, onePtAtt: 5,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 3, rebounds: 0,
          },
        ],
      },
    ],
  },
  {
    id: "all-star-2026",
    date: "September 12, 2026",
    season: "2026",
    gameNumber: 0,
    isAllStar: true,
    winner: "Adam's Team",
    notes: "The 2026 All-Star Game. Fan-voted All-Star Ben Hoag did not show up, leaving seven players, so Jaxon Gladhart played one quarter for each side rather than let either team go a man short. Adam Swartzfager hit a buzzer-beating three to end the second quarter. Gladhart, playing on a broken toe, was named MVP. Exhibition game — does not count toward standings, season totals, or games played.",
    newsSlug: "ndl-all-star-game-2026",
    teams: [
      {
        name: "Adam's Team",
        score: 8,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 2, onePtAtt: 8,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 1, threePtAtt: 2,
            ftMade: 0, ftAtt: 0,
            assists: 3, blocks: 6, rebounds: 1,
          },
          {
            playerId: "grant-bowers",
            onePtMade: 1, onePtAtt: 3,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 1, rebounds: 0,
          },
          {
            playerId: "frank-patrone",
            onePtMade: 1, onePtAtt: 4,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 0, rebounds: 1,
          },
        ],
      },
      {
        name: "David's Team",
        score: 7,
        players: [
          {
            playerId: "david-anderegg",
            onePtMade: 3, onePtAtt: 12,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 3,
            ftMade: 0, ftAtt: 0,
            assists: 2, blocks: 6, rebounds: 1,
          },
          {
            playerId: "ashton-anderegg",
            onePtMade: 1, onePtAtt: 3,
            twoPtMade: 1, twoPtAtt: 1,
            threePtMade: 0, threePtAtt: 3,
            ftMade: 0, ftAtt: 0,
            assists: 1, blocks: 3, rebounds: 0,
          },
          {
            playerId: "ben-martinsen",
            onePtMade: 0, onePtAtt: 0,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 0, rebounds: 0,
          },
        ],
      },
    ],
  
    sharedPlayers: {
      label: "Played for Both Teams",
      note: "Jaxon Gladhart played one quarter for each side after Ben Hoag failed to show, keeping both teams at full strength. The line below is his combined total across both; his 2 points were split one for Adam's Team and one for David's Team, and are already included in each team's score.",
      players: [
        {
          playerId: "jaxon-gladhart",
          onePtMade: 2, onePtAtt: 7,
          twoPtMade: 0, twoPtAtt: 0,
          threePtMade: 0, threePtAtt: 5,
          ftMade: 0, ftAtt: 0,
          assists: 1, blocks: 2, rebounds: 2,
        },
      ],
    },
  },
  {
    id: "game-10-2026",
    date: "September 20, 2026",
    season: "2026",
    gameNumber: 10,
    winner: "Murray Mice",
    notes: "In the third game of the day, Adam Swartzfager scored all 10 Murray Mice points on 10-of-15 shooting as the Mice beat the Trampoline Titans 10-7. Finn Anderegg scored all 7 Titans points. Rookie Jameson Bench made his NDL debut for the Titans.",
    newsSlug: "mice-beat-titans-jameson-bench-debut-game10",
    teams: [
      {
        name: "Murray Mice",
        score: 10,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 10, onePtAtt: 15,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 3,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 2, rebounds: 0,
          },
          {
            playerId: "frank-patrone",
            onePtMade: 0, onePtAtt: 2,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 1, blocks: 0, rebounds: 0,
          },
        ],
      },
      {
        name: "Trampoline Titans",
        score: 7,
        players: [
          {
            playerId: "finn-anderegg",
            onePtMade: 6, onePtAtt: 11,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            ftMade: 1, ftAtt: 2,
            assists: 0, blocks: 2, rebounds: 0,
          },
          {
            playerId: "jameson-bench",
            onePtMade: 0, onePtAtt: 6,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 8,
            ftMade: 0, ftAtt: 1,
            assists: 0, blocks: 0, rebounds: 0,
          },
        ],
      },
    ],
  },
  {
    id: "game-9-2026",
    date: "September 20, 2026",
    season: "2026",
    gameNumber: 9,
    winner: "Trampoline Titans",
    notes: "Captain Finn Anderegg returned from his UCL tear and scored all 14 Trampoline Titans points on 14-of-22 shooting as the Titans beat the River Kings 14-11 for their first win of the season. Jack Baker led the River Kings with a career-high 8 points in their second loss of the day.",
    newsSlug: "finn-anderegg-returns-titans-beat-river-kings-game9",
    teams: [
      {
        name: "Trampoline Titans",
        score: 14,
        players: [
          {
            playerId: "ben-hoag",
            onePtMade: 0, onePtAtt: 4,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 2, blocks: 2, rebounds: 0,
          },
          {
            playerId: "finn-anderegg",
            onePtMade: 14, onePtAtt: 22,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 3, rebounds: 1,
          },
        ],
      },
      {
        name: "River Kings",
        score: 11,
        players: [
          {
            playerId: "ashton-anderegg",
            onePtMade: 1, onePtAtt: 4,
            twoPtMade: 1, twoPtAtt: 1,
            threePtMade: 0, threePtAtt: 1,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 3, rebounds: 0,
          },
          {
            playerId: "jack-baker",
            onePtMade: 8, onePtAtt: 16,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 1, blocks: 4, rebounds: 0,
          },
        ],
      },
    ],
  },
  {
    id: "game-8-2026",
    date: "September 20, 2026",
    season: "2026",
    gameNumber: 8,
    winner: "Murray Mice",
    notes: "The final regular-season meeting between the two rivals went to double overtime. Adam Swartzfager scored 10 points and Frank Patrone added the other as the Murray Mice edged the rival River Kings 11-10. Ashton Anderegg scored 9 of the River Kings' 10 points, including a two and a three, but the River Kings came up one point short.",
    newsSlug: "murray-mice-edge-river-kings-game8",
    teams: [
      {
        name: "Murray Mice",
        score: 11,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 10, onePtAtt: 25,
            twoPtMade: 0, twoPtAtt: 1,
            threePtMade: 0, threePtAtt: 3,
            ftMade: 0, ftAtt: 1,
            assists: 1, blocks: 4, rebounds: 0,
          },
          {
            playerId: "frank-patrone",
            onePtMade: 1, onePtAtt: 7,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 5, rebounds: 1,
          },
        ],
      },
      {
        name: "River Kings",
        score: 10,
        players: [
          {
            playerId: "ashton-anderegg",
            onePtMade: 4, onePtAtt: 13,
            twoPtMade: 1, twoPtAtt: 1,
            threePtMade: 1, threePtAtt: 2,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 2, rebounds: 2,
          },
          {
            playerId: "jack-baker",
            onePtMade: 1, onePtAtt: 11,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 3, blocks: 1, rebounds: 0,
          },
        ],
      },
    ],
  },
  {
    id: "game-7-2026",
    date: "August 23, 2026",
    season: "2026",
    gameNumber: 7,
    winner: "Murray Mice",
    notes: "The longest game in dooramp history went five overtimes before the Murray Mice edged the River Kings 8-7. Adam Swartzfager scored all 8 points, Frank Patrone debuted minutes after being traded from the BDT's, and Ashton Anderegg piled up 8 blocks/steals in defeat.",
    newsSlug: "murray-mice-avenge-river-kings-game7",
    teams: [
      {
        name: "Murray Mice",
        score: 8,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 8, onePtAtt: 16,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 3,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 4, rebounds: 0,
          },
          {
            playerId: "jaxon-gladhart",
            onePtMade: 0, onePtAtt: 3,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 1, blocks: 1, rebounds: 0,
          },
          {
            playerId: "frank-patrone",
            onePtMade: 0, onePtAtt: 4,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 1, rebounds: 0,
          },
        ],
      },
      {
        name: "River Kings",
        score: 7,
        players: [
          {
            playerId: "ashton-anderegg",
            onePtMade: 5, onePtAtt: 12,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 8, rebounds: 0,
          },
          {
            playerId: "jack-baker",
            onePtMade: 2, onePtAtt: 4,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            ftMade: 0, ftAtt: 0,
            assists: 2, blocks: 1, rebounds: 1,
          },
        ],
      },
    ],
  },
  {
    id: "game-6-2026",
    date: "August 8, 2026",
    season: "2026",
    gameNumber: 6,
    winner: "Murray Mice",
    notes: "Murray Mice bounced back from an earlier loss the same day to rout the Freaky Fredholers 12-2 in the debut for both Grant Bowers and Isaac Cameron.",
    newsSlug: "murray-mice-rout-fredholers-game6",
    teams: [
      {
        name: "Murray Mice",
        score: 12,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 5, onePtAtt: 7,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 2, threePtAtt: 13,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 2, rebounds: 0,
          },
          {
            playerId: "ben-martinsen",
            onePtMade: 1, onePtAtt: 7,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 3, rebounds: 0,
          },
        ],
      },
      {
        name: "Freaky Fredholers",
        score: 2,
        players: [
          {
            playerId: "grant-bowers",
            onePtMade: 2, onePtAtt: 5,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 2, rebounds: 0,
          },
          {
            playerId: "isaac-cameron",
            onePtMade: 0, onePtAtt: 1,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 5,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 2, rebounds: 0,
          },
        ],
      },
    ],
  },
  {
    id: "game-5-2026",
    date: "August 8, 2026",
    season: "2026",
    gameNumber: 5,
    winner: "River Kings",
    notes: "The River Kings stunned the previously undefeated Murray Mice 9-6, led by a perfect shooting night from captain Ashton Anderegg.",
    newsSlug: "river-kings-upset-murray-mice-game5",
    teams: [
      {
        name: "River Kings",
        score: 9,
        players: [
          {
            playerId: "ashton-anderegg",
            onePtMade: 6, onePtAtt: 6,
            twoPtMade: 1, twoPtAtt: 1,
            threePtMade: 0, threePtAtt: 2,
            ftMade: 1, ftAtt: 1,
            assists: 0, blocks: 1, rebounds: 1,
          },
          {
            playerId: "eli-huntsman",
            onePtMade: 0, onePtAtt: 4,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 1,
            ftMade: 0, ftAtt: 1,
            assists: 1, blocks: 0, rebounds: 2,
          },
        ],
      },
      {
        name: "Murray Mice",
        score: 6,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 3, onePtAtt: 17,
            twoPtMade: 0, twoPtAtt: 1,
            threePtMade: 1, threePtAtt: 9,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 4, rebounds: 6,
          },
          {
            playerId: "ben-martinsen",
            onePtMade: 0, onePtAtt: 2,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            ftMade: 0, ftAtt: 0,
            assists: 0, blocks: 1, rebounds: 0,
          },
        ],
      },
    ],
  },
  {
    id: "game-4-2026",
    date: "July 22, 2026",
    season: "2026",
    gameNumber: 4,
    winner: "Murray Mice",
    notes: "Ben Martinsen made his season debut alongside captain Adam Swartzfager as the Murray Mice held off the BDT's 8-6.",
    newsSlug: "murray-mice-edge-bdts-game4",
    teams: [
      {
        name: "Murray Mice",
        score: 8,
        players: [
          {
            playerId: "adam-swarzfager",
            onePtMade: 8, onePtAtt: 14,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 8,
            assists: 0, blocks: 4, rebounds: 2,
          },
          {
            playerId: "ben-martinsen",
            onePtMade: 0, onePtAtt: 0,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            assists: 0, blocks: 1, rebounds: 0,
          },
        ],
      },
      {
        name: "BDT's",
        score: 6,
        players: [
          {
            playerId: "david-anderegg",
            onePtMade: 6, onePtAtt: 9,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 2,
            assists: 0, blocks: 4, rebounds: 3,
          },
          {
            playerId: "atlee-gallagher",
            onePtMade: 0, onePtAtt: 4,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 2,
            assists: 1, blocks: 0, rebounds: 0,
          },
        ],
      },
    ],
  },
  {
    id: "game-3-2026",
    date: "July 16, 2026",
    season: "2026",
    gameNumber: 3,
    winner: "River Kings",
    notes: "A heated altercation broke out between captains Finn Anderegg and Ashton Anderegg after Finn illegally slapped the ball from Ashton's hands.",
    newsSlug: "captains-clash-game3",
    teams: [
      {
        name: "River Kings",
        score: 8,
        players: [
          {
            playerId: "ashton-anderegg",
            onePtMade: 2, onePtAtt: 2,
            twoPtMade: 2, twoPtAtt: 3,
            threePtMade: 0, threePtAtt: 5,
            assists: 0, blocks: 3, rebounds: 0,
          },
          {
            playerId: "eli-huntsman",
            onePtMade: 2, onePtAtt: 3,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            assists: 0, blocks: 4, rebounds: 0,
          },
        ],
      },
      {
        name: "Trampoline Titans",
        score: 4,
        players: [
          {
            playerId: "finn-anderegg",
            onePtMade: 3, onePtAtt: 16,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            assists: 1, blocks: 3, rebounds: 0,
          },
          {
            playerId: "ben-hoag",
            onePtMade: 1, onePtAtt: 3,
            twoPtMade: 0, twoPtAtt: 0,
            threePtMade: 0, threePtAtt: 0,
            assists: 0, blocks: 2, rebounds: 1,
          },
        ],
      },
    ],
  },
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
    notes: "Adam Swartzfager played solo as captain and defeated the River Kings in the 2026 season opener.",
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
