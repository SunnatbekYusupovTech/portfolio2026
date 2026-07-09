import { SITE, GALLERY } from '@/lib/data';

// Dedicated Google Image sitemap. Lists every real photo of Sunnatbek Yusupov
// with its caption/title so the images can be indexed and shown under his name.
// Referenced from robots.ts.
export const dynamic = 'force-static';

const IMAGES = [
  { loc: SITE.avatar, title: `${SITE.name} — ${SITE.role}`, caption: `Portrait of ${SITE.name}, ${SITE.role}` },
  { loc: '/sunnatbek-yusupov-portrait-studio.jpg', title: SITE.name, caption: `Studio portrait of ${SITE.name}` },
  ...GALLERY.map((g) => ({ loc: g.src, title: SITE.name, caption: g.alt })),
];

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const images = IMAGES.map(
    (img) => `    <image:image>
      <image:loc>${SITE.url}${img.loc}</image:loc>
      <image:title>${escape(img.title)}</image:title>
      <image:caption>${escape(img.caption)}</image:caption>
    </image:image>`,
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE.url}</loc>
${images}
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
