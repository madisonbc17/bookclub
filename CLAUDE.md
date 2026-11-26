# Book Club Picker

React (Vite + TypeScript) on GitHub Pages + Supabase (free tier). Public portfolio repo.
Plan: `~/.claude/plans/i-d-like-to-create-abundant-lightning.md`

## Rules (non-negotiable)
- **Never commit secrets**: no `.env`, keys, Supabase passwords, service-role keys or invite tokens. The pre-commit hook (`.githooks/pre-commit`) checks every commit — never bypass it with `--no-verify`.
- **Claude never runs `git push`.** Local commits are fine; the user runs every push.
- **Member privacy**: no real member names/emails in code, seed data, tests or screenshots. Never store meeting location.

## Commands
- `npm run dev` — local dev (needs `.env`, copy from `.env.example`)
- `npm run build` — type-check + production build
