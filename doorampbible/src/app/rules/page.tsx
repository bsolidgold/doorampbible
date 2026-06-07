import type { Metadata } from "next";
import { SectionHeader } from "@/components/ndl/SectionHeader";
import { RuleItem } from "@/components/ndl/RuleItem";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Rules — NDL Dooramp" };

export default function RulesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text">
          Official Rules
        </h1>
        <p className="mt-2 text-ndl-muted text-sm leading-relaxed">
          The complete ruleset governing competitive dooramp. Subject to revision by the NDL Rules Committee.
        </p>
      </div>

      {/* Current Rules */}
      <section className="mb-12">
        <SectionHeader title="Current Rules" subtitle="Full ruleset coming soon." />
      </section>

      {/* Coming into 2026 */}
      <section className="mb-12">
        <SectionHeader title="Coming into 2026" subtitle="New and updated rules for the 2026 season." />
        <div className="space-y-3">
          <RuleItem
            title="3-Pointer Off the Dome Stays Live"
            body="If a 3-point shot hits the dome and comes back into play, it is still considered live. Players may attempt to score off the rebound as normal."
            badge={<Badge variant="outline" className="text-ndl-gold border-ndl-gold text-[10px] font-heading uppercase tracking-widest">Temporary</Badge>}
          />
          <RuleItem
            title="Bounce-In Shots Count"
            body="Shots that bounce off the ground or walls before entering the basket count as valid baskets. Point value is determined by the original shot distance."
            badge={<Badge variant="outline" className="text-ndl-gold border-ndl-gold text-[10px] font-heading uppercase tracking-widest">Temporary</Badge>}
          />
          <RuleItem
            title="Free Throw Fadeaway Off Back of Trampoline"
            body="A free throw must be taken as a fadeaway shot on the back of the tramp. The shooter must release the ball mid-air and land off of the back of the tramp similar to how shooting for the ball is done."
            badge={<Badge variant="outline" className="text-ndl-gold border-ndl-gold text-[10px] font-heading uppercase tracking-widest">Temporary</Badge>}
          />
        </div>
      </section>

      {/* Rule History */}
      <section>
        <SectionHeader title="Rule History" subtitle="Historical ruleset archive coming soon." />
      </section>
    </div>
  );
}
