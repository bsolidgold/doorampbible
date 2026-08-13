"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { CollapsibleSection } from "@/components/ndl/CollapsibleSection";
import { RuleTree } from "@/components/ndl/RuleTree";
import { RuleSection, RuleSubsection, RuleNode, currentRules, ruleHistory } from "@/data/rules";

function filterNodes(nodes: RuleNode[], q: string): RuleNode[] {
  const result: RuleNode[] = [];
  for (const node of nodes) {
    const selfMatch = node.text.toLowerCase().includes(q);
    const filteredChildren = node.children ? filterNodes(node.children, q) : [];
    if (selfMatch || filteredChildren.length > 0) {
      result.push({
        text: node.text,
        children: filteredChildren.length > 0 ? filteredChildren : undefined,
      });
    }
  }
  return result;
}

function filterSubsection(sub: RuleSubsection, q: string): RuleSubsection | null {
  const introMatch = sub.intro?.toLowerCase().includes(q) ?? false;
  const filteredItems = filterNodes(sub.items, q);
  if (!introMatch && filteredItems.length === 0) return null;
  return { ...sub, items: filteredItems };
}

function filterSection(section: RuleSection, q: string): RuleSection | null {
  const introMatch = section.intro?.toLowerCase().includes(q) ?? false;
  const filteredSubs = section.subsections
    .map((sub) => filterSubsection(sub, q))
    .filter((s): s is RuleSubsection => s !== null);
  if (!introMatch && filteredSubs.length === 0) return null;
  return { ...section, subsections: filteredSubs };
}

function countMatches(sections: RuleSection[]): number {
  let count = 0;
  function walk(nodes: RuleNode[]) {
    for (const node of nodes) {
      count += 1;
      if (node.children) walk(node.children);
    }
  }
  for (const section of sections) {
    for (const sub of section.subsections) {
      if (sub.intro) count += 1;
      walk(sub.items);
    }
  }
  return count;
}

function RuleSectionBlock({
  section,
  defaultOpen,
  query,
}: {
  section: RuleSection;
  defaultOpen?: boolean;
  query?: string;
}) {
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
            {sub.items.length > 0 && <RuleTree items={sub.items} query={query} />}
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}

export function RulesBrowser() {
  const [query, setQuery] = useState("");
  const isSearching = query.trim().length > 0;
  const q = query.trim().toLowerCase();

  const filteredCurrent = useMemo(() => {
    if (!isSearching) return [];
    return currentRules
      .map((section) => filterSection(section, q))
      .filter((s): s is RuleSection => s !== null);
  }, [isSearching, q]);

  const filteredHistory = useMemo(() => {
    if (!isSearching) return [];
    return ruleHistory
      .map((section) => filterSection(section, q))
      .filter((s): s is RuleSection => s !== null);
  }, [isSearching, q]);

  const totalMatches = countMatches(filteredCurrent) + countMatches(filteredHistory);

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
        <>
          <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-4">
            {totalMatches} matching rule{totalMatches === 1 ? "" : "s"}
          </p>
          {totalMatches === 0 ? (
            <p className="text-ndl-muted text-sm">No rules matched your search.</p>
          ) : (
            <>
              {filteredCurrent.length > 0 && (
                <section className="mb-2">
                  <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-4">
                    Current Rules
                  </p>
                  {filteredCurrent.map((section) => (
                    <RuleSectionBlock key={section.id} section={section} defaultOpen query={query} />
                  ))}
                </section>
              )}

              {filteredHistory.length > 0 && (
                <section>
                  <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-4">
                    Rule History
                  </p>
                  {filteredHistory.map((section) => (
                    <RuleSectionBlock key={section.id} section={section} defaultOpen query={query} />
                  ))}
                </section>
              )}
            </>
          )}
        </>
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
