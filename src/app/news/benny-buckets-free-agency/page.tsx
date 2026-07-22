import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Benny Buckets Enters Free Agency — NDL Dooramp" };

export default function BennyBucketsFreeAgencyPage() {
  return (
    <ArticleLayout
      title="Benny Buckets Enters Free Agency Following Fallout With Adam Swarzfager"
      date="July 22, 2026"
      image="/images/players/benny-buckets.jpg"
      imageAlt="Benny Buckets"
    >
      <p>
        In a stunning development that has rocked the Murray Mice organization, star player Benny Buckets has
        officially entered free agency following a public falling out with team captain Adam Swarzfager.
        The split marks one of the most significant roster shakeups in the short history of the NDL.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Controversy
      </h2>
      <p>
        Tensions between Benny and Adam had been simmering for weeks behind the scenes, but things came
        to a head when the two reportedly clashed over playing time, strategy, and leadership decisions.
        Sources close to the Murray Mice describe the relationship as "completely broken down," with neither
        side willing to back down. What began as a disagreement over in-game calls escalated into a full
        organizational fracture.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Benny's Statement
      </h2>
      <p>
        Benny Buckets, known league-wide for his scoring touch and ice-cold composure under pressure, did
        not hold back. "I came here to compete at the highest level," he said. "When the leadership stops
        believing in that, you have no choice but to move on." He confirmed he is exploring all options and
        expects significant interest from multiple teams.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Adam Responds
      </h2>
      <p>
        Captain Adam Swarzfager, fresh off his dominant solo performance in the season opener, was brief in
        his response. "We wish Benny the best," he said. The Murray Mice have not yet announced plans to
        fill the roster vacancy, but league observers expect the defending-adjacent squad to move quickly
        in the free agency market.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Free Agency Implications
      </h2>
      <p>
        Benny Buckets entering the open market is the biggest free agency story the NDL has seen. With his
        shooting ability and reputation as a clutch performer, captains league-wide will be lining up.
        The Freaky Fredholers, Trampoline Titans, and River Kings have all been mentioned as possible
        destinations. One thing is certain — whoever lands Benny gets a major boost headed into the back
        half of the 2026 season.
      </p>
    </ArticleLayout>
  );
}
