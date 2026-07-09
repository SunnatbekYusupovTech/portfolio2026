'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV, SITE } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-ink">
          <span className="text-accent">~/</span>sunnatbek
          <span className="animate-blink text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="font-mono text-[13px] text-muted transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-md border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-[13px] text-ink transition-colors hover:bg-accent/20"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="wrap flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 font-mono text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
