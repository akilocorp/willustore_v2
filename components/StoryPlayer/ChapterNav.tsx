"use client";

import type { ChapterId } from "./index";

type Props = {
  chapters: { id: ChapterId; label: string }[];
  active: ChapterId;
  progress: number; // 0..1, drives the active chapter's progress bar
  onSelect: (id: ChapterId) => void;
  onFocus?: () => void;
  onBlur?: (e: React.FocusEvent) => void;
};

export default function ChapterNav({
  chapters,
  active,
  progress,
  onSelect,
  onFocus,
  onBlur,
}: Props) {
  return (
    <div
      role="tablist"
      aria-label="Story chapters"
      className="flex flex-1 items-end justify-center gap-3 md:gap-6"
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {chapters.map((c) => {
        const isActive = c.id === active;
        return (
          <button
            key={c.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`chapter-panel-${c.id}`}
            id={`chapter-tab-${c.id}`}
            onClick={() => onSelect(c.id)}
            className={[
              "group relative flex min-w-0 flex-col items-start gap-1.5 px-2 pb-3 pt-2 text-left transition-opacity",
              isActive ? "opacity-100" : "opacity-35 hover:opacity-70",
            ].join(" ")}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/70">
              Chapter {c.id}
            </span>
            <span
              className={[
                "truncate text-[13px] md:text-[14px]",
                isActive ? "font-medium text-cream" : "text-cream/85",
              ].join(" ")}
            >
              {c.label}
            </span>
            {/* Progress bar */}
            <span
              aria-hidden
              className={[
                "absolute inset-x-2 -top-px h-[2px]",
                isActive ? "bg-cream/15" : "bg-transparent",
              ].join(" ")}
            >
              <span
                className="block h-full origin-left bg-terracotta"
                style={{
                  transform: isActive
                    ? `scaleX(${Math.max(0, Math.min(1, progress))})`
                    : "scaleX(0)",
                  transformOrigin: "left center",
                  transition: "transform 60ms linear",
                }}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
