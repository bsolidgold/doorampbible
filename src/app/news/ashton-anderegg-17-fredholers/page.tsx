import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Every Way You Can Score: Ashton Anderegg Drops 17 — NDL Dooramp",
};

export default function AshtonAndereggSeventeenPage() {
  return (
    <ArticleLayout
      title="Every Way You Can Score: Ashton Anderegg Drops 17"
      date="October 21, 2026"
    >
      <p>
        The River Kings beat the Freaky Fredholers <strong>20&ndash;2</strong>, and Ashton Anderegg scored
        17 of it. Nobody has had a bigger scoring game this season, and nobody has done what he did to get
        there: a one, a two and a three, all in the same game.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        4-for-6 From Two
      </h2>
      <p>
        The two-pointer is the least used shot in the league. Most games end with nobody attempting a
        single one &mdash; it means getting your hands on the ball and then putting it in off some other
        part of your body on the same possession, which is harder than it sounds and easier to get wrong.
        Anderegg went <strong>4-for-6</strong>. That is more made twos than the rest of the league has
        managed all season combined.
      </p>
      <p>
        He added 6-for-10 from one and finally got a three to drop on his twelfth attempt. Twelve threes
        in one game is its own kind of statement; so is refusing to stop shooting them.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The First Free Throws
      </h2>
      <p>
        Isaac Cameron shot the first free throws ever recorded in NDL play, going 1-for-2 under the 3-2-1
        system. Both of the Fredholers&apos; points came from him &mdash; one from the field, one from the
        line.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Rugh Debuts
      </h2>
      <p>
        Archer Rugh played his first NDL game, five weeks after Grant Bowers signed him out of free agency.
        He took one shot, missed it, and picked up a block/steal. A quiet first outing in a game that got
        away from his team early.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Where It Leaves Them
      </h2>
      <p>
        The River Kings climb to 3&ndash;6, their first win since the season&apos;s midpoint. The Fredholers
        fall to 0&ndash;2 and remain the only team in the league without a win. Full numbers are on the{" "}
        <Link href="/stats" className="text-ndl-accent hover:underline">
          stats page
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
