You are building the marketing site for Willustore, a decentralized vector-storage company. Companies get a free RAG platform — they upload their data, any AI model answers from their files — and the storage layer is spare gigabytes on real people's phones around the world. Phone owners earn for sharing space they aren't using.
Tagline: "Never pay for the product. Only the storage."
Brand palette:

Background cream: #fafaf7
Warm cream (sections): #f4f2ec
Ink (primary text, dark theatre bg): #0a0a0a
Soft ink: #1a1a1a
Muted text: #6b6b6b
Hairline: #e6e3da
Accent green (primary brand): #2c5e3f
Accent green bright: #4a9d6f
Accent green glow: #a8e0bf
Signal terracotta (data/motion): #c44d2e

Type system:

Display serif: Instrument Serif (Google Fonts) — italic variant used for emphasis
Sans body: Geist (next/font/google)
Mono labels: Geist Mono

Aesthetic direction: Editorial-tech, like Linear or Vercel meeting a literary magazine. Cream and dark theatre sections alternate. Generous whitespace in light sections, full-bleed immersion in the dark story section. Italics on the green accent words. Subtle paper grain overlay on light sections.
Tech stack — non-negotiable

Next.js 14+ App Router with TypeScript
Tailwind CSS with the brand palette in tailwind.config.ts as named tokens
GSAP 3 with the ScrollTrigger plugin for all timeline-based animation
@react-three/fiber + @react-three/drei for the 3D scenes in the story player
Framer Motion only where GSAP is overkill (small UI micro-interactions, not the main scenes)
Lenis (@studio-freight/lenis) for smooth scrolling
next/font for both fonts; do not use external Google Fonts CSS link

Use 'use client' only on components that genuinely need it. Server-render everything else.
File structure
app/
  layout.tsx          # Fonts, Lenis provider, metadata
  page.tsx            # Composes the section components
  globals.css         # Tailwind base, paper grain, scrollbar
components/
  Nav.tsx
  Hero.tsx            # With R3F phone-globe canvas
  StoryPlayer/
    index.tsx         # Orchestrator: chapter state, transitions, controls
    ChapterNav.tsx    # Bottom chapter navigator
    PlayPauseButton.tsx
    Chapter1Upload.tsx       # R3F scene
    Chapter2Vectorize.tsx    # R3F scene
    Chapter3Distribute.tsx   # R3F scene
    Chapter4Retrieve.tsx     # R3F scene
    useChapterTimeline.ts    # GSAP timeline hook per chapter
  Comparison.tsx
  CTABand.tsx
  Footer.tsx
lib/
  lenis.ts            # Smooth scroll provider
  gsap.ts             # GSAP registration (ScrollTrigger, etc.)
Page composition (top to bottom)

Nav — fixed, blurred cream background, willustore logo (animated dot logo-mark), links: How it works / Why us / Docs / Network. Right-side dark pill button "Request access →".
Hero — two-column grid. Left: eyebrow "Decentralized vector storage · Live network" with pulsing dot, h1 in Instrument Serif: "AI memory lives on phones in datacenters, not in datacenters." (italic green for "lives", muted strikethrough on "in datacenters"). Subhead about turning idle phone storage into a global vector DB. Two buttons: "Start storing →" (dark) and "See how it works" (ghost). Stats row: 2.4M devices online · 8.1 PB vectors stored · 93% cheaper than AWS. Right column: full-height card with R3F scene — a slowly rotating sphere of phone-shaped nodes with lit screens, terracotta data pulses arcing between them, dotted grid background. NETWORK counter (2,408,221) updating live in the top-right of the card.
Story Player — the centerpiece, see detailed spec below.
Comparison — "§ II The economics" eyebrow. h2: "Centralized storage is built wrong." Two-card grid. Left card cream/warm: "The old way — Hyperscaler vector DBs" with — bullets ($0.096/GB+egress, single-region failure, carbon-heavy datacenters, vendor lock-in, jurisdiction risk). Right card ink-black: "The willustore way — Decentralized · device-native" with + bullets ($0.007/GB no egress, geographic redundancy default, uses existing storage, open protocol, encrypted shards). Soft green radial glow inside the dark card.
CTA Band — centered, h2: "Never pay for the product. Only the storage." Subhead about beta. Two buttons: "Request beta access →" and "Read the whitepaper".
Footer — warm cream, four columns (brand / Product / Network / Company), bottom row "© 2026 WILLUSTORE LABS · BUILT WITH THE NETWORK".

STORY PLAYER — detailed spec
This is the most important component. Reference: Filecoin.io's chapter player (full-bleed dark theatre with chapter labels at the bottom).
Layout

Full viewport width, 100vh tall
Background #0a0a0a (the rest of the page is cream — this is intentional contrast)
Top center, ~10vh from top: Chapter title (Instrument Serif, ~clamp(36px, 5vw, 72px), white) + subtitle (Geist, ~18px, 60% white) — these crossfade between chapters
Center 60vh: Full-bleed R3F canvas — only one chapter's scene mounts at a time
Bottom strip ~12vh:

Bottom-left: circular play/pause button (currentColor, 1px ring, 48px)
Bottom-center: chapter navigator. Four labels horizontally:

"Chapter 1 — Upload your files"
"Chapter 2 — Become vectors"
"Chapter 3 — Distributed worldwide"
"Chapter 4 — Retrieved instantly"


Active chapter: white, bold-ish (Geist 500), small label "Chapter N" above the title in Geist Mono uppercase 11px
Inactive chapters: 35% white opacity, clickable
Above the active chapter label: a 2px progress bar (terracotta #c44d2e) that fills over the chapter's duration



Chapter state machine
tstype ChapterId = 1 | 2 | 3 | 4
type PlayState = 'playing' | 'paused' | 'idle'

Auto-advance after each chapter's duration (Ch1: 7s, Ch2: 8s, Ch3: 10s, Ch4: 9s)
After Ch4 completes, hold on a final frame for 3s with the tagline overlay and "Request beta access" button, then loop back to Ch1
Pause/play toggles auto-advance; the GSAP timeline's pause() / resume() should also halt the visible animation
Clicking any chapter in the nav: kill current timeline, mount new chapter's scene, start its timeline
Keyboard: ← / → to navigate, Space to toggle play/pause
Mobile: swipe left/right on the canvas area to change chapter
prefers-reduced-motion: skip auto-advance, render a single keyframe per chapter (a poster image generated from the R3F scene), let user click through

Transition between chapters
500ms crossfade. The outgoing chapter's scene fades opacity 1→0 while the incoming chapter's scene fades 0→1. Title text uses GSAP to slide up 20px and fade out, new title slides in from below. Use a single GSAP timeline orchestrating both.
The four chapters — animations
Each chapter is an R3F scene. Use <Canvas> with gl={{ antialias: true, alpha: true }}, OrthographicCamera or PerspectiveCamera as appropriate. Drive animations primarily with GSAP timelines (use useGSAP hook from @gsap/react), reading from refs to mesh positions/scales/materials. Use useFrame only for continuous loops that don't need timeline control (e.g. ambient drift, rotation).
Chapter 1 — "Upload your files"
Subtitle: "Drop in your contracts, docs, code. Any model can answer from them."
Center of the canvas: a floating dashboard card (use a Plane with a custom shader or a flat RoundedBox) showing a "Drop your files" zone. From off-screen edges, file icons (3D rounded boxes labeled PDF, DOCX, CSV, MD) tween in along curved paths and pile into the dropzone. Below the card, a horizontal pill rotates through model names: "GPT-5" → "Claude" → "Llama 4" → "Gemini" — text swap every 1.2s with a slight blur transition. Soft green spotlight on the card. Subtle floating ambient particles (terracotta) in the background.
GSAP timeline: stagger file entries (each 0.4s offset, 0.8s ease.out tween), card entrance scale 0.9→1 over 0.6s, model pill cycles independently.
Chapter 2 — "Files become vectors"
Subtitle: "Encrypted, sharded, ready to distribute."
The files from Ch1 (or freshly mounted equivalents) sit in center. Animation breaks them apart: each file's surface shatters into ~200 small particles. The particles morph from terracotta to green and arrange themselves into a tight glowing point-cloud formation (rotating slowly, ~3000 particles total). A small floating UI badge near the cloud shows "AES-256 · client-side encrypted" with a lock icon — fade in at the 60% mark. The cloud rotates on Y-axis using useFrame.
Use <Points> from R3F drei or a custom BufferGeometry. The shatter-and-reform is a GSAP-driven attribute.array interpolation between two saved positions (file-surface positions → cloud positions), tweening over 2.5s with power3.inOut.
Chapter 3 — "Distributed across the world"
Subtitle: "Sent to a spare gigabyte on someone's phone in Manila. Or São Paulo. Or Lagos."
The vector cloud from Ch2 is now front-and-center. Camera pulls back; a 3D world (use a low-poly globe or an extruded SVG world map plane — simpler is better) fades in below/around the cloud. Cloud particles begin streaming outward as terracotta shards along curved arcs to ~80 phone-mesh nodes scattered across the globe (use Fibonacci sphere distribution for even spread).
The dramatic moment: at the 4s mark, camera zooms toward the Philippines region. One phone (a small 3D RoundedBox, dark gray with a glowing green screen face) becomes the focal point at center-screen. A single shard arrives, the screen flashes green, a small floating annotation appears: "Shard #4a8f · encrypted · cannot be read by host" (Geist Mono, 12px, white with terracotta accent on the hash). Lock-click micro-animation (a small lock icon scales 1.2→1 with a satisfying spring). Hold for 2s. Then camera pulls back out to reveal phones lit up across all continents.
GSAP camera moves: use a ref to the camera and tween its position and lookAt target. Use gsap.to(camera.position, { ... }) driven inside useGSAP.
Chapter 4 — "Retrieved in a split second"
Subtitle: "You ask. We find. The answer streams back."
Split composition: left third of canvas is a 3D-rendered chat window (a RoundedBox with text rendered via Text from drei). The chat shows a typing animation: > summarize the Q3 contract types out character-by-character (use GSAP text plugin or manual chars-per-frame). Right two-thirds: the world map from Ch3 with phones glowing softly.
The instant the prompt finishes typing, a green query beam shoots out from the chat window across the map and locks onto the same Manila phone from Ch3 (it pulses brighter, gets a match · 0.94 annotation). A stream of green data pulses races back along the beam path to the chat window. The answer types out: Acme Corp — 24mo SaaS, $1.2M ACV. Renewed Oct 12.
End frame: hold 3s, then a full-screen overlay slides up from bottom containing the tagline "Never pay for the product. Only the storage." in giant Instrument Serif italic, with a cream "Request beta access →" button. After 3s on this overlay, loop back to Ch1.
Performance constraints for the story player

Only mount the active chapter's <Canvas> and unmount others (use conditional rendering keyed on chapter ID). This prevents 4 WebGL contexts running simultaneously.
Use dpr={[1, 2]} on <Canvas> to cap retina rendering
All particle counts capped at 3000 for the vector cloud, 80 phones globally
Suspense fallback during chapter mount: a thin terracotta loading bar at the top of the canvas
Pause useFrame loops when document is hidden (use document.visibilityState)
Lazy-import each chapter component (next/dynamic) so the initial JS bundle doesn't pay for chapters 2-4 upfront

Hero phone-globe (R3F)
Separate from the story player. A right-column 1:1 aspect card with:

A sphere of 60 phone-mesh nodes (Fibonacci distribution)
Slow Y-axis rotation (~0.05 rad/sec)
Random phone screens light up green for ~1s, then go dim
Terracotta data pulses fly between random pairs of nodes — small spheres with trails along straight lines, life ~1s
Dotted grid plane in the background (use a shader or texture)
A subtle outer ring (semi-transparent green torus) and three latitude rings (semi-transparent green flat ellipses)
Network counter overlay rendered as HTML on top of the canvas (top-right corner of the card), incrementing every ~100ms

Scroll-triggered behavior

Lenis smooth scroll site-wide
Hero h1 reveal: each line slide-up + fade-in on mount, staggered 80ms (GSAP)
Comparison cards: slide up + fade in when entering viewport (GSAP ScrollTrigger)
Story Player section: when it enters viewport, auto-start the player at Ch1. When it leaves viewport, pause the player (don't reset chapter state). This is GSAP ScrollTrigger with onEnter / onLeaveBack.
Nav: add a hairline border-bottom + slightly more opacity background once window.scrollY > 40

Accessibility

All interactive elements keyboard-reachable; focus rings visible (2px green outline offset 2px)
ARIA: chapter navigator is role="tablist", each chapter button is role="tab" with aria-selected, the canvas region is role="tabpanel" with aria-label describing the current chapter
Respect prefers-reduced-motion: disable Lenis, replace R3F scenes with static poster frames, disable all GSAP tweens beyond opacity
prefers-color-scheme: site is light-mode regardless; the dark story section is intentional contrast, not a theme
Pause auto-advance when chapter buttons receive keyboard focus (so screen reader users can read each one)

Acceptance criteria
The build is done when:

npm run dev boots cleanly with zero TypeScript or ESLint errors
All four chapters render and play through end-to-end with smooth transitions
Manual chapter navigation works via clicks, keyboard arrows, and mobile swipe
Pause/play button correctly halts and resumes both auto-advance and the visible animation
The page is responsive: hero stacks, story player remains full-bleed but with adjusted chapter nav layout (vertical list on narrow screens), comparison stacks
Lighthouse Performance score ≥85 on a desktop run (LCP under 2.5s, CLS under 0.1)
No WebGL context leaks when navigating between chapters (verify in Chrome devtools — should never see more than 2 active contexts: hero + active story chapter)
prefers-reduced-motion results in a static, fully readable page with click-to-advance chapters
Page works on Safari, Chrome, Firefox latest versions

Stretch goals (only if time permits)

Subtle audio: a soft whoosh when changing chapters, click when a shard locks into a phone (with a global mute toggle in the player). Use a tiny sample file and the Web Audio API.
A "Run a node" sub-page (/run-a-node) aimed at phone owners, with its own animation showing a phone earning over time.


How to start

Initialize Next.js 14 with TypeScript, Tailwind, App Router, src/ disabled, import alias @/*
Install dependencies in one shot: npm i gsap @gsap/react @react-three/fiber @react-three/drei three framer-motion @studio-freight/lenis, dev deps @types/three
Set up tailwind.config.ts with the brand color tokens and font families
Build app/layout.tsx with fonts, Lenis provider, metadata
Build the static sections first (Nav, Hero text-only, Comparison, CTA, Footer) — confirm visual polish before any 3D work
Build the Hero phone-globe R3F scene
Build the Story Player shell (state machine, controls, chapter nav) with placeholder colored panels for each chapter
Replace the placeholders with the four R3F chapter scenes one at a time, in order
Wire up scroll triggers and Lenis
Pass through the acceptance criteria checklist

Work iteratively. After each major step, show me what you built and let me confirm before moving on. If you hit an architecture decision that wasn't specified above, ask before guessing.

