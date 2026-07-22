import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Murray Mice Rout River Kings 40-0 — NDL Dooramp" };

export default function MurrayMiceHistoricRoutPage() {
  return (
    <ArticleLayout
      title="Perfect Night — Murray Mice Shut Out River Kings 40-0 in Most Lopsided Game in NDL History"
      date="July 18, 2026"
    >
      <p>
        The NDL has never seen anything like this. The Murray Mice demolished the River Kings 40-0 on Saturday,
        a shutout that shatters every mark for margin of victory the league has produced through its first four
        games. Captain Adam Swarzfager and first-round pick Ben Martinsen were simply unstoppable, while Ashton
        Anderegg and Eli Huntsman never got the River Kings off the ground.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Adam&apos;s Perfect Night
      </h2>
      <p>
        Adam Swarzfager delivered the finest shooting performance the league has recorded: 13-for-13 from the
        one-point line, 4-for-4 from two, and 3-for-3 from three — 20 shots, 20 makes, not a single miss. He added
        30 points on his own, plus 9 assists, 10 blocks and steals, and 12 rebounds, turning in one of the most
        complete stat lines imaginable in a single game.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Martinsen&apos;s Defensive Clinic
      </h2>
      <p>
        Ben Martinsen matched Adam&apos;s perfection at the line, going 10-for-10 on one-pointers, and paired it
        with a staggering 22 blocks and steals — by far the highest single-game total the NDL has tracked. Between
        the two of them, the Murray Mice shot a combined 23-for-23 from the field.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Shutout for the River Kings
      </h2>
      <p>
        On the other end, the River Kings simply had no answer. Ashton Anderegg and Eli Huntsman were held
        scoreless across every category — no makes, no assists, no blocks, no rebounds — the first shutout in
        NDL history. It&apos;s a stunning reversal for Ashton, who had scored in every prior game this season.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        ELO Standings After Game 4
      </h2>
      <p>
        The rout vaults the Murray Mice to 2-0 on the season and a league-best 46 ELO, a 19-point jump off the
        back of the historic performance. The River Kings drop to 1-3 and slip to 22 ELO, salvaging only the
        one-point participation bonus from the loss.
      </p>
    </ArticleLayout>
  );
}
