import { SITE } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js.
        </p>
        <p className="font-mono text-xs text-faint">
          <span className="text-accent">~/</span>designed &amp; coded by {SITE.firstName}
        </p>
      </div>
    </footer>
  );
}
