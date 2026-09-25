import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "BDT's Sign Free Agent Aiden Shipp — NDL Dooramp" };

export default function BdtsSignAidenShippPage() {
  return (
    <ArticleLayout
      title="Handshake at the Dome: BDT's Sign Free Agent Aiden Shipp"
      date="September 25, 2026"
      image="/images/news/aiden-shipp-signing.webp"
      imageAlt="David Anderegg shaking hands with Aiden Shipp in front of the dome"
    >
      <p>
        It took one handshake in front of the dome to change the BDT&apos;s roster. David Anderegg has
        signed free agent <strong>Aiden Shipp</strong>, pulling him out of the free agent pool and onto
        the BDT&apos;s before the 2027 draft ever got the chance to sort him.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Straight Off the Free Agent List
      </h2>
      <p>
        Shipp joined the free agent pool earlier this month alongside Emmett Allphin, both listed as
        aiming for the 2027 draft with the understanding that the league could clear them to play sooner.
        Anderegg did not wait for the draft. Under free agency rules, any captain can sign a listed free
        agent outright — and the BDT&apos;s captain moved first.
      </p>
      <p>
        Shipp has yet to log a regular season NDL game. Everything the league knows about him is still
        ahead of it.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What the BDT&apos;s Get
      </h2>
      <p>
        Anderegg now heads a roster of himself, Atlee Gallagher, Devin Murray and Shipp. The BDT&apos;s sit
        at 1&ndash;1 on the season, one of the quieter records in a league where the Murray Mice have run
        out to 6&ndash;1. Adding a body who can actually show up is worth more than it sounds in a league
        this small — the All-Star Game had to improvise a float player when one man didn&apos;t turn up.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Free Agent Route Is Open
      </h2>
      <p>
        This is the second free agent signing in as many weeks, after the Freaky Fredholers brought in
        Archer Rugh on September 15. The market that sat untouched for most of the season is suddenly the
        fastest way for a captain to change his roster, and two of the five have now used it.
      </p>
      <p>
        That leaves Emmett Allphin and Lydia Wild on the{" "}
        <Link href="/stats" className="text-ndl-accent hover:underline">
          free agent list
        </Link>
        , with three captains yet to make a move.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Next Up
      </h2>
      <p>
        Shipp is eligible the moment the BDT&apos;s next take the court. Whether Anderegg found something
        the rest of the league missed, or simply got there first, is a question the scoreboard will answer.
      </p>
    </ArticleLayout>
  );
}
