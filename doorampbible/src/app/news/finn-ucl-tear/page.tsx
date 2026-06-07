import type { Metadata } from "next";
import Image from "next/image";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Finn Anderegg Suffers Minor UCL Tear — NDL",
};

export default function FinnUCLTearPage() {
  return (
    <ArticleLayout
      title="Finn Anderegg Suffers Minor UCL Tear Ahead of 2026 Season"
      date="May 30, 2026"
    >
      <p>
        <strong className="text-ndl-text">Finn Anderegg</strong> has suffered a minor UCL tear while playing
        baseball, casting uncertainty over his readiness heading into the 2026 NDL regular season. The injury,
        which affects the ulnar collateral ligament in his throwing arm, is not considered severe but is expected
        to limit his performance until it heals fully.
      </p>

      <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden my-6">
        <Image
          src="/images/finn-ucl-injury.jpg"
          alt="Finn Anderegg down after UCL injury"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Impact on His Game
      </h2>
      <p>
        A UCL tear, even a minor one, affects arm strength, grip, and range of motion — all of which play a role
        in dooramp competition. Finn will likely need to manage his intensity carefully in early-season matches,
        avoiding strain that could worsen the tear and turn a minor setback into a major one.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Timeline
      </h2>
      <p>
        Minor UCL tears typically require several weeks of rest and rehabilitation before an athlete can return
        to full intensity. Finn is expected to play through the early portion of the season at reduced capacity,
        with a full recovery projected as the season progresses — assuming no further aggravation occurs.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Looking Ahead
      </h2>
      <p>
        The NDL and Finn&apos;s teammates are monitoring the situation closely. If managed properly, the injury
        should not sideline him entirely — but opponents may look to exploit the limitation in the early weeks
        of the season. Finn has not issued a formal statement, but sources indicate he intends to compete.
      </p>
    </ArticleLayout>
  );
}
