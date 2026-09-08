import type { Metadata } from "next";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { ScheduleCalendar } from "@/components/ndl/ScheduleCalendar";
import { upcomingGames } from "@/data/schedule";
import { formatIsoDate, getCalendarEvents, upcomingLabel } from "@/lib/schedule";

export const metadata: Metadata = { title: "Schedule — NDL Dooramp" };

// Re-render hourly so the highlighted "today" doesn't freeze at build time.
export const revalidate = 3600;

export default function SchedulePage() {
  const events = getCalendarEvents();
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate(),
  ).padStart(2, "0")}`;

  const upcoming = [...upcomingGames].sort((a, b) => a.date.localeCompare(b.date));
  const results = events
    .filter((event) => event.status === "final")
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          Schedule
        </h1>
        <p className="mt-2 text-ndl-muted text-sm">
          Browse the season month by month. Red marks an upcoming game.
        </p>
      </div>

      <SectionHeader title="Calendar" />
      <ScheduleCalendar events={events} today={today} />

      <SectionHeader title="Upcoming Games" />
      {upcoming.length === 0 ? (
        <p className="text-ndl-muted text-sm mb-12">
          No games are scheduled right now. Check back soon.
        </p>
      ) : (
        <ul className="mb-12 space-y-3">
          {upcoming.map((game) => (
            <li
              key={game.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded border border-ndl-surface bg-ndl-secondary/40 px-4 py-3"
            >
              <span className="font-heading font-semibold uppercase tracking-widest text-sm text-ndl-text">
                {upcomingLabel(game)}
              </span>
              <span className="text-xs text-ndl-muted">
                {formatIsoDate(game.date)}
                {game.time ? ` · ${game.time}` : ""}
                {game.location ? ` · ${game.location}` : ""}
              </span>
            </li>
          ))}
        </ul>
      )}

      <SectionHeader title="Results" />
      <ul className="space-y-3">
        {results.map((game) => (
          <li
            key={game.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded border border-ndl-surface bg-ndl-secondary/40 px-4 py-3"
          >
            <span className="font-heading font-semibold uppercase tracking-widest text-sm text-ndl-text">
              {game.label}
            </span>
            <span className="text-xs text-ndl-muted">
              {formatIsoDate(game.date)}
              {game.detail ? ` · ${game.detail}` : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
