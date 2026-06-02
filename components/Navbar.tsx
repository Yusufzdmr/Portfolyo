"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#beceriler", label: "Beceriler" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#projeler", label: "Projeler" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 backdrop-blur-md transition-colors sm:px-12 ${
        scrolled ? "border-b border-line bg-bg/90" : "border-b border-transparent bg-bg/50"
      }`}
    >
      <a href="#hero" className="flex items-center gap-2.5 font-display text-[1.05rem] font-bold">
        <Image src="/logo.png" alt="Logo" width={30} height={30} className="h-[30px] w-[30px] object-contain" />
        <span>Yusuf Özdemir</span>
      </a>

      <button
        className="text-ink sm:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menü"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Desktop */}
      <ul className="hidden items-center gap-7 sm:flex">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-[0.95rem] font-medium text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#iletisim"
            className="rounded-full bg-gradient-to-br from-accent to-[#f08a5d] px-4 py-2 text-[0.95rem] font-semibold text-[#1a1205] transition hover:brightness-110"
          >
            İletişim
          </a>
        </li>
      </ul>

      {/* Mobile drawer */}
      {open && (
        <ul className="absolute right-0 top-full flex w-[min(75vw,280px)] flex-col gap-0 border-l border-line bg-bg2 p-5 sm:hidden">
          {[...links, { href: "#iletisim", label: "İletişim" }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3.5 text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
