import { RuleNode } from "@/data/rules";

function toAlpha(n: number): string {
  // 0 -> a, 1 -> b, ... 25 -> z, 26 -> aa, ...
  let s = "";
  n += 1;
  while (n > 0) {
    const rem = (n - 1) % 26;
    s = String.fromCharCode(97 + rem) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

function toRoman(n: number): string {
  // 0-indexed -> lowercase roman numeral, 1-based
  const values: [number, string][] = [
    [1000, "m"], [900, "cm"], [500, "d"], [400, "cd"],
    [100, "c"], [90, "xc"], [50, "l"], [40, "xl"],
    [10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"],
  ];
  let num = n + 1;
  let result = "";
  for (const [value, symbol] of values) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

function marker(index: number, depth: number): string {
  if (depth === 0) return `${toAlpha(index)})`;
  if (depth === 1) return `${toRoman(index)})`;
  return `${index + 1})`;
}

export function RuleTree({ items, depth = 0 }: { items: RuleNode[]; depth?: number }) {
  return (
    <ol className={depth === 0 ? "space-y-2" : "mt-1.5 space-y-1.5"}>
      {items.map((item, i) => (
        <li key={i} className="flex text-ndl-muted text-sm leading-relaxed" style={{ marginLeft: depth * 20 }}>
          <span className={`shrink-0 w-7 font-semibold ${depth === 0 ? "text-ndl-accent" : "text-ndl-muted"}`}>
            {marker(i, depth)}
          </span>
          <span className="flex-1">
            <span className={depth === 0 ? "text-ndl-text" : ""}>{item.text}</span>
            {item.children && item.children.length > 0 && (
              <RuleTree items={item.children} depth={depth + 1} />
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
