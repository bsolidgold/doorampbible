"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeader } from "@/components/ndl/SectionHeader";

const records = [
  { category: "Points", value: "30", holder: "Adam Swarzfager" },
  { category: "Assists", value: "2", holder: "Jack Baker" },
  { category: "Rebounds", value: "3", holder: "Adam Swarzfager" },
  { category: "Blocks / Steals", value: "8", holder: "Adam Swarzfager" },
];

export function RecordsSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mb-12">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between group"
      >
        <SectionHeader
          title="Records"
          subtitle="All-time single-game records in NDL history."
        />
        <span className="text-ndl-muted mb-6 ml-2 flex-shrink-0">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {records.map(({ category, value, holder }) => (
            <div
              key={category}
              className="bg-ndl-secondary border border-ndl-surface rounded-lg p-4 flex flex-col gap-1"
            >
              <div className="text-[10px] font-bold text-ndl-muted uppercase tracking-widest">{category}</div>
              <div className="font-heading font-black text-4xl text-ndl-accent leading-none">{value}</div>
              <div className="text-xs text-ndl-text font-semibold mt-1">{holder}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
