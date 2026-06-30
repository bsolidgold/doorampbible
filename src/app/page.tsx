import Link from "next/link";
import { Hero } from "@/components/ndl/Hero";
import { NewsGrid } from "@/components/ndl/NewsGrid";
import { StandingsTable } from "@/components/ndl/StandingsTable";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { newsArticles } from "@/data/news";
import { standings } from "@/data/standings";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_780px] gap-10">
          {/* News */}
          <section>
            <SectionHeader title="Latest News" />
            <NewsGrid articles={newsArticles.slice(0, 3)} />
            <div className="mt-4 flex justify-end">
              <Link
                href="/news"
                className="inline-block px-5 py-2 text-xs font-heading font-semibold uppercase tracking-widest border border-ndl-accent text-ndl-accent rounded hover:bg-ndl-accent hover:text-ndl-bg transition-colors duration-200"
              >
                View All News →
              </Link>
            </div>
          </section>

          {/* Standings sidebar */}
          <aside>
            <div className="lg:sticky lg:top-24 space-y-6">
              <div>
                <SectionHeader title="2026 Standings" />
                <StandingsTable teams={standings} />
              </div>
            </div>
          </aside>
        </div>

        {/* Hotline */}
        <section className="mt-16">
          <div className="bg-ndl-secondary border border-ndl-accent/40 rounded-lg p-6 text-center">
            <p className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-2">Dooramp Hotline</p>
            <p className="text-ndl-text text-sm mb-1">Contact us at</p>
            <a
              href="tel:+18018200326"
              className="text-3xl font-heading font-black text-ndl-accent tracking-widest hover:opacity-80 transition-opacity"
            >
              (801) 820-0326
            </a>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mt-16">
          <SectionHeader title="Coming Soon" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Shop",
                desc: "Official doorampball, trampolines, domes, retaining walls, and more.",
              },
              {
                title: "Winterdome",
                desc: "The annual dooramp tournament — live broadcasting coming soon.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-ndl-secondary border border-ndl-surface rounded-lg p-5 opacity-70"
              >
                <h3 className="font-heading font-bold text-base uppercase tracking-wide text-ndl-accent mb-2">
                  {title}
                </h3>
                <p className="text-ndl-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
