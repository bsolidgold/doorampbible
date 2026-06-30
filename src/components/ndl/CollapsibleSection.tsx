"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeader } from "@/components/ndl/SectionHeader";

interface CollapsibleSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function CollapsibleSection({ title, subtitle, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="mb-12">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between"
      >
        <SectionHeader title={title} subtitle={subtitle} />
        <span className="text-ndl-muted mb-6 ml-2 flex-shrink-0">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {open && children}
    </section>
  );
}
