"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Sinematik bölüm başlığı: numara + maskeyle aşağıdan yükselen büyük başlık.
 */
export default function SectionHeading({
  num,
  title,
  desc,
  center = false,
}: {
  num: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <motion.span
        className="font-display text-[0.9rem] font-bold tracking-[3px] text-accent"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {num}
      </motion.span>

      <div className="mt-1.5 overflow-hidden">
        <motion.h2
          className="font-display text-[clamp(1.9rem,5.5vw,3rem)] font-extrabold leading-[1.05]"
          initial={{ y: "110%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {title}
        </motion.h2>
      </div>

      <motion.div
        className={`mt-4 h-1 rounded bg-gradient-to-r from-accent to-accent2 ${center ? "mx-auto" : ""}`}
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
      />

      {desc && (
        <motion.p
          className={`mt-3 text-muted ${center ? "mx-auto max-w-[520px]" : ""}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}
