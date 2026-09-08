import type { Metadata } from "next";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { games } from "@/data/games";
import { upcomingGames } from "@/data/schedule";

export const metadata: Metadata = { title: "Schedule — NDL Dooramp" };

export default function SchedulePage() {
  const played = [...games].sort((a, b) => b.gameNumber - a.gameNumber);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          Schedule
        </h1>
        <p className="mt-2 text-ndl-muted text-sm">Upcoming games and completed results.</p>
      </div>

      <SectionHeader title="Upcoming Games" />
      {upcomingGames.length === 0 ? (
        <p className="text-ndl-muted text-sm mb-12">
          No games are scheduled right now. Check back soon.
        </p>
      ) : (
        <ul className="mb-12 space-y-3">
          {upcomingGames.map((game) => (
            <li
              key={game.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded border border-ndl-surface bg-ndl-secondary/40 px-4 py-3"
            >
              <span className="font-heading font-semibold uppercase tracking-widest text-sm text-ndl-text">
                {game.away} @ {game.home}
              </span>
              <span className="text-xs text-ndl-muted">
                {game.date}
                {game.time ? ` · ${game.time}` : ""}
                {game.location ? ` · ${game.location}` : ""}
              </span>
            </li>
          ))}
        </ul>
      )}

      <SectionHeader title="Results" />
      <ul className="space-y-3">
        {played.map((game) => {
          const [teamA, teamB] = game.teams;
          return (
            <li
              key={game.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded border border-ndl-surface bg-ndl-secondary/40 px-4 py-3"
            >
              <span className="font-heading font-semibold uppercase tracking-widest text-sm text-ndl-text">
                {teamA.name} {teamA.score ?? "—"} — {teamB.score ?? "—"} {teamB.name}
              </span>
              <span className="text-xs text-ndl-muted">
                Game {game.gameNumber} · {game.date}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
