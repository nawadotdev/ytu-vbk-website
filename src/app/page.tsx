import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import AboutCarousel from '@/components/Home/AboutCarousel'
import EventsCarousel from '@/components/Home/EventsCarousel'
import EducationCarousel from '@/components/Home/EducationCarousel'
import BlogCarousel from '@/components/Home/BlogCarousel'
import TeamCarousel from '@/components/Home/TeamCarousel'
import { Metadata } from 'next'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: "Veri Bilimi | YTÜ VBK",
  description: "YTÜ Veri Bilimi Kulübü: etkinlikler, eğitimler ve projelerle veri bilimi topluluğu.",
  openGraph: {
    title: "Veri Bilimi | YTÜ Veri Bilimi Kulübü",
    description: "Etkinlikler, eğitimler, blog yazıları ve topluluk projeleriyle veri bilimine adım atın.",
    url: "https://vbk.yildiz.edu.tr/",
    locale: "tr_TR",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@veribilimiytu",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://vbk.yildiz.edu.tr",
  },
};



const HeroSection = () => {
  {/* background hero.png */ }
  return (
    <section className='relative h-[calc(100vh-4rem)] max-w-[100vw]'>
      <h1 className="sr-only">Veri Bilimi</h1>
      {/* responsive image */}
      <Image src="/hero.png" alt="YTÜ Veri Bilimi Kulübü ana görseli" fill className='object-cover -z-10' priority sizes='100vw' />
      {/* in the middle of the image */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-ibm-plex-mono z-50 flex flex-col items-start'>
        <span>data is</span>
        <span className='text-6xl md:text-8xl'>everywhere</span>
      </div>
      {/* bottom middle, bouncing arrow */}
      <a href="#about" className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-vbk-primary font-bold text-2xl">
        <span>so we are</span>
        <ArrowDown className='w-10 h-10' />
      </a>
    </section>
  )
}

const TeamImageSection = () => {
  return (
    <section className='relative'>
      <Image src="/vbk-team-image.png" alt="YTÜ VBK ekip fotoğrafı" width={1728} height={972} loading='lazy' />
      {/* left bottom text */}
      <div className='absolute bottom-4 left-4 md:bottom-8 md:left-8 font-semibold font-ibm-plex-mono z-50 flex items-start gap-2 md:text-xl'>
        <span>from</span>
        <span className='text-white'>ytu.vbk</span>
        <span>import</span>
        <span className='text-white'>team</span>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col-reverse items-center justify-center py-16 gap-16 w-screen px-4 lg:flex-row mt-8">
      <div className="w-full lg:w-2/5">
        <AboutCarousel />
      </div>

      <div className="w-full lg:w-2/5 space-y-4">
        <h2 className="text-4xl font-semibold text-vbk-primary">Hakkımızda</h2>
        <div className="space-y-4 font-medium">
          <p>
            Yıldız Teknik Üniversitesi Veri Bilimi Kulübü, veri odaklı çözüm üretmeyi, analitik düşünmeyi ve teknolojiyi bir araya getiren bir topluluktur. Amacımız, öğrencilerin veri bilimi alanında bilgi ve yetkinliklerini geliştirmelerini sağlamak, projeler ve atölyeler aracılığıyla teoriyi pratiğe dönüştürmelerine destek olmaktır.
          </p>
          <p>
            Kulüp olarak makine öğrenmesi, yapay zeka, istatistik, veri görselleştirme ve programlama gibi alanlarda etkinlikler düzenliyoruz. Topluluğumuz, farklı disiplinlerden gelen öğrencilerin bir araya gelerek deneyim paylaşabilecekleri, öğrenebilecekleri ve birlikte projeler üretebilecekleri bir platform sunar.
          </p>
          <p>
            Biz, meraklı, üretken ve iş birliğine açık bireylerden oluşan bir aileyiz. Amacımız sadece bilgi paylaşmak değil; aynı zamanda veri biliminin gerçek dünya problemlerine uygulanabilir çözümler geliştirme gücünü göstermek ve üyelerimizi bu süreçte yetkin bireyler olarak yetiştirmektir.
          </p>
        </div>
      </div>

    </section>
  )
}

const EventsSection = () => {
  return (
    <section id="events" className="flex flex-col items-center justify-center py-16 gap-16 w-screen px-4 lg:flex-row">
      <div className="w-full lg:w-2/5 space-y-4">
        <h2 className="text-4xl font-semibold text-vbk-primary">Etkinlikler</h2>
        <div className="space-y-4 font-medium">
          <p>
            Veri Bilimi Kulübü olarak, üyelerimizin hem bilgi hem de deneyim kazanmalarını sağlayacak çeşitli etkinlikler düzenliyoruz. Düzenlediğimiz etkinlikler arasında; atölyeler, seminerler, hackathonlar, proje geliştirme oturumları ve teknik eğitimler bulunur.
          </p>
          <p>
            Atölyelerde Python, R, SQL gibi programlama dilleri ve veri analizi araçlarının kullanımı öğretilirken, seminerlerde sektörden uzmanlar deneyimlerini ve güncel trendleri paylaşır. Hackathonlar ve proje geliştirme oturumları, üyelerin öğrendiklerini pratiğe dökerek gerçek veri setleri üzerinde çözüm üretmelerini sağlar.
          </p>
          <p>
            Ayrıca, kulüp olarak sosyal etkinlikler ve networking fırsatları da sunarak, üyelerin farklı disiplinlerden öğrencilerle iletişim kurmalarını ve veri bilimi ekosistemine adım atmalarını destekliyoruz.
          </p>
          <p>
            Tüm etkinlikleri görmek için <Link href="/etkinlikler" className="underline">etkinlikler sayfasını</Link> ziyaret edin.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <EventsCarousel />
      </div>
    </section>
  )
}

const EducationSection = () => {
  return (
    <section id="education" className="flex flex-col-reverse items-center justify-center py-16 gap-16 w-screen px-4 lg:flex-row">
      <div className="w-full lg:w-2/5">
        <EducationCarousel />
      </div>

      <div className="w-full lg:w-2/5 space-y-4">
        <h2 className="text-4xl font-semibold text-vbk-primary">Eğitimler</h2>
        <div className="space-y-4 font-medium">
          <p>
            Yıldız Teknik Üniversitesi Veri Bilimi Kulübü olarak, üyelerimizin veri bilimi alanında güçlü bir temel oluşturmasını sağlamak amacıyla düzenli eğitim programları sunuyoruz. Eğitimlerimiz; veri analizi, makine öğrenmesi, yapay zeka, istatistik ve veri görselleştirme gibi temel konuları kapsar.
          </p>
          <p>
            Programlarımız, hem teorik bilgiyi hem de pratik uygulamayı içerir. Üyelerimiz Python, R, SQL gibi veri bilimi araçlarını öğrenirken, gerçek veri setleri üzerinde projeler geliştirerek öğrendiklerini pekiştirir. Ayrıca ileri seviye eğitimlerde derin öğrenme, doğal dil işleme ve büyük veri analitiği gibi alanlara da değinilir.
          </p>
          <p>
            Eğitimler, hem bireysel öğrenmeyi hem de ekip çalışmasını teşvik ederek, öğrencilerin veri bilimi yetkinliklerini profesyonel düzeye taşımalarını hedefler.
          </p>
          <p>
            Tüm eğitimleri görmek için <Link href="/egitimler" className="underline">eğitimler sayfasını</Link> ziyaret edin.
          </p>
        </div>
      </div>

    </section>
  )
}

const BlogSection = () => {
  return (
    <section id="blog" className="flex flex-col items-center justify-center py-16 gap-16 w-screen px-4 lg:flex-row">
      <div className="w-full lg:w-2/5 space-y-4">
        <h2 className="text-4xl font-semibold text-vbk-primary">VBK Blog</h2>
        <div className="space-y-4 font-medium">
          <p>
            Veri Bilimi Kulübü olarak, bilgi paylaşımını ve güncel gelişmeleri takip etmeyi önemsiyoruz. VBK Blog, üyelerimizin öğrendiklerini, projelerini ve veri bilimi dünyasındaki yenilikleri paylaştığı bir platformdur.
          </p>
          <p>
            Blogda; veri analizi ipuçları, makine öğrenmesi uygulamaları, sektör trendleri, etkinlik özetleri ve eğitim materyalleri yer alır. Üyelerimiz kendi deneyimlerini ve projelerini paylaşarak hem öğrenir hem de topluluğun bilgi birikimine katkıda bulunur.
          </p>
          <p>
            VBK Blog, veri bilimi meraklıları için ilham verici içerikler sunarken, kulüp üyelerinin yazma ve sunum becerilerini geliştirmelerine de olanak sağlar.
          </p>
          <p>
            Tüm blog yazılarını görmek için <Link href="/bloglar" className="underline">blog sayfasını</Link> ziyaret edin.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <BlogCarousel />
      </div>
    </section>
  )
}

const TeamSection = () => {
  return (
    <section id="team" className="flex flex-col-reverse items-center justify-center py-16 gap-16 w-screen px-4 lg:flex-row">
      <div className="w-full lg:w-2/5">
        <TeamCarousel />
      </div>

      <div className="w-full lg:w-2/5 space-y-4">
        <h2 className="text-4xl font-semibold text-vbk-primary">Ekibimiz</h2>
        <div className="space-y-4 font-medium">
          <p>
            Veri Bilimi Kulübü’nün ekibi, farklı disiplinlerden gelen, veri bilimine tutkulu ve üretken öğrencilerden oluşur. Ekibimiz; başkan, başkan yardımcıları, eğitim sorumluları, etkinlik koordinatörleri ve iletişim ekiplerinden oluşarak kulübün tüm faaliyetlerini organize eder.
          </p>
          <p>
            Her bir ekip üyesi, kulüp etkinliklerinin planlanması, eğitimlerin hazırlanması, projelerin yürütülmesi ve üyeler arası iletişimin sağlanmasında aktif rol alır. Ekibimiz, iş birliği ve paylaşım kültürünü benimseyerek, hem kulübün hem de üyelerimizin gelişimine katkıda bulunur.
          </p>
          <p>
            Amacımız, güçlü bir ekip yapısı ile üyelerimize destek olmak, veri bilimi alanında yetkin bireyler yetiştirmek ve kulübü sürekli olarak ileriye taşımaktır.
          </p>
        </div>
      </div>

    </section>
  )
}

const Home = () => {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YTÜ Veri Bilimi Kulübü",
    "url": "https://vbk.yildiz.edu.tr",
    "logo": "https://vbk.yildiz.edu.tr/og.png",
    "sameAs": [
      "https://x.com/veribilimiytu",
      "https://www.instagram.com/veribilimiytu"
    ]
  };
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "YTÜ VBK",
    "url": "https://vbk.yildiz.edu.tr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vbk.yildiz.edu.tr/search?q={query}",
      "query-input": "required name=query"
    }
  };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
      <HeroSection />
      <TeamImageSection />
        <AboutSection />
        <Separator className='max-w-[70vw] mx-auto' />
        <EventsSection />
        <Separator className='max-w-[70vw] mx-auto' />
        <EducationSection />
        <Separator className='max-w-[70vw] mx-auto' />
        <BlogSection />
        <Separator className='max-w-[70vw] mx-auto' />
        <TeamSection />
    </div>
  )
}

export default Home
