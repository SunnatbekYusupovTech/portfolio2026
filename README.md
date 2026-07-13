# sunnatbekyusupov.uz — Personal Website

Personal portfolio of **Sunnatbek Yusupov** — Founder & CEO at Aidevix, Frontend Engineer.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS** (animations via
CSS keyframes + IntersectionObserver).
Optimized for SEO (canonical Person JSON-LD, sitemap, robots, auto OG image),
performance (static render, next/font, long-cache headers) and accessibility.

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # run the production build
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

## ✏️ Editing content

All text, links, skills and projects live in **one file**: [`src/lib/data.ts`](src/lib/data.ts).
Edit values there — every section, the page `<metadata>` and the SEO schema update automatically.

The downloadable CV (`public/Sunnatbek_Yusupov_CV.pdf`) is exported manually from
[`cv/Sunnatbek_Yusupov_CV.html`](cv/Sunnatbek_Yusupov_CV.html) — keep the two in sync when editing.

## 🖼️ Add your photo (important)

Drop a **square** professional photo (≈ 800×800) here:

```
public/sunnatbek-yusupov.jpg
```

Until then, the hero shows an "SY" monogram fallback. The social preview image
(`/opengraph-image`) is generated automatically — no file needed.

## 🔍 SEO built in

- **Canonical `Person` JSON-LD** — this site is the authoritative entity home for
  "Sunnatbek Yusupov"; `sameAs` links every profile **and** aidevix.uz together.
- `WebSite` schema, dynamic `sitemap.xml`, `robots.txt`, canonical URL.
- Auto-generated 1200×630 OpenGraph/Twitter image.

> After deploy: add the site to Google Search Console and cross-link it from
> `aidevix.uz/team` (→ this site) and from every social bio.

## ☁️ Deploy to Vercel + connect the domain

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo → Deploy.
3. Project → **Settings → Domains** → add `sunnatbekyusupov.uz`.
4. At your domain registrar, point DNS to Vercel:
   - `A` record `@` → `76.76.21.21`, **or** `CNAME` `www` → `cname.vercel-dns.com`
   - (Vercel shows the exact records to use.)
5. Update `SITE.url` in `src/lib/data.ts` if the final domain differs.
