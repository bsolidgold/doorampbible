import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "Zachary Armijo Is Back, and He Wants the BDT's — NDL Dooramp",
};

export default function ZacharyArmijoReturnsPage() {
  return (
    <ArticleLayout
      title="Zachary Armijo Is Back, and He Wants the BDT's"
      date="October 5, 2026"
      image="/images/news/zachary-armijo-returns.jpg"
      imageAlt="Zachary Armijo"
    >
      <p>
        Zachary Armijo broke his kneecap early this year. He is back on his feet, back in the league, and
        he has told anyone who will listen exactly where he wants to end up: the BDT&apos;s.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        A Season Spent Watching
      </h2>
      <p>
        A broken kneecap is about the worst injury a dooramp player can take. This is a sport built on
        jumping — you cannot legally hold the ball while touching the ground, which means every possession
        of every game is spent in the air. There is no version of dooramp you can play at walking pace.
        Armijo&apos;s season ended the moment the injury happened, and it never restarted. He finishes 2026
        with zero games played.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Back on the List
      </h2>
      <p>
        Armijo now returns to the{" "}
        <Link href="/stats" className="text-ndl-accent hover:underline">
          free agent pool
        </Link>
        , joining Emmett Allphin and Lydia Wild. Any of the league&apos;s captains can sign him, and two of
        them have already shown this season that they will move on the open market — the Freaky Fredholers
        took Archer Rugh in September, and David Anderegg pulled Aiden Shipp onto the BDT&apos;s days later.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Why the BDT&apos;s
      </h2>
      <p>
        Armijo has made no secret of his target. Anderegg&apos;s roster — himself, Atlee Gallagher, Devin
        Murray and Shipp — sits at 1&ndash;2 after a triple-overtime loss to the Murray Mice they had every
        right to win. It is a team one piece short, and a captain who has already proven he will go to free
        agency to find that piece.
      </p>
      <p>
        Whether Anderegg bites is another question. He spent his last signing on a player who had never
        logged an NDL game either, and that one paid off inside a week.
      </p>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Harder Question
      </h2>
      <p>
        Coming back from a broken kneecap is not the same as coming back to form. Armijo has no NDL tape to
        point at, no stat line to argue with, and a knee that has been through something serious in a sport
        that lands on it constantly. The league will find out what he has the first time he steps on the
        tramp.
      </p>
      <p>
        That he wants to is already the story.
      </p>
    </ArticleLayout>
  );
}
