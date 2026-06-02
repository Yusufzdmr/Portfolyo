"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="block bg-gradient-to-br from-accent to-[#f08a5d] bg-clip-text font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-transparent"
    >
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative z-[2] mx-auto -mt-10 grid max-w-[1080px] grid-cols-2 gap-4 px-5 sm:grid-cols-4 sm:px-10">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-line bg-card p-5 text-center transition hover:-translate-y-1 hover:border-accent"
        >
          <Counter target={s.target} suffix={s.suffix} />
          <span className="text-[0.85rem] text-muted">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
