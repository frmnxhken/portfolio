import React from 'react'
import Container from './Container'
import ParallaxText from './ParallaxText'

const Hero = () => {
  return (
    <>
      <div className='relative w-screen h-screen bg-white'>
        <div className="slider top-[30%]">
          <h1>IM WEB <span className='bg-black text-white px-6'>DEVELOPER</span></h1>
          <h1>IM WEB <span className='bg-black text-white px-6'>DEVELOPER</span></h1>
          <h1>IM WEB <span className='bg-black text-white px-6'>DEVELOPER</span></h1>
        </div>
        <div className="origin-bottom-left absolute top-[70%] border-2 border-black z-[99] -rotate-3 text-3xl sm:text-5xl font-bold whitespace-nowrap py-4 sm:py-6 tracking-tighter bg-yellow-400">
          <ParallaxText baseVelocity={-13}>
            ! BRO BERPIKIR ADALAH AYANOUKOJI !  
          </ParallaxText>
        </div>
      </div>
    </>
  )
}

export default Hero