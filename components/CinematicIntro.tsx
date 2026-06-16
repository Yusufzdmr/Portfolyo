"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;
const NAME = "YUSUF ÖZDEMİR";

/**
 * Tam ekran sinematik açılış: harf harf beliren isim, ince ışık çizgisi,
 * ardından perde yukarı kalkar ve sahne (site) görünür.
 * Oturum başına bir kez gösterilir.
 */
export default function CinematicIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("introSeen");
    if (seen || reduce) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("introSeen", "1");
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: EASE }}
        >
          {/* arka ışıltı */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(16,185,129,0.18), transparent 70%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
          />

          <div className="relative overflow-hidden px-6">
            <h1 className="flex flex-wrap justify-center font-display text-[clamp(1.8rem,8vw,4.5rem)] font-extrabold tracking-tight">
              {NAME.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className={ch === " " ? "w-[0.4em]" : "bg-gradient-to-br from-ink to-accent2 bg-clip-text text-transparent"}
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.25 + i * 0.045 }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* ışık çizgisi */}
          <motion.div
            className="relative mt-6 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "min(320px, 70vw)", opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          />

          <motion.p
            className="relative mt-5 text-[0.7rem] font-medium uppercase tracking-[0.5em] text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            KodVisions
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
