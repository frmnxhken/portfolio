import React from 'react'
import Container from './Container';
import TextLine from './TextLine';
import { motion } from 'framer-motion';

const Activity = () => {
    return (
        <div className='bg-white'>
            <Container style='relative h-[200vh]'>
                <div className='min-h-screen flex flex-col justify-center sticky top-0'>
                    <div className='flex flex-col gap-y-2 sm:flex-row justify-between'>
                        <div className='w-full sm:w-[35%]'>
                            <h1 className='uppercase font-medium text-lg sm:text-xl supports-[animation-timeline]:reveal-text'>mempunyai hobby seperti menggambar, dan juga mendesain ilustrasi isometric. tertarik dan memperdalami bidang web & mobile app development.</h1>
                        </div>
                        <div className='w-full sm:w-[35%]'>
                            <motion.h1 
                                initial={{
                                    x: '100%',
                                    opacity: 0,
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.4, ease: "easeInOut" }
                                }}
                                className='text-5xl sm:text-6xl font-semibold text-right uppercase'>life doesn't have to be perfect</motion.h1>
                        </div>
                    </div>
                </div>
            </Container>
            <TextLine text="TETAPLAH BERNAFAS!" rotate="left"/>
        </div>
    )
}

export default Activity