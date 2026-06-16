"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";
import { projects, filters, type Category } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState<"all" | Category>("all");
  const shown = projects.filter((p) => active === "all" || p.cats.includes(active));

  return (
    <section id="projeler" className="mx-auto max-w-[1080px] scroll-mt-20 px-5 py-24 sm:px-10">
      <div className="mb-8">
        <SectionHeading
          num="04"
          title="Projeler"
          desc="GitHub'daki çalışmalarım — kategoriye göre filtreleyin"
        />
      </div>

      {/* filtreler */}
      <div className="mb-8 flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full border px-4 py-2 text-[0.88rem] font-medium transition ${
              active === f.key
                ? "border-transparent bg-gradient-to-br from-accent to-accent2 font-semibold text-[#04130d]"
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
            const isMobile = p.cats.includes("mobil");
            const isGithub = p.href.includes("github.com");
            return (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ perspective: 1000 }}
              >
                <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-accent hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35)]">
                {/* kapak */}
                <div className={`relative h-40 overflow-hidden ${isMobile ? "bg-gradient-to-br from-[#2a1a12] to-bg2" : ""}`}>
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width:768px) 100vw, 350px"
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        isMobile ? "object-contain py-2" : "object-cover object-top"
                      }`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card2 to-bg2">
                      <Icon className="text-accent/70" size={48} />
                    </div>
                  )}
                  {!isMobile && <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />}
                  <a
                    href={p.href}
                    target="_blank"
                    className="absolute right-3 top-3 rounded-full bg-bg/70 p-2 text-ink backdrop-blur transition hover:text-accent"
                    aria-label={isGithub ? "GitHub" : "Siteyi aç"}
                  >
                    {isGithub ? <Github size={18} /> : <ExternalLink size={18} />}
                  </a>
                </div>

                {/* içerik */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2.5">
                    <Icon className="text-accent" size={22} />
                    <h3 className="font-display text-[1.2rem] font-bold">{p.title}</h3>
                  </div>
                  <p className="mb-4 flex-1 text-[0.92rem] text-muted">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-line bg-card2 px-2.5 py-1 text-[0.78rem] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                </TiltCard>
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
