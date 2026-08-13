import { ruleChangelog } from "@/data/ruleChangelog";

export function RuleArchive() {
  return (
    <div className="space-y-3">
      {ruleChangelog.map((entry) => (
        <div
          key={`${entry.date}-${entry.title}`}
          className="bg-ndl-secondary border border-ndl-surface rounded-lg p-4"
        >
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-ndl-muted mb-1">
            {entry.date}
          </div>
          <div className="font-heading font-bold text-ndl-text mb-1">
            {entry.title}
          </div>
          <p className="text-ndl-muted text-sm leading-relaxed">
            {entry.description}
          </p>
        </div>
      ))}
    </div>
  );
}
