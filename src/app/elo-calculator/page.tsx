"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import {
  calculateElo,
  type DraftRound,
  K_FACTOR,
  PARTICIPATION_BONUS,
} from "@/lib/elo";

const DRAFT_ROUNDS: DraftRound[] = ["captain", "first", "second", "third"];

const ROUND_LABELS: Record<DraftRound, string> = {
  captain: "Captain Pick",
  first: "1st Round",
  second: "2nd Round",
  third: "3rd Round",
};

const RESULT_EMOJIS = ["🔥","💀","🤑","😭","🎉","💸","👑","🗑️","🚀","💩","😤","🤯","⚡","🎲","👻","🤡","😈","🏆","💔","🌈"];
function randomEmoji() {
  return RESULT_EMOJIS[Math.floor(Math.random() * RESULT_EMOJIS.length)];
}

const POPUPS = [
  { label: "Check the Standings", href: "/standings", emoji: "🏆" },
  { label: "Read the Latest News", href: "/news", emoji: "📰" },
  { label: "View Player Stats", href: "/players", emoji: "📊" },
  { label: "See the Draft Results", href: "/news/draft-results", emoji: "📋" },
];

function RosterSelector({
  label,
  roster,
  onChange,
}: {
  label: string;
  roster: DraftRound[];
  onChange: (r: DraftRound[]) => void;
}) {
  function toggle(round: DraftRound) {
    if (roster.includes(round)) {
      onChange(roster.filter((r) => r !== round));
    } else if (roster.length < 4) {
      onChange([...roster, round]);
    }
  }

  return (
    <div>
      <p className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-3">
        {label} — Players Used ({roster.length}/4)
      </p>
      <div className="flex flex-wrap gap-2">
        {DRAFT_ROUNDS.map((round) => {
          const selected = roster.includes(round);
          return (
            <button
              key={round}
              onClick={() => toggle(round)}
              className={`px-3 py-1.5 text-xs font-heading font-semibold uppercase tracking-wide rounded border transition-colors ${
                selected
                  ? "bg-ndl-accent text-ndl-bg border-ndl-accent"
                  : "bg-transparent text-ndl-muted border-ndl-surface hover:border-ndl-accent hover:text-ndl-text"
              }`}
            >
              {ROUND_LABELS[round]}
            </button>
          );
        })}
      </div>
      {roster.length === 0 && (
        <p className="mt-2 text-xs text-red-400">Select at least 1 player</p>
      )}
    </div>
  );
}

function EloInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-1">
        {label} Current ELO{" "}
        <span className="normal-case font-normal text-ndl-muted/60">
          (leave blank if first game)
        </span>
      </label>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. 1200"
        className="w-full bg-ndl-secondary border border-ndl-surface rounded px-3 py-2 text-sm text-ndl-text placeholder:text-ndl-muted/40 focus:outline-none focus:border-ndl-accent"
      />
    </div>
  );
}

export default function EloCalculatorPage() {
  const [winnerEloStr, setWinnerEloStr] = useState("");
  const [loserEloStr, setLoserEloStr] = useState("");
  const [winnerRoster, setWinnerRoster] = useState<DraftRound[]>([]);
  const [loserRoster, setLoserRoster] = useState<DraftRound[]>([]);

  // Ad / timer state
  const [phase, setPhase] = useState<"idle" | "ad" | "results">("idle");
  const [countdown, setCountdown] = useState(10);
  const [results, setResults] = useState<{ aWins: ReturnType<typeof calculateElo>; bWins: ReturnType<typeof calculateElo>; emojis: string[] } | null>(null);

  // Popup state
  const [popup, setPopup] = useState<(typeof POPUPS)[0] | null>(null);
  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const winnerElo = winnerEloStr.trim() === "" ? null : Number(winnerEloStr);
  const loserElo = loserEloStr.trim() === "" ? null : Number(loserEloStr);
  const canCalculate = winnerRoster.length > 0 && loserRoster.length > 0;

  // Trigger random popups every 8–15 seconds while on page
  useEffect(() => {
    function schedulePopup() {
      const delay = 8000 + Math.random() * 7000;
      popupTimerRef.current = setTimeout(() => {
        const p = POPUPS[Math.floor(Math.random() * POPUPS.length)];
        setPopup(p);
        // Auto-dismiss after 4s
        setTimeout(() => setPopup(null), 4000);
        schedulePopup();
      }, delay);
    }
    schedulePopup();
    return () => { if (popupTimerRef.current) clearTimeout(popupTimerRef.current); };
  }, []);

  // Countdown timer during ad phase
  useEffect(() => {
    if (phase !== "ad") return;
    if (countdown <= 0) {
      setPhase("results");
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  function handleCalculate() {
    if (!canCalculate) return;
    const aWins = calculateElo(winnerElo, loserElo, winnerRoster, loserRoster);
    const bWins = calculateElo(loserElo, winnerElo, loserRoster, winnerRoster);
    const emojis = [randomEmoji(), randomEmoji(), randomEmoji(), randomEmoji()];
    setResults({ aWins, bWins, emojis });
    setCountdown(10);
    setPhase("ad");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 relative">

      {/* Random popup */}
      {popup && (
        <div className="fixed bottom-6 right-6 z-50 bg-ndl-accent text-white rounded-xl shadow-2xl px-5 py-4 flex items-center gap-3 animate-bounce max-w-xs">
          <span className="text-2xl">{popup.emoji}</span>
          <div>
            <p className="text-xs font-heading font-bold uppercase tracking-widest">Don&apos;t miss it!</p>
            <Link href={popup.href} className="text-sm font-heading font-black underline" onClick={() => setPopup(null)}>
              {popup.label}
            </Link>
          </div>
          <button onClick={() => setPopup(null)} className="ml-auto text-white/70 hover:text-white text-lg leading-none">✕</button>
        </div>
      )}

      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          ELO Calculator
        </h1>
        <p className="mt-2 text-ndl-muted text-sm">
          Simulate any hypothetical game to see how much ELO each team would gain.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/40 rounded text-yellow-400 text-xs font-heading font-semibold uppercase tracking-wide">
          ⚠ Experimental — the ELO system is still being finalized before the season starts
        </div>
      </div>

      <div className="space-y-8">
        {/* Team A */}
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6 space-y-5">
          <SectionHeader title="Team A" />
          <EloInput label="Team A" value={winnerEloStr} onChange={setWinnerEloStr} />
          <RosterSelector label="Team A" roster={winnerRoster} onChange={setWinnerRoster} />
        </div>

        {/* Team B */}
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6 space-y-5">
          <SectionHeader title="Team B" />
          <EloInput label="Team B" value={loserEloStr} onChange={setLoserEloStr} />
          <RosterSelector label="Team B" roster={loserRoster} onChange={setLoserRoster} />
        </div>

        {/* Calculate button */}
        {phase === "idle" && (
          <button
            onClick={handleCalculate}
            disabled={!canCalculate}
            className="w-full py-3 rounded-lg font-heading font-black uppercase tracking-widest text-sm bg-ndl-accent text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-ndl-accent/80 transition-colors"
          >
            Calculate ELO
          </button>
        )}

        {/* Ad / Loading screen */}
        {phase === "ad" && (
          <div className="bg-ndl-secondary border-2 border-ndl-accent rounded-xl p-8 text-center space-y-4">
            <p className="text-xs font-heading font-bold uppercase tracking-widest text-ndl-accent">📢 Advertisement</p>
            <div className="bg-ndl-primary rounded-lg p-6 space-y-3">
              <p className="text-3xl">🏆</p>
              <p className="font-heading font-black text-xl uppercase tracking-wide text-ndl-text">
                Check the NDL Standings!
              </p>
              <p className="text-ndl-muted text-sm">See who&apos;s climbing the leaderboard after every game.</p>
              <Link
                href="/standings"
                className="inline-block mt-2 px-4 py-2 bg-ndl-accent text-white text-xs font-heading font-bold uppercase tracking-widest rounded hover:bg-ndl-accent/80 transition-colors"
              >
                View Standings →
              </Link>
            </div>
            <p className="text-ndl-muted text-xs font-heading uppercase tracking-widest">
              Results in{" "}
              <span className="text-ndl-text font-black text-lg">{countdown}</span>
              {" "}second{countdown !== 1 ? "s" : ""}...
            </p>
            <button
              onClick={() => setPhase("results")}
              className="text-ndl-muted text-xs underline hover:text-ndl-text transition-colors"
            >
              Skip
            </button>
          </div>
        )}

        {/* Results */}
        {phase === "results" && results && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <SectionHeader title="Results" />
              <button
                onClick={() => { setPhase("idle"); setResults(null); }}
                className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted hover:text-ndl-text transition-colors"
              >
                ← Recalculate
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Team A wins */}
              <div className="bg-ndl-secondary border border-green-500/50 rounded-lg p-6 text-center">
                <p className="text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">
                  Team A — Win
                </p>
                <p className="text-4xl font-heading font-black text-green-400">
                  {results.emojis[0]} +{results.aWins.winnerDelta.toLocaleString()}
                </p>
                <p className="text-xs text-ndl-muted mt-1">ELO gained</p>
                {winnerElo !== null && (
                  <p className="text-xs text-ndl-muted mt-2">
                    {winnerElo} → {results.aWins.winnerElo.toLocaleString()}
                  </p>
                )}
              </div>

              {/* Team A loses */}
              <div className="bg-ndl-secondary border border-red-500/30 rounded-lg p-6 text-center">
                <p className="text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">
                  Team A — Loss
                </p>
                <p className="text-4xl font-heading font-black text-red-400">
                  {results.emojis[1]} {results.bWins.loserDelta >= 0 ? "+" : ""}{results.bWins.loserDelta.toLocaleString()}
                </p>
                <p className="text-xs text-ndl-muted mt-1">ELO gained</p>
                {winnerElo !== null && (
                  <p className="text-xs text-ndl-muted mt-2">
                    {winnerElo} → {(winnerElo + results.bWins.loserDelta).toLocaleString()}
                  </p>
                )}
              </div>

              {/* Team B wins */}
              <div className="bg-ndl-secondary border border-green-500/50 rounded-lg p-6 text-center">
                <p className="text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">
                  Team B — Win
                </p>
                <p className="text-4xl font-heading font-black text-green-400">
                  {results.emojis[2]} +{results.bWins.winnerDelta.toLocaleString()}
                </p>
                <p className="text-xs text-ndl-muted mt-1">ELO gained</p>
                {loserElo !== null && (
                  <p className="text-xs text-ndl-muted mt-2">
                    {loserElo} → {results.bWins.winnerElo.toLocaleString()}
                  </p>
                )}
              </div>

              {/* Team B loses */}
              <div className="bg-ndl-secondary border border-red-500/30 rounded-lg p-6 text-center">
                <p className="text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">
                  Team B — Loss
                </p>
                <p className="text-4xl font-heading font-black text-red-400">
                  {results.emojis[3]} {results.aWins.loserDelta >= 0 ? "+" : ""}{results.aWins.loserDelta.toLocaleString()}
                </p>
                <p className="text-xs text-ndl-muted mt-1">ELO gained</p>
                {loserElo !== null && (
                  <p className="text-xs text-ndl-muted mt-2">
                    {loserElo} → {(loserElo + results.aWins.loserDelta).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* How it works */}
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6">
          <SectionHeader title="How It Works" />
          <ul className="mt-3 space-y-2 text-sm text-ndl-muted leading-relaxed">
            <li>
              <span className="text-ndl-text font-semibold">No ELO loss:</span>{" "}
              Both teams always gain at least +{PARTICIPATION_BONUS} ELO just for playing — no team ever loses ELO.
            </li>
            <li>
              <span className="text-ndl-text font-semibold">Player count:</span>{" "}
              Solo wins earn the most (1 player = 1.40×). Adding a second player dips the reward since it&apos;s a much easier win (2 = 0.65×). Going to 3 or 4 players climbs back up (3 = 1.00×, 4 = 1.25×).
            </li>
            <li>
              <span className="text-ndl-text font-semibold">Draft tier:</span>{" "}
              Winning with later-round picks (2nd, 3rd round) earns more ELO than winning with a captain or 1st round pick.
            </li>
            <li>
              <span className="text-ndl-text font-semibold">Opponent strength:</span>{" "}
              Your win reward scales with your opponent&apos;s average player quality. Beating a team with strong players (captain, 1st round) earns more. If they add weak players and dilute their average, your reward goes down — it&apos;s an easier win.
            </li>
            <li>
              <span className="text-ndl-text font-semibold">Loser reward:</span>{" "}
              The losing team also earns ELO based on their own draft tier and player count — better roster = more ELO even in a loss.
            </li>
            <li>
              <span className="text-ndl-text font-semibold">First game:</span>{" "}
              If either team has no ELO yet, the match is treated as a 50/50.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
