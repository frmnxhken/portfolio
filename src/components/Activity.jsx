import React from 'react'
import Container from './Container';

const Activity = () => {
    return (
        <div className='bg-white'>
            <Container style='relative h-[200vh]'>
                <div className='min-h-screen flex flex-col justify-center sticky top-0'>
                    <div className='flex flex-col gap-y-2 sm:flex-row justify-between'>
                        <div className='w-full sm:w-[35%]'>
                            <h1 className='uppercase font-medium text-lg sm:text-xl supports-[animation-timeline]:reveal-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id perferendis illum quibusdam vitae perspiciatis commodi doloremque amet eligendi qui!</h1>
                        </div>
                        <div className='w-full sm:w-[35%]'>
                            <h1 className='text-5xl sm:text-6xl font-semibold text-right uppercase'>life doesn't have to be perfect</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Activity