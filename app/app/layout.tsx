import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pkpkawe",
  description: "Portfólio de Pkpkawe",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
