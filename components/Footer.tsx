import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 text-center text-muted">
      <Image src="/logo.png" alt="Logo" width={36} height={36} className="mx-auto mb-3 opacity-85" />
      <p className="text-[0.88rem]">© {new Date().getFullYear()} Yusuf Özdemir — Tüm hakları saklıdır.</p>
    </footer>
  );
}
