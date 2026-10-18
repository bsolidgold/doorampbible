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
      date="October 14, 2026"
      image="/images/news/zachary-armijo-returns.jpg"
      imageAlt="Zachary Armijo"
    >
      <p>
        Nine days ago Zachary Armijo came back from a broken kneecap, went into the free agent pool, and
        said out loud that he wanted the BDT&apos;s. On Wednesday, David Anderegg gave him exactly that.
        Armijo is officially a BDT.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Anderegg Goes to the Market Again
      </h2>
      <p>
        This is the second time in three weeks that Anderegg has solved a roster problem by signing a free
        agent nobody had seen play in the regular season. The first was Aiden Shipp in September, who
        debuted in a triple-overtime loss and tied his captain in blocks/steals. The second is a player
        returning from the worst injury you can take in a sport where you are never allowed to hold the
        ball on the ground.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Winterdome Veteran
      </h2>
      <p>
        Armijo is no stranger to the dome. He played the 2025 Winterdome for the Reno Reapers alongside
        Ashton Anderegg, Eli Huntsman and Jaxon Gladhart, and entered the 2024 Winterdome 1v1 bracket as a
        No. 2 seed before Eli Huntsman upset him in the Round of 8. The broken kneecap cost him his entire
        2026 season until now.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Five Deep
      </h2>
      <p>
        The BDT&apos;s now run five deep: Anderegg, Atlee Gallagher, Devin Murray, Shipp and Armijo.
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
