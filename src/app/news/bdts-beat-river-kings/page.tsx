import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Dave's Game-Winner Seals BDT's Victory — NDL Dooramp" };

export default function BDTsBeAtRiverKingsPage() {
  return (
    <ArticleLayout
      title="Dave's Game-Winner — BDT's Edge River Kings in Thriller"
      date="June 27, 2026"
      image="/images/news/dave-game-winner.png"
      imageAlt="David Anderegg hitting the game-winning shot"
    >
      <p>
        In one of the most dramatic finishes the NDL has seen, the BDT's defeated the River Kings 5–4 on Friday
        after David Anderegg hit a clutch one-pointer with just five seconds remaining to seal the victory.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Game-Winning Moment
      </h2>
      <p>
        With the score tied and the clock winding down, David Anderegg caught the ball on the move and buried
        a one-pointer with five seconds left on the clock — giving the BDT's a 5–4 lead they would not relinquish.
        It was the defining shot of the game and cemented David's status as a clutch performer in the young season.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        BDT's Offense Comes Through
      </h2>
      <p>
        David led the BDT's with 5 one-pointers on 11 attempts. Atlee Gallagher chipped in 5 blocks and steals,
        providing the defensive backbone that kept the River Kings from pulling away. The BDT's improve to 1–0
        on the season and jump into the standings with 23 ELO.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        River Kings Come Up Short
      </h2>
      <p>
        Ashton Anderegg gave everything he had, finishing with 4 one-pointers and 3 blocks and steals, but it
        wasn't enough. Eli Huntsman was a bright spot defensively with 6 blocks and steals and chipped in an
        assist, but the River Kings fall to 0–2 on the season and will be looking for their first win.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        ELO Standings After Game 2
      </h2>
      <p>
        The BDT's open their account at 23 ELO, while the River Kings earn a 5-point participation bonus to
        sit at 14 ELO. The Murray Mice remain atop the standings at 27 ELO.
      </p>
    </ArticleLayout>
  );
}
