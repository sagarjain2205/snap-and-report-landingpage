# Snap & Report: Landing Page

Frontend-only landing page (Vite + React + Tailwind + Framer Motion).

## Run locally
    npm install
    cp .env.example .env     # set VITE_APP_URL
    npm run dev
    npm run build

## Replace screenshots
Put your PNGs in `public/screenshots/` using the exact filenames listed in `public/screenshots/README.txt`. No code changes needed.

## Deploy to Vercel
1. Push this folder to its own GitHub repo.
2. Vercel > Add New > Project > import the repo.
3. Framework preset: Vite. Build: `npm run build`. Output: `dist`.
4. Environment Variables: `VITE_APP_URL` = your live Snap & Report app URL.
5. Deploy. (Re-deploy after changing the variable.)

## Theme
Dark neon theme. Colors live in `tailwind.config.js` (`void`, `sign`, `violet`, `cyan`, `aqua`).
Background animation (aurora orbs, neon grid, particle network, light streaks, cursor glow) is in `src/components/BackgroundFX.jsx`; its CSS is at the bottom of `src/index.css`.
