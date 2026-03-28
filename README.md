# Portfolio — React

Personal portfolio built with **React** and **Vite** (single-page app).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`. For GitHub Pages, this repo uses **GitHub Actions** (`.github/workflows/deploy.yml`): pushes to `main` build and deploy the `dist` artifact. The `public/CNAME` file (antoniosifov.com) is copied into `dist` during the build.

## Visitor analytics

You can see **how many people** visit, which pages they open, and rough context (country, device, referrer). You **cannot** reliably know **who** a person is (name, email) unless they sign in or submit a form — that is normal for any public website and aligns with privacy expectations.

Supported options (pick **one**; configure via `.env.local` locally, see `.env.example`):

| Service | Notes |
|--------|--------|
| **[Plausible](https://plausible.io)** | Injects the official `script.js` from Plausible (same as their “Script” install). Set `VITE_PLAUSIBLE_DOMAIN` to the **exact** hostname you registered in Plausible (`antoniosifov.com` and `www.antoniosifov.com` are different — pick one and match both Plausible and the secret). Self-hosted: optional `VITE_PLAUSIBLE_SCRIPT_URL` (full URL to your `script.js`). |
| **Google Analytics 4** | Free; richer reports; you may need a cookie banner in the EU/UK. Set `VITE_GA_MEASUREMENT_ID` to your `G-` ID. |

**GitHub Actions:** add **Secrets** `VITE_PLAUSIBLE_DOMAIN` (and optionally `VITE_PLAUSIBLE_SCRIPT_URL` or `VITE_GA_MEASUREMENT_ID`). Vite bakes these in at **build** time — if the secret was missing when the workflow ran, the live site has no tracker until you **re-run the workflow** after adding the secret.

**If Plausible says it can’t detect the script:** (1) Confirm the secret exists and matches your Plausible site domain. (2) Re-run **Actions → Deploy to GitHub Pages → Re-run all jobs**. (3) Hard-refresh the live site (or use a private window) and disable ad blockers for your domain — they often block `plausible.io`. (4) In DevTools → Network, check for requests to `plausible.io` or your self-hosted instance.

Implementation: `src/analytics.js`, invoked from `src/main.jsx`.

## Images

Place assets under **`public/img/`**:

- `1758025908213.jpg` — photo used in About
- `spotify.jpg`, `movie.jpg`, `commerce.jpg`, `dailyTracker.png`, `parserAPI.jpg`, `portfolio.png` — project thumbnails
- `github.png` — GitHub button icon
- Project screenshots live under `public/img/projects/` (see `src/data/cvData.js` for paths)

If you still have an old root-level `img/` folder from a previous version, move it to `public/img/`.

## Project structure

- `src/main.jsx` — React entry
- `src/App.jsx` — layout and sections
- `src/components/` — Navbar, Hero, About, Experience, Stack, Projects, Gallery, Contact, Footer, ScrollLine, atoms, etc.
- `src/data/cvData.js` — CV copy, projects, and image paths
- `src/styles/` — section styles (`*.css`)
- `src/hooks/` — `useScrollY`, `useInView`
- `src/index.css` — global base styles

