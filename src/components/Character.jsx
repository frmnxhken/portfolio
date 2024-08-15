import React from 'react'
import Char from '../assets/char.svg'

const Character = () => {
  return (
    <>
      <div className='w-full sticky bottom-0 h-[80vh]'>
        <div className='flex flex-col h-full justify-end items-center'>
          <img className='w-full sm:w-[35%]' src={Char} alt='character' />
        </div>
      </div>
    </>
  )
}

export default Character