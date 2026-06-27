"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NewsArticle } from "@/data/news";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Link href={`/news/${article.slug}`} className="block group">
        <div className="bg-ndl-secondary/60 backdrop-blur-sm border border-ndl-surface rounded-lg p-5 transition-all duration-200 group-hover:border-ndl-accent/50 group-hover:bg-ndl-secondary">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-1 rounded-full bg-ndl-accent" />
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted">
              {article.date}
            </span>
          </div>

          <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-ndl-text leading-tight mb-2 group-hover:text-ndl-accent transition-colors">
            {article.title}
          </h3>

          {article.image && (
            <div className={`relative w-full ${article.imageHeight ?? "h-48"} rounded-md overflow-hidden mb-3`}>
              <Image
                src={article.image}
                alt={article.imageAlt ?? article.title}
                fill
                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${article.imagePosition ?? ""}`}
              />
            </div>
          )}

          <p className="text-ndl-muted text-sm leading-relaxed mb-3 line-clamp-3">
            {article.excerpt}
          </p>

          <span className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-accent group-hover:underline">
            Read more →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
