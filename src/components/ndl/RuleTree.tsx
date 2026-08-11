import { RuleNode } from "@/data/rules";

export function RuleTree({ items, depth = 0 }: { items: RuleNode[]; depth?: number }) {
  return (
    <ol
      className={
        depth === 0
          ? "list-decimal pl-5 space-y-2 marker:text-ndl-accent marker:font-semibold"
          : "list-[lower-alpha] pl-5 mt-1.5 space-y-1.5 marker:text-ndl-muted"
      }
    >
      {items.map((item, i) => (
        <li key={i} className="text-ndl-muted text-sm leading-relaxed">
          <span className={depth === 0 ? "text-ndl-text" : ""}>{item.text}</span>
          {item.children && item.children.length > 0 && (
            <RuleTree items={item.children} depth={depth + 1} />
          )}
        </li>
      ))}
    </ol>
  );
}
