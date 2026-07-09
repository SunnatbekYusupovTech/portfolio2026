import { SKILLS } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="05" eyebrow="toolbox" title="Skills & stack" />

        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
