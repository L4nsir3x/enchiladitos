import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enchiladitos - Dulces Enchilados Artesanales",
  description:
    "Los mejores dulces enchilados artesanales, hechos con ingredientes naturales y mucho sabor. Ordena por WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>

        {/* HEADER BONITO */}
        <Header />

        {/* CONTENIDO */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* BACK TO TOP */}
        <BackToTop />

      </body>
    </html>
  );
}
