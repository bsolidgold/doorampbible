import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Eight Men, One Dome: NDL Halloween 1v1 Tournament — NDL Dooramp",
};

export default function HalloweenTournamentPage() {
  return (
    <ArticleLayout
      title="Eight Men, One Dome: NDL Halloween 1v1 Tournament"
      date="October 16, 2026"
      image="/images/news/halloween-tournament.webp"
      imageAlt="NDL Halloween tournament poster"
    >
      <p>
        The NDL is running a tournament on Halloween, and it will not look like anything the league has
        played this season. No captains, no rosters, no teammates to bail you out —{" "}
        <strong>1v1, Saturday, October 31</strong>, with a field of roughly the top eight players in the
        league.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Nowhere to Hide
      </h2>
      <p>
        Dooramp is built around two-man teams. You pass to break a forwarding line, you have someone to pop
        the ball up for you, and your bad shooting night can be covered by a partner having a good one.
        Strip that away and the sport changes completely. Every pop up, every bobble and every shot is
        yours. So is every defensive possession.
      </p>
      <p>
        The season has already shown what that does to a scoreline. Adam Swartzfager famously played a
        whole game solo in the 2026 opener and won. More recently, four players combined for eleven points
        in a game where nobody scored above one point. In 1v1 the margins get thinner still.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Field
      </h2>
      <p>
        The plan is a bracket of about eight, drawn from the league&apos;s best. Nothing is locked yet —
        the field, the seeding and the format are still being settled, and anyone on the{" "}
        <Link href="/stats" className="text-ndl-accent hover:underline">
          stats page
        </Link>{" "}
        with a case to make has two weeks to make it.
      </p>
      <p>
        One name worth watching: Swartzfager has scored more than twice as many points as anyone else this
        season and has already proven he can win a game without help. One name worth doubting nobody:
        Jaxon Gladhart won All-Star MVP on a broken toe.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        October 31
      </h2>
      <p>
        Halloween, at the dooramp. The tournament is on the{" "}
        <Link href="/schedule" className="text-ndl-accent hover:underline">
          schedule
        </Link>
        , and tip-off time will be added once it is set. Bracket to follow.
      </p>
    </ArticleLayout>
  );
}
