"use client"

import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const images = [
  {
    src: "https://placehold.co/600x400.png?text=Education1",
    alt: "Yıldız Teknik Üniversitesi Veri Bilimi Kulübü - Eğitimler 1",
  },
  {
    src: "https://placehold.co/400x400.png?text=Education2",
    alt: "YTU - Veri Bilimi Kulübü - Eğitimler 2",
  },
  {
    src: "https://placehold.co/600x800.png?text=Education3",
    alt: "Yıldız Teknik Üniversitesi - VBK - Eğitimler 3",
  },
  {
    src: "https://placehold.co/800x800.png?text=Education4",
    alt: "YTU - VBK - Eğitimler 4",
  },
]

export default function EducationCarousel() {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  )

  return (
    <Carousel opts={{ loop: true }} plugins={[plugin.current]}>
      <CarouselContent>
        {images.map((img, i) => (
          <CarouselItem key={i} className="relative h-96">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
