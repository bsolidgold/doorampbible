import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Adam Swarzfager Hits Back-to-Back Threes — A Dooramp First — NDL Dooramp" };

export default function AdamSwarzfagerBackToBackThreesPage() {
  return (
    <ArticleLayout
      title="Adam Swarzfager Hits Back-to-Back Threes — A Dooramp First"
      date="August 8, 2026"
    >
      <p>
        Buried inside the Murray Mice&apos;s 12-2 rout of the Freaky Fredholers in Game 6 was a moment that will
        outlast the final score. In the 4th quarter, captain Adam Swarzfager drilled two three-pointers in a
        row — the first time in dooramp history that any player has hit back-to-back threes.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Historic Sequence
      </h2>
      <p>
        Three-pointers are the hardest shot in the sport, and stringing two together in the same quarter had
        never been done before Swarzfager did it in the 4th. It capped an 11-point night for him, as he
        finished the game 5-for-7 on one-pointers and 2-for-13 from three, accounting for 11 of the Murray
        Mice&apos;s 12 points in the win.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Three on the Day
      </h2>
      <p>
        The back-to-back makes were also part of a rare three-point outburst for Swarzfager across his two
        games on August 8. He connected on a three-pointer earlier in the day in Game 5 against the River
        Kings, then added the two straight in Game 6 — three total makes from deep in a single day, itself an
        exceedingly uncommon feat in the NDL.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Moment for the Record Books
      </h2>
      <p>
        Game recaps will fade, but back-to-back threes are a first that will be pointed to for years. For a
        league still writing its early history, Swarzfager now owns a distinction no one else can claim.
      </p>
    </ArticleLayout>
  );
}
