import { getDict, type Locale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

// FAQ — plain <details> so the Q&A text is in the HTML for crawlers and answer
// engines; the matching FAQPage JSON-LD is emitted from lib/schema.ts.
export default function Faq({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section id="faq" className="scroll-mt-24 py-24">
      <div className="wrap">
        <SectionHeading index="08" eyebrow={dict.faq.eyebrow} title={dict.faq.title} />

        <div className="space-y-3">
          {dict.faq.items.map((item) => (
            <Reveal key={item.q}>
              <details className="card group p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold sm:text-lg">
                  <span>{item.q}</span>
                  <span aria-hidden="true" className="mt-1 text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
