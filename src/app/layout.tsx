import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "YTU | VBK",
  description: "Yıldız Teknik Üniversitesi Veri Bilimi Kulübü",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
