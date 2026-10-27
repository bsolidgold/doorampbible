import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Fredholers Forfeit Two: Grant Bowers Doesn't Show — NDL Dooramp",
};

export default function FredholersForfeitPage() {
  return (
    <ArticleLayout
      title="Fredholers Forfeit Two: Grant Bowers Doesn't Show"
      date="October 27, 2026"
    >
      <p>
        The Freaky Fredholers have forfeited two games. Captain Grant Bowers did not show up for either,
        and the league awarded the wins to the Murray Mice and the River Kings without a ball being popped
        up.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        0&ndash;4, Without Playing
      </h2>
      <p>
        The Fredholers drop to <strong>0&ndash;4</strong> and remain the only team in the league yet to win
        a game. Half of those losses now came without anyone taking a shot. For a roster Bowers spent
        September rebuilding &mdash; signing Archer Rugh off the free agent list and releasing Ben Shapiro
        to do it &mdash; it is a bleak way to spend two fixtures.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What a Forfeit Costs Everyone
      </h2>
      <p>
        Dooramp is 2v2. A captain who doesn&apos;t turn up doesn&apos;t just lose his own game &mdash; he
        takes his teammate&apos;s game with him, and the opponent&apos;s. The league has already worked
        around a no-show once this season: when Ben Hoag missed the All-Star Game, Jaxon Gladhart played a
        quarter for each side rather than let a team go a man short. That was an exhibition. These were
        fixtures, and nobody improvised a fix.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Beneficiaries
      </h2>
      <p>
        The Murray Mice move to <strong>8&ndash;1</strong>, extending a lead that was already the largest
        in the league. The River Kings climb to <strong>4&ndash;6</strong>, a second win in a week after
        Ashton Anderegg&apos;s 17-point game. Neither had to earn these.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What Happens Next
      </h2>
      <p>
        The rulebook has nothing to say about forfeits. There is no stated penalty beyond the loss, no
        process for a captain who misses repeatedly, and no mechanism for a teammate to play on without
        him. With a 1v1 tournament on Halloween and a draft after that, it is a gap the league will
        probably need to close.
      </p>
      <p>
        Standings are on the{" "}
        <Link href="/standings" className="text-ndl-accent hover:underline">
          standings page
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
