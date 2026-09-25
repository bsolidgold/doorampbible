import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Triple Overtime: Mice Outlast BDT's on a Bounce-In Winner — NDL Dooramp",
};

export default function MiceOutlastBdtsTripleOvertimePage() {
  return (
    <ArticleLayout
      title="Triple Overtime: Mice Outlast BDT's on a Bounce-In Winner"
      date="September 25, 2026"
      image="/images/news/mice-bdts-triple-ot.webp"
      imageAlt="Play at the dome during the Murray Mice and BDT's triple overtime game"
    >
      <p>
        Three overtimes, and it ended on a bounce. Ben Martinsen&apos;s shot rattled in off the dome to
        give the Murray Mice a <strong>10&ndash;9</strong> win over the BDT&apos;s — the only make
        Martinsen had all night, and the only one that mattered.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        One For Four, And It Won The Game
      </h2>
      <p>
        Martinsen finished 1-for-4 from the one-point line. Under the scoring rules a shot that bounces in
        counts for exactly what it is worth, and his counted for one — which, after 45 minutes of a game
        that would not end, was the whole margin. He added 2 blocks/steals to a night that will be
        remembered entirely for its last possession.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Swartzfager&apos;s Split Night
      </h2>
      <p>
        Adam Swartzfager was the reason the Mice were still in it, and nearly the reason they weren&apos;t.
        He shot <strong>9-for-13 (69%)</strong> from the one-point line — the most efficient volume night
        of his season — and then missed every single attempt from further out, going 0-for-6 on twos and
        0-for-12 from three. Eighteen attempts beyond the one-point line, none of them good. Nine points of
        the Mice&apos;s ten came from him anyway.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Anderegg Deserved Better
      </h2>
      <p>
        David Anderegg matched him shot for shot and lost. He went 7-for-11 (64%) from one, added 3
        blocks/steals, and came up one point short in a game where the BDT&apos;s led as often as they
        trailed. Like Swartzfager, he couldn&apos;t buy anything from range — 0-for-7 from three, 0-for-2
        on twos. Between the two captains, that&apos;s 0-for-27 beyond the one-point line.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Shipp&apos;s Debut
      </h2>
      <p>
        Aiden Shipp played his first NDL game, days after David Anderegg signed him out of free agency, and
        did not look like a man making his debut in a triple-overtime game. He scored 2 on 2-for-5 shooting
        and tied Anderegg with 3 blocks/steals — second on his team in both. The BDT&apos;s lost, but the
        signing looks defensible already.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Where It Leaves Everyone
      </h2>
      <p>
        The Murray Mice move to <strong>7&ndash;1</strong> and remain the class of the league. The
        BDT&apos;s fall to 1&ndash;2 in a game they had every right to win. It is the second multi-overtime
        thriller of the season after the five-overtime Game 7, and the second time this year a single point
        has separated the Mice from a loss.
      </p>
    </ArticleLayout>
  );
}
