import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  {/* background hero.png */ }
  return (
    <section className='relative h-[calc(100vh-4rem)] max-w-[100vw]'>
      {/* responsive image */}
      <Image src="/hero.png" alt="Hero" fill className='object-cover -z-10' />
      {/* in the middle of the image */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-ibm-plex-mono z-50 flex flex-col items-start'>
        <span>data is</span>
        <span className='text-6xl md:text-8xl'>everywhere</span>
      </div>
      {/* bottom middle, bouncing arrow */}
      <div className='absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-vbk-primary font-bold text-2xl'>
        <span>so we are</span>
        <ArrowDown className='w-10 h-10' />
      </div>
    </section>
  )
}

const TeamImageSection = () => {
  return (
    <section className='relative'>
      <Image src="/vbk-team-image.png" alt="Team" width={1728} height={972} />
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

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TeamImageSection />
    </div>
  )
}

export default Home
