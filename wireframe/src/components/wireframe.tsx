import Link from "next/link";
import type { ReactNode } from "react";

export const buttonPrimary = "inline-flex min-h-11 items-center justify-center border border-[var(--border)] bg-[var(--ink)] px-5 py-2.5 text-sm font-bold text-[var(--surface)] hover:bg-[var(--primary)] focus-visible:outline-2";
export const buttonSecondary = "inline-flex min-h-11 items-center justify-center border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-bold text-[var(--ink)] hover:bg-[var(--subtle)] focus-visible:outline-2";
export const buttonQuiet = "inline-flex min-h-11 items-center justify-center px-3 py-2 text-sm font-semibold underline underline-offset-4 hover:bg-[var(--subtle)] focus-visible:outline-2";
export const fieldClass = "w-full border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-base placeholder:text-[var(--muted)] focus-visible:outline-2";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 focus-visible:outline-2" aria-label="CERNO, kembali ke beranda">
      <span className="grid size-9 place-items-center border border-[var(--border)] bg-[var(--subtle)] font-mono text-sm font-bold">C</span>
      {!compact && <span><span className="block text-sm font-black tracking-[0.18em]">CERNO</span><span className="block font-mono text-[9px] uppercase tracking-wider text-[var(--muted)]">bedakan sebelum percaya</span></span>}
    </Link>
  );
}

export function PublicHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex min-h-16 max-w-[1180px] items-center justify-between gap-6 px-5">
        <Logo />
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link href="/analisis" className="hover:underline">Analisis</Link>
          <Link href="/panduan" className="hover:underline">Cara kerja</Link>
          <Link href="/lapor" className="hover:underline">Lapor anonim</Link>
        </nav>
        <div className="flex items-center gap-2"><Link className={buttonSecondary} href="/masuk">Masuk</Link><span className="hidden sm:block"><Link className={buttonPrimary} href="/analisis">Mulai periksa</Link></span></div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-[1180px] gap-6 px-5 py-8 text-sm md:grid-cols-[1fr_auto]">
        <div><p className="font-bold">CERNO · wireframe low-fidelity</p><p className="mt-1 max-w-2xl text-[var(--muted)]">Hasil merupakan penilaian risiko, bukan keputusan hukum atau jaminan keamanan.</p></div>
        <div className="flex flex-wrap gap-5"><Link href="/panduan" className="underline underline-offset-4">Privasi & cara kerja</Link><Link href="/lapor" className="underline underline-offset-4">Kanal pelaporan</Link></div>
      </div>
    </footer>
  );
}

const memberLinks = [["Ringkasan", "/riwayat"], ["Analisis baru", "/analisis"], ["Riwayat", "/riwayat"], ["Laporan anonim", "/lapor"]] as const;
const adminLinks = [["Ringkasan", "/admin"], ["Moderasi laporan", "/admin/moderasi"], ["Feedback pengguna", "/admin/feedback"], ["Model & layanan", "/admin/model"]] as const;

export function AppShell({ children, admin = false }: { children: ReactNode; admin?: boolean }) {
  const links = admin ? adminLinks : memberLinks;
  return (
    <div className="min-h-screen bg-[var(--canvas)] lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="border-b border-[var(--border)] bg-[var(--surface)] lg:min-h-screen lg:border-r lg:border-b-0">
        <div className="flex items-center justify-between px-5 py-5 lg:block"><Logo /><span className="border border-[var(--border)] bg-[var(--subtle)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider lg:mt-8 lg:inline-block">{admin ? "ruang admin" : "akun pengguna"}</span></div>
        <nav aria-label={admin ? "Navigasi admin" : "Navigasi akun"} className="flex gap-1 overflow-x-auto border-t border-[var(--border)] p-3 lg:block">
          {links.map(([label, href], index) => <Link key={`${label}-${index}`} href={href} className="block min-w-max border border-transparent px-4 py-3 text-sm font-semibold hover:border-[var(--border)] hover:bg-[var(--subtle)]"><span className="mr-3 font-mono text-xs text-[var(--muted)]">0{index + 1}</span>{label}</Link>)}
        </nav>
        <div className="hidden border-t border-[var(--border)] p-5 text-sm lg:block"><p className="font-bold">{admin ? "Admin Demo" : "Nabila P."}</p><p className="mt-1 text-[var(--muted)]">{admin ? "admin@cerno.test" : "nabila@cerno.test"}</p><Link href="/" className="mt-4 inline-block underline underline-offset-4">Keluar dari demo</Link></div>
      </aside>
      <main className="min-w-0">{children}</main>
    </div>
  );
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <header className="border-b border-[var(--border)] bg-[var(--surface)] px-5 py-7 sm:px-8"><div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">{eyebrow}</p><h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{title}</h1><p className="mt-3 max-w-[70ch] leading-7 text-[var(--muted)]">{description}</p></div>{action}</div></header>;
}

export function WirePanel({ children, className = "", label }: { children: ReactNode; className?: string; label?: string }) {
  return <section className={`border border-[var(--border)] bg-[var(--surface)] ${className}`}>{label && <div className="border-b border-dashed border-[var(--border)] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">{label}</div>}{children}</section>;
}

export function Status({ label, tone = "neutral" }: { label: string; tone?: "neutral" | "dark" | "hatched" }) {
  return <span className={`inline-flex min-h-7 items-center border border-[var(--border)] px-2.5 font-mono text-[10px] font-bold uppercase tracking-wider ${tone === "dark" ? "bg-[var(--ink)] text-[var(--surface)]" : tone === "hatched" ? "wf-grid bg-[var(--subtle)]" : "bg-[var(--surface)]"}`}>{label}</span>;
}

export function Steps({ current }: { current: 1 | 2 | 3 }) {
  const labels = ["Masukkan bahan", "Tinjau", "Lihat hasil"];
  return <ol className="grid border border-[var(--border)] bg-[var(--surface)] sm:grid-cols-3" aria-label="Tahapan analisis">{labels.map((label, index) => { const step = index + 1; return <li key={label} aria-current={step === current ? "step" : undefined} className={`flex items-center gap-3 px-4 py-3 text-sm ${index < 2 ? "border-b border-[var(--border)] sm:border-r sm:border-b-0" : ""} ${step === current ? "bg-[var(--subtle)] font-bold" : "text-[var(--muted)]"}`}><span className="grid size-7 shrink-0 place-items-center border border-[var(--border)] font-mono text-xs">{step < current ? "✓" : step}</span>{label}</li>; })}</ol>;
}

export function Metric({ value, label, note }: { value: string; label: string; note?: string }) {
  return <div className="border-t border-[var(--border)] py-4"><p className="text-2xl font-black">{value}</p><p className="mt-1 text-sm font-bold">{label}</p>{note && <p className="mt-1 font-mono text-[10px] uppercase text-[var(--muted)]">{note}</p>}</div>;
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="border border-dashed border-[var(--border)] bg-[var(--subtle)] px-6 py-10 text-center"><div className="mx-auto grid size-14 place-items-center border border-[var(--border)] bg-[var(--surface)] font-mono">[ ]</div><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[var(--muted)]">{description}</p>{action && <div className="mt-5">{action}</div>}</div>;
}
