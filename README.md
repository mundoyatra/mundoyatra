# Mundo Yatra — Static React Site (Vite)

A static React website for a travel agency. No backend, no APIs, just front-end routes and content.

## Local Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Create a **public** GitHub repo, e.g. `mundo-yatra`.
2. Push this project.
3. In `vite.config.js`, `base: './'` is set for static hosting.
4. Build: `npm run build` → upload `dist/` contents to the repo’s **gh-pages** branch or enable Pages to serve from `/root` (for static hosts like Netlify, Vercel just import the repo).

> Tip: For GitHub Pages via main branch, you can commit the `dist/` folder and set Pages source to `/root` (if available) or use an action.
