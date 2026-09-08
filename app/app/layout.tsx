// Next
import localFont from 'next/font/local'
import type { Metadata } from "next";

// Components
import { NavbarTemplate } from "@/src/features/navbar/components/templates/NavbarTemplate";

// CSS
import "./globals.css";

// Fonts
const monocraft = localFont({
  src: "../src/assets/fonts/Monocraft.ttf",
  variable: "--font-monocraft",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pkpkawe",
  description: "Portfólio de Pkpkawe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${monocraft.variable}`} suppressHydrationWarning>
        <NavbarTemplate />

        <main>{children}</main>
      </body>
    </html>
  );
}