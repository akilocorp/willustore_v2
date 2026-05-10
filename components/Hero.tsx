"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeroGlobe = dynamic(() => import("./HeroGlobe"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        Loading network…
      </span>
    </div>
  ),
});

const stats = [
  { value: "2.4M", label: "devices online" },
  { value: "8.1 PB", label: "vectors stored" },
  { value: "93%", label: "cheaper than AWS" },
];

export default function Hero() {
  const [count, setCount] = useState(2_408_221);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((n) => n + Math.floor(Math.random() * 4) + 1);
    }, 110);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="paper-grain relative bg-cream pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-10">
        {/* Left column */}
        <div className="lg:col-span-7">
          <div className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-terracotta live-dot" />
            </span>
            <span>Decentralized vector storage · Live network</span>
          </div>

          <h1 className="text-balance text-[clamp(40px,6vw,76px)] leading-[1.02] tracking-[-0.015em] text-ink font-normal">
            <span className="font-sans font-medium">AI memory</span>{" "}
            <span className="serif-italic text-green">lives</span>{" "}
            <span className="font-sans font-medium">on phones</span>{" "}
            <span className="font-sans font-medium text-muted line-through decoration-muted/60 decoration-[1.5px]">
              in datacenters
            </span>
            <span className="font-sans font-medium">, not in datacenters.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[17px] leading-[1.55] text-muted">
            Willustore turns the idle gigabytes on phones around the world into
            a global vector database. Companies upload their data; any AI model
            answers from it. The storage layer is owned by everyone — and the
            people sharing space get paid.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-cream transition-colors hover:bg-ink-soft"
            >
              Start storing
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-transparent px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-cream-warm"
            >
              See how it works
            </a>
          </div>

          <dl className="mt-12 grid max-w-[520px] grid-cols-3 gap-6 border-t border-hairline pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {s.label}
                </dt>
                <dd className="mt-1.5 text-[22px] font-medium tracking-tight text-ink">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — phone-globe card (R3F placeholder) */}
        <div className="lg:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-hairline bg-cream-warm">
            {/* Dotted grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(10,10,10,0.18) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            {/* Soft green vignette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(168,224,191,0.18), rgba(244,242,236,0) 70%)",
              }}
            />

            {/* R3F phone-globe scene */}
            <div className="absolute inset-0">
              <HeroGlobe />
            </div>

            {/* Network counter */}
            <div className="absolute right-4 top-4 text-right">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Network
              </div>
              <div
                className="mt-1 font-mono text-[18px] font-medium tabular-nums text-ink"
                aria-live="polite"
              >
                {count.toLocaleString("en-US")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
