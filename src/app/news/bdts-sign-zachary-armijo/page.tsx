import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "He Asked for the BDT's and Got Them — Zachary Armijo Signs — NDL Dooramp",
};

export default function BdtsSignZacharyArmijoPage() {
  return (
    <ArticleLayout
      title="He Asked for the BDT's and Got Them — Zachary Armijo Signs"
      date="October 15, 2026"
      image="/images/news/zachary-armijo-returns.jpg"
      imageAlt="Zachary Armijo"
    >
      <p>
        Ten days ago Zachary Armijo came back from a broken kneecap, went into the free agent pool, and
        said out loud that he wanted the BDT&apos;s. David Anderegg signed him. Then he put him straight on
        the court, and the BDT&apos;s beat the River Kings <strong>6&ndash;5</strong>.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Anderegg Goes to the Market Again
      </h2>
      <p>
        This is the second time in three weeks that Anderegg has solved a roster problem by signing a free
        agent nobody had seen play. The first was Aiden Shipp in September, who debuted in a triple-overtime
        loss and tied his captain in blocks/steals. The second is a player returning from the worst injury
        you can take in a sport where you are never allowed to hold the ball on the ground.
      </p>
      <p>
        The BDT&apos;s now run five deep: Anderegg, Atlee Gallagher, Devin Murray, Shipp and Armijo. At
        2&ndash;2, they are back to even for the first time since the All-Star break.
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
        Baker&apos;s Night
      </h2>
      <p>
        On the other side, Jack Baker went <strong>0-for-13</strong> from the one-point line and 0-for-2
        from three — fifteen shots, no points. He still had 2 assists and 5 blocks/steals, and the River
        Kings still only lost by one, which says something about how close he came to stealing it anyway.
        Ashton Anderegg scored all five of their points.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Nobody Scored Big
      </h2>
      <p>
        Not one point in this game came from beyond the one-point line. The four players went a combined
        0-for-10 from three, and nobody attempted a two. Eleven points total, all of them scored the hard,
        boring way.
      </p>
      <p>
        The{" "}
        <Link href="/stats" className="text-ndl-accent hover:underline">
          free agent list
        </Link>{" "}
        is down to Emmett Allphin and Lydia Wild.
      </p>
    </ArticleLayout>
  );
}
