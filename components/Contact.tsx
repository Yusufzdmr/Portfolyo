import { Mail, Phone } from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="iletisim" className="mx-auto max-w-[1080px] scroll-mt-20 px-5 py-24 text-center sm:px-10">
      <SectionHeading
        num="05"
        title="İletişime Geçelim"
        desc="Bir proje, iş birliği veya sadece merhaba demek için — kapım her zaman açık."
        center
      />
      <Reveal delay={0.1}>
        <Magnetic className="mt-8 inline-block">
          <a
            href="mailto:yusuffzdmrr@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent to-accent2 px-8 py-4 text-[1.05rem] font-semibold text-[#04130d] shadow-[0_8px_30px_rgba(16,185,129,.35)] transition hover:brightness-105"
          >
            <Mail size={20} /> yusuffzdmrr@gmail.com
          </a>
        </Magnetic>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-[0.95rem]">
          <a href="tel:+905531082161" className="text-muted transition hover:text-accent">
            <Phone size={16} className="mr-1.5 inline text-accent" /> +90 553 108 21 61
          </a>
          <a href="https://github.com/Yusufzdmr" target="_blank" className="text-muted transition hover:text-accent">
            <Github size={16} className="mr-1.5 inline text-accent" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/yusuf-özdemir-1a7150234" target="_blank" className="text-muted transition hover:text-accent">
            <Linkedin size={16} className="mr-1.5 inline text-accent" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/kodvisions/" target="_blank" className="text-muted transition hover:text-accent">
            <Instagram size={16} className="mr-1.5 inline text-accent" /> Instagram
          </a>
        </div>
      </Reveal>
    </section>
  );
}
