import { FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { SITE, SOCIALS } from '@/lib/data';
import SocialIcon from './SocialIcon';
import Avatar from './Avatar';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="wrap relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          {/* Left: intro */}
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
              </span>
              Available for collaboration &amp; remote work
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {SITE.name}
            </h1>

            <p className="mt-4 font-mono text-base text-accent sm:text-lg">
              {SITE.role} <span className="text-faint">·</span> {SITE.subRole}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {SITE.tagline} I build products with React, Next.js and TypeScript — and
              I&apos;m growing Uzbekistan&apos;s next generation of AI-fluent developers.
            </p>

            <div className="mt-7 flex items-center gap-2 font-mono text-sm text-faint">
              <FiMapPin size={15} /> {SITE.location}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                Get in touch <FiArrowUpRight />
              </a>
              <a
                href="https://aidevix.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-5 py-3 font-medium text-ink transition-colors hover:border-accent/40 hover:bg-surface-2"
              >
                Visit Aidevix <FiArrowUpRight />
              </a>
              <a
                href={SITE.cv}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-5 py-3 font-medium text-ink transition-colors hover:border-accent-2/40 hover:bg-surface-2"
              >
                Download CV <FiDownload size={16} />
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface/60 text-muted transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: avatar with terminal frame + initials fallback */}
          <div className="relative mx-auto w-full max-w-[320px] animate-fade-up lg:mx-0" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/25 via-transparent to-accent-2/20 blur-2xl" />
            <div className="card overflow-hidden p-2">
              <div className="flex items-center gap-1.5 px-2 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 font-mono text-[11px] text-faint">sunnatbek.jpg</span>
              </div>
              <Avatar src={SITE.avatar} alt={`${SITE.name} — ${SITE.role}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
