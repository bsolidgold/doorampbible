"use client";

import { useState } from "react";
import { Player, PlayerStats, teamOrder } from "@/data/players";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayerCard } from "./PlayerCard";
import { PlayerProfileModal } from "./PlayerProfileModal";

export type TabKey = "totals" | "averages" | "alltime";

const tabLabels: Record<TabKey, string> = {
  totals: "Season Totals",
  averages: "Game Averages",
  alltime: "All-Time Totals",
};

function getStats(player: Player, tab: TabKey): PlayerStats {
  if (tab === "alltime") return player.allTimeTotals;
  return player.seasonTotals;
}

export function getGamesPlayed(player: Player, tab: TabKey): number {
  if (tab === "alltime") return player.allTimeGamesPlayed;
  return player.seasonGamesPlayed;
}

const UNASSIGNED = "Free Agents";

/** Group players by team, captains first, following teamOrder. */
function groupByTeam(players: Player[]): { team: string; players: Player[] }[] {
  const groups = new Map<string, Player[]>();
  for (const player of players) {
    const key = player.team ?? UNASSIGNED;
    const list = groups.get(key) ?? [];
    list.push(player);
    groups.set(key, list);
  }

  const orderedKeys = [
    ...teamOrder.filter((t) => groups.has(t)),
    ...[...groups.keys()].filter((k) => !teamOrder.includes(k)),
  ];

  return orderedKeys.map((team) => ({
    team,
    players: groups
      .get(team)!
      .slice()
      .sort((a, b) => Number(b.isCaptain ?? false) - Number(a.isCaptain ?? false)),
  }));
}

interface PlayerListProps {
  players: Player[];
}

export function PlayerList({ players }: PlayerListProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("totals");
  const [search, setSearch] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const groups = groupByTeam(filtered);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabKey)}>
          <TabsList className="bg-ndl-secondary border border-ndl-surface">
            {(Object.keys(tabLabels) as TabKey[]).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="text-xs font-heading font-semibold uppercase tracking-wider data-[state=active]:bg-ndl-accent data-[state=active]:text-white"
              >
                {tabLabels[key]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Input
          placeholder="Search players..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:max-w-xs bg-ndl-secondary border-ndl-surface text-ndl-text placeholder:text-ndl-muted focus-visible:ring-ndl-accent"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-ndl-muted text-sm py-6 text-center">No players found.</p>
      ) : (
        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group.team} className="space-y-3">
              <h3 className="font-heading font-bold text-lg uppercase tracking-widest text-ndl-text border-b border-ndl-surface pb-2">
                {group.team}
              </h3>
              <div className="space-y-3">
                {group.players.map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    activeStats={getStats(player, activeTab)}
                    gamesPlayed={getGamesPlayed(player, activeTab)}
                    showAverages={activeTab === "averages"}
                    onPhotoClick={() => setSelectedPlayer(player)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <PlayerProfileModal
        player={selectedPlayer}
        open={!!selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </div>
  );
}
