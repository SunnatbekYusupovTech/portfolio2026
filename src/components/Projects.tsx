import { FiArrowUpRight } from 'react-icons/fi';
import { PROJECTS } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="06" eyebrow="selected work" title="Projects" />

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06} className={project.featured ? 'md:col-span-2' : ''}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group flex h-full flex-col p-6"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-ink">{project.name}</h3>
                  <FiArrowUpRight
                    className="shrink-0 text-faint transition-colors group-hover:text-accent"
                    size={20}
                  />
                </div>

                {project.meta && (
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-accent-2">
                    {project.meta}
                  </p>
                )}

                <p className="mb-5 flex-1 leading-relaxed text-muted">{project.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
