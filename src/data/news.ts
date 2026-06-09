export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "ben-martinsen-poopy",
    title: "Breaking: Ben Martinsen is Poopy",
    date: "June 9, 2026",
    excerpt:
      "In a stunning development that has rocked the NDL community, multiple sources have confirmed that Ben Martinsen is, in fact, poopy.",
  },
  {
    slug: "game1-adam-victory",
    title: "Adam Goes Solo — Murray Mice Captain Wins the Season Opener",
    date: "June 9, 2026",
    excerpt:
      "Adam Swarzfager stepped up alone as a solo captain and took down Ashton Anderegg and Jack Baker of the River Kings in the first game of the 2026 NDL season.",
    image: "/images/game1-adam-victory.jpg",
    imageAlt: "Players gathered around the dooramp before Game 1",
  },
  {
    slug: "draft-results",
    title: "NDL Draft Results — Captains Stock Their Rosters",
    date: "May 31, 2026",
    excerpt:
      "The inaugural NDL draft is in the books. Captains Grant, Finn, Ashton, Adam, and David traded picks across three rounds to build out the Freaky Fredholers, Trampoline Titans, River Kings, Murray Mice, and BDT's.",
    image: "/images/draft-results.png",
    imageAlt: "NDL team logos",
  },
  {
    slug: "finn-ucl-tear",
    title: "Finn Anderegg Suffers Minor UCL Tear Ahead of 2026 Season",
    date: "May 30, 2026",
    excerpt:
      "Finn Anderegg has suffered a minor UCL tear while playing baseball, raising concerns about his availability as the 2026 NDL regular season approaches.",
    image: "/images/finn-ucl-injury.jpg",
    imageAlt: "Finn Anderegg down after UCL injury",
  },
  {
    slug: "bret-gold-challenge",
    title: "Bret Gold Issues 2v1 Challenge — \"Beat Me and I'll Let You Quit\"",
    date: "May 28, 2026",
    excerpt:
      "In a stunning development, former 90s pro dooramper Bret Gold has issued a direct challenge to retirees Owen Buckwalter and Max M: face him in a 2v1 match, and if they win, he will formally accept their retirements.",
    image: "/images/owen-bret-retirement.png",
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
