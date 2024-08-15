import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <div className='sticky top-0 py-8 bg-white z-[999]'>
        <Container style='flex justify-between items-center'>
            <h1 className='text-xl font-semibold'>WXDI.</h1>
            <p className='hidden sm:block text-md'>0x / 101 / 154 / 141 / 155 / 155 / 141 / 153</p>
            <a className='text-sm'>Instagram</a>
        </Container>
    </div>
  )
}

export default Navbar