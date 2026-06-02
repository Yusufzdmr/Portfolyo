import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolyo-yusufzdmr.vercel.app"),
  title: "Yusuf Özdemir — Yazılım Mühendisi",
  description:
    "Yusuf Özdemir — Yazılım Mühendisi & Full Stack Web Geliştirici. .NET, JavaScript, Python ve modern web teknolojileriyle projeler.",
  authors: [{ name: "Yusuf Özdemir" }],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Yusuf Özdemir — Yazılım Mühendisi",
    description: "Full Stack Web Geliştirici · .NET · JavaScript · Python · AI",
    images: ["/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
