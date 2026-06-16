import { GraduationCap, MapPin, Server, Languages } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const facts = [
  { icon: GraduationCap, label: "Yazılım Mühendisliği" },
  { icon: MapPin, label: "İstanbul, Türkiye" },
  { icon: Server, label: "Backend odaklı" },
  { icon: Languages, label: "İngilizce B2" },
];

export default function About() {
  return (
    <section id="hakkimda" className="mx-auto max-w-[1080px] scroll-mt-20 px-5 py-24 sm:px-10">
      <SectionHeading num="01" title="Hakkımda" />

      <Reveal delay={0.1}>
        <p className="mt-9 max-w-[760px] text-[1.05rem] text-muted">
          Yazılım Mühendisliği lisans mezunu, <strong className="text-ink">PHP ve JavaScript</strong>{" "}
          ağırlıklı <strong className="text-ink">backend</strong> geliştirme deneyimine sahip bir
          yazılım geliştiriciyim. CRM sistemlerinde <strong className="text-ink">yapay zeka
          entegrasyonu</strong>, SEO optimizasyonu ve Linux sunucu yönetimi alanlarında aktif
          projelerde görev aldım; yönettiğim SEO çalışması şirket sitesini hedef kelimelerde Google
          ilk sayfasına taşıdı. Hedefim, ölçeklenebilir backend sistemleri kuran ve veri odaklı
          kararlarla ürün performansını iyileştiren bir geliştirici olarak çalışmak.
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
