/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        // The default .vercel.app alias serves the same content — 308 it to the
        // canonical domain so search engines see a single origin. Exact host
        // match, so preview deployments are unaffected.
        source: '/:path*',
        has: [{ type: 'host', value: 'sunnatbekyusupov.vercel.app' }],
        destination: 'https://sunnatbekyusupov.uz/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Baseline security headers for every route.
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Long-cache immutable static assets for performance.
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // CV gets a shorter cache — it changes when the career does.
        source: '/Sunnatbek_Yusupov_CV.pdf',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
