"use client";

import { useState } from "react";
import { Player, PlayerStats } from "@/data/players";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayerCard } from "./PlayerCard";
import { PlayerProfileModal } from "./PlayerProfileModal";

type TabKey = "averages" | "totals" | "alltime";

const tabLabels: Record<TabKey, string> = {
  averages: "Season Averages",
  totals: "Season Totals",
  alltime: "All-Time Totals",
};

function getStats(player: Player, tab: TabKey): PlayerStats {
  if (tab === "averages") return player.seasonAverages;
  if (tab === "totals") return player.seasonTotals;
  return player.allTimeTotals;
}

interface PlayerListProps {
  players: Player[];
}

export function PlayerList({ players }: PlayerListProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("averages");
  const [search, setSearch] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

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

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-ndl-muted text-sm py-6 text-center">No players found.</p>
        ) : (
          filtered.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              activeStats={getStats(player, activeTab)}
              onPhotoClick={() => setSelectedPlayer(player)}
            />
          ))
        )}
      </div>

      <PlayerProfileModal
        player={selectedPlayer}
        open={!!selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </div>
  );
}
