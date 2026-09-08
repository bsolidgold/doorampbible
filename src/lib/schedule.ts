import { games } from "@/data/games";
import { upcomingGames } from "@/data/schedule";

export interface CalendarEvent {
  id: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  label: string;
  detail?: string;
  status: "upcoming" | "final";
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Converts a "August 23, 2026" style date into "2026-08-23". */
export function toIsoDate(display: string): string | null {
  const match = display.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (!match) return null;
  const monthIndex = MONTHS.indexOf(match[1]);
  if (monthIndex === -1) return null;
  return `${match[3]}-${String(monthIndex + 1).padStart(2, "0")}-${match[2].padStart(2, "0")}`;
}

export function formatIsoDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function upcomingLabel(game: (typeof upcomingGames)[number]): string {
  return game.title ?? `${game.away} @ ${game.home}`;
}

/** Every game — scheduled and played — as calendar events. */
export function getCalendarEvents(): CalendarEvent[] {
  const events: CalendarEvent[] = [];

  for (const game of upcomingGames) {
    events.push({
      id: game.id,
      date: game.date,
      label: upcomingLabel(game),
      detail: [game.time, game.location].filter(Boolean).join(" · ") || undefined,
      status: "upcoming",
    });
  }

  for (const game of games) {
    const iso = toIsoDate(game.date);
    if (!iso) continue;
    const [teamA, teamB] = game.teams;
    events.push({
      id: game.id,
      date: iso,
      label: `${teamA.name} vs ${teamB.name}`,
      detail: `${teamA.score ?? "—"}–${teamB.score ?? "—"} · ${game.winner} win`,
      status: "final",
    });
  }

  return events;
}
