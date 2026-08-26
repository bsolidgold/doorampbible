import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = { title: "NDL All-Star Vote Is Live — Cast Your Ballot Now" };

export default function NdlAllStarVotePage() {
  return (
    <ArticleLayout
      title="NDL All-Star Vote Is Live — Cast Your Ballot Now"
      date="August 25, 2026"
    >
      <p>
        The first-ever NDL All-Star Game is coming, and the fans decide who plays. The All-Star vote is
        officially open — head to the link below and pick your favorites. The top 4 vote-getters will earn
        a spot in the game, with the remaining roster filled out by the All-Star captains in a live draft.
      </p>

      <div className="my-6">
        <Link
          href="https://forms.gle/8CcXc4ZsLApspkEZ7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-ndl-accent text-white font-heading font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
        >
          ★ Cast Your All-Star Vote
        </Link>
      </div>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        How It Works
      </h2>
      <p>
        The top 4 players selected by the fans will automatically qualify for the All-Star Game. From there,
        the two All-Star captains — David Anderegg and Adam Swarzfager — will hold a live draft to build
        out their rosters from the remaining pool of eligible players. Both captains are seasoned leaders
        who know how to put together a winning team, so expect the draft to be every bit as competitive as
        the game itself.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Captains Already Set
      </h2>
      <p>
        David Anderegg and Adam Swarzfager have been named the All-Star Game captains. David has been one
        of the most clutch performers in the league all season, while Adam brings the Murray Mice&apos;s
        championship mentality to the All-Star stage. Both will draft their squads from whoever the fans
        send their way.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Grant and Ashton Already In
      </h2>
      <p>
        Regardless of the fan vote results, both Grant Bowers and Ashton Anderegg have been confirmed as
        participants in the All-Star Game. The two captains will be drafted by David or Adam when the rosters
        are filled out, rounding out what is shaping up to be the most talent-packed game in NDL history.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Vote Now — It Won&apos;t Be Open Long
      </h2>
      <p>
        The All-Star vote will only be open for a limited time, so don&apos;t sleep on it. Every vote counts.
        Head to the form, pick your four players, and help shape the first All-Star Game roster in NDL history.
      </p>

      <div className="mt-6">
        <Link
          href="https://forms.gle/8CcXc4ZsLApspkEZ7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-ndl-accent text-white font-heading font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
        >
          ★ Vote Here
        </Link>
      </div>
    </ArticleLayout>
  );
}
