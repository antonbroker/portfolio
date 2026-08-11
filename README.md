# Anton Iosifov — Software Engineering Portfolio

Production-focused portfolio presenting my commercial, startup, and independent work across web, mobile, cloud, and AI-enabled products.

[Live portfolio](https://antoniosifov.com) · [LinkedIn](https://www.linkedin.com/in/anton-iosifov/) · [GitHub](https://github.com/antoniosifov)

## Overview

This repository contains the source for my personal portfolio. The site is a responsive, data-driven React single-page application designed to make detailed engineering case studies easy to explore.

It highlights:

- production client platforms and independently developed products;
- project responsibilities, architecture decisions, features, and technology stacks;
- startup and freelance experience;
- responsive design, light/dark themes, and scroll-based navigation;
- automated deployment and optional privacy-conscious analytics.

## Selected work

### Sea'cret Residences

A production, four-language marketing and lead-generation platform for a luxury coastal real-estate development in Greece. Built with Next.js, React, TypeScript, Sanity CMS, localized SEO, analytics, accessibility improvements, and automated enquiry workflows.

[View live site](https://www.seacret-residence.com/)

### Ceru

A six-language, multi-currency expense-sharing mobile app with offline-first synchronization and AI-powered voice and receipt input. Independently planned, designed, architected, and developed from concept to iOS TestFlight beta, with Android in preparation.

[View product site](https://split-landing-silk.vercel.app/)

### Ski Shop E-Commerce Platform

A full-stack e-commerce platform with customer and admin workflows, JWT and Google authentication, analytics, and AI-powered product recommendations.

[Live demo](https://e-commerce-ski.vercel.app/) · [Source](https://github.com/antoniosifov/e-commerce-ski)

### Factory Management System

A full-stack factory operations platform for employees, departments, shifts, authentication, reporting, and AI-assisted scheduling.

[Live demo](https://factory-management-system-eight.vercel.app/) · [Source](https://github.com/antoniosifov/factory-management-system)

## Technology

| Area | Technologies |
| --- | --- |
| Application | React 18, JavaScript, HTML, CSS |
| Tooling | Vite 5, npm |
| Architecture | Reusable components, data-driven project content, custom React hooks |
| Delivery | GitHub Actions, GitHub Pages, custom domain |
| Analytics | Plausible or Google Analytics 4 through build-time configuration |

## Project structure

```text
src/
├── components/       # Page sections, navigation, gallery, and UI atoms
├── data/cvData.js    # Skills, projects, experience, and education content
├── hooks/            # Scroll and intersection-observer hooks
├── styles/           # Section and global styles
├── App.jsx           # Page composition and active-section state
└── main.jsx          # React entry point and analytics initialization
```

## Run locally

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/antoniosifov/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Create a production build with:

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`. It installs dependencies, creates the Vite production build, and deploys the `dist` artifact to GitHub Pages. The custom domain is configured through `public/CNAME`.

## Optional analytics

Analytics are disabled when no variables are provided. To enable one provider, configure the appropriate variables locally in `.env.local` and as GitHub Actions secrets for production.

| Variable | Purpose |
| --- | --- |
| `VITE_PLAUSIBLE_DOMAIN` | Domain registered in Plausible |
| `VITE_PLAUSIBLE_SCRIPT_URL` | Optional custom or self-hosted Plausible script |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |

## Contact

- [antoniosifov.com](https://antoniosifov.com)
- [linkedin.com/in/anton-iosifov](https://www.linkedin.com/in/anton-iosifov/)
- [github.com/antoniosifov](https://github.com/antoniosifov)
