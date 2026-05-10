"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "How it works", href: "#story" },
  { label: "Why us", href: "#comparison" },
  { label: "Docs", href: "#docs" },
  { label: "Network", href: "#network" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
        <a
          href="#"
          className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-tight text-ink"
          aria-label="Willustore home"
        >
          <span className="relative inline-flex h-2 w-2 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-green" />
            <span className="absolute inset-0 rounded-full bg-green-bright/70 live-dot" />
          </span>
          <span>willustore</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14px] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-cream transition-colors hover:bg-ink-soft"
        >
          Request access
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </nav>
  );
}
