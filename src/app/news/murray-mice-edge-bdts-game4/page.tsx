import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Martinsen Makes His Debut as Murray Mice Edge BDT's 8-6 — NDL Dooramp" };

export default function MurrayMiceEdgeBdtsGame4Page() {
  return (
    <ArticleLayout
      title="Martinsen Makes His Debut as Murray Mice Edge BDT's 8-6"
      date="July 22, 2026"
    >
      <p>
        The Murray Mice moved to 2-0 on the season with an 8-6 win over the BDT's in Game 4, as first-round
        pick Ben Martinsen suited up for the first time this year alongside captain Adam Swarzfager.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Martinsen&apos;s Season Debut
      </h2>
      <p>
        After sitting out the Murray Mice&apos;s first three games, Ben Martinsen finally took the court and
        made his presence felt on defense, coming up with a block/steal in his return. He didn&apos;t need to
        put the ball in the hoop — Adam Swarzfager carried the offensive load, and Martinsen&apos;s length off
        the bench was enough to help close out the win.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Swarzfager Leads the Way
      </h2>
      <p>
        Adam Swarzfager did the heavy lifting for the Murray Mice, going 8-for-14 (57%) from the one-point line
        to account for all 8 of the team&apos;s points. He struggled from deep, missing all 8 of his three-point
        attempts, but still finished with 4 blocks/steals and 2 rebounds to go with the win.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        BDT&apos;s Fall Just Short
      </h2>
      <p>
        David Anderegg kept the BDT&apos;s in it, shooting 6-for-9 (67%) from the one-point line for all 6 of
        the team&apos;s points and adding 4 blocks/steals and 3 rebounds. Atlee Gallagher couldn&apos;t find
        the basket, going 0-for-4 on one-pointers and 0-for-2 from three, but chipped in an assist. The BDT&apos;s
        fall to 1-1 on the season.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        ELO Standings After Game 4
      </h2>
      <p>
        The Murray Mice remain undefeated and extend their lead atop the standings, climbing to 46 ELO. The
        BDT&apos;s take their first loss of the season and settle at 20 ELO after their participation bonus.
      </p>
    </ArticleLayout>
  );
}
