"use client";

import { useState } from "react";
import { players, teamOrder } from "@/data/players";
import { SectionHeader } from "@/components/ndl/SectionHeader";

interface PlayerStats {
  onePtMade: number;
  onePtAtt: number;
  twoPtMade: number;
  twoPtAtt: number;
  threePtMade: number;
  threePtAtt: number;
  ftMade: number;
  ftAtt: number;
  assists: number;
  blocks: number;
  rebounds: number;
}

const blankStats = (): PlayerStats => ({
  onePtMade: 0,
  onePtAtt: 0,
  twoPtMade: 0,
  twoPtAtt: 0,
  threePtMade: 0,
  threePtAtt: 0,
  ftMade: 0,
  ftAtt: 0,
  assists: 0,
  blocks: 0,
  rebounds: 0,
});

function pct(made: number, att: number): string {
  if (!att) return "---";
  return ((made / att) * 100).toFixed(0) + "%";
}

function formatSummary(
  selected: string[],
  stats: Record<string, PlayerStats>,
  gameDate: string,
  gameNotes: string
): string {
  const lines: string[] = [];
  lines.push("=== NDL GAME STATS ===");
  if (gameDate) lines.push(`Date: ${gameDate}`);
  if (gameNotes) lines.push(`Notes: ${gameNotes}`);
  lines.push("");

  for (const team of teamOrder) {
    const teamSelected = selected.filter((id) => players.find((p) => p.id === id)?.team === team);
    if (teamSelected.length === 0) continue;
    lines.push(`=== ${team} ===`);
    for (const id of teamSelected) {
      const player = players.find((p) => p.id === id);
      if (!player) continue;
      const s = stats[id] ?? blankStats();
      lines.push(`--- ${player.name} ---`);
      lines.push(`1pt:  ${s.onePtMade}/${s.onePtAtt} (${pct(s.onePtMade, s.onePtAtt)})`);
      lines.push(`2pt:  ${s.twoPtMade}/${s.twoPtAtt} (${pct(s.twoPtMade, s.twoPtAtt)})`);
      lines.push(`3pt:  ${s.threePtMade}/${s.threePtAtt} (${pct(s.threePtMade, s.threePtAtt)})`);
      lines.push(`FT:   ${s.ftMade}/${s.ftAtt} (${pct(s.ftMade, s.ftAtt)})`);
      lines.push(`AST:  ${s.assists}  |  BLK/STL: ${s.blocks}  |  REB: ${s.rebounds}`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

function encodeShareUrl(
  selected: string[],
  stats: Record<string, PlayerStats>,
  gameDate: string,
  gameNotes: string
): string {
  const data = { selected, stats, gameDate, gameNotes };
  const encoded = encodeURIComponent(btoa(JSON.stringify(data)));
  return `${window.location.origin}/stats/tracker?data=${encoded}`;
}

function Counter({
  label,
  value,
  onChange,
  color = "default",
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  color?: "default" | "accent";
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-heading uppercase tracking-widest w-16 ${color === "accent" ? "text-ndl-accent" : "text-ndl-muted"}`}>
        {label}
      </span>
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-lg font-bold flex items-center justify-center active:bg-red-500/40 transition-colors"
      >
        −
      </button>
      <span className="w-8 text-center font-heading font-bold text-ndl-text text-lg">
        {value}
      </span>
      <button
        onClick={() => onChange(value + 1)}
        className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-lg font-bold flex items-center justify-center active:bg-green-500/40 transition-colors"
      >
        +
      </button>
    </div>
  );
}

function StatRow({
  label,
  made,
  att,
  onMade,
  onAtt,
}: {
  label: string;
  made: number;
  att: number;
  onMade: (v: number) => void;
  onAtt: (v: number) => void;
}) {
  function handleMade(v: number) {
    const delta = v - made;
    onMade(v);
    onAtt(Math.max(0, att + delta));
  }

  function handleAtt(v: number) {
    onAtt(Math.max(v, made));
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs font-heading uppercase tracking-widest text-ndl-accent font-semibold">
          {label}
        </span>
        <span className="text-xs text-ndl-muted">{pct(made, att)}</span>
      </div>
      <Counter label="Made" value={made} onChange={handleMade} />
      <Counter label="Attempts" value={att} onChange={handleAtt} />
    </div>
  );
}

function PlayerStatCard({
  id,
  stats,
  updateStat,
}: {
  id: string;
  stats: Record<string, PlayerStats>;
  updateStat: (id: string, field: keyof PlayerStats, value: number) => void;
}) {
  const player = players.find((p) => p.id === id);
  if (!player) return null;
  const s = stats[id] ?? blankStats();

  return (
    <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-4">
      <p className="font-heading font-bold uppercase tracking-wide text-ndl-text text-sm mb-4">
        {player.name}
      </p>

      <div className="flex gap-0">
        {/* Left column — 1PT / 2PT / 3PT */}
        <div className="flex-1 space-y-4 pr-4">
          <StatRow
            label="1pt"
            made={s.onePtMade}
            att={s.onePtAtt}
            onMade={(v) => updateStat(id, "onePtMade", v)}
            onAtt={(v) => updateStat(id, "onePtAtt", v)}
          />
          <StatRow
            label="2pt"
            made={s.twoPtMade}
            att={s.twoPtAtt}
            onMade={(v) => updateStat(id, "twoPtMade", v)}
            onAtt={(v) => updateStat(id, "twoPtAtt", v)}
          />
          <StatRow
            label="3pt"
            made={s.threePtMade}
            att={s.threePtAtt}
            onMade={(v) => updateStat(id, "threePtMade", v)}
            onAtt={(v) => updateStat(id, "threePtAtt", v)}
          />
        </div>

        {/* Vertical divider */}
        <div className="w-px bg-ndl-surface self-stretch mx-1" />

        {/* Right column — AST / BLK / REB, then red line, then FT */}
        <div className="flex-1 space-y-4 pl-4">
          <Counter label="Assists" value={s.assists} onChange={(v) => updateStat(id, "assists", v)} color="accent" />
          <Counter label="Blk/Stl" value={s.blocks} onChange={(v) => updateStat(id, "blocks", v)} color="accent" />
          <Counter label="Rebounds" value={s.rebounds} onChange={(v) => updateStat(id, "rebounds", v)} color="accent" />
          <div className="border-t-2 border-ndl-accent pt-3">
            <StatRow
              label="FT"
              made={s.ftMade}
              att={s.ftAtt}
              onMade={(v) => updateStat(id, "ftMade", v)}
              onAtt={(v) => updateStat(id, "ftAtt", v)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrackerPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [stats, setStats] = useState<Record<string, PlayerStats>>({});
  const [gameDate, setGameDate] = useState("");
  const [gameNotes, setGameNotes] = useState("");
  const [emailAddr, setEmailAddr] = useState("");
  const [toast, setToast] = useState("");

  function togglePlayer(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
    if (!stats[id]) {
      setStats((prev) => ({ ...prev, [id]: blankStats() }));
    }
  }

  function updateStat(id: string, field: keyof PlayerStats, value: number) {
    setStats((prev) => ({
      ...prev,
      [id]: { ...(prev[id] ?? blankStats()), [field]: value },
    }));
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  function handleCopy() {
    const text = formatSummary(selected, stats, gameDate, gameNotes);
    navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard!"));
  }

  function handleEmail() {
    if (!emailAddr) return showToast("Enter an email address first.");
    const text = formatSummary(selected, stats, gameDate, gameNotes);
    const subject = encodeURIComponent(`NDL Game Stats — ${gameDate || "No Date"}`);
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${emailAddr}?subject=${subject}&body=${body}`;
  }

  function handleShare() {
    const url = encodeShareUrl(selected, stats, gameDate, gameNotes);
    navigator.clipboard.writeText(url).then(() => showToast("Share link copied!"));
  }

  const summary = selected.length > 0
    ? formatSummary(selected, stats, gameDate, gameNotes)
    : null;

  const activeTeams = teamOrder.filter((team) =>
    selected.some((id) => players.find((p) => p.id === id)?.team === team)
  );

  function teamScore(team: string): number {
    return selected
      .filter((id) => players.find((p) => p.id === id)?.team === team)
      .reduce((sum, id) => {
        const s = stats[id] ?? blankStats();
        return sum + s.onePtMade + s.twoPtMade * 2 + s.threePtMade * 3;
      }, 0);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-ndl-accent text-ndl-bg px-4 py-2 rounded font-heading font-semibold text-sm uppercase tracking-wide shadow-lg">
          {toast}
        </div>
      )}

      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          Game Tracker
        </h1>
        <p className="mt-2 text-ndl-muted text-sm">
          Select players, enter post-game stats, then export.
        </p>
      </div>

      {activeTeams.length >= 2 && (
        <div className="sticky top-16 z-40 mb-8">
          <div className="bg-ndl-bg border border-ndl-accent/40 rounded-lg px-6 py-4 flex items-center justify-center gap-8 shadow-lg">
            {activeTeams.slice(0, 2).map((team, i) => (
              <>
                {i === 1 && (
                  <span key="sep" className="text-ndl-muted text-2xl font-heading font-black">—</span>
                )}
                <div key={team} className="text-center">
                  <p className="text-[10px] font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-0.5">{team}</p>
                  <p className="text-5xl font-heading font-black text-ndl-text leading-none">{teamScore(team)}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-10">
        {/* Game info */}
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6 space-y-4">
          <SectionHeader title="Game Info" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">Date</label>
              <input
                type="date"
                value={gameDate}
                onChange={(e) => setGameDate(e.target.value)}
                className="w-full bg-ndl-primary border border-ndl-surface rounded px-3 py-2 text-sm text-ndl-text focus:outline-none focus:border-ndl-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">Notes</label>
              <input
                type="text"
                placeholder="e.g. River Kings vs Murray Mice"
                value={gameNotes}
                onChange={(e) => setGameNotes(e.target.value)}
                className="w-full bg-ndl-primary border border-ndl-surface rounded px-3 py-2 text-sm text-ndl-text placeholder:text-ndl-muted/40 focus:outline-none focus:border-ndl-accent"
              />
            </div>
          </div>
        </div>

        {/* Player selection */}
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6">
          <SectionHeader title="Select Players" />
          <p className="text-xs text-ndl-muted mt-1 mb-4">Tap players who participated in this game.</p>
          <div className="grid grid-cols-2 gap-6">
            {teamOrder.map((team) => {
              const teamPlayers = players.filter((p) => p.team === team);
              return (
                <div key={team}>
                  <p className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-accent mb-2">
                    {team}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {teamPlayers.map((p) => {
                      const isSelected = selected.includes(p.id);
                      return (
                        <button
                          key={p.id}
                          onClick={() => togglePlayer(p.id)}
                          className={`px-3 py-1.5 text-xs font-heading font-semibold uppercase tracking-wide rounded border transition-colors ${
                            isSelected
                              ? "bg-ndl-accent text-ndl-bg border-ndl-accent"
                              : "bg-transparent text-ndl-muted border-ndl-surface hover:border-ndl-accent hover:text-ndl-text"
                          }`}
                        >
                          {p.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stat entry */}
        {selected.length > 0 && (
          <div className="space-y-4">
            <SectionHeader title="Enter Stats" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeTeams.map((team) => {
                const teamSelected = selected.filter(
                  (id) => players.find((p) => p.id === id)?.team === team
                );
                return (
                  <div key={team} className="space-y-3">
                    <p className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-accent">
                      {team}
                    </p>
                    {teamSelected.map((id) => (
                      <PlayerStatCard key={id} id={id} stats={stats} updateStat={updateStat} />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Export */}
        {summary && (
          <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6 space-y-5">
            <SectionHeader title="Export" />
            <pre className="bg-ndl-primary border border-ndl-surface rounded p-4 text-xs text-ndl-muted whitespace-pre-wrap leading-relaxed">
              {summary}
            </pre>
            <div>
              <label className="block text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={emailAddr}
                onChange={(e) => setEmailAddr(e.target.value)}
                className="w-full bg-ndl-primary border border-ndl-surface rounded px-3 py-2 text-sm text-ndl-text placeholder:text-ndl-muted/40 focus:outline-none focus:border-ndl-accent"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2 text-xs font-heading font-semibold uppercase tracking-widest bg-ndl-accent text-ndl-bg rounded hover:opacity-90 transition-opacity"
              >
                Copy to Clipboard
              </button>
              <button
                onClick={handleEmail}
                className="px-4 py-2 text-xs font-heading font-semibold uppercase tracking-widest border border-ndl-accent text-ndl-accent rounded hover:bg-ndl-accent hover:text-ndl-bg transition-colors"
              >
                Send Email
              </button>
              <button
                onClick={handleShare}
                className="px-4 py-2 text-xs font-heading font-semibold uppercase tracking-widest border border-ndl-surface text-ndl-muted rounded hover:border-ndl-accent hover:text-ndl-text transition-colors"
              >
                Copy Share Link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
