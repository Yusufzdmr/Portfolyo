import {
  ShieldCheck,
  Bot,
  Gem,
  IdCard,
  Briefcase,
  Banknote,
  BadgeCheck,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type Category = "web" | "dotnet" | "ai" | "other";

export interface Project {
  title: string;
  desc: string;
  icon: LucideIcon;
  cats: Category[];
  tags: string[];
  href: string;
}

export const filters: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "web", label: "Web" },
  { key: "dotnet", label: ".NET" },
  { key: "ai", label: "AI / Python" },
  { key: "other", label: "Diğer" },
];

export const projects: Project[] = [
  {
    title: "OtpAuth",
    desc: "Şifresiz SMS (OTP) giriş sistemi. .NET 9 & Blazor WebAssembly, JWT, Clean Architecture, EF Core.",
    icon: ShieldCheck,
    cats: ["dotnet", "web"],
    tags: [".NET 9", "Blazor", "JWT"],
    href: "https://github.com/Yusufzdmr/OtpAuth",
  },
  {
    title: "Ultron",
    desc: "Claude destekli sesli yapay zeka asistanı. Whisper STT, Edge TTS, araç kullanımı ve FastAPI web paneli.",
    icon: Bot,
    cats: ["ai"],
    tags: ["Python", "Claude", "FastAPI"],
    href: "https://github.com/Yusufzdmr/ultron",
  },
  {
    title: "Mi Diamond",
    desc: "Mücevher e-katalog & sipariş platformu. Next.js, Supabase ve Tailwind ile yönetim panelli site.",
    icon: Gem,
    cats: ["web"],
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "https://github.com/Yusufzdmr/mi-diamond",
  },
  {
    title: "KPS TC Doğrulama API",
    desc: "NVİ KPSPublic SOAP servisiyle T.C. Kimlik No doğrulayan ASP.NET Core (.NET 8) Web API.",
    icon: IdCard,
    cats: ["dotnet"],
    tags: [".NET 8", "Web API", "SOAP"],
    href: "https://github.com/Yusufzdmr/KpsTcDogrulamaAPI",
  },
  {
    title: "Danışmanlık Sitesi",
    desc: "Randevu + iyzico ödeme + blog + admin panelli danışmanlık web sitesi. PHP & MySQL.",
    icon: Briefcase,
    cats: ["web"],
    tags: ["PHP", "MySQL", "iyzico"],
    href: "https://github.com/Yusufzdmr/Danismanlik-Sitesi",
  },
  {
    title: "Banka Yönetim Sistemi",
    desc: "Komut satırı banka uygulaması — para çekme/yatırma, döviz alım-satım, fatura ödeme. C dili.",
    icon: Banknote,
    cats: ["other"],
    tags: ["C", "CLI"],
    href: "https://github.com/Yusufzdmr/Ogrencilik-Projem-1",
  },
  {
    title: "Ziyaretçi Kayıt Sistemi",
    desc: "Kurum girişlerinde ziyaretçi kaydı için Microsoft Power Apps + Power Automate uygulaması.",
    icon: BadgeCheck,
    cats: ["other"],
    tags: ["Power Apps", "Power Automate"],
    href: "https://github.com/Yusufzdmr/Staj-Proje",
  },
  {
    title: "Portfolyo Sitesi",
    desc: "Şu an görüntülediğiniz portfolyo. Next.js, TypeScript, Tailwind ve Framer Motion ile.",
    icon: Globe,
    cats: ["web"],
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    href: "https://github.com/Yusufzdmr/Portfolyo",
  },
];

export const skills = [
  { title: "Diller", items: ["C#", "JavaScript", "TypeScript", "Python", "Java"] },
  { title: "Web", items: [".NET", "Blazor", "React", "Next.js", "HTML5", "CSS3", "Tailwind", "Bootstrap"] },
  { title: "Veritabanı", items: ["MS SQL", "MySQL", "EF Core", "Supabase"] },
  { title: "Araçlar & AI", items: ["Git", "GitHub", "REST API", "JWT", "OpenAI API", "Hugging Face"] },
];

export const timeline = [
  {
    date: "Tem 2024 – Eyl 2025",
    title: "Yazılım Geliştirici Stajyeri",
    org: "Netaş Telekomünikasyon — BDH Ofisi",
    points: [
      ".NET 8 ve MS SQL Server ile arka uç geliştirme",
      "KPSPublic entegrasyonu ile T.C. kimlik doğrulama özelliği",
      "Personel takip sistemi modülleri (konum, mesai, görev)",
      "HTML/CSS/JS ile mobil uyumlu arayüzler",
    ],
    tags: ["C#", ".NET", "MS SQL", "OpenAI API", "JWT"],
    kind: "work" as const,
  },
  {
    date: "2024 – Günümüz",
    title: "Freelance Web Geliştirici",
    org: "Uzaktan",
    points: [
      "Müşteriler için responsive tanıtım ve e-ticaret siteleri",
      "Modern, mobil uyumlu arayüzler",
      "React & Next.js ile SPA çalışmaları",
    ],
    tags: ["JavaScript", "React", "Next.js", "PHP"],
    kind: "work" as const,
  },
  {
    date: "2021 – 2025",
    title: "Yazılım Mühendisliği (Lisans)",
    org: "İstanbul Gelişim Üniversitesi · GNO 2.78",
    points: [
      "Algoritma Analizi, Veri Madenciliği, Big Data Analitiği",
      "Makine & Derin Öğrenme, NLP, Generative AI",
    ],
    tags: [],
    kind: "edu" as const,
  },
];

export const stats = [
  { target: 8, suffix: "+", label: "Proje" },
  { target: 2, suffix: "+", label: "Yıl Deneyim" },
  { target: 12, suffix: "+", label: "Teknoloji" },
  { target: 100, suffix: "%", label: "Tutku" },
];
