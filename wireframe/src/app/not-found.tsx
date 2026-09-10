import Link from "next/link";
import { Logo, buttonPrimary, buttonSecondary } from "@/components/wireframe";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center px-5 py-12"><div className="w-full max-w-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12"><Logo /><p className="mt-16 font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">404 · halaman tidak ditemukan</p><h1 className="mt-4 text-4xl font-black">Tautan ini tidak menuju layar wireframe.</h1><p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">Periksa alamatnya atau kembali ke alur utama CERNO.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/" className={buttonPrimary}>Kembali ke beranda</Link><Link href="/analisis" className={buttonSecondary}>Buka analisis</Link></div></div></main>;
}
