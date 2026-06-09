import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Breaking: Ben Martinsen is Poopy — NDL Dooramp" };

export default function BenMartinsenPoopyPage() {
  return (
    <ArticleLayout
      title="Breaking: Ben Martinsen is Poopy"
      date="June 9, 2026"
      image="/images/ben-martinsen.jpg"
      imageAlt="Ben Martinsen, confirmed poopy"
      backHref="/news"
      backLabel="← Back to News"
    >
      <p>
        In a bombshell report that has sent shockwaves through the National Dooramp League,
        multiple highly placed sources within the NDL inner circle have come forward to confirm
        what many have long suspected: Ben Martinsen is, without question, poopy.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Allegations
      </h2>
      <p>
        Witnesses describe a pattern of behavior consistent with someone who is extremely poopy.
        Sources, who asked to remain anonymous out of fear of retribution, described Ben as
        &quot;very poopy,&quot; &quot;arguably the poopiest person in the NDL,&quot; and in one
        particularly damning account, &quot;poopy beyond all reasonable measure.&quot;
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        League Response
      </h2>
      <p>
        NDL Commissioner&apos;s office released a brief statement acknowledging the reports:
        &quot;We are aware of the allegations regarding Ben Martinsen&apos;s poopiness. We take
        all claims of poopiness seriously and will be conducting a full review.&quot;
      </p>
      <p>
        When reached for comment, Ben Martinsen reportedly said nothing, which sources
        interpreted as a tacit confirmation of his poopiness.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What This Means for the Season
      </h2>
      <p>
        Analysts are divided on whether Ben&apos;s poopiness will affect his on-court performance,
        though most agree that being this poopy is rarely a competitive advantage. His team,
        if he is on one, could not be reached for comment.
      </p>
      <p>
        This is a developing story. The NDL will provide updates as the poopiness situation unfolds.
      </p>
    </ArticleLayout>
  );
}
