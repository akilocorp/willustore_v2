"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl font-semibold text-brand-navy tracking-tight"
        >
          Willustore
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#providers" className="hover:text-brand-navy transition-colors">
            Providers
          </a>
          <a href="#businesses" className="hover:text-brand-navy transition-colors">
            Businesses
          </a>
          <a href="#how" className="hover:text-brand-navy transition-colors">
            How it works
          </a>
          <a
            href="#waitlist"
            className="bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-2 rounded-full font-medium transition-colors"
          >
            Join waitlist
          </a>
        </nav>
        <a
          href="#waitlist"
          className="md:hidden bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          Join
        </a>
      </div>
    </header>
  );
}
