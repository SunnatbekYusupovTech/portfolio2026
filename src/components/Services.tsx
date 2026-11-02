import type { ComponentType } from 'react';
import { FiCpu, FiZap, FiBookOpen, FiArrowUpRight, FiExternalLink } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';
import { SERVICES, SITE } from '@/lib/data';
import { getDict, type Locale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const ICONS: Record<string, ComponentType<{ size?: number; 'aria-hidden'?: 'true' }>> = {
  cpu: FiCpu,
  zap: FiZap,
  bot: RiRobot2Line,
  book: FiBookOpen,
};

// Services section — server-rendered so every service name/description is
// crawlable text tied to the name. Copy is per-locale (i18n.ts), aligned by
// index with SERVICES (key/icon) in data.ts; the same list feeds Person.makesOffer.
export default function Services({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section id="services" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="02" eyebrow={dict.services.eyebrow} title={dict.services.title} />

        <Reveal>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted">{dict.services.intro}</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => {
            const copy = dict.services.items[i];
            const Icon = ICONS[service.icon] ?? FiCpu;
            return (
              <Reveal key={service.key}>
                <article className="card card-hover flex h-full flex-col p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{copy.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{copy.description}</p>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent hover:underline"
                  >
                    {dict.services.more} <FiExternalLink size={13} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              {dict.services.cta} <FiArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
