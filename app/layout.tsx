import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joeybuilt — One person. Eight products. One backbone.",
    template: "%s — Joeybuilt",
  },
  description:
    "A solo-founded software company building interconnected open-source SaaS products, all powered by Plexo.",
  metadataBase: new URL("https://joeybuilt.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Joeybuilt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-base-950 text-base-200 font-[family-name:var(--font-body)]">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
