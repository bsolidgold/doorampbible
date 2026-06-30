import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Adam Swarzfager Wins Season Opener — NDL Dooramp" };

export default function Game1AdamVictoryPage() {
  return (
    <ArticleLayout
      title="Adam Goes Solo — Murray Mice Captain Wins the Season Opener"
      date="June 9, 2026"
      image="/images/news/game1-adam-victory.jpg"
      imageAlt="Players gathered around the dooramp before Game 1"
    >
      <p>
        The 2026 NDL season is officially underway. In the first competitive game of the year, Murray Mice captain
        Adam Swarzfager stepped up alone — no teammates, no help — and took down a two-man River Kings squad
        of Ashton Anderegg and Jack Baker.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Solo Against the Odds
      </h2>
      <p>
        Adam played the entire game as a solo captain pick, going up against Ashton (captain) and Jack Baker
        (2nd round). Despite being outnumbered, Adam dominated — finishing with 9 one-pointers on 26 attempts,
        8 blocks and steals, and a clean sheet of 0 turnovers.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        River Kings Fall Short
      </h2>
      <p>
        Ashton put up a respectable performance with 4 one-pointers, a three-pointer, and 5 blocks and steals,
        but the River Kings couldn&apos;t convert enough to overcome Adam&apos;s relentless solo pressure.
        Jack Baker chipped in 2 assists but went 1-for-9 from the one-point line.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        ELO Standings
      </h2>
      <p>
        The result moves the Murray Mice to the top of the early leaderboard with 27 ELO, while the River Kings
        open their account with 9 ELO from the participation bonus. The rest of the league is yet to play.
      </p>
    </ArticleLayout>
  );
}
