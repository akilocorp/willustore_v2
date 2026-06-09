# ⚠️ Only `haftoms design/` is the real site

The deployed website is **exclusively** the `haftoms design/` folder
(Next.js 14 + Tailwind v3 — the cyan design). It is the only thing that is
built and hosted.

Everything else in this repo — including the root-level `app/`, `components/`,
`package.json`, `next.config.ts`, `globals.css`, etc. (the purple Next 16 /
Tailwind v4 variant) — is **legacy and irrelevant**. Do not build, deploy, or
"fix" it. All app changes go inside `haftoms design/`, and any local commands
(`npm install`, `npm run dev`, `npm run build`) must be run from that folder.

@AGENTS.md
