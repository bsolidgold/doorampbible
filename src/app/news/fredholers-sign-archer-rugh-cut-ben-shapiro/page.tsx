import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Fredholers Sign Archer Rugh, Cut Ben Shapiro — NDL Dooramp" };

export default function FredholersSignArcherRughPage() {
  return (
    <ArticleLayout
      title="Fredholers Sign Free Agent Archer Rugh, Cut Ben Shapiro"
      date="September 15, 2026"
    >
      <p>
        The Freaky Fredholers have made their move. Grant Bowers&apos; squad announced the signing of free
        agent Archer Rugh, and in the same breath confirmed that Ben Shapiro has been released from the
        roster. The Fredholers keep their roster count level — but the names on it have changed.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Familiar Face from the Winterdome
      </h2>
      <p>
        Rugh is not a stranger to the court. He suited up in the 2025 Winterdome as a member of the Jolly
        Jackrackers, lining up alongside Jack Baker, Finn Anderegg and Cooper Armijo. It was a punishing
        run — the Jackrackers went winless in round robin qualifying, absorbing a 31&ndash;2 loss to the
        eventual champion Murray Mice and an 11&ndash;1 defeat to Bowers&apos; own Bowling Bobblers before
        bowing out.
      </p>
      <p>
        That means Bowers has seen Rugh play, and from the other side of the floor. Whatever the scoreboard
        said that day, the Fredholers captain evidently saw enough to make the call. Rugh has yet to log a
        regular season NDL game, so the Winterdome tape is all the league has to go on.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The End of the Shapiro Era
      </h2>
      <p>
        For Ben Shapiro, the news is harder. Shapiro never found his footing in Fredholer colors, finishing
        his run with the club without a regular season game to his name. He now returns to the free agent
        pool, where any of the league&apos;s five captains are free to come calling. Whether another roster
        takes a chance on him before the season closes remains an open question.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What It Means for the Fredholers
      </h2>
      <p>
        Bowers now heads a roster of himself, Isaac Cameron, Isaac Solemen and Rugh. It is a lean group,
        and one that will live or die on whether the new signing can contribute immediately. The Fredholers
        have made no secret of their frustration this season — this is the first real answer they have
        offered to it.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        League Reacts
      </h2>
      <p>
        Free agent signings remain rare in the NDL, where most roster movement has come through trades and
        the draft. The Fredholers going straight to the open market — and cutting a player to do it — sets
        a marker for how aggressively captains are willing to reshape their teams mid-season. All eyes now
        turn to Archer Rugh&apos;s first appearance on the court.
      </p>
    </ArticleLayout>
  );
}
