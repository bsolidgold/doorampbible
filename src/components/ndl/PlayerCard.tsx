"use client";

import Image from "next/image";
import { Player, PlayerStats } from "@/data/players";

function pct(made: string, att: string): string {
  const m = Number(made);
  const a = Number(att);
  if (isNaN(m) || isNaN(a) || !a) return "---";
  return ((m / a) * 100).toFixed(0) + "%";
}

function avg(made: string, games: number): string {
  const m = Number(made);
  if (isNaN(m) || games === 0) return "---";
  const result = m / games;
  return Number.isInteger(result) ? String(result) : result.toFixed(1);
}

interface StatBoxProps {
  label: string;
  value: string;
  sub?: string;
}

function StatBox({ label, value, sub }: StatBoxProps) {
  return (
    <div className="bg-ndl-primary rounded-md px-2 py-2 text-center">
      <p className="text-ndl-text font-heading font-black text-sm leading-none">{value}</p>
      {sub && <p className="text-ndl-muted text-[9px] font-heading leading-none mt-0.5">{sub}</p>}
      <p className="text-ndl-muted text-[10px] font-heading font-semibold uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

interface PlayerCardProps {
  player: Player;
  activeStats: PlayerStats;
  gamesPlayed: number;
  showAverages: boolean;
  onPhotoClick: () => void;
}

export function PlayerCard({ player, activeStats: s, gamesPlayed, showAverages, onPhotoClick }: PlayerCardProps) {
  const hasStats = s.onePtAtt !== "---";
  const hasAverages = showAverages && gamesPlayed > 0;

  return (
    <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-4 hover:border-ndl-accent/40 transition-colors">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Photo + name */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onPhotoClick}
            className="rounded-lg overflow-hidden border-2 border-ndl-surface hover:border-ndl-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ndl-accent"
            aria-label={`View ${player.name} profile`}
          >
            <Image
              src={player.photo}
              alt={player.name}
              width={72}
              height={72}
              className="object-cover"
            />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-heading font-bold text-sm uppercase tracking-wide text-ndl-text">
                {player.name}
              </p>
              {player.isCaptain && (
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-ndl-accent/20 text-ndl-accent">
                  Captain
                </span>
              )}
            </div>
            <span
              className={`text-xs font-heading font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                player.status === "active"
                  ? "bg-green-900/50 text-green-400"
                  : "bg-red-900/50 text-ndl-accent"
              }`}
            >
              {player.status}
            </span>
          </div>
        </div>

        {/* Stats */}
        {showAverages ? (
          hasAverages ? (
            <div className="flex-1 grid grid-cols-4 sm:grid-cols-8 gap-2">
              <StatBox label="1PT" value={avg(s.onePtMade, gamesPlayed)} />
              <StatBox label="2PT" value={avg(s.twoPtMade, gamesPlayed)} />
              <StatBox label="3PT" value={avg(s.threePtMade, gamesPlayed)} />
              <StatBox label="AST" value={avg(s.assists, gamesPlayed)} />
              <StatBox label="BLK/STL" value={avg(s.blocks, gamesPlayed)} />
            </div>
          ) : (
            <div className="flex-1">
              <p className="text-ndl-muted text-xs font-heading uppercase tracking-widest">No games played</p>
            </div>
          )
        ) : hasStats ? (
          <div className="flex-1 grid grid-cols-4 sm:grid-cols-8 gap-2">
            <StatBox label="1PT" value={`${s.onePtMade}/${s.onePtAtt}`} sub={pct(s.onePtMade, s.onePtAtt)} />
            <StatBox label="2PT" value={`${s.twoPtMade}/${s.twoPtAtt}`} sub={pct(s.twoPtMade, s.twoPtAtt)} />
            <StatBox label="3PT" value={`${s.threePtMade}/${s.threePtAtt}`} sub={pct(s.threePtMade, s.threePtAtt)} />
            <StatBox label="AST" value={s.assists} />
            <StatBox label="BLK/STL" value={s.blocks} />
          </div>
        ) : (
          <div className="flex-1">
            <p className="text-ndl-muted text-xs font-heading uppercase tracking-widest">No stats yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
