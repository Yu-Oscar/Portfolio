import type { Metadata } from "next";
import {Providers} from "./providers";
import { Fira_Code as FontMono} from "next/font/google"
import "./globals.css";


const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Oscar Yu",
  description: "Oscar Yu's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontMono.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

