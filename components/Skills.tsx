import { Code2, LaptopMinimal, Smartphone, Database, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

const icons = [Code2, LaptopMinimal, Smartphone, Database, Wrench];

export default function Skills() {
  return (
    <section id="beceriler" className="mx-auto max-w-[1080px] scroll-mt-20 px-5 py-24 sm:px-10">
      <SectionHeading num="02" title="Beceriler" />

      <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
        {skills.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:border-accent">
                <h3 className="mb-4 flex items-center gap-2.5 text-[1.1rem] font-semibold">
                  <Icon size={20} className="text-accent" /> {s.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((t) => (
                    <span key={t} className="rounded-lg border border-line bg-card2 px-3 py-1.5 text-[0.85rem] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
