import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* hero section */}
      {/* background hero.png */}
      <section className='relative h-[calc(100vh-4rem)] max-w-[100vw]'>
        {/* responsive image */}
        <Image src="/hero.png" alt="Hero" fill className='object-cover -z-10' />
        {/* in the middle of the image */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-ibm-plex-mono z-50 flex flex-col items-start'>
          <span>data is</span>
          <span className='text-6xl md:text-8xl'>everywhere</span>
        </div>
        {/* bottom middle, bouncing arrow */}
        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-vbk-primary font-bold text-2xl'>
          <span>so we are</span>
          <ArrowDown className='w-10 h-10' />
        </div>
      </section>
    </div>
  )
}

export default Home
