import { NewsArticle } from "@/data/news";
import { NewsCard } from "./NewsCard";

interface NewsGridProps {
  articles: NewsArticle[];
}

export function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className="flex flex-col gap-4">
      {articles.map((article) => (
        <NewsCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
