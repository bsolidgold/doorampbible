import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "The NDL is here — NDL Dooramp" };

export default function NdlLaunchesPage() {
  return (
    <ArticleLayout title="The NDL is here." date="2026">
      <p>
        The National Dooramp League officially launches online. This is the beginning of something new — a home for
        the world&apos;s greatest sport.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What&apos;s Here
      </h2>
      <p>
        The Dooramp Bible is your hub for everything NDL:{" "}
        <Link href="/rules" className="text-ndl-accent hover:underline">official rules</Link>,{" "}
        <Link href="/history" className="text-ndl-accent hover:underline">league history</Link>, and{" "}
        <Link href="/stats" className="text-ndl-accent hover:underline">player statistics</Link>.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        What&apos;s Coming
      </h2>
      <p>
        Stay tuned for live match results, standings updates, player profiles, and eventually — the Winterdome.
      </p>
    </ArticleLayout>
  );
}
