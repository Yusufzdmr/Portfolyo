import CinematicIntro from "@/components/CinematicIntro";
import Aurora from "@/components/Aurora";
import Spotlight from "@/components/Spotlight";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";

export default function Home() {
  return (
    <>
      {/* sinematik atmosfer katmanları */}
      <div className="cine-grid" />
      <Aurora />
      <Spotlight />
      <CinematicIntro />

      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToTop />

      <div className="cine-vignette" />
      <div className="cine-grain" />
    </>
  );
}
