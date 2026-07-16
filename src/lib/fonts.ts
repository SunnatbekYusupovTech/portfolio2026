import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';

// Inter + JetBrains Mono carry Cyrillic glyphs so the /ru page (and Uzbek
// diacritics) render in-brand. Space Grotesk has no Cyrillic subset, so its
// display headings fall through to var(--font-sans) (Inter) on /ru — see the
// `display` fallback stack in tailwind.config.ts.
const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-sans', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-mono', display: 'swap' });

export const fontVariables = `${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`;
