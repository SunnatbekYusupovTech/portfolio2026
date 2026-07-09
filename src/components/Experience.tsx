import { FiArrowUpRight } from 'react-icons/fi';
import { EXPERIENCE } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="02" eyebrow="career" title="Experience" />

        <ol className="relative space-y-4 border-l border-line pl-6 sm:pl-8">
          {EXPERIENCE.map((job, i) => (
            <li key={`${job.company}-${job.role}`} className="relative">
              {/* Timeline dot */}
              <span
                aria-hidden
                className="absolute -left-[31px] top-7 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[39px]"
              />
              <Reveal delay={i * 0.05}>
                <div className="card card-hover p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {job.role}{' '}
                      <span className="text-faint">·</span>{' '}
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-2"
                        >
                          {job.company} <FiArrowUpRight size={15} />
                        </a>
                      ) : (
                        <span className="text-accent">{job.company}</span>
                      )}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-faint">
                      {job.period}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2.5 leading-relaxed text-muted">
                        <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
