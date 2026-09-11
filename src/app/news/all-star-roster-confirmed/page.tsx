import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";
import { players } from "@/data/players";

const FAN_VOTED = ["jaxon-gladhart", "ben-martinsen", "frank-patrone", "ben-hoag"];
const CAPTAINS = ["david-anderegg", "ashton-anderegg", "adam-swarzfager", "grant-bowers"];

function RosterGrid({ ids }: { ids: string[] }) {
  const roster = ids
    .map((id) => players.find((p) => p.id === id))
    .filter((p): p is (typeof players)[number] => Boolean(p));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 not-prose">
      {roster.map((player) => (
        <div key={player.id} className="flex flex-col items-center text-center gap-2">
          <Image
            src={player.photo}
            alt={player.name}
            width={140}
            height={140}
            className="rounded-lg border-2 border-ndl-surface object-cover w-full aspect-square bg-ndl-primary"
          />
          <p className="font-heading font-bold text-xs uppercase tracking-wide text-ndl-text">
            {player.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: "All-Star Roster Confirmed — Draft and Tip-Off Saturday at 11:30",
};

export default function AllStarRosterConfirmedPage() {
  return (
    <ArticleLayout
      title="All-Star Roster Confirmed — Draft and Tip-Off Saturday at 11:30"
      date="September 9, 2026"
    >
      <p>
        The votes are in. Four players have punched their tickets to the first NDL All-Star Game, joining
        the league&apos;s four captains for a Saturday morning that starts with a draft and ends with the
        biggest exhibition game dooramp has ever staged. First business begins at{" "}
        <strong>11:30 on Saturday, September 12</strong>.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Fan-Voted Four
      </h2>
      <RosterGrid ids={FAN_VOTED} />
      <p>
        Four names, four very different games. Patrone arrives fresh off the deadline deal that sent him to
        the Murray Mice, and Benny Buckets brings the only nickname in the league that doubles as a rule in
        the book.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        All Four Captains In
      </h2>
      <p>
        David Anderegg, Ashton Anderegg, Adam Swartzfager and Grant Bowers are all playing. That puts every
        captain in the league on the floor at the same time — something the regular season never allows.
      </p>

      <RosterGrid ids={CAPTAINS} />

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Injury List: Huntsman and Anderegg Out
      </h2>
      <p>
        Eli Huntsman was not selected — he sits on the injured list, and the league is not risking an
        exhibition game on a player who needs the time to heal. Finn Anderegg is on the IL as well and will
        not suit up. Both are marked as injured on the{" "}
        <Link href="/stats" className="text-ndl-accent hover:underline">
          stats page
        </Link>
        .
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Draft First, Then Ball
      </h2>
      <p>
        Saturday runs in two parts. The two best captains will draft from the All-Star pool to build their
        squads, and once the rosters are set the game starts immediately. No waiting a week to see the teams
        play — the draft board and the opening possession happen the same morning.
      </p>

      <div className="mt-6">
        <Link
          href="/schedule"
          className="inline-block px-6 py-3 bg-ndl-accent text-white font-heading font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
        >
          View the Schedule
        </Link>
      </div>
    </ArticleLayout>
  );
}
