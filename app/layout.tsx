import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SiteBehaviors from "./components/SiteBehaviors";
import { COMPANY, SITE_URL } from "@/lib/company";

const TITLE = "株式会社 悠 — 総合ビルメンテナンス / 京都・大津・草津";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — 株式会社 悠",
  },
  description: COMPANY.description,
  openGraph: {
    title: TITLE,
    description: COMPANY.description,
    type: "website",
    locale: "ja_JP",
    siteName: COMPANY.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10171e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Noto+Sans+JP:wght@400;500;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteBehaviors />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
