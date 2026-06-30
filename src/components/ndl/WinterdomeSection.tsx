"use client";

import Image from "next/image";
import { winterdomes, type Winterdome } from "@/data/winterdomes";
import { players } from "@/data/players";
import { CollapsibleSection } from "@/components/ndl/CollapsibleSection";
import { BracketView } from "@/components/ndl/BracketView";

function getPlayerPhoto(playerId?: string) {
  if (!playerId) return "/logos/dooSilhouette.png";
  return players.find((p) => p.id === playerId)?.photo ?? "/logos/dooSilhouette.png";
}

function TeamCard({ team }: { team: Winterdome["teams"][number] }) {
  return (
    <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-4">
      <div className="font-heading font-bold text-sm uppercase tracking-wider text-ndl-accent mb-3">
        {team.name}
      </div>
      <ul className="space-y-2">
        {team.players.map((player) => (
          <li key={player.name} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-ndl-surface">
              <Image
                src={getPlayerPhoto(player.playerId)}
                alt={player.name}
                width={24}
                height={24}
                className="object-cover w-full h-full"
              />
            </div>
            <span className={`text-sm ${player.dnp ? "text-ndl-muted line-through" : "text-ndl-text"}`}>
              {player.name}
            </span>
            {player.dnp && (
              <span className="text-[10px] font-bold text-ndl-muted uppercase tracking-wider">DNP</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WinterdomeCard({ dome }: { dome: Winterdome }) {
  const hasContent = dome.teams.length > 0;
  const subtitle = dome.champion
    ? `Champion: ${dome.champion}`
    : hasContent
    ? `${dome.teams.length}-team tournament`
    : "Details coming soon.";

  if (!hasContent) {
    return (
      <CollapsibleSection title={`${dome.year} Winterdome`} subtitle={subtitle}>
        <div className="bg-ndl-secondary border border-ndl-surface rounded-lg p-5">
          <p className="text-ndl-muted text-sm">Details coming soon.</p>
        </div>
      </CollapsibleSection>
    );
  }

  return (
    <CollapsibleSection title={`${dome.year} Winterdome`} subtitle={subtitle}>
      <div className="space-y-4">
        {dome.notes && <p className="text-ndl-muted text-sm italic">{dome.notes}</p>}

        {dome.bracket && (
          <BracketView bracket={dome.bracket} champion={dome.champion} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dome.teams.map((team) => (
            <TeamCard key={team.name} team={team} />
          ))}
        </div>

        {dome.matchups && dome.matchups.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="text-[11px] font-bold text-ndl-muted uppercase tracking-widest mb-2">Results</div>
            {dome.matchups.map((m, i) => (
              <div key={i} className="bg-ndl-secondary border border-ndl-surface rounded-lg px-4 py-3 flex items-center gap-3 flex-wrap">
                <span className="text-[10px] font-bold text-ndl-muted uppercase tracking-wider w-16 flex-shrink-0">{m.round}</span>
                <span className={`text-sm font-semibold ${m.winner === m.teamA ? "text-ndl-text" : "text-ndl-muted"}`}>{m.teamA}</span>
                <span className="text-ndl-muted text-xs">vs</span>
                <span className={`text-sm font-semibold ${m.winner === m.teamB ? "text-ndl-text" : "text-ndl-muted"}`}>{m.teamB}</span>
                {m.score && <span className="text-ndl-accent font-heading font-bold text-sm ml-auto">{m.score}</span>}
                {m.winner && !m.score && <span className="text-ndl-accent text-xs font-bold ml-auto">{m.winner} WIN</span>}
                {m.notes && <p className="w-full text-[11px] text-ndl-muted italic mt-1">{m.notes}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </CollapsibleSection>
  );
}

export function WinterdomeSections() {
  const sorted = [...winterdomes].sort((a, b) => b.year - a.year);
  return (
    <>
      {sorted.map((dome) => (
        <WinterdomeCard key={dome.year} dome={dome} />
      ))}
    </>
  );
}
