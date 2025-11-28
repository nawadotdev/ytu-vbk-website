import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PortableTextBlock } from "next-sanity";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReadingTime(content: PortableTextBlock[]) {
  const wordsPerMinute = 200;
  const words = content.filter((block) => block._type === 'block').map((block) => block.children.map((child) => child.text).join('')).join('').split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return {
    minutes,
    words,
  };
}

export function formatDate(date: string, format: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }) {
  return new Date(date).toLocaleDateString("tr-TR", format);
}

export function degreeConverter(degree: string, language: "TR" | "EN") {
  if (language === "TR") {
    return degree.replace("Ph.D.", "Doktora").replace("M.Sc.", "Yüksek Lisans").replace("B.Sc.", "Lisans").replace("B.A.", "Ön Lisans");
  }
  return degree.replace("Ph.D.", "Ph.D.").replace("M.Sc.", "M.Sc.").replace("B.Sc.", "B.Sc.").replace("B.A.", "B.A.");
}