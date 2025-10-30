import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vbk.yildiz.edu.tr"),
  title: {
    default: "YTÜ Veri Bilimi Kulübü (VBK)",
    template: "%s | YTÜ VBK",
  },
  description: "YTÜ Veri Bilimi Kulübü resmi web sitesi.",
  openGraph: {
    type: "website",
    siteName: "YTÜ VBK",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@veribilimiytu",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://vbk.yildiz.edu.tr",
    languages: { tr: "/", en: "/en" },
  },
  icons: { icon: "/favicon.ico" },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${plusJakartaSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
