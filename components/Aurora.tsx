"use client";

/**
 * Sahnenin arkasında akan animasyonlu gradient mesh (aurora).
 * Tamamen CSS animasyonu — düşük maliyetli, sabit konumlu, etkileşimsiz.
 */
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-[2] overflow-hidden">
      <div
        className="absolute -left-[10%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.55), transparent 60%)",
          animation: "auroraShift 22s ease-in-out infinite, huefloat 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-[12%] top-[8%] h-[52vmax] w-[52vmax] rounded-full opacity-50 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.5), transparent 62%)",
          animation: "auroraShift 28s ease-in-out infinite reverse, huefloat 11s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-25%] left-[28%] h-[50vmax] w-[50vmax] rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(13,148,116,0.55), transparent 60%)",
          animation: "auroraShift 26s ease-in-out infinite, huefloat 13s ease-in-out infinite",
        }}
      />
    </div>
  );
}
