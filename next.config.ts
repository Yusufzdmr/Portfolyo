import type { NextConfig } from "next";

// basePath yalnızca GitHub Pages için gerekir (proje alt yolu: /Portfolyo).
// GitHub Actions build'inde PAGES_BASE_PATH=/Portfolyo verilir.
// Vercel/Netlify gibi kök dizinde yayında bu boş kalır → site kökten çalışır.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // statik HTML çıktısı (./out)
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
