"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, FolderOpen, Send, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const ROLES = [
  "Yazılım Mühendisi",
  "Full Stack Web Geliştirici",
  ".NET Geliştirici",
  "AI Meraklısı",
];

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
          className="absolute bottom-[-40px] left-[40%] h-[300px] w-[300px] rounded-full bg-[#f08a5d]"
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
          className="mx-auto mb-7 h-[130px] w-[130px] rounded-full bg-gradient-to-br from-accent to-[#f08a5d] p-1"
          animate={{ boxShadow: ["0 12px 40px rgba(245,185,77,.25)", "0 12px 60px rgba(245,185,77,.5)", "0 12px 40px rgba(245,185,77,.25)"] }}
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

        <p className="font-semibold tracking-wide text-accent">👋 Merhaba, ben</p>
        <h1 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.1]">
          Yusuf Özdemir
        </h1>
        <p className="mt-2.5 min-h-[1.6em] text-[clamp(1rem,2.4vw,1.35rem)] font-semibold">
          <span className="text-accent2">{typed}</span>
          <span className="animate-pulse text-accent">|</span>
        </p>
        <p className="mx-auto mt-4 max-w-[560px] text-muted">
          .NET, JavaScript ve Python ile uçtan uca web çözümleri geliştiriyorum. Şu anda yapay
          zekâ ve uygulamalarını gerçek projelerle keşfediyorum.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <a
            href="#projeler"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent to-[#f08a5d] px-6 py-3 font-semibold text-[#1a1205] shadow-[0_8px_24px_rgba(245,185,77,.25)] transition hover:-translate-y-0.5 hover:brightness-105"
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
