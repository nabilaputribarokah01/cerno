"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonPrimary, buttonSecondary, fieldClass, WirePanel } from "@/components/wireframe";

type Mode = "teks" | "url" | "screenshot";

const modes: { id: Mode; label: string; description: string }[] = [
  { id: "teks", label: "Teks pesan", description: "Tempel pesan dari chat, SMS, email, atau media sosial." },
  { id: "url", label: "URL", description: "Masukkan satu tautan yang ingin diperiksa." },
  { id: "screenshot", label: "Screenshot", description: "Pilih gambar percakapan untuk simulasi OCR." },
];

export function AnalyzerPrototype() {
  const [mode, setMode] = useState<Mode>("teks");
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,.55fr)]">
      <WirePanel label="input utama">
        <div className="grid border-b border-[var(--border)] sm:grid-cols-3" role="tablist" aria-label="Jenis bahan yang diperiksa">
          {modes.map((item) => <button key={item.id} type="button" role="tab" aria-selected={mode === item.id} onClick={() => setMode(item.id)} className={`min-h-14 border-b border-[var(--border)] px-4 text-left text-sm font-bold last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 ${mode === item.id ? "bg-[var(--ink)] text-[var(--surface)]" : "bg-[var(--surface)] hover:bg-[var(--subtle)]"}`}>{item.label}</button>)}
        </div>
        <div className="p-5 sm:p-7">
          <p className="mb-5 text-sm leading-6 text-[var(--muted)]">{modes.find((item) => item.id === mode)?.description}</p>
          {mode === "teks" && <label className="block"><span className="mb-2 block text-sm font-bold">Isi pesan mencurigakan</span><textarea className={`${fieldClass} min-h-56 resize-y`} defaultValue="Akun Anda akan diblokir. Verifikasi sekarang melalui https://bank-validasi.example dan kirimkan kode OTP." /><span className="mt-2 block font-mono text-[10px] uppercase text-[var(--muted)]">Data sensitif akan disamarkan sebelum diproses</span></label>}
          {mode === "url" && <label className="block"><span className="mb-2 block text-sm font-bold">Tautan yang ingin diperiksa</span><input className={fieldClass} type="url" defaultValue="https://bank-validasi.example/login" /><span className="mt-2 block font-mono text-[10px] uppercase text-[var(--muted)]">CERNO memeriksa struktur dan reputasi tanpa membuka halaman</span></label>}
          {mode === "screenshot" && <div><label className="wf-grid flex min-h-64 cursor-pointer flex-col items-center justify-center border border-dashed border-[var(--border)] bg-[var(--subtle)] px-6 text-center"><span className="grid size-16 place-items-center border border-[var(--border)] bg-[var(--surface)] font-mono text-xl">[+]</span><span className="mt-5 font-bold">Pilih screenshot percakapan</span><span className="mt-2 max-w-md text-sm text-[var(--muted)]">PNG atau JPG, maksimal 10 MB. File hanya dipakai untuk simulasi tampilan.</span><input type="file" accept="image/png,image/jpeg" className="sr-only" /></label><div className="mt-4 border border-[var(--border)] bg-[var(--subtle)] p-4 text-sm"><p className="font-bold">Setelah file dipilih</p><p className="mt-1 text-[var(--muted)]">Sistem akan menampilkan status OCR, lalu meminta Anda meninjau teks sebelum analisis.</p></div></div>}
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" className={buttonSecondary}>Hapus input</button>
            {mode === "screenshot" ? <Link href="/analisis/review" className={buttonPrimary}>Simulasikan OCR →</Link> : <Link href="/analisis/hasil" className={buttonPrimary}>Analisis risiko →</Link>}
          </div>
        </div>
      </WirePanel>
      <aside className="space-y-5">
        <WirePanel label="sebelum melanjutkan" className="p-5">
          <ol className="space-y-5 text-sm">
            <li className="flex gap-3"><span className="font-mono font-bold">01</span><span><strong className="block">Periksa kembali isinya</strong><span className="mt-1 block text-[var(--muted)]">Hapus informasi yang tidak perlu dibagikan.</span></span></li>
            <li className="flex gap-3"><span className="font-mono font-bold">02</span><span><strong className="block">Jangan buka tautan</strong><span className="mt-1 block text-[var(--muted)]">Masukkan tautannya di sini sebagai teks.</span></span></li>
            <li className="flex gap-3"><span className="font-mono font-bold">03</span><span><strong className="block">Gunakan hasil sebagai pertimbangan</strong><span className="mt-1 block text-[var(--muted)]">Verifikasi melalui kanal resmi.</span></span></li>
          </ol>
        </WirePanel>
        <WirePanel label="privasi" className="p-5 text-sm leading-6"><p className="font-bold">Tidak disimpan secara default</p><p className="mt-2 text-[var(--muted)]">Pesan dan screenshot mentah diproses sementara. Anda dapat memilih menyimpan hasil teredaksi setelah masuk.</p></WirePanel>
      </aside>
    </div>
  );
}
