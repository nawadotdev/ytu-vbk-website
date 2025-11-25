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