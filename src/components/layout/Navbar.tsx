"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rules", label: "Rules" },
  { href: "/history", label: "History" },
  { href: "/stats", label: "Stats" },
  { href: "/standings", label: "Standings" },
  { href: "/elo-calculator", label: "ELO Calc" },
  { href: "/feedback", label: "Feedback" },
  { href: "https://youtube.com/@Doorampball", label: "YouTube", external: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-ndl-accent ${
        scrolled
          ? "bg-ndl-secondary/85 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-ndl-secondary"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logos/dooSilhouette.png"
            alt="NDL Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span
            className="font-heading font-bold text-lg tracking-widest uppercase text-ndl-text group-hover:text-ndl-accent transition-colors"
          >
            <span className="text-ndl-accent">NDL</span> Dooramp
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, external }) => {
            const isActive = !external && (href === "/" ? pathname === "/" : pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`relative px-3 py-2 text-xs font-heading font-semibold uppercase tracking-widest transition-colors rounded ${
                    isActive
                      ? "text-ndl-accent"
                      : "text-ndl-muted hover:text-ndl-text"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-ndl-accent rounded-full"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-ndl-text transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ndl-text transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ndl-text transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-ndl-secondary border-t border-ndl-surface"
          >
            {navLinks.map(({ href, label, external }) => {
              const isActive = !external && (href === "/" ? pathname === "/" : pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`block px-6 py-3 text-sm font-heading font-semibold uppercase tracking-widest border-b border-ndl-surface/50 transition-colors ${
                      isActive ? "text-ndl-accent" : "text-ndl-muted hover:text-ndl-text"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
