import type { Metadata } from "next";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { StandingsTable } from "@/components/ndl/StandingsTable";
import { standings } from "@/data/standings";

export const metadata: Metadata = { title: "Standings — NDL Dooramp" };

export default function StandingsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          2026 NDL Season
        </h1>
        <p className="mt-2 text-ndl-muted text-sm">Team standings for the current season.</p>
      </div>

      <SectionHeader title="Team Standings" />
      <StandingsTable teams={standings} />
    </div>
  );
}
