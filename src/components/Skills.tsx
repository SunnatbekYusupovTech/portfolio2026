import { SKILLS } from '@/lib/data';
import { getDict, type Locale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="05" eyebrow={dict.skills.eyebrow} title={dict.skills.title} />

        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  {dict.skills.groupTitles[i]}
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
