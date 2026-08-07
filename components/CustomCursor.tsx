"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * peachweb tarzı özel imleç: küçük nokta + onu takip eden,
 * etkileşimli öğeler üzerinde büyüyen halka (mix-blend ile).
 * Yalnızca işaretçili (fine pointer) cihazlarda görünür.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setEnabled(true); // ilk harekette etkinleşir (effect gövdesinde senkron setState yok)
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [data-cursor="hover"], input, textarea'));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* takip eden halka */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-accent mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          opacity: hovering ? 1 : 0.7,
          translateX: hovering ? -28 : -15,
          translateY: hovering ? -28 : -15,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
      {/* sert merkez nokta */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2"
        style={{ x, y }}
      />
    </>
  );
}
