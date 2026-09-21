import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Murray Mice Beat River Kings in Double Overtime — NDL Dooramp",
};

export default function Game8MiceEdgeRiverKingsPage() {
  return (
    <ArticleLayout
      title="Murray Mice Beat River Kings 11-10 in Double Overtime in Their Final Regular-Season Meeting"
      date="September 20, 2026"
    >
      <p>
        The Murray Mice and River Kings saved their tensest game for last. They have
        been the league&apos;s fiercest rivals all year, and their final regular-season meeting went to
        double overtime. <strong className="text-ndl-text">Adam Swartzfager</strong> scored 10 points and
        the Mice won 11-10.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Rivalry Heats Up
      </h2>
      <p>
        This was the fourth meeting between the two teams this season. Adam beat the River Kings by himself
        in the season opener. The River Kings got revenge with an upset in Game 5, and the Mice answered in
        Game 7&apos;s five-overtime marathon. This one needed two extra periods, and the Mice took it by a
        single point. The Mice improve to 5-1 and stay in first place, having won three of four
        against their biggest rival.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Swaggy Swartz Carries the Load
      </h2>
      <p>
        Adam went 10-of-25 from the one-point line and added 4 blocks and steals and an assist. He also took
        a two, three threes and a free throw, but none of them fell. His one-pointers were enough.{" "}
        <strong className="text-ndl-text">Frank Patrone</strong> scored the other point on 1-of-7 shooting,
        and in a one-point game that basket was the difference. Frank also led all players with 5 blocks and
        steals.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Ashton Nearly Does It Alone
      </h2>
      <p>
        <strong className="text-ndl-text">Ashton Anderegg</strong> scored 9 of the River Kings&apos; 10
        points from all over the court. He made 4 one-pointers, a two and a three, and grabbed 2 rebounds.
        No other player in this game scored from beyond the one-point line.
      </p>
      <p>
        Jack Baker went 1-of-11 but still led the game with 3 assists. The River Kings drop to 2-4 and play
        the Trampoline Titans later in the day.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Box Score Highlights
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Adam Swartzfager (MM): 10 PTS, 10/25 1PT, 0/1 2PT, 0/3 3PT, 0/1 FT, 4 BLK/STL, 1 AST</li>
        <li>Frank Patrone (MM): 1 PT, 1/7 1PT, 0/1 3PT, 5 BLK/STL, 1 REB</li>
        <li>Ashton Anderegg (RK): 9 PTS, 4/13 1PT, 1/1 2PT, 1/2 3PT, 2 BLK/STL, 2 REB</li>
        <li>Jack Baker (RK): 1 PT, 1/11 1PT, 3 AST, 1 BLK/STL</li>
      </ul>
    </ArticleLayout>
  );
}
