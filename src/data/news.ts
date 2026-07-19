export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageHeight?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "murray-mice-historic-rout",
    title: "Perfect Night — Murray Mice Shut Out River Kings 40-0 in Most Lopsided Game in NDL History",
    date: "July 18, 2026",
    excerpt:
      "Adam Swarzfager went a perfect 20-for-20 from the field and Ben Martinsen racked up 22 blocks and steals as the Murray Mice blanked the River Kings 40-0, the first shutout and most lopsided margin in NDL history.",
  },
  {
    slug: "captains-clash-game3",
    title: "Captains Clash — Finn and Ashton Nearly Come to Blows in Game 3",
    date: "July 16, 2026",
    excerpt:
      "The River Kings held off the Trampoline Titans 8–4, but the game was overshadowed by a heated altercation between captains Finn Anderegg and Ashton Anderegg after an illegal slap of the ball.",
  },
  {
    slug: "bdts-beat-river-kings",
    title: "Dave's Game-Winner — BDT's Edge River Kings in Thriller",
    date: "June 27, 2026",
    excerpt:
      "David Anderegg hit a clutch one-pointer with five seconds left to give the BDT's a 5–4 victory over the River Kings in one of the most dramatic finishes the NDL has seen.",
    image: "/images/news/dave-game-winner.png",
    imageAlt: "David Anderegg hitting the game-winning shot",
    imagePosition: "object-top",
    imageHeight: "h-72",
  },
  {
    slug: "solo-play-banned",
    title: "Solo Play Banned — NDL Mandates Minimum Two-Man Rosters",
    date: "June 11, 2026",
    excerpt:
      "The NDL has officially banned solo play, requiring all teams to field at least two players per game. The move reshapes strategy league-wide and closes a loophole in the ELO system.",
  },
  {
    slug: "game1-adam-victory",
    title: "Adam Goes Solo — Murray Mice Captain Wins the Season Opener",
    date: "June 9, 2026",
    excerpt:
      "Adam Swarzfager stepped up alone as a solo captain and took down Ashton Anderegg and Jack Baker of the River Kings in the first game of the 2026 NDL season.",
    image: "/images/news/game1-adam-victory.jpg",
    imageAlt: "Players gathered around the dooramp before Game 1",
  },
  {
    slug: "draft-results",
    title: "NDL Draft Results — Captains Stock Their Rosters",
    date: "May 31, 2026",
    excerpt:
      "The inaugural NDL draft is in the books. Captains Grant, Finn, Ashton, Adam, and David traded picks across three rounds to build out the Freaky Fredholers, Trampoline Titans, River Kings, Murray Mice, and BDT's.",
    image: "/images/news/draft-results.png",
    imageAlt: "NDL team logos",
  },
  {
    slug: "finn-ucl-tear",
    title: "Finn Anderegg Suffers Minor UCL Tear Ahead of 2026 Season",
    date: "May 30, 2026",
    excerpt:
      "Finn Anderegg has suffered a minor UCL tear while playing baseball, raising concerns about his availability as the 2026 NDL regular season approaches.",
    image: "/images/news/finn-ucl-injury.jpg",
    imageAlt: "Finn Anderegg down after UCL injury",
  },
  {
    slug: "bret-gold-challenge",
    title: "Bret Gold Issues 2v1 Challenge — \"Beat Me and I'll Let You Quit\"",
    date: "May 28, 2026",
    excerpt:
      "In a stunning development, former 90s pro dooramper Bret Gold has issued a direct challenge to retirees Owen Buckwalter and Max M: face him in a 2v1 match, and if they win, he will formally accept their retirements.",
    image: "/images/news/owen-bret-retirement.png",
    imageAlt: "Owen Buckwalter and Bret Gold",
  },
  {
    slug: "owen-buckwalter-retires",
    title: "Owen Buckwalter Retires — One Week Before Season Opener",
    date: "May 27, 2026",
    excerpt:
      "In a blow to the NDL community, Owen Buckwalter has announced his retirement from competitive dooramp — just one week before the start of the regular season.",
  },
  {
    slug: "ndl-launches",
    title: "The NDL is here.",
    date: "2026",
    excerpt:
      "The National Dooramp League officially launches online. Stay tuned for rules, player stats, and more.",
  },
];
