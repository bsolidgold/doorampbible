"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { CollapsibleSection } from "@/components/ndl/CollapsibleSection";
import { RuleTree } from "@/components/ndl/RuleTree";
import { RuleSection, RuleNode, currentRules, ruleHistory } from "@/data/rules";

interface SearchResult {
  source: "Current Rules" | "Rule History";
  sectionTitle: string;
  subsectionHeading?: string;
  text: string;
}

function collectResults(
  sections: RuleSection[],
  source: SearchResult["source"],
  query: string
): SearchResult[] {
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  function walk(nodes: RuleNode[], sectionTitle: string, subsectionHeading?: string) {
    for (const node of nodes) {
      if (node.text.toLowerCase().includes(q)) {
        results.push({ source, sectionTitle, subsectionHeading, text: node.text });
      }
      if (node.children) walk(node.children, sectionTitle, subsectionHeading);
    }
  }

  for (const section of sections) {
    if (section.intro && section.intro.toLowerCase().includes(q)) {
      results.push({ source, sectionTitle: section.title, text: section.intro });
    }
    for (const sub of section.subsections) {
      if (sub.intro && sub.intro.toLowerCase().includes(q)) {
        results.push({ source, sectionTitle: section.title, subsectionHeading: sub.heading, text: sub.intro });
      }
      walk(sub.items, section.title, sub.heading);
    }
  }

  return results;
}

function Highlighted({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-ndl-accent/30 text-ndl-text rounded px-0.5">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function RuleSectionBlock({ section, defaultOpen }: { section: RuleSection; defaultOpen?: boolean }) {
  return (
    <CollapsibleSection title={section.title} defaultOpen={defaultOpen}>
      {section.intro && (
        <p className="text-ndl-muted text-sm leading-relaxed mb-4 ml-4">{section.intro}</p>
      )}
      <div className="space-y-6 ml-4">
        {section.subsections.map((sub) => (
          <div key={sub.id}>
            {sub.heading && (
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-ndl-accent mb-2">
                {sub.heading}
              </h3>
            )}
            {sub.intro && <p className="text-ndl-muted text-sm leading-relaxed mb-2">{sub.intro}</p>}
            <RuleTree items={sub.items} />
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}

export function RulesBrowser() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return [
      ...collectResults(currentRules, "Current Rules", query),
      ...collectResults(ruleHistory, "Rule History", query),
    ];
  }, [query]);

  const isSearching = query.trim().length > 0;

  return (
    <div>
      <div className="relative mb-10">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ndl-muted pointer-events-none"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the rules — e.g. “goaltending”, “forwarding line”, “BDT”"
          className="w-full bg-ndl-secondary border border-ndl-surface rounded-lg pl-9 pr-9 py-2.5 text-sm text-ndl-text placeholder:text-ndl-muted/60 focus:outline-none focus:border-ndl-accent"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ndl-muted hover:text-ndl-text"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {isSearching ? (
        <section>
          <SectionHeader
            title="Search Results"
            subtitle={`${results.length} matching rule${results.length === 1 ? "" : "s"}`}
          />
          {results.length === 0 ? (
            <p className="text-ndl-muted text-sm">No rules matched your search.</p>
          ) : (
            <div className="space-y-3">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="bg-ndl-secondary border border-ndl-surface rounded-lg p-4"
                >
                  <p className="text-[10px] font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-1.5">
                    {r.source === "Rule History" && (
                      <span className="text-ndl-gold mr-1.5">History</span>
                    )}
                    {r.sectionTitle}
                    {r.subsectionHeading && ` — ${r.subsectionHeading}`}
                  </p>
                  <p className="text-ndl-text text-sm leading-relaxed">
                    <Highlighted text={r.text} query={query} />
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="mb-2">
            <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-4">
              Current Rules
            </p>
            {currentRules.map((section, i) => (
              <RuleSectionBlock key={section.id} section={section} defaultOpen={i === 0} />
            ))}
          </section>

          <section>
            <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-4">
              Rule History
            </p>
            <p className="text-ndl-muted text-sm mb-6">
              An earlier, simpler version of the ruleset, preserved for reference.
            </p>
            {ruleHistory.map((section) => (
              <RuleSectionBlock key={section.id} section={section} />
            ))}
          </section>
        </>
      )}
    </div>
  );
}
