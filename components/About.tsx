import { GraduationCap, MapPin, GitBranch, Bot } from "lucide-react";
import Reveal from "./Reveal";

const facts = [
  { icon: GraduationCap, label: "Yazılım Mühendisliği" },
  { icon: MapPin, label: "İstanbul, Türkiye" },
  { icon: GitBranch, label: "Full Stack" },
  { icon: Bot, label: "AI meraklısı" },
];

export default function About() {
  return (
    <section id="hakkimda" className="mx-auto max-w-[1080px] scroll-mt-20 px-5 py-24 sm:px-10">
      <Reveal>
        <span className="font-display text-[0.9rem] font-bold tracking-[2px] text-accent">01</span>
        <h2 className="mt-1.5 font-display text-[clamp(1.7rem,4vw,2.4rem)] font-bold">Hakkımda</h2>
        <div className="mt-3.5 h-1 w-[54px] rounded bg-gradient-to-br from-accent to-[#f08a5d]" />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-9 max-w-[760px] text-[1.05rem] text-muted">
          Web çözümleri geliştirme ve görev otomasyonu konusunda deneyimli, tutkulu bir yazılım
          geliştiriciyim. Hem <strong className="text-ink">frontend</strong> hem{" "}
          <strong className="text-ink">backend</strong> tarafında rahat çalışır; temiz,
          sürdürülebilir ve kullanıcı odaklı uygulamalar üretmeye odaklanırım. Python, JavaScript ve
          .NET ekosisteminde projeler geliştirdim; şu anda yapay zekâ ve alt alanlarını pratik
          projelerle derinleştiriyorum.
        </p>
        <div className="mt-7 flex flex-wrap gap-3.5">
          {facts.map((f) => (
            <div
              key={f.label}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2.5 text-[0.92rem]"
            >
              <f.icon size={18} className="text-accent" />
              {f.label}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
