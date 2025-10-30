"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, Twitter, Mail, MapPin, Globe } from "lucide-react";

const quickLinks: { label: string; href: string }[] = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Etkinlik Takvimi", href: "/etkinlikler" },
  { label: "Eğitimler", href: "/egitimler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur-xl">
      <a href="#main" className="sr-only focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary px-3 py-1 inline-block">
        İçeriğe atla
      </a>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center  ">
          <div className="space-y-4 min-w-0 text-center sm:text-left">
            <Link href="/" aria-label="YTÜ VBK Ana Sayfa" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0">
                <Image src="/logo.png" alt="YTÜ VBK Logo" fill className="object-contain" priority />
              </div>
              <span className="text-base sm:text-lg lg:text-xl font-semibold tracking-tight truncate">
                YTÜ Veri Bilimi Kulübü
              </span>
            </Link>

            <p className="mx-auto sm:mx-0 text-sm text-muted-foreground leading-relaxed max-w-md">
              YTÜ Veri Bilimi Kulübü; etkinlikler, eğitimler ve projelerle veri bilimi topluluğunu büyütür. Öğren, üret, paylaş.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
              {[
                { href: "https://www.instagram.com/ytuveribilimi", label: "Instagram", Icon: Instagram },
                { href: "https://x.com/veribilimiytu", label: "X", Icon: Twitter },
                { href: "https://tr.linkedin.com/company/ytuveribilimi", label: "LinkedIn", Icon: Linkedin },
                { href: "https://www.youtube.com/@ytudatascience7473", label: "YouTube", Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border hover:bg-accent"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground text-center sm:text-left">Hızlı Bağlantılar</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4 text-sm">
              {quickLinks.map((i) => (
                <li key={i.href} className="truncate">
                  <Link href={i.href} className="font-medium hover:underline">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 col-span-2 md:col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground text-center sm:text-left">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-muted-foreground shrink-0" />
                <Link href="mailto:veribilimiytu@gmail.com" className="font-medium hover:underline wrap-break-word">
                  veribilimiytu@gmail.com
                </Link>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground shrink-0" />
                <div className="font-medium">
                  Yıldız Teknik Üniversitesi, İstanbul
                  <div>
                    <Link
                      href="https://maps.google.com/?q=Yildiz+Teknik+Universitesi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:underline"
                    >
                      Haritada aç
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 text-muted-foreground shrink-0" />
                <div className="flex items-center gap-2">
                  <Link href="/tr" className="font-medium hover:underline" hrefLang="tr">
                    Türkçe
                  </Link>
                  <span className="text-muted-foreground">/</span>
                  <Link href="/en" className="font-medium hover:underline" hrefLang="en">
                    English
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-border" />

        <div className="mt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="text-center md:text-left">© {new Date().getFullYear()} YTÜ Veri Bilimi Kulübü. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            <Link href="/kvkk" className="hover:underline">
              KVKK / Aydınlatma
            </Link>
            <Link href="/gizlilik" className="hover:underline">
              Gizlilik
            </Link>
            <Link href="/cerez-politikasi" className="hover:underline">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
