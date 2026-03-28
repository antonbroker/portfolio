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
| **[Plausible](https://plausible.io)** | Uses `@plausible-analytics/tracker` (NPM). Set `VITE_PLAUSIBLE_DOMAIN` to the **exact** domain you added in Plausible. Self-hosted or proxied installs: optional `VITE_PLAUSIBLE_ENDPOINT` (full URL to `/api/event`). |
| **Google Analytics 4** | Free; richer reports; you may need a cookie banner in the EU/UK. Set `VITE_GA_MEASUREMENT_ID` to your `G-` ID. |

**GitHub Actions:** add repository **Secrets** (`VITE_PLAUSIBLE_DOMAIN`, optional `VITE_PLAUSIBLE_ENDPOINT`, or `VITE_GA_MEASUREMENT_ID`) so production builds include analytics. If secrets are unset, the app ships without tracking.

**Plausible “Verify NPM installation”:** the package is already in `package.json`. Add `VITE_PLAUSIBLE_DOMAIN` to `.env.local`, push and deploy (or run `npm run build && npm run preview` with env vars), **open your live site once** so a pageview is sent, then click **Verify** in the Plausible wizard. Events from `localhost` are ignored by default; for local tests set `VITE_PLAUSIBLE_CAPTURE_LOCALHOST=true`.

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

