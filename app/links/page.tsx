"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Bike, FileText, Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin, Instagram } from "@/components/Icons";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const LINKS = [
  { label: "Portfolyo Sitem", sub: "Projelerim ve deneyimim", href: "/", icon: Globe, internal: true },
  { label: "Gidonla", sub: "Bisiklet & motosiklet pazaryeri", href: "https://gidonla.com", icon: Bike },
  { label: "GitHub", sub: "Açık kaynak çalışmalarım", href: "https://github.com/Yusufzdmr", icon: Github },
  { label: "LinkedIn", sub: "Profesyonel profilim", href: "https://www.linkedin.com/in/yusuf-özdemir-1a7150234", icon: Linkedin },
  { label: "Instagram", sub: "@kodvisions", href: "https://www.instagram.com/kodvisions/", icon: Instagram },
  { label: "CV İndir", sub: "Özgeçmişim (PDF)", href: `${BASE}/Yusuf-Ozdemir-CV.pdf`, icon: FileText, download: true },
  { label: "E-posta", sub: "yusuffzdmrr@gmail.com", href: "mailto:yusuffzdmrr@gmail.com", icon: Mail },
];

export default function LinksPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-5 py-16">
      {/* yumuşak ışıltı blob */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40 blur-[70px]">
        <span className="absolute left-1/2 top-[-80px] h-80 w-80 -translate-x-1/2 rounded-full bg-accent" />
      </div>

      <motion.div
        className="flex w-full max-w-md flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* profil */}
        <div className="h-28 w-28 rounded-full bg-gradient-to-br from-accent to-accent2 p-1 shadow-[0_12px_40px_rgba(16,185,129,.25)]">
          <Image
            src="/profile.jpg"
            alt="Yusuf Özdemir"
            width={112}
            height={112}
            priority
            className="h-full w-full rounded-full border-[3px] border-bg object-cover"
          />
        </div>
        <h1 className="mt-5 font-display text-2xl font-extrabold">Yusuf Özdemir</h1>
        <p className="mt-1 text-sm text-muted">Yazılım Geliştirici · Backend &amp; Mobil</p>
        <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent backdrop-blur">
          <Image src="/kodvisions.png" alt="" width={16} height={16} className="h-4 w-4 rounded" />
          KodVisions
        </span>

        {/* linkler */}
        <div className="mt-9 flex w-full flex-col gap-3.5">
          {LINKS.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.internal || l.href.startsWith("mailto") ? undefined : "_blank"}
                download={l.download}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-accent"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card2 text-accent transition-colors group-hover:bg-accent group-hover:text-[#04130d]">
                  <Icon size={20} />
                </span>
                <span className="flex-1 text-left">
                  <span className="block font-semibold">{l.label}</span>
                  <span className="block text-xs text-muted">{l.sub}</span>
                </span>
                <ArrowUpRight size={18} className="text-muted transition-colors group-hover:text-accent" />
              </motion.a>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-muted">© {new Date().getFullYear()} Yusuf Özdemir — KodVisions</p>
      </motion.div>
    </main>
  );
}
