# Premium 3D Real-Estate Experience

A production-oriented **Next.js 15+ / App Router / TypeScript** real-estate website built around a cinematic architecture aesthetic, bilingual EN/FR content, React Three Fiber scenes, GSAP scroll choreography, Lenis smooth scrolling, frontend property search, WhatsApp contact flows, accessible forms and responsive performance controls.

## Stack

- Next.js 15+ App Router + React 19 + strict TypeScript
- Tailwind CSS plus a custom editorial design system
- Three.js, React Three Fiber and Drei
- GSAP + ScrollTrigger, Lenis and Framer Motion
- Lucide React and `next/image`

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

For release checks:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Configure the company

Edit `lib/config.ts` once. Replace all placeholder company details before launch, especially:

- `name`
- `whatsappNumber` in international digits-only format, e.g. `229...`
- `phone`
- `email`
- social links
- `NEXT_PUBLIC_SITE_URL` in `.env.local`

WhatsApp URLs are generated centrally. Property-specific messages automatically follow the active EN/FR language.

## Replace placeholder property data

`lib/data.ts` holds typed mock properties and placeholder testimonials. They are deliberately labelled as fictional/sample content. This is the connection point for a future CMS, CRM or property API.

## Photography

See `public/images/real-estate/SOURCES.md`. Local self-contained visual stand-ins are included so the project cannot fail because an external image is missing. The asset helper can fetch four free Unsplash references when network access is available. The specified skyscraper reference is an Unsplash+ item and must only be replaced with a properly licensed export.

## Cinematic hero

The hero currently uses the brief-approved non-video fallback: timed image transitions, Ken Burns movement, layered vignette treatment and a real-time R3F architectural scene. A `public/videos/` slot documents how to drop in final MP4/WebM assets later.

## Stability decisions

- Browser-only WebGL scenes are dynamically imported with `ssr: false`.
- GSAP animations use `gsap.context()` and synchronous `ctx.revert()` cleanup.
- Lenis cancels its RAF and calls `destroy()` synchronously.
- Custom cursor is disabled for touch/coarse pointers.
- Reduced-motion preferences disable expensive scroll/WebGL motion.
- R3F device pixel ratio is capped and mobile scene complexity is reduced.
- The contact form clearly reports that it is a frontend demo until a real submission handler is connected.
- No fabricated returns, availability, company history, statistics, addresses or client claims are presented as facts.

## Important pre-launch replacements

1. Company identity and contact details.
2. Verified property inventory, prices, availability and coordinates.
3. Licensed final photography/video.
4. Real contact-form backend/CRM handler.
5. Verified company history, service scope and testimonials.
6. Privacy and terms pages.
7. Analytics/consent tooling if required for the deployment jurisdiction.
