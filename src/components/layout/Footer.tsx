import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ndl-secondary border-t-2 border-ndl-accent mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col items-center gap-4">
        <Image
          src="/logos/dooSilhouette.png"
          alt="NDL"
          width={44}
          height={44}
          className="opacity-60"
        />
        <div className="flex gap-4">
          <Link
            href="https://youtube.com/@Doorampball"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted hover:text-ndl-accent transition-colors"
          >
            YouTube
          </Link>
          <Link
            href="https://discord.gg/YNectrQTT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-heading font-semibold uppercase tracking-widest text-ndl-muted hover:text-ndl-accent transition-colors"
          >
            Discord
          </Link>
        </div>
        <div className="flex items-center gap-3 border-t border-ndl-surface pt-4 mt-2">
          <Image
            src="/images/bret-gold.jpg"
            alt="Bret Gold"
            width={36}
            height={36}
            className="rounded-full object-cover border border-ndl-surface"
          />
          <p className="text-xs text-ndl-muted tracking-wide">
            Funded by <span className="text-ndl-text font-semibold">Bret Gold</span>
          </p>
        </div>
        <p className="text-xs text-ndl-muted tracking-wide">
          &copy; NDL &mdash; National Dooramp League
        </p>
      </div>
    </footer>
  );
}
