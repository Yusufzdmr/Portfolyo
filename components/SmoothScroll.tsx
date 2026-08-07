"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis tabanlı atalet (inertia) kaydırma. peachweb tarzı "süzülen" akıcı his.
 * Anchor (#) bağlantılarını da Lenis ile yumuşak hedefler.
 * prefers-reduced-motion açıksa devreye girmez.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // dokunmatik cihazlarda yerel kaydırma daha doğal — Lenis yalnız işaretçili cihazlarda
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // sayfa içi # bağlantılarını Lenis ile yumuşat
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.3 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
