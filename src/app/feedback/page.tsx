import type { Metadata } from "next";
import { GiscusComments } from "@/components/ndl/GiscusComments";

export const metadata: Metadata = { title: "Feedback — NDL Dooramp" };

export default function FeedbackPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          Feedback
        </h1>
        <p className="mt-2 text-ndl-muted text-sm leading-relaxed">
          Got something to say? Leave a comment below &mdash; rules, players, the site, anything.
        </p>
      </div>

      <GiscusComments />
    </div>
  );
}
