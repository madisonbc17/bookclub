# 📚 Book Club Picker

A small app for my book club. After each meeting, members suggest up to two books. When an organizer closes submissions, two books are drawn at random from **two different members' suggestions**. The picks are posted with the next meeting's day/time, a synopsis, a cover, and links to read or listen (Libby, Kindle, Audible, local library, Goodreads).

**Live:** https://bookclub.sonnytech.dev

## Privacy by design
- Anyone can see the club name, meeting day/time and the picks. **No meeting location is stored.**
- Only members with the private invite link (shared in our group chat) can submit books or see who suggested what.
- The database denies direct table access; all reads and writes go through Postgres functions guarded by Row Level Security.

## Stack
React + TypeScript (Vite) · Supabase (Postgres, RLS, Auth) · GitHub Pages · GitHub Actions · Open Library API

## Run locally
```bash
npm install
cp .env.example .env   # add your Supabase URL + anon key
npm run dev
```
