import type { Metadata } from "next";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { GameArchive } from "@/components/ndl/GameArchive";

export const metadata: Metadata = { title: "History — NDL Dooramp" };

export default function HistoryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          Dooramp History
        </h1>
        <p className="mt-2 text-ndl-muted text-sm leading-relaxed">
          The origins, legends, and evolution of the world&apos;s greatest sport.
        </p>
      </div>

      <section className="mb-12">
        <SectionHeader
          title="Records"
          subtitle="All-time single-game records in NDL history."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { category: "Points", value: "30", holder: "Adam Swarzfager" },
            { category: "Assists", value: "2", holder: "Jack Baker" },
            { category: "Rebounds", value: "3", holder: "Adam Swarzfager" },
            { category: "Blocks / Steals", value: "8", holder: "Adam Swarzfager" },
          ].map(({ category, value, holder }) => (
            <div
              key={category}
              className="bg-ndl-secondary border border-ndl-surface rounded-lg p-4 flex flex-col gap-1"
            >
              <div className="text-[10px] font-bold text-ndl-muted uppercase tracking-widest">{category}</div>
              <div className="font-heading font-black text-4xl text-ndl-accent leading-none">{value}</div>
              <div className="text-xs text-ndl-text font-semibold mt-1">{holder}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionHeader
          title="Game Archive"
          subtitle="Every game played in NDL history. Click a game to see the full box score."
        />
        <GameArchive />
      </section>

      {[
        {
          title: "The Founders",
          subtitle: "The original players who invented the game.",
        },
        {
          title: "The 90s Era",
          subtitle: "The golden age of competitive dooramp.",
        },
        {
          title: "Evolution of the Game",
          subtitle: "How dooramp has changed over the decades.",
        },
      ].map(({ title, subtitle }) => (
        <section key={title} className="mb-12">
          <SectionHeader title={title} subtitle={subtitle} />
          <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-5">
            <p className="text-ndl-muted text-sm">Details coming soon.</p>
          </div>
        </section>
      ))}
    </div>
  );
}
