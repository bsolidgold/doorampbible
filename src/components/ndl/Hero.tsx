import Image from "next/image";

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden py-20 sm:py-28 flex flex-col items-center justify-center text-center px-4">
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex flex-col items-center gap-6">
        {/* Pulse ring behind logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-ndl-accent/10 pulse-ring scale-150" />
          <Image
            src="/logos/dooSilhouette.png"
            alt="NDL Logo"
            width={100}
            height={100}
            className="relative drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            priority
          />
        </div>

        <div>
          <h1 className="font-heading font-black text-5xl sm:text-7xl uppercase tracking-widest text-ndl-text leading-none">
            The{" "}
            <span className="text-ndl-accent drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]">
              Dooramp
            </span>{" "}
            Bible
          </h1>
          <p className="mt-4 text-ndl-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            The official home of the National Dooramp League. News, rules, history, and everything dooramp.
          </p>
        </div>
      </div>
    </section>
  );
}
