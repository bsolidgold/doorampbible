import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "National Doo League" };

export default function NationalDooLeaguePage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <Image
        src="/logos/dooSilhouette.png"
        alt="NDL Logo"
        width={80}
        height={80}
        className="opacity-60 mb-6"
      />
      <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-widest text-ndl-text mb-2">
        National <span className="text-ndl-accent">Doo</span> League
      </h1>
      <p className="text-ndl-muted text-base mb-6">nationaldooleague.com — Coming soon.</p>
      <Link
        href="/"
        className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted hover:text-ndl-accent transition-colors"
      >
        ← Dooramp Bible
      </Link>
    </div>
  );
}
