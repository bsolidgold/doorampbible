"use client";

import Image from "next/image";
import { useState } from "react";
import { Player, PlayerStats } from "@/data/players";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  detail?: { made: string; att: string; pct: string };
}

function StatBox({ label, value, detail }: StatBoxProps) {
  const [open, setOpen] = useState(false);
  const clickable = !!detail;

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`bg-ndl-primary rounded-md px-2 py-2 text-center ${clickable ? "cursor-pointer hover:bg-ndl-surface transition-colors" : ""}`}
        onClick={() => clickable && setOpen(true)}
      >
        <p className="text-ndl-text font-heading font-black text-sm leading-none">{value}</p>
        {detail && <p className="text-ndl-muted/70 font-heading font-black text-[10px] leading-none mt-1">{detail.pct}</p>}
      </div>
      <div className="bg-ndl-primary rounded-md px-2 py-1 text-center">
        <p className="text-ndl-muted text-[10px] font-heading font-semibold uppercase tracking-wider leading-none">{label}</p>
      </div>

      {detail && (
        <Dialog open={open} onOpenChange={(o) => !o && setOpen(false)}>
          <DialogContent className="bg-ndl-secondary border-ndl-surface text-ndl-text max-w-xs">
            <DialogHeader>
              <DialogTitle className="font-heading font-black text-xl uppercase tracking-wide text-ndl-text">
                {label}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div>
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-ndl-accent mb-1">Made / Attempted</h3>
                <p className="text-2xl font-heading font-black text-ndl-text">{detail.made}/{detail.att}</p>
              </div>
              <div>
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-ndl-accent mb-1">Percentage</h3>
                <p className="text-2xl font-heading font-black text-ndl-text">{detail.pct}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
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
            <div className="flex-1 grid grid-cols-4 sm:grid-cols-8 gap-2 items-start">
              <StatBox label="PTS" value={avg(String(Number(s.onePtMade) + Number(s.twoPtMade) * 2 + Number(s.threePtMade) * 3), gamesPlayed)} />
              <StatBox label="1PT" value={s.onePtAtt !== "---" ? avg(s.onePtMade, gamesPlayed) : "---"} detail={s.onePtAtt !== "---" ? { made: s.onePtMade, att: s.onePtAtt, pct: pct(s.onePtMade, s.onePtAtt) } : undefined} />
              <StatBox label="2PT" value={s.twoPtAtt !== "---" ? avg(s.twoPtMade, gamesPlayed) : "---"} detail={s.twoPtAtt !== "---" ? { made: s.twoPtMade, att: s.twoPtAtt, pct: pct(s.twoPtMade, s.twoPtAtt) } : undefined} />
              <StatBox label="3PT" value={s.threePtAtt !== "---" ? avg(s.threePtMade, gamesPlayed) : "---"} detail={s.threePtAtt !== "---" ? { made: s.threePtMade, att: s.threePtAtt, pct: pct(s.threePtMade, s.threePtAtt) } : undefined} />
              <StatBox label="AST" value={avg(s.assists, gamesPlayed)} />
              <StatBox label="BLK/STL" value={avg(s.blocks, gamesPlayed)} />
              <StatBox label="REB" value={avg(s.rebounds, gamesPlayed)} />
            </div>
          ) : (
            <div className="flex-1">
              <p className="text-ndl-muted text-xs font-heading uppercase tracking-widest">No games played</p>
            </div>
          )
        ) : hasStats ? (
          <div className="flex-1 grid grid-cols-4 sm:grid-cols-8 gap-2 items-start">
            <StatBox label="PTS" value={String(Number(s.onePtMade) + Number(s.twoPtMade) * 2 + Number(s.threePtMade) * 3)} />
            <StatBox label="1PT" value={s.onePtMade} detail={s.onePtAtt !== "---" ? { made: s.onePtMade, att: s.onePtAtt, pct: pct(s.onePtMade, s.onePtAtt) } : undefined} />
            <StatBox label="2PT" value={s.twoPtMade} detail={s.twoPtAtt !== "---" ? { made: s.twoPtMade, att: s.twoPtAtt, pct: pct(s.twoPtMade, s.twoPtAtt) } : undefined} />
            <StatBox label="3PT" value={s.threePtMade} detail={s.threePtAtt !== "---" ? { made: s.threePtMade, att: s.threePtAtt, pct: pct(s.threePtMade, s.threePtAtt) } : undefined} />
            <StatBox label="AST" value={s.assists} />
            <StatBox label="BLK/STL" value={s.blocks} />
            <StatBox label="REB" value={s.rebounds} />
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
