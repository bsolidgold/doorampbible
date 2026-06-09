"use client";

import { useState } from "react";
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

  const winnerElo = winnerEloStr.trim() === "" ? null : Number(winnerEloStr);
  const loserElo = loserEloStr.trim() === "" ? null : Number(loserEloStr);
  const canCalculate = winnerRoster.length > 0 && loserRoster.length > 0;

  const result =
    canCalculate
      ? calculateElo(winnerElo, loserElo, winnerRoster, loserRoster)
      : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          ELO Calculator
        </h1>
        <p className="mt-2 text-ndl-muted text-sm">
          Simulate any hypothetical game to see how much ELO each team would
          gain.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/40 rounded text-yellow-400 text-xs font-heading font-semibold uppercase tracking-wide">
          ⚠ Experimental — the ELO system is still being finalized before the season starts
        </div>
      </div>

      <div className="space-y-8">
        {/* Winner */}
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6 space-y-5">
          <SectionHeader title="Winning Team" />
          <EloInput
            label="Winner"
            value={winnerEloStr}
            onChange={setWinnerEloStr}
          />
          <RosterSelector
            label="Winner"
            roster={winnerRoster}
            onChange={setWinnerRoster}
          />
        </div>

        {/* Loser */}
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6 space-y-5">
          <SectionHeader title="Losing Team" />
          <EloInput
            label="Loser"
            value={loserEloStr}
            onChange={setLoserEloStr}
          />
          <RosterSelector
            label="Loser"
            roster={loserRoster}
            onChange={setLoserRoster}
          />
        </div>

        {/* Results */}
        {result && (
          <div className="bg-ndl-secondary border border-ndl-accent rounded-lg p-6">
            <SectionHeader title="Result" />
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="text-center">
                <p className="text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">
                  Winner gains
                </p>
                <p className="text-4xl font-heading font-black text-green-400">
                  +{result.winnerDelta}
                </p>
                {winnerElo !== null && (
                  <p className="text-xs text-ndl-muted mt-1">
                    {winnerElo} → {result.winnerElo}
                  </p>
                )}
              </div>
              <div className="text-center">
                <p className="text-xs font-heading uppercase tracking-widest text-ndl-muted mb-1">
                  Loser gains
                </p>
                <p className="text-4xl font-heading font-black text-ndl-accent">
                  +{result.loserDelta}
                </p>
                {loserElo !== null && (
                  <p className="text-xs text-ndl-muted mt-1">
                    {loserElo} → {result.loserElo}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {!canCalculate && (
          <p className="text-center text-ndl-muted text-sm">
            Select at least one player per team to see results.
          </p>
        )}

        {/* How it works */}
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-6">
          <SectionHeader title="How It Works" />
          <ul className="mt-3 space-y-2 text-sm text-ndl-muted leading-relaxed">
            <li>
              <span className="text-ndl-text font-semibold">Participation bonus:</span>{" "}
              Both teams always earn +{PARTICIPATION_BONUS} ELO just for playing — no team ever loses ELO.
            </li>
            <li>
              <span className="text-ndl-text font-semibold">K-Factor:</span>{" "}
              Base win reward is {K_FACTOR}, scaled by roster composition.
            </li>
            <li>
              <span className="text-ndl-text font-semibold">Player count:</span>{" "}
              Using more players multiplies the winner&apos;s reward (1 player = 0.70×, 4 players = 1.40×).
            </li>
            <li>
              <span className="text-ndl-text font-semibold">Draft tier:</span>{" "}
              Lower draft picks (3rd/4th round) earn more when they win.
            </li>
            <li>
              <span className="text-ndl-text font-semibold">Upset bonus:</span>{" "}
              Winning with a weaker roster than your opponent multiplies your reward further.
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
