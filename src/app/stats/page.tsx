import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { PlayerList } from "@/components/ndl/PlayerList";
import { players } from "@/data/players";

export const metadata: Metadata = { title: "Stats — NDL Dooramp" };

export default function StatsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          Player Statistics
        </h1>
        <p className="mt-2 text-ndl-muted text-sm">
          Season averages, totals, and all-time records.
        </p>
      </div>

      <div className="mb-8 flex justify-end">
        <Link
          href="/stats/tracker"
          className="inline-block px-5 py-2 text-xs font-heading font-semibold uppercase tracking-widest border border-ndl-accent text-ndl-accent rounded hover:bg-ndl-accent hover:text-ndl-bg transition-colors duration-200"
        >
          Game Tracker →
        </Link>
      </div>

      <SectionHeader title="Players" />
      <PlayerList players={players} />
    </div>
  );
}
