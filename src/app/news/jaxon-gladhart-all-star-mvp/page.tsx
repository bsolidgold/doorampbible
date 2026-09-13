import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = { title: "The Most Controversial MVP in Dooramp History — NDL Dooramp" };

export default function JaxonGladhartAllStarMvpPage() {
  return (
    <ArticleLayout
      title="The Most Controversial MVP in Dooramp History"
      date="September 12, 2026"
    >
      <p>
        Jaxon Gladhart was voted into the All-Star Game by the fans. What nobody voted for was the afternoon he
        actually had: a quarter for one team, a quarter for the other, a point scored for each of them, every
        shot from beyond the arc missed, and the Most Valuable Player award at the end of it. The league has
        never handed out a trophy that started an argument this fast.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Case Against
      </h2>
      <p>
        Start with the box score, because that is where every objection starts. Gladhart finished with 2 points
        on 2-of-7 from the one-point line and 0-for-5 from three — 2-of-12 from the floor overall, the worst
        shooting percentage of anyone who attempted a shot. He added one assist, 2 blocks/steals and 2 rebounds
        across his two quarters of work.
      </p>
      <p>
        Now put that next to Adam Swartzfager. Swartzfager scored 5 points, more than double Gladhart&apos;s
        output. He led all players with 3 assists. He tied for the game high with 6 blocks/steals. And he hit
        the single most memorable shot of the afternoon, a buzzer-beating three at the end of the second quarter
        that put his team ahead going into the half — a three-pointer that, in an 8-7 final, was the difference
        in the game. He beat Gladhart in points, assists, shooting percentage and highlights, and he did it on
        the winning side.
      </p>
      <p>
        And there is the part that genuinely has no precedent: Gladhart scored for both teams. One of his two
        points went into Adam&apos;s Team&apos;s 8. The other went into David&apos;s Team&apos;s 7. The MVP of a
        one-point game contributed equally to both ends of it. Remove him from the afternoon entirely and the
        result is unchanged — 7-6, same winner, same margin. Critics have pointed out, not unreasonably, that it
        is difficult to be the most valuable player in a game your presence did not decide.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Case For
      </h2>
      <p>
        The defense does not rest on the numbers, and nobody making it pretends otherwise.
      </p>
      <p>
        When Ben Hoag failed to show up, the All-Star Game was one player short of a fair fight. Somebody was
        going to have to play four-on-three, or somebody was going to have to split. Gladhart volunteered to
        split, taking a quarter on each bench so that neither side had to play the league&apos;s showcase game
        down a man. He did it on a broken toe. He was, by any honest accounting, the reason the 2026 All-Star
        Game held together as a real contest.
      </p>
      <p>
        That is the argument: that value is not only what the columns record. A player who absorbs a roster
        crisis, plays for both teams to keep the game whole, and does it on a broken foot has done something for
        the occasion that a 5-point, 3-assist afternoon does not quite capture. His two quarters still produced
        2 rebounds and 2 blocks/steals on a toe that should have kept him off the floor entirely.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        An Award With No Precedent
      </h2>
      <p>
        Both readings are defensible, which is exactly why this will not settle. If the All-Star MVP is a
        performance award, it belonged to Swartzfager and it is not especially close. If it is an award for what
        a player gave to the occasion, Gladhart has a claim nobody else on the floor can make.
      </p>
      <p>
        What is not in dispute is the accolade itself. Jaxon Gladhart is the 2026 All-Star Game MVP, and the
        first player in dooramp history to be named most valuable in a game he played for both teams. The
        record book will show the trophy. It will also show 2-of-12. Readers are invited to reconcile them.
      </p>
    </ArticleLayout>
  );
}
