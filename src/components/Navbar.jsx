import React, { useState } from 'react'
import { easeIn, easeOut, motion } from "framer-motion"
import Container from './Container'
import LOGO from '../assets/logo.png'

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const navigations = [
    {
      name: 'INSTAGRAM',
      link: 'https://instagram.com/firmansyah_ken'
    },
    {
      name: 'LINKEDIN',
      link: ''
    },
    {
      name: 'GITHUB',
      link: 'github.com/frmnxhken'
    },
    {
      name: 'EMAIL',
      link: ''
    }
  ];

  const navVariants = {
    hidden: {
      y: '-100%',
      transition: { ease: easeOut, duration: 0.5, delay: 0.5 },
    },
    show: { y: 0, transition: { ease: easeIn, duration: 0.5 } },
  };

  const navOptionMaskVariants = {
    hidden: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },

    show: (childId) => ({
      x: '100%',
      transition: {
        ease: easeIn,
        duration: 0.5,
        delay: 0.5 + childId / 10 + 0.1,
      },
    }),
  };

  const navOptionsTextVariants = {
    hidden: {
      y: 50,
      transition: {
        ease: easeOut,
        duration: 1,
      },
    },

    show: (childId) => ({
      y: 0,
      transition: {
        ease: easeOut,
        duration: 0.5,
        delay: 1 + childId / 10 + 0.1,
      },
    }),
  };
  return (
    <>
      <div className='sticky top-0 py-6 bg-white z-[999]'>
        <Container style='flex justify-between items-center'>
          <img src={LOGO} className='w-[35px]' alt='logo' />
          <p className='hidden sm:block text-md'>0x / 101 / 154 / 141 / 155 / 155 / 141 / 153</p>
          <div
            className='hover:cursor-pointer'
            onClick={() => setNavActive((currState) => !currState)}
          >
            <div className='flex flex-col gap-y-1 items-end'>
              <div className={`w-[35px] bg-black h-[2.5px] ease-in duration-75 ${navActive ? 'translate-y-[4px]' : ''}`}></div>
              <div className={`w-[25px] bg-black h-[2.5px] ease-in duration-75 ${navActive ? '-translate-y-[3px] w-[35px]' : ''}`}></div>
            </div>
          </div>
        </Container>
      </div>
      <motion.div
        className='min-h-screen w-full fixed top-0 left-0 bg-white z-[998] flex flex-col justify-center font-primary gap-y-8'
        initial='hidden'
        animate={navActive ? 'show' : 'hidden'}
        variants={navVariants}
      >
        {navigations.map((navigation, index) => (
          <div className='px-6 sm:px-12 relative flex w-full py-2 hover:bg-black hover:text-white hover:cursor-pointer'>
            <div className='overflow-y-hidden py-2'>
              <motion.h2
                variants={navOptionsTextVariants}
                initial='hidden'
                animate={navActive ? 'show' : 'hidden'}
                className='text-3xl md:text-4xl font-semibold'
                custom={index}
              >
                {navigation.name}
              </motion.h2>
            </div>
            <motion.div
              className='min-w-full min-h-full absolute left-0 top-1 bg-white'
              variants={navOptionMaskVariants}
              initial='hidden'
              animate={navActive ? 'show' : 'hidden'}
              custom={index}
            ></motion.div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default Navbar