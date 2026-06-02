"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "./Icons";
import { projects, filters, type Category } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState<"all" | Category>("all");
  const shown = projects.filter((p) => active === "all" || p.cats.includes(active));

  return (
    <section id="projeler" className="mx-auto max-w-[1080px] scroll-mt-20 px-5 py-24 sm:px-10">
      <div className="mb-8">
        <span className="font-display text-[0.9rem] font-bold tracking-[2px] text-accent">04</span>
        <h2 className="mt-1.5 font-display text-[clamp(1.7rem,4vw,2.4rem)] font-bold">Projeler</h2>
        <div className="mt-3.5 h-1 w-[54px] rounded bg-gradient-to-br from-accent to-[#f08a5d]" />
        <p className="mt-2.5 text-muted">GitHub&apos;daki çalışmalarım — kategoriye göre filtreleyin</p>
      </div>

      {/* filtreler */}
      <div className="mb-8 flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full border px-4 py-2 text-[0.88rem] font-medium transition ${
              active === f.key
                ? "border-transparent bg-gradient-to-br from-accent to-[#f08a5d] font-semibold text-[#1a1205]"
                : "border-line bg-card text-muted hover:border-accent hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* kartlar */}
      <motion.div layout className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-[1.4rem]">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-br from-accent to-[#f08a5d] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-4 flex items-center justify-between">
                  <Icon className="text-accent" size={30} />
                  <a href={p.href} target="_blank" className="text-muted transition hover:-translate-y-0.5 hover:text-ink" aria-label="GitHub">
                    <Github size={22} />
                  </a>
                </div>
                <h3 className="mb-2 font-display text-[1.2rem] font-bold">{p.title}</h3>
                <p className="mb-4 text-[0.92rem] text-muted">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-line bg-card2 px-2.5 py-1 text-[0.78rem] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div className="mt-9 text-center">
        <a
          href="https://github.com/Yusufzdmr"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          <Github size={18} /> Tüm projeleri GitHub&apos;da gör
        </a>
      </div>
    </section>
  );
}
