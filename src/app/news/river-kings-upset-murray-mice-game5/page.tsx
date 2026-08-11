import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "River Kings Stun Undefeated Murray Mice 9-6 — NDL Dooramp" };

export default function RiverKingsUpsetMurrayMiceGame5Page() {
  return (
    <ArticleLayout
      title="River Kings Stun Undefeated Murray Mice 9-6"
      date="August 8, 2026"
    >
      <p>
        The River Kings snapped the Murray Mice&apos;s undefeated start to the season, taking down the
        previously 2-0 squad 9-6 behind a near-flawless night from captain Ashton Anderegg.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Anderegg Dominates Inside the Arc
      </h2>
      <p>
        Ashton Anderegg went a perfect 7-for-7 combined on one- and two-pointers, adding a made free throw
        to account for 9 of his team&apos;s points on his own. His lone blemish was going 0-for-2 from three,
        but it didn&apos;t matter — he also chipped in a block/steal and a rebound. Eli Huntsman didn&apos;t
        find the scoring column, missing all 5 of his shot attempts, but stayed active with an assist and
        2 rebounds.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Swarzfager Can&apos;t Find His Rhythm
      </h2>
      <p>
        Adam Swarzfager struggled with his shot all night, going just 3-for-17 (18%) from the one-point line
        and 1-for-9 from three, though he stayed busy elsewhere with 4 blocks/steals and 6 rebounds. Ben
        Martinsen was held scoreless in a limited offensive role but added a block/steal. The loss ends the
        Murray Mice&apos;s undefeated start to the season.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Standings After Game 5
      </h2>
      <p>
        The River Kings climb to 2-2 with the upset win, while the Murray Mice fall to 2-1. Both teams were
        right back in action later the same day — see the Murray Mice&apos;s next game for how they responded.
      </p>
    </ArticleLayout>
  );
}
