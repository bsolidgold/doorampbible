import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Five Overtimes — Murray Mice Outlast River Kings 8-7 — NDL Dooramp" };

export default function MurrayMiceAvengeRiverKingsGame7Page() {
  return (
    <ArticleLayout
      title="Five Overtimes — Murray Mice Outlast River Kings 8-7"
      date="August 23, 2026"
    >
      <p>
        The longest game in dooramp history needed five overtimes to produce a single point of separation. The
        Murray Mice finally put away the River Kings 8-7 in Game 7, avenging the Game 5 upset that handed them
        their only loss of the season — but only after both teams spent five extra periods failing to end it.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Five Overtimes, One Point
      </h2>
      <p>
        Regulation solved nothing. Neither did the first overtime, or the second, or the three that followed.
        Five straight extra periods came and went with the teams locked together, an endurance test that turned
        a normal evening of dooramp into the longest night the league has ever staged. When it finally broke,
        it broke by exactly one point — the narrowest possible margin after the longest possible game.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Swarzfager Carries Every Point
      </h2>
      <p>
        Adam Swarzfager scored all 8 Murray Mice points. Not most of them — all of them. He went 8-for-16 from
        the one-point line across regulation and five overtimes, missed all 3 of his attempts from deep, and
        still had enough left to record 4 blocks/steals. No other Mouse found the bottom of the hoop. Across a
        game this long, that is a staggering share of the load to shoulder alone.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Patrone Debuts in the Deep End
      </h2>
      <p>
        Frank Patrone could not have asked for a stranger introduction. Traded from the BDT&apos;s for a 2027
        first-round pick minutes before tip-off, he went straight from the deal into a five-overtime marathon.
        His line was quiet — 0-for-4 from the one-point line with a block/steal — but the 2025 Winterdome
        Champion was on the floor when it mattered. Jaxon Gladhart also made his season debut, adding an assist
        and a block/steal while going 0-for-3.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Anderegg&apos;s Defensive Masterclass Wasted
      </h2>
      <p>
        Ashton Anderegg was everywhere for five overtimes. His 8 blocks/steals tie the most any player has
        recorded in a single game this season, and he added 5 points on 12 one-point attempts. Jack Baker was
        the only other River King to score, going 2-for-4 with 2 assists, a block/steal and a rebound. After
        all that, the River Kings came up exactly one point short of sweeping the season series.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Standings After Game 7
      </h2>
      <p>
        The Murray Mice improve to 4-1 and pull further clear at the top of the table. The River Kings fall to
        2-3, dropping into a tie with the BDT&apos;s at +1 points.
      </p>
    </ArticleLayout>
  );
}
