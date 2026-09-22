import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Mice Beat Titans in Jameson Bench's Debut — NDL Dooramp",
};

export default function Game10MiceTitansPage() {
  return (
    <ArticleLayout
      title="Swartzfager Scores All 10 as Mice Beat Titans in Rookie Jameson Bench's Debut"
      date="September 20, 2026"
    >
      <p>
        The third and final game of Sunday was a scorers&apos; duel between two captains.{" "}
        <strong className="text-ndl-text">Adam Swartzfager</strong> scored every one of the Murray
        Mice&apos;s points, and the Mice beat the Trampoline Titans 10-7. Titans rookie{" "}
        <strong className="text-ndl-text">Jameson Bench</strong> made his NDL debut in the loss.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Swaggy Swartz Does It Alone
      </h2>
      <p>
        Swartzfager went 10-of-15 from the one-point line, a 67% clip and his most efficient game of the
        day. He added 2 blocks and steals. He went 0-for-3 from deep, but the ones were enough. Frank
        Patrone went 0-for-2 and chipped in an assist. It was Swartzfager&apos;s second 10-point game of
        the day, after his 10 points in the double-overtime win over the River Kings. The Mice finish
        Sunday 2-0 and improve to 6-1, still first in the standings.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Finn Carries the Load Again
      </h2>
      <p>
        One game after scoring all 14 Titans points in his return from injury,{" "}
        <strong className="text-ndl-text">Finn Anderegg</strong> scored all 7 this time. He went 6-of-11
        from the one-point line, made 1 of 2 free throws, and added 2 blocks and steals. The Titans split
        their two games on Sunday and fall to 1-2.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Tough Debut for Jameson Bench
      </h2>
      <p>
        Jameson Bench&apos;s first NDL game was a learning experience. He went 0-for-6 on ones, 0-for-8
        from three, and 0-for-1 at the line. He wasn&apos;t shy about shooting, though. His 15 attempts
        were the most on the Titans, and the rookie now has his first game under his belt.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Box Score Highlights
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Adam Swartzfager (MM): 10 PTS, 10/15 1PT, 0/3 3PT, 2 BLK/STL</li>
        <li>Frank Patrone (MM): 0/2 1PT, 1 AST</li>
        <li>Finn Anderegg (TT): 7 PTS, 6/11 1PT, 0/1 3PT, 1/2 FT, 2 BLK/STL</li>
        <li>Jameson Bench (TT): NDL debut, 0/6 1PT, 0/8 3PT, 0/1 FT</li>
      </ul>
    </ArticleLayout>
  );
}
