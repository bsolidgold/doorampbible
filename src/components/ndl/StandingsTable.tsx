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
  return (
    <div className="rounded-lg overflow-hidden border border-ndl-surface">
      <Table>
        <TableHeader>
          <TableRow className="bg-ndl-surface border-b border-ndl-surface hover:bg-ndl-surface">
            <TableHead className="text-ndl-muted text-xs font-heading font-semibold uppercase tracking-widest w-full">
              Team
            </TableHead>
            <TableHead className="text-ndl-muted text-xs font-heading font-semibold uppercase tracking-widest text-center">
              W
            </TableHead>
            <TableHead className="text-ndl-muted text-xs font-heading font-semibold uppercase tracking-widest text-center">
              L
            </TableHead>
            <TableHead className="text-ndl-muted text-xs font-heading font-semibold uppercase tracking-widest text-center">
              ELO
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team, i) => (
            <TableRow
              key={team.name}
              className={`border-b border-ndl-surface/30 hover:bg-ndl-surface/20 transition-colors ${
                i === teams.length - 1 ? "border-b-0" : ""
              }`}
            >
              <TableCell className="font-heading font-semibold text-sm text-ndl-text">
                {team.name}
              </TableCell>
              <TableCell className="text-center text-sm text-ndl-muted">
                {team.wins}
              </TableCell>
              <TableCell className="text-center text-sm text-ndl-muted">
                {team.losses}
              </TableCell>
              <TableCell className="text-center text-sm text-ndl-muted">
                {team.elo}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
