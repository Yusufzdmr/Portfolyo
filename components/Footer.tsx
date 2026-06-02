import Image from "next/image";
import { Instagram } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 text-center text-muted">
      <a
        href="https://instagram.com/kodvisions"
        target="_blank"
        className="inline-block transition hover:opacity-85"
        aria-label="KodVisions Instagram"
      >
        <Image
          src="/kodvisions.png"
          alt="KodVisions — Software & Technology"
          width={150}
          height={150}
          className="mx-auto w-36 rounded-2xl border border-line"
        />
      </a>

      <a
        href="https://instagram.com/kodvisions"
        target="_blank"
        className="mt-4 inline-flex items-center gap-2 text-sm transition hover:text-accent"
      >
        <Instagram size={16} className="text-accent" /> @kodvisions
      </a>

      <p className="mt-5 text-[0.85rem]">
        © {new Date().getFullYear()} Yusuf Özdemir — KodVisions ile geliştirildi.
      </p>
    </footer>
  );
}
