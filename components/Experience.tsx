import Reveal from "./Reveal";
import { timeline } from "@/lib/data";

export default function Experience() {
  return (
    <section id="deneyim" className="mx-auto max-w-[1080px] scroll-mt-20 px-5 py-24 sm:px-10">
      <Reveal>
        <span className="font-display text-[0.9rem] font-bold tracking-[2px] text-accent">03</span>
        <h2 className="mt-1.5 font-display text-[clamp(1.7rem,4vw,2.4rem)] font-bold">Deneyim &amp; Eğitim</h2>
        <div className="mt-3.5 h-1 w-[54px] rounded bg-gradient-to-br from-accent to-accent2" />
      </Reveal>

      <div className="relative mt-9 pl-7">
        <span className="absolute bottom-1.5 left-[7px] top-1.5 w-0.5 bg-line" />
        {timeline.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="relative mb-7">
              <span
                className={`absolute -left-[27px] top-1.5 h-4 w-4 rounded-full shadow-[0_0_0_4px_var(--color-bg)] ${
                  item.kind === "edu" ? "bg-accent2" : "bg-gradient-to-br from-accent to-accent2"
                }`}
              />
              <div className="rounded-2xl border border-line bg-card p-6 transition hover:translate-x-1 hover:border-accent">
                <span className="text-[0.82rem] font-semibold text-accent">{item.date}</span>
                <h3 className="mt-1 font-display text-[1.15rem] font-bold">{item.title}</h3>
                <p className="mb-3 mt-0.5 text-[0.92rem] text-accent2">{item.org}</p>
                {item.points.length > 0 && (
                  <ul className="mb-3.5 grid gap-1.5">
                    {item.points.map((p) => (
                      <li key={p} className="relative pl-5 text-[0.95rem] text-muted before:absolute before:left-0 before:text-accent before:content-['▹']">
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="rounded-md border border-line bg-card2 px-2.5 py-1 text-[0.78rem] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
