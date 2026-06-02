import type { NextConfig } from "next";

// GitHub Pages proje sayfası alt yolda yayınlanır: /Portfolyo
// Üretimde (GitHub Actions) basePath uygulanır; yerelde (npm run dev) uygulanmaz.
const isProd = process.env.NODE_ENV === "production";
const repo = "Portfolyo";

const nextConfig: NextConfig = {
  output: "export", // statik HTML çıktısı (./out) — GitHub Pages için
  basePath: isProd ? `/${repo}` : "",
  images: { unoptimized: true }, // statik export'ta görsel optimizasyonu kapalı
  trailingSlash: true,
};

export default nextConfig;
