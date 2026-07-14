import '@/app/globals.css';
import { fontVariables } from '@/lib/fonts';
import { getDict, type Locale } from '@/lib/i18n';
import { buildSchemas } from '@/lib/schema';

// Shared <html> shell for both root layouts — (en) and (intl)/[locale] — so the
// document structure, fonts and JSON-LD stay identical across locales.
export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDict(locale);

  return (
    <html lang={locale} className={fontVariables}>
      <body className="antialiased">
        {/* JSON-LD lives in <body> — equally valid for Google/Yandex, and body
            placement avoids hand-rolling a <head> element in a component. */}
        {buildSchemas(locale).map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
