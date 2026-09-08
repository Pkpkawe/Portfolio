// Next
import type { Metadata } from "next";

// Components
import { NavbarTemplate } from "@/src/features/navbar/components/templates/NavbarTemplate";

// Providers
import { ThemeProvider } from '@/src/core/theme/contexts/ThemeContext';
import { FontProvider } from "@/src/core/fonts/providers/FontProvider";

// CSS
import "./globals.css";

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
      <body suppressHydrationWarning>
        <FontProvider>
          <ThemeProvider>
            <NavbarTemplate />
            <main>{children}</main>
          </ThemeProvider>
        </FontProvider>
      </body>
    </html>
  );
}