"use client";

import type { PlayState } from "./index";

type Props = {
  state: PlayState;
  onToggle: () => void;
};

export default function PlayPauseButton({ state, onToggle }: Props) {
  const isPlaying = state === "playing";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? "Pause story" : "Play story"}
      className="group relative flex h-12 w-12 flex-none items-center justify-center rounded-full ring-1 ring-cream/40 text-cream transition-colors hover:ring-cream/80"
    >
      {isPlaying ? (
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
          <rect x="3" y="2" width="3" height="10" fill="currentColor" />
          <rect x="8" y="2" width="3" height="10" fill="currentColor" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
          <path d="M3 2 L12 7 L3 12 Z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}
