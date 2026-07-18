import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Captains Clash — Finn and Ashton Nearly Come to Blows — NDL Dooramp" };

export default function CaptainsClashGame3Page() {
  return (
    <ArticleLayout
      title="Captains Clash — Finn and Ashton Nearly Come to Blows in Game 3"
      date="July 16, 2026"
    >
      <p>
        The River Kings held off the Trampoline Titans 8–4 on Thursday, but the final score was overshadowed
        by a heated late-game altercation between the two team captains, Finn Anderegg and Ashton Anderegg,
        that briefly threatened to boil over.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Incident
      </h2>
      <p>
        With the River Kings working the ball on offense, Finn reached in and knocked the ball clean out of
        Ashton&apos;s hands in what Ashton immediately called an illegal slap. Ashton wheeled around on Finn,
        pointing and shouting, &quot;That&apos;s a tech — eject him!&quot; The two captains squared up at center
        court as teammates and onlookers scrambled to separate them before things escalated further.
      </p>
      <p>
        No punches were thrown and no ejection was issued, but the exchange brought the game to a standstill
        for several minutes and left both sidelines rattled. Play eventually resumed with the River Kings
        holding their composure to close out the win.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        On the Court
      </h2>
      <p>
        Ashton Anderegg led the River Kings with 2 one-pointers, 2 two-pointers, and 3 blocks and steals,
        while Eli Huntsman added 2 one-pointers and a team-high 4 blocks and steals. For the Trampoline Titans,
        Finn Anderegg battled through a tough shooting night at 3-for-16 from the one-point line but still
        chipped in an assist and 3 blocks and steals, and Ben Hoag added a one-pointer, 2 blocks and steals,
        and a rebound in his season debut.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        ELO Standings After Game 3
      </h2>
      <p>
        The River Kings improve to 1–2 on the season and climb to 21 ELO with the win. The Trampoline Titans
        fall to 0–1 and open their ELO account at 1 after their first game. Whether the sideline tension
        between the two captains carries over to their next meeting remains to be seen.
      </p>
    </ArticleLayout>
  );
}
