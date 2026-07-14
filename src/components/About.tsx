import { STATS } from '@/lib/data';
import { getDict, type Locale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="01" eyebrow={dict.about.eyebrow} title={dict.about.title} />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="space-y-5">
            {dict.about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <div key={s.label} className="card p-5">
                  <dt className="sr-only">{dict.statLabels[i]}</dt>
                  <dd className="font-display text-2xl font-bold text-ink">{s.value}</dd>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                    {dict.statLabels[i]}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
