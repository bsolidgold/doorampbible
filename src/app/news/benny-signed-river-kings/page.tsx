import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Benny Buckets Signs With River Kings — NDL Dooramp" };

export default function BennySignedRiverKingsPage() {
  return (
    <ArticleLayout
      title="It's Official — Benny Buckets Signs With the River Kings"
      date="July 22, 2026"
      image="/images/news/benny-river-kings-signing.jpg"
      imageAlt="Ashton Anderegg and Benny Buckets shake hands to seal the deal"
    >
      <p>
        The NDL free agency period came to a swift close on Tuesday as River Kings captain Ashton Anderegg
        officially signed Benny Buckets, ending one of the most dramatic roster sagas in league history.
        The two sealed the deal with a handshake outside the dome — a moment that signals a new era for
        the River Kings and a fresh start for the former Murray Mice sharpshooter.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Ashton Makes His Move
      </h2>
      <p>
        River Kings captain Ashton Anderegg wasted no time once Benny hit the open market. After a
        back-to-back losing start to the season, Ashton identified Benny as the missing piece — a
        proven scorer with the composure to perform in clutch moments. Negotiations were reportedly
        quick, with Benny choosing the River Kings over multiple competing offers from around the league.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Benny Speaks
      </h2>
      <p>
        "Ashton came to me with a real vision," Benny said after the signing. "He showed me how I fit
        into this team and what we can build together. After everything that went down with the Murray
        Mice, I needed a fresh start with a captain who believes in me. River Kings felt right."
        Benny is expected to slot in immediately and see significant playing time.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What This Means for the River Kings
      </h2>
      <p>
        The River Kings enter the second half of the 2026 season with renewed firepower. Ashton Anderegg
        leads the league in scoring, Eli Huntsman anchors the defense with the most blocks in the NDL,
        and now Benny Buckets adds another scoring threat that opponents cannot afford to ignore.
        The roster is deep, the chemistry is building, and the River Kings are quietly becoming the
        team to beat.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Murray Mice React
      </h2>
      <p>
        The Murray Mice, who lost Benny just days after Adam Swarzfager's dominant solo performance in
        Game 1, now face questions about roster depth heading deeper into the season. Captain Adam
        Swarzfager has not publicly responded to the signing. The league will be watching closely when
        the River Kings and Murray Mice face off later in the 2026 schedule.
      </p>
    </ArticleLayout>
  );
}
