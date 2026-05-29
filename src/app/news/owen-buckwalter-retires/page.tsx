import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Owen Buckwalter Retires — NDL",
};

export default function OwenRetirementPage() {
  return (
    <ArticleLayout
      title="Owen Buckwalter Retires — One Week Before Season Opener"
      date="May 27, 2026"
    >
      <p>
        In a blow to the NDL community, <strong className="text-ndl-text">Owen Buckwalter</strong> has announced his
        retirement from competitive dooramp &mdash; just one week before the start of the regular season.
      </p>

      <p>
        The timing has left fans and fellow players stunned, with many calling it one of the most heartbreaking exits in
        recent NDL memory. Buckwalter offered no official statement on his reasoning.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Announcement
      </h2>
      <p>
        The league has yet to comment on how his roster spot will be handled heading into opening week.
      </p>

      <div className="my-6 rounded-lg overflow-hidden" style={{ position: "relative", paddingBottom: "56.25%" }}>
        <iframe
          src="https://www.youtube.com/embed/VizjtYraEHY"
          title="Owen Buckwalter Retirement"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Legacy
      </h2>
      <p>
        Buckwalter&apos;s departure marks the end of an era. His impact on the game — both on and off the ramp — will
        not be forgotten.
      </p>
    </ArticleLayout>
  );
}
