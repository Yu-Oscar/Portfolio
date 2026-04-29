import type { Metadata } from "next";
import { Providers } from "./providers";
import { Fira_Code as FontMono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data";

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: PORTFOLIO_DATA.name,
  description: PORTFOLIO_DATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontMono.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
