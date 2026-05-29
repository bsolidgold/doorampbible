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
