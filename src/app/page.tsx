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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Aidevix />
        <Gallery />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
