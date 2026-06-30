import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleLayoutProps {
  title: string;
  date: string;
  image?: string;
  imageAlt?: string;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
}

export function ArticleLayout({
  title,
  date,
  image,
  imageAlt,
  backHref = "/",
  backLabel = "← Back to Home",
  children,
}: ArticleLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href={backHref}
        className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted hover:text-ndl-text transition-colors"
      >
        {backLabel}
      </Link>

      <header className="mt-6 mb-8 pb-6 border-b border-ndl-surface">
        <p className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-2">
          {date}
        </p>
        <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-wide text-ndl-text leading-tight">
          {title}
        </h1>
        {image && (
          <div className="mt-6 rounded-lg overflow-hidden border border-ndl-surface">
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={900}
              height={600}
              className="w-full object-cover"
            />
          </div>
        )}
      </header>

      <article className="prose-ndl space-y-5 text-ndl-muted leading-relaxed">
        {children}
      </article>
    </div>
  );
}
