import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Frank Patrone Traded to Murray Mice for 2027 First-Round Pick — NDL Dooramp" };

export default function FrankPatroneTradedPage() {
  return (
    <ArticleLayout
      title="Deadline Deal — Frank Patrone Traded to Murray Mice for 2027 First-Rounder"
      date="August 23, 2026"
    >
      <p>
        In a move that sent shockwaves through the league just hours before their matchup with the River Kings,
        the Murray Mice acquired Frank Patrone from the BDT&apos;s in exchange for the Murray Mice&apos;s
        2027 first-round draft pick. The deal was finalized right before tip-off, giving Adam Swarzfager&apos;s
        squad an immediate roster boost heading into one of the season&apos;s most anticipated games.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Bold Move by Swarzfager
      </h2>
      <p>
        Murray Mice captain Adam Swarzfager made clear he is not waiting to build — he&apos;s going for it now.
        Surrendering a first-round pick in the upcoming 2027 draft is a steep price, but with the Mice sitting
        near the top of the standings, Swarzfager is betting on winning this season rather than stockpiling
        future assets. Patrone, a 2025 Winterdome Champion, brings proven experience and athleticism that
        immediately upgrades the Mice&apos;s depth.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What the BDT&apos;s Get
      </h2>
      <p>
        For David Anderegg and the BDT&apos;s, the trade is a calculated gamble on the future. Patrone has yet
        to log regular season minutes this year, and with a first-round pick now in hand, Anderegg has
        ammunition to reshape his roster ahead of the 2027 season. The move signals a possible shift in the
        BDT&apos;s timeline — trading a present piece for future flexibility.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Eyes on the River Kings
      </h2>
      <p>
        The timing could not be more dramatic. Patrone&apos;s first act as a Murray Mouse will be suiting up
        against Ashton Anderegg and the River Kings — a team that has been one of the Mice&apos;s toughest
        tests all season. Whether Patrone steps in and makes an immediate impact or takes time to find his
        footing, the trade has already shifted the energy around tonight&apos;s game.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        League Reacts
      </h2>
      <p>
        The trade is the biggest roster move the NDL has seen mid-season. A future first-round pick crossing
        hands sets a new precedent for how aggressively captains are willing to deal to chase a championship.
        All eyes will be on Frank Patrone as he takes the court in orange and black for the very first time.
      </p>
    </ArticleLayout>
  );
}
