import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JAMCOLOCACIO | Instalacion y Reformas de Cocina",
  description:
    "JAMCOLOCACIO desarrolla instalaciones y reformas de cocina bien resueltas, desde la planificacion inicial hasta la entrega final.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-[var(--color-obsidian)] text-[var(--color-ivory)] antialiased`}
      >
        <div className="relative min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_top,_rgba(197,140,72,0.16),_transparent_32%),linear-gradient(180deg,_#141311_0%,_#0c0b09_55%,_#090806_100%)]">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
