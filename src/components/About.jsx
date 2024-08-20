import React from 'react'
import Container from './Container';

const About = () => {
    return (
        <div className='bg-white'>
            <Container style='relative h-[200vh]'>
                <div className='min-h-screen flex flex-col justify-center sticky top-0'>
                    <div className='flex flex-col gap-y-2 sm:flex-row justify-between'>
                        <div className='w-full sm:w-[35%]'>
                            <h1 className='uppercase font-medium text-lg sm:text-xl supports-[animation-timeline]:reveal-text'>Perkenalkan nama saya wahyudi firmansyah, saat ini saya merupakan seorang pelajar it, yang fokus pada web development.</h1>
                        </div>
                        <div className='w-full sm:w-[35%]'>
                            <h1 className='text-5xl sm:text-6xl font-semibold text-right'>NOT ELEGANT BUT VALUABLE</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About