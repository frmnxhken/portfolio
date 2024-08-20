import React from 'react'
import ParallaxText from './ParallaxText'

const Hero = () => {
  return (
    <>
      <div className='relative w-full h-screen bg-white'>
        <p className='block sm:hidden text-md text-center pt-4'>0x / 101 / 154 / 141 / 155 / 155 / 141 / 153</p>
        <div className='slider top-[30%]'>
          <h1>IM WEB <span className='bg-black text-white px-6'>DEVELOPER</span></h1>
          <h1>IM WEB <span className='bg-black text-white px-6'>DEVELOPER</span></h1>
          <h1>IM WEB <span className='bg-black text-white px-6'>DEVELOPER</span></h1>
        </div>
        <div className='origin-bottom-left absolute top-[70%] border-2 border-black z-[99] -rotate-3 text-3xl sm:text-5xl font-bold whitespace-nowrap py-4 sm:py-6 tracking-tighter bg-yellow-400'>
          <ParallaxText baseVelocity={-13}>
            ! BRO BERPIKIR ADALAH AYANOUKOJI !  
          </ParallaxText>
        </div>
      </div>
    </>
  )
}

export default Hero