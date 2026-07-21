import {
  ShieldCheck,
  Bot,
  Gem,
  IdCard,
  Briefcase,
  Banknote,
  BadgeCheck,
  Globe,
  Smartphone,
  Bike,
  Clapperboard,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";

export type Category = "web" | "mobil" | "dotnet" | "ai" | "other";

export interface Project {
  title: string;
  desc: string;
  icon: LucideIcon;
  cats: Category[];
  tags: string[];
  href: string;
  image?: string;
}

export const filters: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "web", label: "Web" },
  { key: "mobil", label: "Mobil" },
  { key: "dotnet", label: ".NET" },
  { key: "ai", label: "AI / Python" },
  { key: "other", label: "Diğer" },
];

export const projects: Project[] = [
  {
    title: "FilmLoop",
    desc: "Anonim film öneri platformu — keşfet, filtrele, öner, oyla, yorumla, liste oluştur ve arkadaşına anonim öneri gönder. Sinematik karanlık arayüz, ⌘K arama, Film Battle. Lighthouse: Mobil 90 / Masaüstü 99.",
    icon: Clapperboard,
    cats: ["web"],
    tags: ["Next.js 16", "Supabase", "TMDB", "TypeScript"],
    href: "https://filmloop-tr.vercel.app",
    image: "/projects/filmloop.jpg",
  },
  {
    title: "PeriyoTakip",
    desc: "Firmalar için çok kiracılı (multi-tenant) periyodik takip ve yönetim SaaS platformu. Firma kodu + e-posta ile giriş, ilk kurulum akışı ve firma bazlı yönetim.",
    icon: CalendarClock,
    cats: ["web"],
    tags: ["SaaS", "Çok Kiracılı", "Web"],
    href: "https://periyotakip.com",
  },
  {
    title: "Gidonla — Mobil Uygulama",
    desc: "Bisiklet, motosiklet ve elektrikli araç ilan/pazaryeri uygulaması. İlan yönetimi, mesajlaşma, favoriler, push bildirim, mağaza ve OAuth giriş.",
    icon: Smartphone,
    cats: ["mobil"],
    tags: ["React Native", "Expo", "TypeScript", "React Query"],
    href: "https://gidonla.com",
    image: "/projects/gidonla-app.png",
  },
  {
    title: "Gidonla — Web Platformu",
    desc: "gidonla.com — ilan listeleme, mağaza, kategori ve REST API içeren ikinci el bisiklet/motosiklet pazaryeri web platformu.",
    icon: Bike,
    cats: ["web"],
    tags: ["Web", "REST API", "İlan Platformu"],
    href: "https://gidonla.com",
    image: "/projects/gidonla-web.png",
  },
  {
    title: "OtpAuth",
    desc: "Şifresiz SMS (OTP) giriş sistemi. .NET 9 & Blazor WebAssembly, JWT, Clean Architecture, EF Core.",
    icon: ShieldCheck,
    cats: ["dotnet", "web"],
    tags: [".NET 9", "Blazor", "JWT"],
    href: "https://github.com/Yusufzdmr/OtpAuth",
    image: "/projects/otpauth.png",
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
    image: "/projects/danismanlik.png",
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
  { title: "Diller", items: ["PHP", "JavaScript", "Java", "C#", "SQL"] },
  { title: "Backend & Mimari", items: ["MVC", "Katmanlı Mimari", "RESTful API", "CRM", "AI Entegrasyonu", ".NET", "Next.js"] },
  { title: "Mobil & Web", items: ["Mobil Uygulama", "React", "Responsive UI", "HTML5", "CSS3", "Tailwind"] },
  { title: "Veritabanı", items: ["PostgreSQL", "MySQL", "MS SQL", "Sorgu Optimizasyonu"] },
  { title: "DevOps & Araçlar", items: ["Linux", "Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"] },
];

export const timeline = [
  {
    date: "Mart 2026 – Günümüz",
    title: "Yazılım Uygulama ve Destek Elemanı",
    org: "Devups Cloud",
    points: [
      "PHP tabanlı CRM sistemine yapay zeka destekli müşteri etkileşim modülleri entegre ettim",
      "Şirket sitesinin teknik SEO çalışmalarını yönettim; hedef kelimelerde Google ilk sayfa görünürlüğü",
      "Linux sunucu kurulumu, monitoring ve sistem takibi süreçlerini yürüttüm",
      "CRM altyapısında yeni modül geliştirme, hata giderme ve performans iyileştirme",
    ],
    tags: ["PHP", "JavaScript", "SQL", "Linux", "AI Entegrasyonu", "Git"],
    kind: "work" as const,
  },
  {
    date: "2025 – Günümüz",
    title: "Freelance Yazılım Geliştirici",
    org: "Bağımsız",
    points: [
      "PHP & JavaScript ile MVC / katmanlı mimaride özelleştirilmiş web uygulamaları",
      "Teslimler: ödeme sistemli danışmanlık platformu, ilan sitesi + mobil, kuyumculuk kataloğu, düğün salonu sitesi",
      "PostgreSQL/SQL ile veritabanı tasarımı, indeksleme ve sorgu optimizasyonu",
      "Responsive arayüzler ve müşteriye Git tabanlı teslimat akışı",
    ],
    tags: ["PHP", "JavaScript", "PostgreSQL", "MVC", "REST API"],
    kind: "work" as const,
  },
  {
    date: "Tem 2024 – Eki 2024",
    title: "Yazılım Geliştirme Stajyeri",
    org: "Netaş",
    points: [
      "Backend geliştirme görevlerinde OOP prensipleriyle aktif rol",
      "Veritabanı tasarımı ve sorgu optimizasyonu çalışmaları",
      "Hata giderme, test ve bakım süreçlerinde ekip üyesi",
    ],
    tags: ["Backend", "OOP", "SQL"],
    kind: "work" as const,
  },
  {
    date: "2021 – 2025",
    title: "Yazılım Mühendisliği (Lisans)",
    org: "İstanbul Gelişim Üniversitesi",
    points: [],
    tags: [],
    kind: "edu" as const,
  },
];

export const stats = [
  { target: 10, suffix: "+", label: "Proje" },
  { target: 2, suffix: "+", label: "Yıl Deneyim" },
  { target: 12, suffix: "+", label: "Teknoloji" },
  { target: 100, suffix: "%", label: "Tutku" },
];
