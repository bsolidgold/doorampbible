import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Solo Play Banned — NDL Mandates Minimum Two-Man Rosters" };

export default function SoloPlayBannedPage() {
  return (
    <ArticleLayout
      title="Solo Play Banned — NDL Mandates Minimum Two-Man Rosters"
      date="June 11, 2026"
      backHref="/news"
      backLabel="← Back to News"
    >
      <p>
        Effective immediately, the National Dooramp League has banned solo play. All teams are now
        required to field a minimum of two players in any official game. The rule change marks a
        significant shift in how NDL games are played — and how ELO is earned.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A More Team-Oriented League
      </h2>
      <p>
        The NDL was built around team competition, and solo play always sat awkwardly within that
        framework. A single player going it alone removed the core strategic element of the game:
        communication, positioning, and coordinating with your roster. With the two-player minimum
        now in place, every game requires at least some degree of teamwork — and captains will need
        to think carefully about which players they bring and when.
      </p>
      <p>
        The change also raises the floor for how games are played. No more showing up alone and
        running a one-man operation. If you want to compete, you need to bring someone with you.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Closing an ELO Loophole
      </h2>
      <p>
        Beyond the strategic argument, there was a clear problem with how solo play interacted with
        the ELO system. A solo player winning a game carried an inflated multiplier — rewarding the
        difficulty of going alone, but in practice creating situations where a single dominant player
        could accumulate disproportionate ELO in ways that didn&apos;t reflect the team-based nature
        of the league.
      </p>
      <p>
        With solo play gone, the ELO system has been rebalanced around two players as the new
        baseline. Two-player rosters earn a standard 1.00× multiplier, while larger rosters earn
        slightly more — 1.15× for three players and 1.30× for four — reflecting the added difficulty
        of coordinating bigger teams. The playing field is now fairer across the board.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What This Means for Captains
      </h2>
      <p>
        Every captain now has to commit to at least one draft pick per game. That means roster
        decisions matter more than ever. Bringing a weaker later-round pick could open you up to
        an upset bonus if things go wrong, but it also means more ELO on the line — even in a loss.
        The new loss bonus structure rewards teams for bringing their full roster, with 2nd and 3rd
        round picks adding +1 and +2 respectively to ELO earned in defeat.
      </p>
      <p>
        The era of one-man armies is over. The NDL is a team league — and now the rules reflect that.
      </p>
    </ArticleLayout>
  );
}
