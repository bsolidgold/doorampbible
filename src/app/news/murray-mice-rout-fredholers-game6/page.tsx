import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Murray Mice Bounce Back, Rout Freaky Fredholers 12-2 — NDL Dooramp" };

export default function MurrayMiceRoutFredholersGame6Page() {
  return (
    <ArticleLayout
      title="Murray Mice Bounce Back, Rout Freaky Fredholers 12-2"
      date="August 8, 2026"
    >
      <p>
        Hours after falling to the River Kings, the Murray Mice turned right around and blew past the Freaky
        Fredholers 12-2 in a season debut for captain Grant Bowers and teammate Isaac Cameron.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Swarzfager Bounces Back
      </h2>
      <p>
        After a rough shooting night in the earlier game, Adam Swarzfager found his form, going 5-for-7 on
        one-pointers and 2-for-13 from three for 11 of the Murray Mice&apos;s 12 points. Ben Martinsen added
        a one-pointer and 3 blocks/steals off the bench.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Tough Debut for the Fredholers
      </h2>
      <p>
        Grant Bowers and Isaac Cameron took the court for the Freaky Fredholers for the first time this
        season. Bowers managed 2 points on 2-for-5 shooting and 2 blocks/steals, while Cameron struggled to
        find the basket, missing all 6 of his attempts but adding 2 blocks/steals of his own. It&apos;s a
        rough start, but the season opener is now behind them.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Standings After Game 6
      </h2>
      <p>
        The Murray Mice rebound to 3-1 with the win, while the Freaky Fredholers open their season 0-1.
        The River Kings, fresh off their earlier upset of the Mice, sit at 2-2.
      </p>
    </ArticleLayout>
  );
}
