import Image from 'next/image';
import { GALLERY, ACHIEVEMENTS } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Gallery() {
  return (
    <section id="highlights" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="04" eyebrow="in the field" title="Highlights" />

        {/* Achievements — credible, crawlable facts about the person. */}
        <Reveal>
          <ul className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((a) => (
              <li key={a.title} className="card p-5">
                <p className="font-display text-sm font-bold leading-snug text-ink">{a.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.detail}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-accent-2">
                  {a.year}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Photo grid — real, name-tagged images for people search & Google Images. */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 0.06}
              className={item.wide ? 'col-span-2 lg:col-span-2' : ''}
            >
              <figure className="card group relative h-full overflow-hidden">
                <div className={`relative w-full ${item.wide ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-4 font-mono text-xs text-ink">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
