import type { Metadata } from "next";
import { NewsGrid } from "@/components/ndl/NewsGrid";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "News — NDL",
};

export default function NewsPage() {
  return (
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 py-12">
      <SectionHeader title="All News" />
      <NewsGrid articles={newsArticles} />
    </div>
  );
}
