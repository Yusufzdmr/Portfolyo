import CinematicIntro from "@/components/CinematicIntro";
import Aurora from "@/components/Aurora";
import Spotlight from "@/components/Spotlight";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import ScrollStatement from "@/components/ScrollStatement";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";

const MARQUEE = [
  "Backend",
  ".NET",
  "JavaScript",
  "PHP",
  "Python",
  "CRM",
  "AI Entegrasyonu",
  "SEO",
  "Linux Sunucu",
  "React",
  "Next.js",
];

export default function Home() {
  return (
    <>
      {/* sinematik atmosfer katmanları */}
      <div className="cine-grid" />
      <Aurora />
      <Spotlight />
      <CinematicIntro />

      {/* etkileşim katmanları */}
      <SmoothScroll />
      <CustomCursor />

      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />

      <div className="mt-16">
        <Marquee items={MARQUEE} />
      </div>

      <main>
        <About />
        <ScrollStatement />
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
