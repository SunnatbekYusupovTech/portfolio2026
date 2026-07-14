import { SITE } from '@/lib/data';
import { getDict, type Locale } from '@/lib/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {SITE.name}. {dict.footer.built}
        </p>
        <p className="font-mono text-xs text-faint">
          <span className="text-accent">~/</span>
          {dict.footer.credit} {SITE.firstName}
        </p>
      </div>
    </footer>
  );
}
