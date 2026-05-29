import type { Metadata } from "next";
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

      <SectionHeader title="Players" />
      <PlayerList players={players} />
    </div>
  );
}
