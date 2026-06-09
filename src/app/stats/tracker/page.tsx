"use client";

import { useState } from "react";
import { players, teamOrder } from "@/data/players";
import { SectionHeader } from "@/components/ndl/SectionHeader";

interface PlayerStats {
  onePtMade: string;
  onePtAtt: string;
  twoPtMade: string;
  twoPtAtt: string;
  threePtMade: string;
  threePtAtt: string;
  assists: string;
  blocks: string;
}

const blankStats = (): PlayerStats => ({
  onePtMade: "",
  onePtAtt: "",
  twoPtMade: "",
  twoPtAtt: "",
  threePtMade: "",
  threePtAtt: "",
  assists: "",
  blocks: "",
});

function pct(made: string, att: string): string {
  const m = Number(made);
  const a = Number(att);
  if (!a) return "---";
  return ((m / a) * 100).toFixed(0) + "%";
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

  for (const id of selected) {
    const player = players.find((p) => p.id === id);
    if (!player) continue;
    const s = stats[id] ?? blankStats();
    lines.push(`--- ${player.name} (${player.team ?? "?"}) ---`);
    lines.push(`1pt:  ${s.onePtMade || 0}/${s.onePtAtt || 0} (${pct(s.onePtMade, s.onePtAtt)})`);
    lines.push(`2pt:  ${s.twoPtMade || 0}/${s.twoPtAtt || 0} (${pct(s.twoPtMade, s.twoPtAtt)})`);
    lines.push(`3pt:  ${s.threePtMade || 0}/${s.threePtAtt || 0} (${pct(s.threePtMade, s.threePtAtt)})`);
    lines.push(`AST:  ${s.assists || 0}  |  BLK/STL: ${s.blocks || 0}`);
    lines.push("");
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

function StatInput({
  label,
  madeVal,
  attVal,
  onMade,
  onAtt,
}: {
  label: string;
  madeVal: string;
  attVal: string;
  onMade: (v: string) => void;
  onAtt: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-heading uppercase tracking-widest text-ndl-muted w-8">{label}</span>
      <input
        type="number"
        min={0}
        placeholder="Made"
        value={madeVal}
        onChange={(e) => onMade(e.target.value)}
        className="w-16 bg-ndl-primary border border-ndl-surface rounded px-2 py-1 text-sm text-ndl-text placeholder:text-ndl-muted/40 focus:outline-none focus:border-ndl-accent"
      />
      <span className="text-ndl-muted text-sm">/</span>
      <input
        type="number"
        min={0}
        placeholder="Att"
        value={attVal}
        onChange={(e) => onAtt(e.target.value)}
        className="w-16 bg-ndl-primary border border-ndl-surface rounded px-2 py-1 text-sm text-ndl-text placeholder:text-ndl-muted/40 focus:outline-none focus:border-ndl-accent"
      />
      <span className="text-xs text-ndl-muted w-10 text-right">{pct(madeVal, attVal)}</span>
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

  function updateStat(id: string, field: keyof PlayerStats, value: string) {
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

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Toast */}
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
          <div className="space-y-6">
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
            {selected.map((id) => {
              const player = players.find((p) => p.id === id);
              if (!player) return null;
              const s = stats[id] ?? blankStats();
              return (
                <div key={id} className="bg-ndl-secondary border border-ndl-surface rounded-lg p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-heading font-bold uppercase tracking-wide text-ndl-text">
                      {player.name}
                    </p>
                    <p className="text-xs text-ndl-muted">{player.team}</p>
                  </div>
                  <div className="space-y-2">
                    <StatInput
                      label="1pt"
                      madeVal={s.onePtMade}
                      attVal={s.onePtAtt}
                      onMade={(v) => updateStat(id, "onePtMade", v)}
                      onAtt={(v) => updateStat(id, "onePtAtt", v)}
                    />
                    <StatInput
                      label="2pt"
                      madeVal={s.twoPtMade}
                      attVal={s.twoPtAtt}
                      onMade={(v) => updateStat(id, "twoPtMade", v)}
                      onAtt={(v) => updateStat(id, "twoPtAtt", v)}
                    />
                    <StatInput
                      label="3pt"
                      madeVal={s.threePtMade}
                      attVal={s.threePtAtt}
                      onMade={(v) => updateStat(id, "threePtMade", v)}
                      onAtt={(v) => updateStat(id, "threePtAtt", v)}
                    />
                    <div className="flex items-center gap-4 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-heading uppercase tracking-widest text-ndl-muted w-8">AST</span>
                        <input
                          type="number"
                          min={0}
                          placeholder="0"
                          value={s.assists}
                          onChange={(e) => updateStat(id, "assists", e.target.value)}
                          className="w-16 bg-ndl-primary border border-ndl-surface rounded px-2 py-1 text-sm text-ndl-text placeholder:text-ndl-muted/40 focus:outline-none focus:border-ndl-accent"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-heading uppercase tracking-widest text-ndl-muted">BLK/STL</span>
                        <input
                          type="number"
                          min={0}
                          placeholder="0"
                          value={s.blocks}
                          onChange={(e) => updateStat(id, "blocks", e.target.value)}
                          className="w-16 bg-ndl-primary border border-ndl-surface rounded px-2 py-1 text-sm text-ndl-text placeholder:text-ndl-muted/40 focus:outline-none focus:border-ndl-accent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Export */}
        {summary && (
          <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6 space-y-5">
            <SectionHeader title="Export" />

            {/* Preview */}
            <pre className="bg-ndl-primary border border-ndl-surface rounded p-4 text-xs text-ndl-muted whitespace-pre-wrap leading-relaxed">
              {summary}
            </pre>

            {/* Email input */}
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

            {/* Buttons */}
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
