import type { Metadata } from "next";
import Image from "next/image";
import { ArticleLayout } from "@/components/ndl/ArticleLayout";

export const metadata: Metadata = {
  title: "NDL Draft Results — NDL",
};

const rounds = [
  {
    label: "1st Round",
    picks: [
      { team: "Trampoline Titans", player: "Eros Mejia" },
      { team: "River Kings", player: "Eli Huntsman" },
      { team: "Murray Mice", player: "Ben Martinsen" },
      { team: "BDT's", player: "Atlee Gallagher" },
      { team: "Freaky Fredholers", player: "Isaac Cameron" },
    ],
  },
  {
    label: "2nd Round",
    picks: [
      { team: "Freaky Fredholers", player: "Ben Shapiro" },
      { team: "Trampoline Titans", player: "Ben Hoag" },
      { team: "River Kings", player: "Jack Baker" },
      { team: "Murray Mice", player: "Clark Sheffield" },
      { team: "BDT's", player: "Devin Murray" },
    ],
  },
  {
    label: "3rd Round",
    picks: [
      { team: "Freaky Fredholers", player: "Isaac Solemen" },
      { team: "Trampoline Titans", player: "Jameson Bench" },
      { team: "River Kings", player: "Daniel Hassan" },
      { team: "Murray Mice", player: "Jaxon Gladhart" },
      { team: "BDT's", player: "Frank Patrone" },
    ],
  },
];

const captains = [
  { name: "Grant", team: "Freaky Fredholers" },
  { name: "Finn", team: "Trampoline Titans" },
  { name: "Ashton", team: "River Kings" },
  { name: "Adam", team: "Murray Mice" },
  { name: "David", team: "BDT's" },
];

export default function DraftResultsPage() {
  return (
    <ArticleLayout
      title="NDL Draft Results — Captains Stock Their Rosters"
      date="May 31, 2026"
    >
      <p>
        The inaugural NDL draft is in the books. Five captains went pick-for-pick across three rounds to build out
        their rosters, setting the stage for the league&apos;s first season.
      </p>

      <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden my-6">
        <Image
          src="/images/news/draft-results.png"
          alt="NDL team logos"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        The Captains
      </h2>
      <ul className="space-y-1">
        {captains.map((c) => (
          <li key={c.team}>
            <strong className="text-ndl-text">{c.name}</strong> — {c.team}
          </li>
        ))}
      </ul>

      {rounds.map((round) => (
        <div key={round.label}>
          <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
            {round.label}
          </h2>
          <ul className="space-y-1">
            {round.picks.map((pick) => (
              <li key={`${round.label}-${pick.player}`}>
                <strong className="text-ndl-text">{pick.team}</strong> — {pick.player}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-ndl-text mt-6">
        Watch the Draft
      </h2>
      <p>
        Relive every pick from the full draft broadcast:{" "}
        <a
          href="https://youtu.be/XAeIk7D1qlY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ndl-accent font-heading font-semibold uppercase tracking-widest hover:underline"
        >
          Watch the Draft Video →
        </a>
      </p>
    </ArticleLayout>
  );
}
