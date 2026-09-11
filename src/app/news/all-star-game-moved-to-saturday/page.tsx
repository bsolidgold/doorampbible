import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "All-Star Game Moved to Saturday, September 12",
};

export default function AllStarGameMovedPage() {
  return (
    <ArticleLayout
      title="All-Star Game Moved to Saturday, September 12"
      date="September 9, 2026"
    >
      <p>
        The first NDL All-Star Game has a new date. Originally set for Wednesday, September 9, the game
        has been pushed back to <strong>Saturday, September 12</strong> at the dooramp. Everything else
        about the event stays exactly the same — same captains, same fan-voted roster, same stakes.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Why the Move
      </h2>
      <p>
        A midweek tip-off was always going to be tough on a roster full of players with school and work
        conflicts. Moving to Saturday gives the league its best shot at a full house — every All-Star
        available, and every fan able to actually show up and watch. For the first game of its kind in
        NDL history, that felt worth the three-day wait.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Nothing Else Changes
      </h2>
      <p>
        The rosters are unaffected. The top 4 vote-getters from the fan ballot still earn automatic spots,
        with captains David Anderegg and Adam Swartzfager drafting the rest of their squads from the
        remaining pool. Grant Bowers and Ashton Anderegg remain confirmed participants regardless of the
        vote. The draft order and format are untouched by the date change.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Mark Your Calendar
      </h2>
      <p>
        Saturday, September 12. The full schedule is on the calendar below, and any further changes will
        show up there first.
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
