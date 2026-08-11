import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Team } from "@/data/standings";

interface StandingsTableProps {
  teams: Team[];
}

function hasPlayed(team: Team): boolean {
  return team.wins + team.losses > 0;
}

function points(team: Team): number {
  return team.wins - team.losses;
}

function formatPoints(team: Team): string {
  if (!hasPlayed(team)) return "---";
  const p = points(team);
  return p > 0 ? `+${p}` : `${p}`;
}

// Only teams that have played a game count toward medal positions
function pointsRank(sorted: Team[], index: number): "gold" | "silver" | "bronze" | null {
  const teamsWithGames = sorted.filter(hasPlayed);
  const team = sorted[index];
  if (!hasPlayed(team)) return null;
  const rank = teamsWithGames.indexOf(team);
  if (rank === 0) return "gold";
  if (rank === 1) return "silver";
  if (rank === 2) return "bronze";
  return null;
}

const pointsStyle: Record<"gold" | "silver" | "bronze", React.CSSProperties> = {
  gold: {
    color: "#FFD700",
    textShadow: "0 0 8px #FFD700, 0 0 20px #FFB800, 0 0 35px #FF8C00",
  },
  silver: {
    color: "#C0C0C0",
    textShadow: "0 0 8px #C0C0C0, 0 0 20px #A0A0A0",
  },
  bronze: {
    color: "#CD7F32",
    textShadow: "0 0 8px #CD7F32, 0 0 20px #B8651A",
  },
};

export function StandingsTable({ teams }: StandingsTableProps) {
  const sorted = [...teams].sort((a, b) => {
    const aVal = hasPlayed(a) ? points(a) : -Infinity;
    const bVal = hasPlayed(b) ? points(b) : -Infinity;
    return bVal - aVal;
  });

  return (
    <div className="rounded-lg overflow-hidden border border-ndl-surface">
      <Table>
        <TableHeader>
          <TableRow className="bg-ndl-surface border-b border-ndl-surface hover:bg-ndl-surface">
            <TableHead className="text-ndl-muted text-xs sm:text-sm md:text-lg font-heading font-semibold uppercase tracking-widest w-full py-2 sm:py-3 md:py-5">
              Team
            </TableHead>
            <TableHead className="text-ndl-muted text-xs sm:text-sm md:text-lg font-heading font-semibold uppercase tracking-widest text-center py-2 sm:py-3 md:py-5">
              W
            </TableHead>
            <TableHead className="text-ndl-muted text-xs sm:text-sm md:text-lg font-heading font-semibold uppercase tracking-widest text-center py-2 sm:py-3 md:py-5">
              L
            </TableHead>
            <TableHead className="text-ndl-muted text-xs sm:text-sm md:text-lg font-heading font-semibold uppercase tracking-widest text-center py-2 sm:py-3 md:py-5">
              PTS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((team, i) => {
            const medal = pointsRank(sorted, i);
            return (
              <TableRow
                key={team.name}
                className={`border-b border-ndl-surface/30 hover:bg-ndl-surface/20 transition-colors ${
                  i === teams.length - 1 ? "border-b-0" : ""
                }`}
              >
                <TableCell className="font-heading font-semibold text-sm sm:text-lg md:text-2xl text-ndl-text py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
                    {team.logo && (
                      <div className="flex-shrink-0">
                        <Image
                          src={team.logo}
                          alt={`${team.name} logo`}
                          width={240}
                          height={240}
                          className="w-8 h-8 sm:w-16 sm:h-16 md:w-[240px] md:h-[240px] object-contain rounded"
                        />
                      </div>
                    )}
                    <span className="whitespace-normal sm:whitespace-nowrap leading-tight">{team.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-sm sm:text-lg md:text-2xl text-ndl-muted py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6">
                  {team.wins}
                </TableCell>
                <TableCell className="text-center text-sm sm:text-lg md:text-2xl text-ndl-muted py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6">
                  {team.losses}
                </TableCell>
                <TableCell className="text-center text-sm sm:text-lg md:text-2xl py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6">
                  <span
                    className="font-heading font-black"
                    style={medal ? pointsStyle[medal] : { color: "white" }}
                  >
                    {formatPoints(team)}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
