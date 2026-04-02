# Orven Labs — AI Automation Agency Site

Multipage Next.js (App Router + TypeScript + Tailwind v4) site for Orven Labs. Pages: Home, Services, Service detail, Industries, About, Contact. Dark, minimalist look aligned to the provided logo palette.

## Stack
- Next.js 16 / React 19 (App Router, TypeScript)
- Tailwind CSS v4 (utility-first, inline theme tokens)
- ESLint (Next config)

## Structure
- `src/app` — pages and layout
- `src/lib/data.ts` — services, niches, FAQs, process, contact info
- `src/components` — shared navigation and footer

## Usage
```bash
npm install
npm run dev    # start dev server on http://localhost:3000
npm run lint   # lint
```

## Customization
- Replace the placeholder logo path `public/orven-logo.png` (add the real asset) and hook the contact form to your email/CRM.
- Edit content in `src/lib/data.ts` to tweak services, niches, FAQs, and contact channels.

## Deployment
Deploy to Vercel for zero-config hosting. Commands: `npm run build` then `npm start` locally, or push to a Vercel-connected repo.
