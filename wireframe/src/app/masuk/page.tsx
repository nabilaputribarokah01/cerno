import Link from "next/link";
import { AuthFrame } from "@/components/auth-frame";
import { buttonPrimary, buttonSecondary, fieldClass } from "@/components/wireframe";

export default function LoginPage() {
  return <AuthFrame eyebrow="akun CERNO" title="Masuk" description="Gunakan akun untuk melihat riwayat teredaksi atau masuk ke ruang admin demo." footer={<p>Belum memiliki akun? <Link href="/daftar" className="font-bold underline underline-offset-4">Daftar</Link></p>}><form className="space-y-5"><label className="block text-sm font-bold">Email<input className={`${fieldClass} mt-2`} type="email" placeholder="nama@email.com" /></label><label className="block text-sm font-bold">Password<input className={`${fieldClass} mt-2`} type="password" placeholder="••••••••" /></label><div className="flex items-center justify-between gap-4 text-sm"><label className="flex items-center gap-2"><input type="checkbox" /> Ingat sesi</label><button type="button" className="underline underline-offset-4">Lupa password?</button></div><Link href="/riwayat" className={`${buttonPrimary} w-full`}>Masuk sebagai pengguna (mock)</Link><Link href="/admin" className={`${buttonSecondary} w-full`}>Masuk sebagai admin (mock)</Link></form></AuthFrame>;
}
