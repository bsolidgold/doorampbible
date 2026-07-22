import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "Murray Mice Cut Ben Martinsen — NDL Dooramp" };

export default function BenMartinsenCutPage() {
  return (
    <ArticleLayout
      title="Released — Murray Mice Cut First-Round Pick Ben Martinsen"
      date="July 21, 2026"
    >
      <p>
        In a stunning move just days after one of the most dominant defensive performances the NDL has ever
        seen, the Murray Mice have released first-round pick Ben Martinsen. He is now a free agent.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Surprising Split
      </h2>
      <p>
        The move comes on the heels of Martinsen&apos;s 22 blocks-and-steals outburst in the Murray Mice&apos;s
        historic 40-0 win over the River Kings, a performance many assumed had cemented his spot in the
        rotation. Instead, the team cited inactivity and a lack of effort away from game days as the reasoning
        behind the release, saying Martinsen had not been putting in the work between games to match his
        billing as a first-round pick.
      </p>
      <p>
        Captain Adam Swarzfager, who has carried much of the offensive load for the Murray Mice this season,
        did not elaborate further on the decision, but the timing has raised eyebrows across the league given
        Martinsen&apos;s production on the court.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What&apos;s Next
      </h2>
      <p>
        Martinsen is now available to sign with any team in the league. Whether his on-court numbers are
        enough to convince another captain to take a chance on him remains to be seen. The NDL will be
        watching to see who, if anyone, moves to add him before the next matchup.
      </p>
    </ArticleLayout>
  );
}
