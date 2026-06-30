import type { Metadata } from "next";
import Image from "next/image";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Bret Gold Issues 2v1 Challenge — NDL",
};

export default function BretGoldChallengePage() {
  return (
    <ArticleLayout
      title={`Bret Gold Issues 2v1 Challenge — "Beat Me and I'll Let You Quit"`}
      date="May 28, 2026"
    >
      <p>
        In a stunning development, former 90s pro dooramper <strong className="text-ndl-text">Bret Gold</strong> has
        issued a direct challenge to retirees <strong className="text-ndl-text">Owen Buckwalter</strong> and{" "}
        <strong className="text-ndl-text">Max M</strong>: face him in a 2v1 match, and if they win, he will formally
        accept their retirements. Gold, known for his dominant run in the early dooramp era, reportedly made the
        challenge public just days after Owen&apos;s retirement announcement.
      </p>

      <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden my-6">
        <Image
          src="/images/news/owen-bret-retirement.png"
          alt="Owen Buckwalter and Bret Gold"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Challenge
      </h2>
      <p>
        &ldquo;You don&apos;t get to walk away like that,&rdquo; Gold is said to have stated. &ldquo;Earn it.&rdquo; No
        match date has been confirmed.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Background
      </h2>
      <p>
        Owen Buckwalter&apos;s retirement, announced just one week before the season opener, sent shockwaves through the
        NDL community. Gold, who came out of retirement himself several years ago, has never been known to let a rivalry
        end quietly.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What&apos;s Next
      </h2>
      <p>
        The NDL has yet to officially acknowledge the challenge. Sources close to the league suggest the match, if it
        happens, could be one of the most-watched events in dooramp history.
      </p>
    </ArticleLayout>
  );
}
