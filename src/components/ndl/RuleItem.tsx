import { ReactNode } from "react";

interface RuleItemProps {
  title: string;
  body: string;
  variant?: "gold" | "accent";
  badge?: ReactNode;
}

export function RuleItem({ title, body, variant = "gold", badge }: RuleItemProps) {
  const borderColor = variant === "gold" ? "border-ndl-gold" : "border-ndl-accent";

  return (
    <div
      className={`bg-ndl-secondary rounded-lg p-5 border-l-4 ${borderColor} flex flex-col gap-2`}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-heading font-bold text-base uppercase tracking-wide text-ndl-text">
          {title}
        </h3>
        {badge}
      </div>
      <p className="text-ndl-muted text-sm leading-relaxed">{body}</p>
    </div>
  );
}
