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
          {sorted.map((team, i) => (
            <TableRow
              key={team.name}
              className={`border-b border-ndl-surface/30 hover:bg-ndl-surface/20 transition-colors ${
                i === teams.length - 1 ? "border-b-0" : ""
              }`}
            >
              <TableCell className="font-heading font-semibold text-2xl text-ndl-text py-5 px-6">
                <div className="flex items-center gap-5">
                  {team.logo && (
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                      <Image
                        src={team.logo}
                        alt={`${team.name} logo`}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain"
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
              <TableCell className="text-center text-2xl text-ndl-muted py-5 px-6">
                {team.elo}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
