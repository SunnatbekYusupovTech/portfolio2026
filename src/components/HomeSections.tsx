import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Aidevix from '@/components/Aidevix';
import Gallery from '@/components/Gallery';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Locale } from '@/lib/i18n';

export default function HomeSections({ locale }: { locale: Locale }) {
  return (
    <>
      <Navbar locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <Aidevix locale={locale} />
        <Gallery locale={locale} />
        <Skills locale={locale} />
        <Projects locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
