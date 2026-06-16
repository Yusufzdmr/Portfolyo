"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, FolderOpen, Send, ChevronDown, Download } from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";
import Magnetic from "./Magnetic";

const ROLES = [
  "Yazılım Geliştirici",
  "Backend Geliştirici",
  ".NET Geliştirici",
  "Mobil Geliştirici",
  "PHP & JavaScript",
  "CRM & AI Entegrasyonu",
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const EASE = [0.22, 1, 0.36, 1] as const;

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

const NAME = ["Yusuf", "Özdemir"];
// açılış intro'su ~2.6sn sürüyor; hero içeriği onun ardından sahneye girsin
const INTRO = 2.5;

export default function Hero() {
  const typed = useTyped(ROLES);
  const ref = useRef<HTMLElement>(null);

  // scroll-bağlı sinematik parallax: içerik yukarı süzülür, soluklaşır, hafif küçülür
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <header
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center"
    >
      <motion.div className="relative max-w-[820px]" style={{ y, opacity, scale }}>
        {/* profil */}
        <motion.div
          className="mx-auto mb-8 h-[132px] w-[132px] rounded-full bg-gradient-to-br from-accent to-accent2 p-1"
          initial={{ opacity: 0, scale: 0.6, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE, delay: INTRO }}
        >
          <motion.div
            className="h-full w-full rounded-full"
            animate={{
              boxShadow: [
                "0 12px 40px rgba(16,185,129,.25)",
                "0 12px 70px rgba(16,185,129,.55)",
                "0 12px 40px rgba(16,185,129,.25)",
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: INTRO }}
          >
            <Image
              src="/profile.jpg"
              alt="Yusuf Özdemir"
              width={132}
              height={132}
              priority
              className="h-full w-full rounded-full border-[3px] border-bg object-cover"
            />
          </motion.div>
        </motion.div>

        {/* durum rozeti */}
        <motion.span
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: INTRO + 0.15 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Yeni projelere açığım
        </motion.span>

        {/* isim — kelime kelime maskeyle yükselir */}
        <h1 className="font-display text-[clamp(2.6rem,8vw,5rem)] font-extrabold leading-[1.05]">
          {NAME.map((word, wi) => (
            <span key={word} className="mx-[0.12em] inline-block overflow-hidden align-bottom">
              <motion.span
                className={
                  wi === 1
                    ? "inline-block bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent"
                    : "inline-block"
                }
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: INTRO + 0.25 + wi * 0.12 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-3 min-h-[1.6em] text-[clamp(1.05rem,2.6vw,1.45rem)] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: INTRO + 0.6 }}
        >
          <span className="text-accent2">{typed}</span>
          <span className="animate-pulse text-accent">|</span>
        </motion.p>

        <motion.p
          className="mx-auto mt-5 max-w-[580px] text-muted"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: INTRO + 0.7 }}
        >
          PHP ve JavaScript ile ölçeklenebilir backend sistemleri ve CRM çözümleri geliştiriyorum.
          Yapay zeka entegrasyonu ve sunucu yönetimiyle uçtan uca üretiyorum.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap justify-center gap-3.5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: INTRO + 0.85 }}
        >
          <Magnetic>
            <a
              href={`${BASE}/Yusuf-Ozdemir-CV.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent to-accent2 px-6 py-3 font-semibold text-[#04130d] shadow-[0_8px_30px_rgba(16,185,129,.35)] transition hover:brightness-105"
            >
              <Download size={18} /> CV İndir
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#projeler"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
            >
              <FolderOpen size={18} /> Projelerim
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
            >
              <Send size={18} /> İletişime Geç
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-3 text-[1.4rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: INTRO + 1 }}
        >
          {[
            { href: "https://github.com/Yusufzdmr", label: "GitHub", Icon: Github },
            { href: "https://www.linkedin.com/in/yusuf-özdemir-1a7150234", label: "LinkedIn", Icon: Linkedin },
            { href: "https://www.instagram.com/kodvisions/", label: "Instagram", Icon: Instagram },
            { href: "mailto:yusuffzdmrr@gmail.com", label: "E-posta", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <Magnetic key={label} strength={0.5}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card/40 text-muted transition hover:border-accent hover:text-accent"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            </Magnetic>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#hakkimda"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Aşağı kaydır"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: INTRO + 1.2, duration: 0.6 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: INTRO + 1.2 },
        }}
      >
        <ChevronDown />
      </motion.a>
    </header>
  );
}
