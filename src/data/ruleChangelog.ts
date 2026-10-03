export interface RuleChangeEntry {
  date: string;
  title: string;
  description: string;
}

export const ruleChangelog: RuleChangeEntry[] = [
  {
    date: "October 3, 2026",
    title: "Timeouts, Substitutions and Challenges Added to Section 10",
    description:
      "Section 10 renamed from Time Keeping/Starting to Order of the Game, and two subsections added. 10.3 covers timeouts and substitutions: one timeout per team per half, callable only with possession and only between plays, with referees able to stop the clock at any time. Injury timeouts may be called mid-play, but points scored during a false injury timeout still count, and substitutions happen during timeouts and free throws. 10.4 adds challenges: a call may be challenged as soon as a play ends, teams get two incorrect challenges before losing the right, and a failed computer challenge ends challenges for the game — though a computer challenge remains available after a normal challenge is lost. Once the next play begins, the previous play can no longer be challenged.",
  },
  {
    date: "September 25, 2026",
    title: "Section 10 Added — Time Keeping/Starting",
    description:
      "First possession moved out of Section 6 into a new Section 10 (Time Keeping/Starting), and Section 6 renumbered accordingly. Quarter possession now follows the NBA pattern — the team that didn't start the game starts the 2nd and 3rd, the starting team takes the 4th — and each overtime period begins with a fresh shot for the ball that either team may take. The Ben rule was extended: Ben must inbound the ball himself, not just his team, and he starts every quarter but no overtime period. Section 9.2 also gained a clarification that a player pushed out of bounds into the goaltending zone is not goaltending, provided they immediately try to get back in bounds or out of the way.",
  },
  {
    date: "August 24, 2026",
    title: "Rule 8.1.c.i Added — Grass Clarification",
    description:
      "Added rule 8.1.c.i clarifying that grass is not considered the ground for grounding purposes. A player whose toes touch grass blades while releasing a shot is not grounded, provided they get the shot off before hitting the ground.",
  },
  {
    date: "August 13, 2026",
    title: "Free Throw Shooter Designation Added",
    description:
      "Section 5 (Free Throws) now specifies who shoots: the fouled player shoots for a personal foul, while the shooting team picks who shoots after 3 technical fouls or NPs.",
  },
  {
    date: "August 11, 2026",
    title: "Official Ruleset Published",
    description:
      "The full 9-section current ruleset, and an earlier archived version of the rules, were published to the site for the first time.",
  },
];
