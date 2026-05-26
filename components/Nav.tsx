"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        "backdrop-blur-md",
        scrolled
          ? "bg-cream/85 border-b border-hairline"
          : "bg-cream/60 border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-tight text-ink"
          aria-label="Willustore home"
        >
          <span className="relative inline-flex h-2 w-2 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-green" />
            <span className="absolute inset-0 rounded-full bg-green-bright/70 live-dot" />
          </span>
          <span>willustore</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[14px] transition-colors hover:text-ink ${
                  pathname === l.href ? "text-ink font-medium" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#cta"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-cream transition-colors hover:bg-ink-soft"
          >
            Join the Waitlist
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          <button
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-cream text-ink"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              {menuOpen ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-hairline bg-cream/95 backdrop-blur-md px-6 py-4">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block text-[15px] text-muted transition-colors hover:text-ink py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
