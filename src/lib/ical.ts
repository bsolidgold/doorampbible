import type { UpcomingGame } from "@/data/schedule";

/**
 * Minimal iCal reader for the league's Google Calendar feed.
 *
 * Google publishes one VEVENT per game. We only need the summary, the start
 * time and the location, so this parses those rather than pulling in a full
 * iCalendar library.
 */

/** Calendar the schedule is published from. Set in the hosting environment. */
const FEED_URL = process.env.NDL_CALENDAR_ICS;

/** Times in the feed are rendered in this zone. */
const TIME_ZONE = process.env.NDL_CALENDAR_TZ ?? "America/Denver";

interface RawEvent {
  summary?: string;
  location?: string;
  uid?: string;
  /** Raw DTSTART property name, e.g. "DTSTART;TZID=America/Denver". */
  startProp?: string;
  startValue?: string;
}

/** Long iCal properties wrap onto continuation lines starting with a space or tab. */
function unfold(feed: string): string[] {
  const lines = feed.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  for (const line of lines) {
    if ((line.startsWith(" ") || line.startsWith("\t")) && out.length > 0) {
      out[out.length - 1] += line.slice(1);
    } else {
      out.push(line);
    }
  }
  return out;
}

function unescapeText(value: string): string {
  return value
    .replace(/\\n/gi, " ")
    .replace(/\\,/g, ",")
    .replace(/\;/g, ";")
    .replace(/\\\\/g, "\\")
    .trim();
}

function parseEvents(feed: string): RawEvent[] {
  const events: RawEvent[] = [];
  let current: RawEvent | null = null;

  for (const line of unfold(feed)) {
    if (line === "BEGIN:VEVENT") {
      current = {};
      continue;
    }
    if (line === "END:VEVENT") {
      if (current) events.push(current);
      current = null;
      continue;
    }
    if (!current) continue;

    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const prop = line.slice(0, colon);
    const value = line.slice(colon + 1);
    const name = prop.split(";")[0].toUpperCase();

    if (name === "SUMMARY") current.summary = unescapeText(value);
    else if (name === "LOCATION") current.location = unescapeText(value);
    else if (name === "UID") current.uid = value.trim();
    else if (name === "DTSTART") {
      current.startProp = prop;
      current.startValue = value.trim();
    }
  }

  return events;
}

interface Start {
  /** ISO date, YYYY-MM-DD */
  date: string;
  /** Formatted local time, absent for all-day events. */
  time?: string;
}

function formatInZone(utc: Date): Start {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(utc);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const minute = get("minute");
  const period = get("dayPeriod").toUpperCase();

  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    time: `${get("hour")}${minute === "00" ? "" : `:${minute}`} ${period}`,
  };
}

/**
 * DTSTART comes in three shapes: a floating local time, a UTC time ending in
 * "Z", and an all-day date (VALUE=DATE). Only the UTC form needs converting.
 */
function parseStart(event: RawEvent): Start | null {
  const { startProp, startValue } = event;
  if (!startProp || !startValue) return null;

  const dateOnly = /^(\d{4})(\d{2})(\d{2})$/.exec(startValue);
  if (dateOnly) {
    return { date: `${dateOnly[1]}-${dateOnly[2]}-${dateOnly[3]}` };
  }

  const dateTime = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/.exec(startValue);
  if (!dateTime) return null;

  const [, year, month, day, hour, minute, second, zulu] = dateTime;

  if (zulu) {
    return formatInZone(
      new Date(Date.UTC(+year, +month - 1, +day, +hour, +minute, +second)),
    );
  }

  // Already a local time for the calendar's zone — render it as written.
  const h = Number(hour);
  const period = h >= 12 ? "PM" : "AM";
  const twelve = h % 12 === 0 ? 12 : h % 12;
  return {
    date: `${year}-${month}-${day}`,
    time: `${twelve}${minute === "00" ? "" : `:${minute}`} ${period}`,
  };
}

function toUpcomingGame(event: RawEvent, index: number): UpcomingGame | null {
  const start = parseStart(event);
  if (!start) return null;

  return {
    id: event.uid ?? `calendar-${start.date}-${index}`,
    date: start.date,
    time: start.time,
    title: event.summary || "NDL Game",
    location: event.location,
  };
}

/**
 * Reads upcoming games from the league calendar. Returns null when no feed is
 * configured or the fetch fails, so callers can fall back to the static list
 * rather than showing an empty schedule.
 */
export async function fetchCalendarGames(): Promise<UpcomingGame[] | null> {
  if (!FEED_URL) return null;

  try {
    const response = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!response.ok) return null;

    const games = parseEvents(await response.text())
      .map(toUpcomingGame)
      .filter((game): game is UpcomingGame => game !== null)
      .sort((a, b) => a.date.localeCompare(b.date));

    return games;
  } catch {
    return null;
  }
}
