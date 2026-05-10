"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function FinalOverlay({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    const tl = gsap.timeline();
    tl.fromTo(
      ref.current,
      { y: "100%", opacity: 0.6 },
      { y: "0%", opacity: 1, duration: 0.55, ease: "power3.out" }
    );
    return () => {
      tl.kill();
    };
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-ink px-6 text-center"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, rgba(74,157,111,0.18), rgba(10,10,10,0.98) 65%)",
      }}
      role="region"
      aria-label="Tagline"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/55">
        Willustore
      </div>
      <h2 className="mt-5 max-w-[18ch] text-balance text-[clamp(40px,7vw,108px)] leading-[0.98] tracking-[-0.02em] text-cream">
        Never pay for{" "}
        <span className="serif-italic text-green-glow">the product</span>.
        <br /> Only the storage.
      </h2>
      <a
        href="#cta"
        className="mt-9 inline-flex items-center gap-1.5 rounded-full bg-cream px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-cream-warm"
      >
        Request beta access
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
