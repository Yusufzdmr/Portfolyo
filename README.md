<div align="center">

# 🌐 Yusuf Özdemir — Portfolyo

**Next.js · TypeScript · Tailwind CSS · Framer Motion ile animasyonlu kişisel portfolyo**

Hero'da yazı animasyonu, sayaç istatistikleri, filtrelenebilir proje vitrini,
scroll efektleri ve tam responsive tasarım.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?logo=framer&logoColor=white)

</div>

---

## ✨ Özellikler

- ⌨️ Hero'da **yazılan (typing) dönen ünvan** + animasyonlu gradient blob arka plan
- 📊 Görünürlükte **sayaç animasyonlu** istatistikler
- 🗂️ **Filtrelenebilir proje vitrini** (Tümü / Web / .NET / AI / Diğer) — Framer Motion layout geçişleri
- 📈 Üstte **scroll ilerleme çubuğu**, yukarı-çık butonu
- 🎭 Bölümlerde **scroll reveal** animasyonları
- 📱 Tam responsive + mobil hamburger menü, erişilebilirlik (reduced-motion)

## 🛠️ Teknolojiler

`Next.js 16 (App Router)` · `React 19` · `TypeScript` · `Tailwind CSS 4` · `Framer Motion` · `lucide-react`

## 🚀 Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
```

Üretim derlemesi:
```bash
npm run build
npm run start
```

## 🏛️ Yapı

```
app/
  layout.tsx        → fontlar (Sora + Inter), SEO/OG metadata
  page.tsx          → bölümlerin birleştiği sayfa
  globals.css       → Tailwind 4 teması (renk tokenları)
components/
  Hero · Stats · About · Skills · Experience · Projects · Contact · Footer
  Navbar · ScrollProgress · ToTop · Reveal · Icons
lib/
  data.ts           → projeler, beceriler, deneyim verisi
public/
  logo.png · profile.jpg
```

## 🌍 Yayın

[Vercel](https://vercel.com) üzerinde ücretsiz yayınlanır: repo'yu import et → otomatik deploy.

## 📄 Lisans

MIT — bkz. [LICENSE](LICENSE).
