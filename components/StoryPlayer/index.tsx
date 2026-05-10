"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
} from "react";
import dynamic from "next/dynamic";
import { ensureGsap, gsap } from "@/lib/gsap";
import ChapterNav from "./ChapterNav";
import PlayPauseButton from "./PlayPauseButton";
import FinalOverlay from "./FinalOverlay";

const ChapterLoading = () => (
  <div
    aria-hidden
    className="absolute inset-x-0 top-0 z-10 h-[2px] overflow-hidden"
  >
    <span
      className="block h-full w-1/3 bg-terracotta"
      style={{ animation: "chapter-load 1.1s ease-in-out infinite" }}
    />
  </div>
);

const Chapter1Upload = dynamic(() => import("./Chapter1Upload"), {
  ssr: false,
  loading: ChapterLoading,
});
const Chapter2Vectorize = dynamic(() => import("./Chapter2Vectorize"), {
  ssr: false,
  loading: ChapterLoading,
});
const Chapter3Distribute = dynamic(() => import("./Chapter3Distribute"), {
  ssr: false,
  loading: ChapterLoading,
});
const Chapter4Retrieve = dynamic(() => import("./Chapter4Retrieve"), {
  ssr: false,
  loading: ChapterLoading,
});

export type ChapterId = 1 | 2 | 3 | 4;
export type Phase = ChapterId | "final";
export type PlayState = "playing" | "paused" | "idle";

type ChapterMeta = {
  id: ChapterId;
  label: string;
  title: string;
  subtitle: string;
  duration: number;
};

export const CHAPTERS: ChapterMeta[] = [
  {
    id: 1,
    label: "Upload your files",
    title: "Drop in everything you've ever written.",
    subtitle: "Contracts, docs, code. Any model can answer from them.",
    duration: 7,
  },
  {
    id: 2,
    label: "Become vectors",
    title: "Files become vectors.",
    subtitle: "Encrypted, sharded, ready to distribute.",
    duration: 8,
  },
  {
    id: 3,
    label: "Distributed worldwide",
    title: "Sent to a phone in Manila.",
    subtitle: "Or São Paulo. Or Lagos. A spare gigabyte, anywhere on earth.",
    duration: 10,
  },
  {
    id: 4,
    label: "Retrieved instantly",
    title: "Retrieved in a split second.",
    subtitle: "You ask. We find. The answer streams back.",
    duration: 9,
  },
];

const FINAL_DURATION = 3;

const SWIPE_THRESHOLD = 50;

function nextPhase(p: Phase): Phase {
  if (p === "final") return 1;
  if (p === 4) return "final";
  return (p + 1) as ChapterId;
}

function prevPhase(p: Phase): Phase {
  if (p === "final") return 4;
  if (p === 1) return 4;
  return (p - 1) as ChapterId;
}

export default function StoryPlayer() {
  const [phase, setPhase] = useState<Phase>(1);
  // Phase rendered in title/scene area — lags `phase` by ~250ms during transitions.
  const [displayedPhase, setDisplayedPhase] = useState<Phase>(1);
  const [playState, setPlayState] = useState<PlayState>("idle");
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const sectionRef = useRef<HTMLElement>(null!);
  const titleRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const titleTlRef = useRef<gsap.core.Timeline | null>(null);
  const navWasPlayingRef = useRef(false);
  const visibilityWasPlayingRef = useRef(false);
  const touchStartRef = useRef<number | null>(null);

  const isPlaying = playState === "playing";

  // ────────────────────────────────────────────────────────────────────────
  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ────────────────────────────────────────────────────────────────────────
  // Advance / select
  const advance = useCallback(() => setPhase((p) => nextPhase(p)), []);
  const retreat = useCallback(() => setPhase((p) => prevPhase(p)), []);
  const togglePlay = useCallback(() => {
    setPlayState((p) => (p === "playing" ? "paused" : "playing"));
  }, []);
  const goToChapter = useCallback(
    (id: ChapterId) => {
      setPhase(id);
      // First user interaction: kick into playing state.
      if (playState === "idle") setPlayState("playing");
    },
    [playState]
  );

  // ────────────────────────────────────────────────────────────────────────
  // Chapter timeline tween (drives auto-advance + progress bar).
  // We keep `isPlaying` *out* of this dependency list so toggling pause/resume
  // doesn't recreate the tween. A separate effect syncs that.
  useEffect(() => {
    setProgress(0);
    if (reducedMotion) return; // No auto-advance under reduced motion.

    const duration =
      phase === "final"
        ? FINAL_DURATION
        : CHAPTERS.find((c) => c.id === phase)!.duration;

    const obj = { p: 0 };
    const tween = gsap.to(obj, {
      p: 1,
      duration,
      ease: "none",
      paused: !isPlaying,
      onUpdate: () => setProgress(obj.p),
      onComplete: () => advance(),
    });
    tweenRef.current = tween;
    return () => {
      tween.kill();
      tweenRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, reducedMotion, advance]);

  // Sync existing tween to play/pause toggle.
  useEffect(() => {
    const tw = tweenRef.current;
    if (!tw) return;
    if (isPlaying) tw.resume();
    else tw.pause();
  }, [isPlaying]);

  // ────────────────────────────────────────────────────────────────────────
  // Title crossfade. Outgoing slides up + fades, then displayedPhase swaps,
  // then incoming slides up from below.
  useEffect(() => {
    if (phase === displayedPhase) return;
    if (reducedMotion || !titleRef.current) {
      setDisplayedPhase(phase);
      return;
    }
    titleTlRef.current?.kill();
    const target = titleRef.current;
    const tl = gsap.timeline();
    tl.to(target, {
      y: -20,
      opacity: 0,
      duration: 0.22,
      ease: "power2.in",
    })
      .add(() => setDisplayedPhase(phase))
      .fromTo(
        target,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.28, ease: "power2.out" }
      );
    titleTlRef.current = tl;
    return () => {
      tl.kill();
    };
  }, [phase, displayedPhase, reducedMotion]);

  // ────────────────────────────────────────────────────────────────────────
  // ScrollTrigger: auto-start in viewport, pause when out.
  useEffect(() => {
    const { ScrollTrigger } = ensureGsap();
    if (!sectionRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      end: "bottom 30%",
      onEnter: () => setPlayState("playing"),
      onEnterBack: () => setPlayState("playing"),
      onLeave: () => setPlayState("paused"),
      onLeaveBack: () => setPlayState("paused"),
    });
    return () => trigger.kill();
  }, []);

  // ────────────────────────────────────────────────────────────────────────
  // document.visibilitychange: pause when hidden, resume if was playing.
  useEffect(() => {
    const handler = () => {
      if (document.hidden) {
        visibilityWasPlayingRef.current = isPlaying;
        if (isPlaying) setPlayState("paused");
      } else if (visibilityWasPlayingRef.current) {
        visibilityWasPlayingRef.current = false;
        setPlayState("playing");
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [isPlaying]);

  // ────────────────────────────────────────────────────────────────────────
  // Keyboard: ←/→ navigate, Space toggle (only when section in view).
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.bottom > 80 && rect.top < window.innerHeight - 80;
      if (!inView) return;
      // Don't hijack typing in inputs/contenteditable
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      )
        return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        advance();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        retreat();
      } else if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [advance, retreat, togglePlay]);

  // ────────────────────────────────────────────────────────────────────────
  // Touch swipe on the section.
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (dx < 0) advance();
    else retreat();
  };

  // ────────────────────────────────────────────────────────────────────────
  // Pause auto-advance while the chapter nav holds keyboard focus.
  const onNavFocus = () => {
    if (isPlaying) {
      navWasPlayingRef.current = true;
      setPlayState("paused");
    }
  };
  const onNavBlur = (e: FocusEvent) => {
    // If focus moves to a sibling button inside the same nav, ignore.
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    if (navWasPlayingRef.current) {
      navWasPlayingRef.current = false;
      setPlayState("playing");
    }
  };

  // ────────────────────────────────────────────────────────────────────────
  // Rendering helpers
  const displayChapter =
    displayedPhase === "final"
      ? null
      : CHAPTERS.find((c) => c.id === displayedPhase)!;
  const navActive: ChapterId = phase === "final" ? 4 : phase;

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full bg-ink text-cream"
      aria-label="Story player"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {/* Title */}
        <div
          ref={titleRef}
          className="absolute inset-x-0 top-[10vh] z-10 mx-auto max-w-[920px] px-6 text-center"
        >
          {displayChapter && (
            <>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/55">
                Chapter {displayChapter.id} · § I The journey
              </div>
              <h2
                className="mt-3 text-balance text-[clamp(34px,5vw,68px)] leading-[1.05] tracking-[-0.015em]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {displayChapter.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-[16px] leading-[1.5] text-cream/60">
                {displayChapter.subtitle}
              </p>
            </>
          )}
        </div>

        {/* Active chapter scene — only one mounted at a time */}
        <div
          role="tabpanel"
          id={`chapter-panel-${navActive}`}
          aria-labelledby={`chapter-tab-${navActive}`}
          aria-label={
            displayChapter
              ? `Chapter ${displayChapter.id}: ${displayChapter.label}`
              : "Tagline"
          }
          className="absolute inset-x-0 top-[36vh] flex h-[44vh] items-center justify-center"
        >
          {displayedPhase === 1 && <Chapter1Upload />}
          {displayedPhase === 2 && <Chapter2Vectorize />}
          {displayedPhase === 3 && <Chapter3Distribute />}
          {displayedPhase === 4 && <Chapter4Retrieve />}
        </div>

        {/* Suspense-style loading bar (terracotta) — placeholder for chapter mount.
            Currently hidden; will hook into Suspense boundaries when R3F lands. */}

        {/* Final tagline overlay */}
        {phase === "final" && <FinalOverlay reducedMotion={reducedMotion} />}

        {/* Bottom strip ~12vh */}
        <div className="absolute inset-x-0 bottom-0 z-30 h-[12vh] min-h-[96px]">
          <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between gap-6 px-6">
            <PlayPauseButton state={playState} onToggle={togglePlay} />
            <ChapterNav
              chapters={CHAPTERS}
              active={navActive}
              progress={phase === "final" ? 1 : progress}
              onSelect={goToChapter}
              onFocus={onNavFocus}
              onBlur={onNavBlur}
            />
            <div className="hidden h-12 w-12 md:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
