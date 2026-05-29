import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: ReactNode;
}

export function SectionHeader({ title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-ndl-accent rounded-full flex-shrink-0" />
        <h2 className="font-heading font-bold text-2xl uppercase tracking-wider text-ndl-text">
          {title}
        </h2>
        {badge}
      </div>
      {subtitle && (
        <p className="mt-2 ml-4 text-ndl-muted text-sm">{subtitle}</p>
      )}
    </div>
  );
}
