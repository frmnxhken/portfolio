import React from 'react'
import Container from './Container';

const About = () => {
    const IMAGE1 = "https://images.unsplash.com/photo-1466916119434-d72cdf577c4d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const STICKER_OKE = "https://pbs.twimg.com/media/EvuZf4fVkAYZWBb.jpg"
    return (
        <div className="bg-white">
            <Container style='relative h-[200vh] z-[20]'>
                <div className='min-h-screen flex flex-col justify-center sticky top-0'>
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <div className='w-full sm:w-[35%]'>
                            <h1 className='uppercase font-medium text-xl supports-[animation-timeline]:reveal-text'>Perkenalkan nama saya wahyudi firmansyah, saat ini saya merupakan seorang pelajar it, yang fokus pada web development.</h1>
                        </div>
                        <div className='w-full sm:w-[35%]'>
                            <h1 className='text-6xl font-semibold text-right'>NOT ELEGANT BUT VALUABLE</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About