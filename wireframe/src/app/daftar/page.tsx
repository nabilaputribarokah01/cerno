import Link from "next/link";
import { AuthFrame } from "@/components/auth-frame";
import { buttonPrimary, fieldClass } from "@/components/wireframe";

export default function RegisterPage() {
  return <AuthFrame eyebrow="akun baru" title="Buat akun" description="Akun bersifat opsional untuk analisis. Anda membutuhkannya hanya untuk menyimpan dan mengelola riwayat pribadi." footer={<p>Sudah memiliki akun? <Link href="/masuk" className="font-bold underline underline-offset-4">Masuk</Link></p>}><form className="space-y-5"><label className="block text-sm font-bold">Email<input className={`${fieldClass} mt-2`} type="email" placeholder="nama@email.com" /></label><label className="block text-sm font-bold">Password<input className={`${fieldClass} mt-2`} type="password" placeholder="Minimal 8 karakter" /></label><label className="block text-sm font-bold">Ulangi password<input className={`${fieldClass} mt-2`} type="password" placeholder="Ketik ulang password" /></label><label className="flex items-start gap-3 text-sm leading-6"><input type="checkbox" className="mt-1" /><span>Saya memahami bahwa hasil CERNO adalah penilaian risiko dan bukan keputusan hukum.</span></label><Link href="/riwayat" className={`${buttonPrimary} w-full`}>Buat akun (mock)</Link></form></AuthFrame>;
}
