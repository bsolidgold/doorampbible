import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Halloween Doubleheader: 7-for-7 and a Third-Quarter Walk-Off — NDL Dooramp",
};

export default function HalloweenDoubleheaderPage() {
  return (
    <ArticleLayout
      title="Halloween Doubleheader: 7-for-7 and a Third-Quarter Walk-Off"
      date="October 31, 2026"
    >
      <p>
        The Freaky Fredholers played twice on Halloween and lost twice. The first went the distance,
        16&ndash;12 to the Murray Mice. The second did not finish at all &mdash; Grant Bowers forfeited in
        the third quarter, down 18&ndash;6 to the River Kings.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Game One: Swartzfager 15 of 16
      </h2>
      <p>
        Adam Swartzfager scored all but one of the Murray Mice&apos;s points &mdash; 10 from the one-point
        line, a two and a three. The only other Mice point came from Ben Martinsen at the free throw line,
        where he went 1-for-1. Martinsen did not make a shot from the floor all game and still mattered:
        5 blocks/steals and an assist.
      </p>
      <p>
        Bowers had his best game of the season in defeat, 6-for-7 from one for 8 points with 3 rebounds.
        Isaac Cameron added 4 and 5 blocks/steals. Twelve points is the most the Fredholers have scored all
        year.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Game Two: Anderegg Can&apos;t Miss
      </h2>
      <p>
        Then Ashton Anderegg went <strong>7-for-7 on two-pointers</strong>. Fourteen of his 18 points came
        off a part of his body other than his hands, in a shot the rest of the league attempts a handful of
        times a season. Ten days after scoring 17 against these same Fredholers, he did it again, faster.
      </p>
      <p>
        He now has 16 made twos on the season. Everyone else in the league combined has none.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Walk-Off
      </h2>
      <p>
        Down 18&ndash;6 in the third, Bowers ended it. It is the third game the Fredholers have forfeited
        this season, after the two he missed entirely last week &mdash; and the first he forfeited while
        actually on the court. The stats from the quarters that were played still count; the result was
        awarded to the River Kings.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Where It Leaves Them
      </h2>
      <p>
        The Murray Mice go to <strong>9&ndash;1</strong>. The River Kings climb to <strong>5&ndash;6</strong>,
        three wins in two weeks. The Fredholers are <strong>0&ndash;6</strong>, half of those losses by
        forfeit. Full numbers are on the{" "}
        <Link href="/stats" className="text-ndl-accent hover:underline">
          stats page
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
