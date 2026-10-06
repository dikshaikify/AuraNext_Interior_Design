# AuraNest Interiors

Complete source code for the AuraNest interior-design website, including all four generated interior photographs, page routes, styles, reusable UI, static content and tests.

## Run locally

Install Node.js 22 or later and Bun (https://bun.sh), then open a terminal inside this folder:

```sh
bun install
bun run dev
```

Open the localhost address printed in the terminal. Alternatively, use `npm install` and `npm run dev` with Node.js.

## Commands

```sh
bun run test
bun run build
bun run preview
```

The build uses the included Lovable TanStack Vite configuration, which defaults to a Cloudflare-compatible deployment target. Hosting setup is separate; this is not a plain static HTML site.

## Pages and features

- Home, About, Services, Projects and individual project pages
- Journal and individual article pages
- Contact consultation form with validation and demo confirmation
- Interactive Design Preview, material library, search and filters
- Budget calculator, illustrative before/after slider and testimonials
- Mobile navigation, reduced-motion support and per-page metadata

## Demo boundaries

All project, testimonial, article, material and pricing data are static examples. Photographs are generated illustrative interiors, not documented completed projects. No database, authentication, booking, payments, email delivery or CRM is connected. Form data is not stored or sent. The room preview uses prepared images and is not a 3D renderer. Budget figures are estimates, not quotations.

## Project structure

- `src/routes/`: pages and leaf metadata
- `src/components/`: site features and UI
- `src/lib/aura-data.ts`: static content, budget formula and metadata helper
- `src/assets/`: included interior images
- `src/styles.css`: semantic design tokens and site styling
- `src/test/`: routing and budget tests
- `public/`: favicon and robots file

`src/routeTree.gen.ts` is intentionally excluded: TanStack generates it from the route files when development or build starts. Dependencies and generated build output are also excluded; install dependencies before running the website.

Fonts load from Google Fonts and require an internet connection; local fallback fonts are included in the styling. No private credentials are required for this demo.
