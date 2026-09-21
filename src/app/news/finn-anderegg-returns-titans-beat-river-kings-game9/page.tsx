import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Finn Anderegg Returns, Titans Beat River Kings — NDL Dooramp",
};

export default function Game9FinnReturnPage() {
  return (
    <ArticleLayout
      title="Finn Anderegg Returns From Injury With 14 Points as Titans Top River Kings"
      date="September 20, 2026"
    >
      <p>
        <strong className="text-ndl-text">Finn Anderegg</strong> is back. Trampoline Titans captain Finn
        Anderegg returned from the UCL tear that has kept him out since before the season began. He scored
        all 14 of his team&apos;s points, and the Titans beat the River Kings 14-11 for their first win of
        2026.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Comeback Worth the Wait
      </h2>
      <p>
        Finn tore his UCL playing baseball in May. The injury kept him out of the regular season and the
        All-Star Game, and nobody knew how much of his game would come back with him. The answer was all of
        it. He went 14-of-22 from the one-point line, a 64% clip, and added 3 blocks and steals and a
        rebound. He did not attempt a single two or three. He took the high-percentage shot every time, and
        it worked.
      </p>
      <p>
        That was his team&apos;s entire offense. Ben Hoag went 0-for-4 but helped in other ways, with 2
        assists and 2 blocks and steals. On the scoresheet, though, this was Finn&apos;s game. The Titans
        improve to 1-1.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Jack Baker&apos;s Career Night
      </h2>
      <p>
        The loss shouldn&apos;t hide the best game of <strong className="text-ndl-text">Jack Baker</strong>
        &apos;s career. Earlier that day he had gone 1-of-11 in the double-overtime loss to the Murray
        Mice, and his previous best was 2 points. Against the Titans he went 8-of-16 for 8 points, a
        career high by a wide margin. He also added 4 blocks and steals and an assist. He was the River Kings&apos; leading scorer
        and kept them in the game until the end.
      </p>
      <p>
        Ashton Anderegg added 3 points, a one and a two, plus 3 blocks and steals. The River Kings lost both
        of their games on Sunday and fall to 2-5.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Box Score Highlights
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Finn Anderegg (TT): 14 PTS, 14/22 1PT, 3 BLK/STL, 1 REB</li>
        <li>Ben Hoag (TT): 0/4 1PT, 2 AST, 2 BLK/STL</li>
        <li>Jack Baker (RK): 8 PTS (career high), 8/16 1PT, 4 BLK/STL, 1 AST</li>
        <li>Ashton Anderegg (RK): 3 PTS, 1/4 1PT, 1/1 2PT, 0/1 3PT, 3 BLK/STL</li>
      </ul>
    </ArticleLayout>
  );
}
