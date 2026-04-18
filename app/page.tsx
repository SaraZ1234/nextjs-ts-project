import Navigation from '@/components/portfolio/navigation';
import Hero from '@/components/portfolio/hero';
import About from '@/components/portfolio/about';
import Experience from '@/components/portfolio/experience';
import Skills from '@/components/portfolio/skills';
import Projects from '@/components/portfolio/projects';
import Education from '@/components/portfolio/education';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';

export default function Home() {
  return (
    <main className="bg-slate-950 overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
