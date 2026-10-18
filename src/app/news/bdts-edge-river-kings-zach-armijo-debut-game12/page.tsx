import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "BDT's Edge River Kings in Zachary Armijo's Debut — NDL Dooramp",
};

export default function Game12BdtsRiverKingsPage() {
  return (
    <ArticleLayout
      title="BDT's Edge River Kings 6-5 in Zachary Armijo's Return From a Broken Kneecap"
      date="October 14, 2026"
    >
      <p>
        Zachary Armijo&apos;s first game since breaking his kneecap ended in a win. The BDT&apos;s beat the
        River Kings <strong>6&ndash;5</strong>{" "}on Wednesday, with Armijo scoring 2 in his BDT&apos;s debut
        and David Anderegg adding the other 4.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Debut
      </h2>
      <p>
        Armijo scored 2 on 2-for-11 shooting, added an assist and 3 blocks/steals, and his two points were
        a third of his team&apos;s total in a game decided by one. Eleven attempts is not a man easing back
        in on a repaired knee — he took the second-most shots in the game.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        David Does a Bit of Everything
      </h2>
      <p>
        David Anderegg went 4-for-9 on ones and 0-for-5 from deep, and filled the rest of the box score
        with 2 assists, 5 blocks/steals and a rebound. Coming off the triple-overtime loss to the Murray
        Mice, the BDT&apos;s are back to even at 2&ndash;2, and 2&ndash;0 against the River Kings this
        season.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Baker&apos;s Night
      </h2>
      <p>
        On the other side, Jack Baker went <strong>0-for-13</strong> from the one-point line and 0-for-2
        from three — fifteen shots, no points. He still had 2 assists and 5 blocks/steals, and the River
        Kings still only lost by one. Ashton Anderegg scored all five of their points on 5-for-10 from
        one, with 5 blocks/steals of his own. The River Kings fall to 2&ndash;6.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Nobody Scored Big
      </h2>
      <p>
        Not one point in this game came from beyond the one-point line. The four players went a combined
        0-for-12 from three, and nobody attempted a two. Eleven points total, all of them scored the hard,
        boring way.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Box Score Highlights
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>David Anderegg (BDT): 4 PTS, 4/9 1PT, 0/5 3PT, 2 AST, 5 BLK/STL, 1 REB</li>
        <li>Zachary Armijo (BDT): 2 PTS, 2/11 1PT, 1 AST, 3 BLK/STL</li>
        <li>Ashton Anderegg (RK): 5 PTS, 5/10 1PT, 0/5 3PT, 5 BLK/STL</li>
        <li>Jack Baker (RK): 0/13 1PT, 0/2 3PT, 2 AST, 5 BLK/STL</li>
      </ul>
    </ArticleLayout>
  );
}
