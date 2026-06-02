"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, FolderOpen, Send, ChevronDown, Download } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const ROLES = [
  "Yazılım Geliştirici",
  "Backend Geliştirici",
  ".NET Geliştirici",
  "Mobil Geliştirici",
  "PHP & JavaScript",
  "CRM & AI Entegrasyonu",
];

const BASE = process.env.NODE_ENV === "production" ? "/Portfolyo" : "";

function useTyped(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 45 : 95;
    const t = setTimeout(() => {
      const next = del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export default function Hero() {
  const typed = useTyped(ROLES);

  return (
    <header
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center"
    >
      {/* animasyonlu blob arka plan */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 blur-[60px]">
        <motion.span
          className="absolute left-[8%] top-[-60px] h-[380px] w-[380px] rounded-full bg-accent"
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute right-[6%] top-[20%] h-[320px] w-[320px] rounded-full bg-accent2"
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 0.92, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute bottom-[-40px] left-[40%] h-[300px] w-[300px] rounded-full bg-accent2"
          animate={{ x: [0, -25, 0], y: [0, 35, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative max-w-[760px]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="mx-auto mb-7 h-[130px] w-[130px] rounded-full bg-gradient-to-br from-accent to-accent2 p-1"
          animate={{ boxShadow: ["0 12px 40px rgba(16,185,129,.25)", "0 12px 60px rgba(16,185,129,.5)", "0 12px 40px rgba(16,185,129,.25)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/profile.jpg"
            alt="Yusuf Özdemir"
            width={130}
            height={130}
            priority
            className="h-full w-full rounded-full border-[3px] border-bg object-cover"
          />
        </motion.div>

        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Yeni projelere açığım
        </span>
        <h1 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.1]">
          Yusuf <span className="bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent">Özdemir</span>
        </h1>
        <p className="mt-2.5 min-h-[1.6em] text-[clamp(1rem,2.4vw,1.35rem)] font-semibold">
          <span className="text-accent2">{typed}</span>
          <span className="animate-pulse text-accent">|</span>
        </p>
        <p className="mx-auto mt-4 max-w-[560px] text-muted">
          PHP ve JavaScript ile ölçeklenebilir backend sistemleri ve CRM çözümleri geliştiriyorum.
          Yapay zeka entegrasyonu ve sunucu yönetimiyle uçtan uca üretiyorum.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <a
            href={`${BASE}/Yusuf-Ozdemir-CV.pdf`}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent to-accent2 px-6 py-3 font-semibold text-[#04130d] shadow-[0_8px_24px_rgba(16,185,129,.25)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            <Download size={18} /> CV İndir
          </a>
          <a
            href="#projeler"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <FolderOpen size={18} /> Projelerim
          </a>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Send size={18} /> İletişime Geç
          </a>
        </div>

        <div className="mt-7 flex justify-center gap-5 text-[1.4rem]">
          <a href="https://github.com/Yusufzdmr" target="_blank" className="text-muted transition hover:-translate-y-1 hover:text-accent" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/yusuf-özdemir-1a7150234" target="_blank" className="text-muted transition hover:-translate-y-1 hover:text-accent" aria-label="LinkedIn"><Linkedin /></a>
          <a href="mailto:yusuffzdmrr@gmail.com" className="text-muted transition hover:-translate-y-1 hover:text-accent" aria-label="E-posta"><Mail /></a>
        </div>
      </motion.div>

      <a href="#hakkimda" className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-muted" aria-label="Aşağı kaydır">
        <ChevronDown />
      </a>
    </header>
  );
}
