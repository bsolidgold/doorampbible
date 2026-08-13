export interface RuleChangeEntry {
  date: string;
  title: string;
  description: string;
}

export const ruleChangelog: RuleChangeEntry[] = [
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
