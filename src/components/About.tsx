import { ABOUT, STATS } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="01" eyebrow="about" title="Who I am" />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="space-y-5">
            {ABOUT.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="card p-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold text-ink">{s.value}</dd>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                    {s.label}
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
