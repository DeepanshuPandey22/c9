# c9

Cloud9 Consultancy website: a multi-page React site (Vite + React Router) with a dark glassmorphism design, a WebGL "liquid metal" animated background, blur-up scroll reveals, marquees and hover sheens.

## Pages
`/` Home · `/about` Who We Are · `/services` Our Services · `/clients` Our Clients · `/contact` Contact Us

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build   # outputs to dist/
```

## Deploy (Vercel)
Import this repo in Vercel. The framework preset is **Vite**, the build command is `npm run build` and the output directory is `dist`. `vercel.json` rewrites all routes to `index.html` so the client-side routes work on refresh.

Site content lives in `src/data.js`, and the design notes are in `DESIGN_SPEC.md`.

## Third-party logos
Technology and partner logos in `public/tech/` are PNG renders of the brands' official logo files (via Wikimedia Commons). They are trademarks of their respective owners and are used only to show the platforms Cloud9 works with.
