import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';
import { SITE } from '@/lib/data';

// Auto-generated 1200×630 social preview — no binary asset shipped. Next.js wires
// this into og:image (and twitter:image) automatically and caches it on the CDN.
export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Real portrait embedded as a data URI so Satori can render it into the card.
// Read at build time (this route is statically generated) — a face in the social
// preview lifts click-through when the name is shared.
const portrait = `data:image/jpeg;base64,${readFileSync(
  join(process.cwd(), 'public', 'sunnatbek-yusupov-portrait-studio.jpg'),
).toString('base64')}`;

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#08080C',
          backgroundImage:
            'radial-gradient(900px 500px at 85% -10%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(700px 400px at 0% 20%, rgba(34,211,238,0.18), transparent 55%)',
          color: '#E7E8EE',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Left: identity */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', maxWidth: 720 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                border: '2px solid #6366F1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                fontWeight: 700,
                color: '#6366F1',
              }}
            >
              SY
            </div>
            <span style={{ fontSize: 24, color: '#8A8F9A' }}>{SITE.url.replace('https://', '')}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              {SITE.name}
            </div>
            <div style={{ display: 'flex', fontSize: 32, color: '#6366F1', marginTop: 10 }}>
              {`${SITE.role} · ${SITE.subRole}`}
            </div>
            <div style={{ fontSize: 25, color: '#8A8F9A', marginTop: 18, maxWidth: 680 }}>
              {SITE.tagline}
            </div>
          </div>
        </div>

        {/* Right: portrait with accent ring */}
        <div
          style={{
            display: 'flex',
            width: 320,
            height: 320,
            borderRadius: 28,
            padding: 4,
            background: 'linear-gradient(135deg, #6366F1, #22D3EE)',
            flexShrink: 0,
          }}
        >
          {/* Satori renders this to a PNG server-side — next/image doesn't apply. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portrait}
            alt=""
            width={312}
            height={312}
            style={{ width: 312, height: 312, borderRadius: 24, objectFit: 'cover' }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
