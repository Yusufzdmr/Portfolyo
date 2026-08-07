"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// WebGL yalnızca istemcide yüklenir (statik export + ilk yük performansı)
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

/**
 * Hero arkasında duran 3D sahne katmanı. İçerik üstte kalır;
 * sahne yumuşak bir fade ile sahneye girer ve işaretçi olaylarını yutmaz.
 */
export default function HeroScene() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-[1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 1.2, ease: "easeOut" }}
    >
      <Scene3D />
      {/* sahneyi içeriğin arkasında tutmak için hafif karartma + odak maskesi */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,transparent_30%,rgba(7,11,9,0.55)_100%)]" />
    </motion.div>
  );
}
