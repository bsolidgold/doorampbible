"use client";

import { useMemo, useState } from "react";
import type { CalendarEvent } from "@/lib/schedule";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function monthOf(iso: string) {
  const [year, month] = iso.split("-").map(Number);
  return { year, month: month - 1 };
}

function isoFor(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

interface ScheduleCalendarProps {
  events: CalendarEvent[];
  /** ISO date treated as "today", so server and client render the same grid. */
  today: string;
}

export function ScheduleCalendar({ events, today }: ScheduleCalendarProps) {
  const [view, setView] = useState(() => monthOf(today));

  const [todayYear, todayMonth] = today.split("-").map(Number);
  const { year, month } = view;

  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const list = map.get(event.date);
      if (list) list.push(event);
      else map.set(event.date, [event]);
    }
    return map;
  }, [events]);

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array<null>(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const shiftMonth = (delta: number) => {
    const next = month + delta;
    setView({ year: year + Math.floor(next / 12), month: ((next % 12) + 12) % 12 });
  };

  const goToToday = () => {
    setView(monthOf(today));
  };

  const monthEvents = events
    .filter((event) => event.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`))
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between gap-3 mb-4">
        <button
          type="button"
          onClick={() => shiftMonth(-1)}
          aria-label="Previous month"
          className="px-3 py-1.5 rounded border border-ndl-surface text-ndl-muted hover:text-ndl-text hover:border-ndl-accent transition-colors"
        >
          ←
        </button>
        <div className="text-center">
          <h3 className="font-heading font-bold text-xl uppercase tracking-widest text-ndl-text">
            {MONTH_NAMES[month]} {year}
          </h3>
          {(year !== todayYear || month !== todayMonth - 1) && (
            <button
              type="button"
              onClick={goToToday}
              className="mt-1 text-[11px] uppercase tracking-widest text-ndl-accent hover:underline"
            >
              Back to today
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => shiftMonth(1)}
          aria-label="Next month"
          className="px-3 py-1.5 rounded border border-ndl-surface text-ndl-muted hover:text-ndl-text hover:border-ndl-accent transition-colors"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-px rounded overflow-hidden border border-ndl-surface bg-ndl-surface">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="bg-ndl-secondary px-1 py-2 text-center text-[10px] font-heading font-semibold uppercase tracking-widest text-ndl-muted"
          >
            {day}
          </div>
        ))}

        {cells.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="bg-ndl-primary/40 min-h-[72px]" />;
          }
          const iso = isoFor(year, month, day);
          const dayEvents = eventsByDate.get(iso) ?? [];
          const isToday = iso === today;

          return (
            <div
              key={iso}
              className={`bg-ndl-secondary min-h-[72px] p-1.5 flex flex-col gap-1 ${
                isToday ? "ring-1 ring-inset ring-ndl-accent" : ""
              }`}
            >
              <span
                className={`text-[11px] font-semibold ${
                  isToday ? "text-ndl-accent" : "text-ndl-muted"
                }`}
              >
                {day}
              </span>
              {dayEvents.map((event) => (
                <span
                  key={event.id}
                  title={event.detail ? `${event.label} — ${event.detail}` : event.label}
                  className={`block rounded px-1 py-0.5 text-[10px] leading-tight font-semibold truncate ${
                    event.status === "upcoming"
                      ? "bg-ndl-accent text-white"
                      : "bg-ndl-surface text-ndl-text"
                  }`}
                >
                  {event.label}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      <ul className="mt-4 space-y-2">
        {monthEvents.length === 0 ? (
          <li className="text-ndl-muted text-sm">Nothing on the calendar this month.</li>
        ) : (
          monthEvents.map((event) => (
            <li key={event.id} className="flex flex-wrap items-baseline gap-x-2 text-sm">
              <span className="font-heading font-semibold uppercase tracking-widest text-ndl-text">
                {event.label}
              </span>
              <span className="text-xs text-ndl-muted">
                {MONTH_NAMES[month]} {Number(event.date.slice(8))}
                {event.detail ? ` · ${event.detail}` : ""}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
