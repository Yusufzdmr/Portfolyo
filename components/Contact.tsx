import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="iletisim" className="mx-auto max-w-[1080px] scroll-mt-20 px-5 py-24 text-center sm:px-10">
      <Reveal>
        <span className="font-display text-[0.9rem] font-bold tracking-[2px] text-accent">05</span>
        <h2 className="mx-auto mt-1.5 font-display text-[clamp(1.7rem,4vw,2.4rem)] font-bold">
          İletişime Geçelim
        </h2>
        <div className="mx-auto mt-3.5 h-1 w-[54px] rounded bg-gradient-to-br from-accent to-accent2" />
        <p className="mx-auto mt-5 max-w-[520px] text-muted">
          Bir proje, iş birliği veya sadece merhaba demek için — kapım her zaman açık.
        </p>
        <a
          href="mailto:yusuffzdmrr@gmail.com"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent to-accent2 px-8 py-4 text-[1.05rem] font-semibold text-[#04130d] shadow-[0_8px_24px_rgba(16,185,129,.25)] transition hover:-translate-y-0.5 hover:brightness-105"
        >
          <Mail size={20} /> yusuffzdmrr@gmail.com
        </a>
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
        </div>
      </Reveal>
    </section>
  );
}
