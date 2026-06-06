import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PageLoaderProvider } from "@/contexts/PageLoaderContext";
import { PageLoader, FloatingNav, CustomCursor } from "@/components/global";
import { SkipToContent } from "@/components/global/SkipToContent";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dylansius.vercel.app"),
  title: "Dylansius Putra Prasetio — Product Builder × AI Strategist",
  description:
    "Product builder × AI strategist × startup operator. Turning market gaps into working systems, with AI. Based in Indonesia.",
  keywords: ["product builder", "AI strategist", "startup operator", "portfolio", "indonesia"],
  authors: [{ name: "Dylansius Putra Prasetio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dylansius Putra Prasetio — Product Builder × AI Strategist",
    description:
      "Product builder × AI strategist × startup operator. Turning market gaps into working systems, with AI.",
    siteName: "Dylan's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylansius Putra Prasetio — Product Builder × AI Strategist",
    description:
      "Product builder × AI strategist × startup operator. Turning market gaps into working systems, with AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <SkipToContent />
        <PageLoaderProvider>
          <PageLoader />
          <FloatingNav />
          <CustomCursor />
          <main id="main">{children}</main>
        </PageLoaderProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
