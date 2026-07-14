# sunnatbekyusupov.uz — Personal Website

Personal portfolio of **Sunnatbek Yusupov** — Founder & CEO at Aidevix, Frontend Engineer.
Live at **[sunnatbekyusupov.uz](https://sunnatbekyusupov.uz)** in three languages:
[EN](https://sunnatbekyusupov.uz) · [UZ](https://sunnatbekyusupov.uz/uz) · [RU](https://sunnatbekyusupov.uz/ru).

Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS** (animations via
CSS keyframes + IntersectionObserver — no animation library).
Fully static (SSG), optimized for SEO, performance and accessibility.

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

## 🌍 Languages (i18n)

Three static routes, no middleware, no i18n library:

| Route | Language | How it works |
|-------|----------|--------------|
| `/`   | English  | route group `src/app/(en)/` — own root layout, `<html lang="en">` |
| `/uz` | Uzbek    | `src/app/(intl)/[locale]/` — SSG via `generateStaticParams` |
| `/ru` | Russian  | same segment, `<html lang="ru">`, Cyrillic title for Yandex |

- **Translations** live in [`src/lib/i18n.ts`](src/lib/i18n.ts) — one `Dict` per locale.
  English strings come from `data.ts`; uz/ru are full translations aligned by index.
- Every page renders a full **hreflang cluster** (`en`/`uz`/`ru`/`x-default`),
  localized metadata/OpenGraph and per-locale `ProfilePage` JSON-LD.
- The navbar has an `en / uz / ru` switcher (desktop + mobile).

## ✏️ Editing content

- **Language-neutral data** (URLs, emails, images, tech tags, stats values):
  [`src/lib/data.ts`](src/lib/data.ts) — single source of truth.
- **All visible text** (per language): [`src/lib/i18n.ts`](src/lib/i18n.ts).
  When you edit English content in `data.ts`, update the matching `uz`/`ru`
  entries in `i18n.ts` (arrays are aligned by index).
- Update `SITE.updatedAt` in `data.ts` when content changes — it feeds the
  `dateModified` freshness signal in JSON-LD.

The downloadable CV (`public/Sunnatbek_Yusupov_CV.pdf`) is exported manually from
[`cv/Sunnatbek_Yusupov_CV.html`](cv/Sunnatbek_Yusupov_CV.html) — keep the two in sync when editing.

## 🔍 SEO built in

- **Canonical `Person` JSON-LD** — this site is the authoritative entity home for
  "Sunnatbek Yusupov" (incl. Cyrillic `alternateName` «Суннатбек Юсупов»);
  `sameAs` links every profile **and** aidevix.uz together.
- `WebSite` + per-locale `ProfilePage` schemas, dynamic `sitemap.xml` with
  hreflang alternates, image sitemap, `robots.txt` (AI crawlers welcome), `llms.txt`.
- Auto-generated, fully static 1200×630 OpenGraph/Twitter image and Apple touch icon.
- `favicon.ico` fallback + 192/512 PWA icons + web manifest.
- **Google Search Console and Yandex.Webmaster verified**; sitemaps submitted (2026-07-13).
- `sunnatbekyusupov.vercel.app` → 308 → `sunnatbekyusupov.uz` (single canonical origin).

## 🛡️ Security & performance

- Baseline security headers on every route (`nosniff`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`) — see `next.config.mjs`.
- Long-cache immutable headers for static assets; shorter cache for the CV PDF.
- Fully static output, `next/font` with `display: swap`, conditional `sizes`
  on gallery images, ~118 kB First Load JS.
- Accessibility: skip link, `aria-controls`/Escape/scroll-lock on the mobile
  menu, `aria-hidden` on decorative icons, reduced-motion support, and content
  stays visible without JavaScript (`@media (scripting: enabled)`).

## ☁️ Deployment

Deployed on **Vercel**, auto-deploys from `main`. Domain `sunnatbekyusupov.uz`
is connected with the `.vercel.app` alias permanently redirected (308).
Requires Node ≥ 20.9.

## 📜 Changelog (highlights)

- **2026-07-14** — Uzbek and Russian pages (`/uz`, `/ru`) with full hreflang,
  localized metadata/JSON-LD and a language switcher.
- **2026-07-13** — Full audit (+19 fixes): security headers, a11y improvements,
  favicon.ico + PWA icons, meta description ≤160 chars, vercel.app→.uz redirect,
  GSC/Yandex verification; upgraded to **Next.js 15.5.20 + React 19** (clears all
  high npm advisories; OG image/apple icon now fully static); removed 6.1 MB of
  unused assets.
- **2026-07-12** — `llms.txt`, CV + Experience section, international SEO pass.
- **2026-07-09** — Canonical domain switched to `sunnatbekyusupov.uz`,
  Cyrillic entity signals added.
