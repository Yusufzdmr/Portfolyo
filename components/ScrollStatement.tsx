"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * Scroll'a kilitli (sticky) büyük ifade. Kaydırdıkça kelimeler
 * sırayla soluktan parlağa geçer — peachweb tarzı sinematik sahne.
 */
const TEXT =
  "Ölçeklenebilir backend sistemleri, yapay zekâ entegrasyonu ve uçtan uca ürün geliştirme. Fikirden canlı yayına.";

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ["#93b0a3", "#e8f5ee"]);
  return (
    <motion.span style={{ opacity, color }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

export default function ScrollStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = TEXT.split(" ");

  return (
    <section ref={ref} className="relative mx-auto max-w-[1080px] px-5 py-28 sm:px-10">
      <div className="sticky top-[28vh]">
        <motion.span
          className="mb-6 block font-display text-[0.9rem] font-bold tracking-[3px] text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          NE YAPIYORUM
        </motion.span>
        <p className="font-display text-[clamp(1.7rem,5vw,3.4rem)] font-extrabold leading-[1.18]">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {w}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
