import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CERNO Wireframe",
  description: "Prototipe low-fidelity aplikasi CERNO untuk validasi alur dan tata letak.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
