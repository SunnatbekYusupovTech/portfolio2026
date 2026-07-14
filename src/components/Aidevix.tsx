import { FiArrowUpRight } from 'react-icons/fi';
import { AIDEVIX } from '@/lib/data';
import { getDict, type Locale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Aidevix({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section id="aidevix" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="03" eyebrow={dict.aidevix.eyebrow} title="Aidevix" />

        <Reveal>
          <div className="card card-hover relative overflow-hidden p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative">
              <span className="chip border-accent/30 text-accent">{dict.aidevix.badge}</span>

              <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
                {dict.aidevix.heading}
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                {dict.aidevix.description} {dict.aidevix.extra}
              </p>

              <p className="mt-4 max-w-2xl leading-relaxed text-faint">
                <span className="font-mono text-accent-2">{dict.aidevix.missionLabel}</span>{' '}
                {dict.aidevix.mission}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {AIDEVIX.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2/60 px-4 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {s.label} <FiArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
