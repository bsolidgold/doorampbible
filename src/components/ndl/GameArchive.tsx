"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { games, type Game, type GamePlayerStats } from "@/data/games";
import { players } from "@/data/players";
import { standings } from "@/data/standings";

function getPlayer(id: string) {
  return players.find((p) => p.id === id);
}

function getTeamLogo(teamName: string) {
  return standings.find((t) => t.name === teamName)?.logo;
}

function calcPts(s: GamePlayerStats): string {
  if (s.onePtMade === null) return "---";
  return String(
    (s.onePtMade ?? 0) * 1 +
    (s.twoPtMade ?? 0) * 2 +
    (s.threePtMade ?? 0) * 3
  );
}

function fmt(val: number | null, att?: number | null): string {
  if (val === null) return "---";
  if (att !== undefined && att !== null) return `${val}/${att}`;
  return String(val);
}

function StatTable({ playerStats }: { playerStats: GamePlayerStats[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs sm:text-sm text-ndl-text border-collapse">
        <thead>
          <tr className="text-ndl-muted uppercase tracking-wider text-[10px] sm:text-xs border-b border-ndl-surface">
            <th className="text-left py-2 pr-3 font-semibold">Player</th>
            <th className="text-center py-2 px-2 font-semibold">PTS</th>
            <th className="text-center py-2 px-2 font-semibold">1PT</th>
            <th className="text-center py-2 px-2 font-semibold">2PT</th>
            <th className="text-center py-2 px-2 font-semibold">3PT</th>
            <th className="text-center py-2 px-2 font-semibold">AST</th>
            <th className="text-center py-2 px-2 font-semibold">BLK</th>
            <th className="text-center py-2 px-2 font-semibold">REB</th>
          </tr>
        </thead>
        <tbody>
          {playerStats.map((s) => {
            const player = getPlayer(s.playerId);
            return (
              <tr key={s.playerId} className="border-b border-ndl-surface/50 last:border-0">
                <td className="py-2 pr-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-ndl-surface">
                      <Image
                        src={player?.photo ?? "/logos/dooSilhouette.png"}
                        alt={player?.name ?? s.playerId}
                        width={24}
                        height={24}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="font-medium whitespace-nowrap">{player?.name ?? s.playerId}</span>
                  </div>
                </td>
                <td className="text-center py-2 px-2 font-bold text-ndl-accent">{calcPts(s)}</td>
                <td className="text-center py-2 px-2 text-ndl-muted">{fmt(s.onePtMade, s.onePtAtt)}</td>
                <td className="text-center py-2 px-2 text-ndl-muted">{fmt(s.twoPtMade, s.twoPtAtt)}</td>
                <td className="text-center py-2 px-2 text-ndl-muted">{fmt(s.threePtMade, s.threePtAtt)}</td>
                <td className="text-center py-2 px-2 text-ndl-muted">{fmt(s.assists)}</td>
                <td className="text-center py-2 px-2 text-ndl-muted">{fmt(s.blocks)}</td>
                <td className="text-center py-2 px-2 text-ndl-muted">{fmt(s.rebounds)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function GameCard({ game }: { game: Game }) {
  const [open, setOpen] = useState(false);
  const [home, away] = game.teams;
  const hasScore = home.score !== null || away.score !== null;

  return (
    <div className="bg-ndl-secondary border border-ndl-surface rounded-lg overflow-hidden">
      {/* Header row — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-4 flex items-center gap-3 hover:bg-ndl-surface/30 transition-colors"
      >
        {/* Game number + date */}
        <div className="flex-shrink-0 text-center w-10">
          <div className="text-[10px] text-ndl-muted uppercase tracking-wider">Game</div>
          <div className="font-heading font-black text-lg text-ndl-accent leading-none">{game.gameNumber}</div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Team A */}
            <div className={`flex items-center gap-1.5 ${game.winner === home.name ? "text-ndl-text" : "text-ndl-muted"}`}>
              {getTeamLogo(home.name) && (
                <Image src={getTeamLogo(home.name)!} alt={home.name} width={18} height={18} className="object-contain" />
              )}
              <span className="font-semibold text-sm truncate">{home.name}</span>
              {hasScore && <span className="font-heading font-black text-base">{home.score ?? "?"}</span>}
              {game.winner === home.name && (
                <span className="text-[10px] font-bold text-ndl-accent uppercase tracking-wider">W</span>
              )}
            </div>

            <span className="text-ndl-muted text-xs font-bold">vs</span>

            {/* Team B */}
            <div className={`flex items-center gap-1.5 ${game.winner === away.name ? "text-ndl-text" : "text-ndl-muted"}`}>
              {getTeamLogo(away.name) && (
                <Image src={getTeamLogo(away.name)!} alt={away.name} width={18} height={18} className="object-contain" />
              )}
              <span className="font-semibold text-sm truncate">{away.name}</span>
              {hasScore && <span className="font-heading font-black text-base">{away.score ?? "?"}</span>}
              {game.winner === away.name && (
                <span className="text-[10px] font-bold text-ndl-accent uppercase tracking-wider">W</span>
              )}
            </div>
          </div>

          <div className="text-[11px] text-ndl-muted mt-0.5">{game.date}</div>
        </div>

        <div className="flex-shrink-0 text-ndl-muted">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Expanded detail */}
      {open && (
        <div className="border-t border-ndl-surface px-4 py-4 space-y-5">
          {game.notes && (
            <p className="text-ndl-muted text-sm italic">{game.notes}</p>
          )}

          {game.teams.map((team) => (
            <div key={team.name}>
              <div className="flex items-center gap-2 mb-2">
                {getTeamLogo(team.name) && (
                  <Image src={getTeamLogo(team.name)!} alt={team.name} width={20} height={20} className="object-contain" />
                )}
                <span className={`font-heading font-bold text-sm uppercase tracking-wider ${game.winner === team.name ? "text-ndl-accent" : "text-ndl-muted"}`}>
                  {team.name}
                  {game.winner === team.name && " — WIN"}
                </span>
              </div>
              <StatTable playerStats={team.players} />
            </div>
          ))}

          {game.newsSlug && (
            <div className="pt-1">
              <Link
                href={`/news/${game.newsSlug}`}
                className="inline-flex items-center gap-1.5 text-xs text-ndl-accent hover:underline font-semibold"
              >
                Read the recap <ExternalLink size={11} />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function GameArchive() {
  const seasons = [...new Set(games.map((g) => g.season))].sort((a, b) => Number(b) - Number(a));

  return (
    <div className="space-y-3">
      {seasons.map((season) => {
        const seasonGames = games.filter((g) => g.season === season);
        return (
          <div key={season}>
            <div className="text-[11px] font-bold text-ndl-muted uppercase tracking-widest mb-3">
              {season} Season — {seasonGames.length} game{seasonGames.length !== 1 ? "s" : ""}
            </div>
            <div className="space-y-2">
              {seasonGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        );
      })}

      {games.length === 0 && (
        <p className="text-ndl-muted text-sm">No games have been recorded yet.</p>
      )}
    </div>
  );
}
