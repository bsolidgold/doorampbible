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

// Only teams with actual ELO numbers count toward medal positions
function eloRank(sorted: Team[], index: number): "gold" | "silver" | "bronze" | null {
  const teamsWithElo = sorted.filter((t) => t.elo !== "---");
  const team = sorted[index];
  if (team.elo === "---") return null;
  const rank = teamsWithElo.indexOf(team);
  if (rank === 0) return "gold";
  if (rank === 1) return "silver";
  if (rank === 2) return "bronze";
  return null;
}

const eloStyle: Record<"gold" | "silver" | "bronze", React.CSSProperties> = {
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
    const aElo = a.elo === "---" ? -1 : Number(a.elo);
    const bElo = b.elo === "---" ? -1 : Number(b.elo);
    return bElo - aElo;
  });

  return (
    <div className="rounded-lg overflow-hidden border border-ndl-surface">
      <Table>
        <TableHeader>
          <TableRow className="bg-ndl-surface border-b border-ndl-surface hover:bg-ndl-surface">
            <TableHead className="text-ndl-muted text-lg font-heading font-semibold uppercase tracking-widest w-full py-5">
              Team
            </TableHead>
            <TableHead className="text-ndl-muted text-lg font-heading font-semibold uppercase tracking-widest text-center py-5">
              W
            </TableHead>
            <TableHead className="text-ndl-muted text-lg font-heading font-semibold uppercase tracking-widest text-center py-5">
              L
            </TableHead>
            <TableHead className="text-ndl-muted text-lg font-heading font-semibold uppercase tracking-widest text-center py-5">
              ELO
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((team, i) => {
            const medal = eloRank(sorted, i);
            return (
              <TableRow
                key={team.name}
                className={`border-b border-ndl-surface/30 hover:bg-ndl-surface/20 transition-colors ${
                  i === teams.length - 1 ? "border-b-0" : ""
                }`}
              >
                <TableCell className="font-heading font-semibold text-2xl text-ndl-text py-5 px-6">
                  <div className="flex items-center gap-5">
                    {team.logo && (
                      <div className="flex-shrink-0">
                        <Image
                          src={team.logo}
                          alt={`${team.name} logo`}
                          width={240}
                          height={240}
                          className="object-contain rounded"
                        />
                      </div>
                    )}
                    <span className="whitespace-nowrap">{team.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-2xl text-ndl-muted py-5 px-6">
                  {team.wins}
                </TableCell>
                <TableCell className="text-center text-2xl text-ndl-muted py-5 px-6">
                  {team.losses}
                </TableCell>
                <TableCell className="text-center text-2xl py-5 px-6">
                  <span
                    className="font-heading font-black"
                    style={medal ? eloStyle[medal] : { color: "white" }}
                  >
                    {team.elo}
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
