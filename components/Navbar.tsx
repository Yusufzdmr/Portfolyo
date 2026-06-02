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
      <a href="#hero" className="group flex items-center gap-3 font-display font-bold">
        <Image
          src="/kodvisions.png"
          alt="KodVisions"
          width={40}
          height={40}
          className="h-10 w-10 rounded-xl border border-line object-cover transition group-hover:border-accent"
        />
        <span className="flex flex-col leading-none">
          <span className="text-[1.02rem]">Yusuf Özdemir</span>
          <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-accent">KodVisions</span>
        </span>
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
            className="rounded-full bg-gradient-to-br from-accent to-accent2 px-4 py-2 text-[0.95rem] font-semibold text-[#04130d] transition hover:brightness-110"
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
