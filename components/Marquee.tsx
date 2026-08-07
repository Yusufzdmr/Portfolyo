"use client";

import { motion } from "framer-motion";

/**
 * Sonsuz kayan kelime şeridi — ajans/peachweb tarzı bir bant.
 * İki kopya yan yana akar; %50'de başa sarar, dikişsiz döngü.
 */
export default function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-card/30 py-6 backdrop-blur-sm">
      <motion.div
        className="flex w-max gap-12 pr-12"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {row.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-12 whitespace-nowrap font-display text-[clamp(1.4rem,3.5vw,2.4rem)] font-extrabold text-muted/70"
          >
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
      {/* kenar yumuşatma */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
