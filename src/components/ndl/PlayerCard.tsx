"use client";

import Image from "next/image";
import { Player, PlayerStats } from "@/data/players";

const statLabels: Record<keyof PlayerStats, string> = {
  ppg: "PPG",
  apg: "APG",
  bpg: "BPG",
  fpg: "FPG",
  threepg: "3PG",
  twopg: "2PG",
};

interface PlayerCardProps {
  player: Player;
  activeStats: PlayerStats;
  onPhotoClick: () => void;
}

export function PlayerCard({ player, activeStats, onPhotoClick }: PlayerCardProps) {
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
            <p className="font-heading font-bold text-sm uppercase tracking-wide text-ndl-text">
              {player.name}
            </p>
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
        <div className="flex-1 grid grid-cols-3 sm:grid-cols-6 gap-2">
          {(Object.keys(statLabels) as (keyof PlayerStats)[]).map((key) => (
            <div
              key={key}
              className="bg-ndl-primary rounded-md px-2 py-2 text-center"
            >
              <p className="text-ndl-text font-heading font-black text-base leading-none">
                {activeStats[key]}
              </p>
              <p className="text-ndl-muted text-[10px] font-heading font-semibold uppercase tracking-wider mt-1">
                {statLabels[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
