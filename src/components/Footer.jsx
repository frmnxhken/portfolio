import React from 'react'
import Container from './Container'
import Text from "../assets/text.svg"
// import Arrow from "../assets/arrow.svg"

const Footer = () => {
    return (
        <footer className='bg-black z-[999] sticky'>
            <Container style='flex flex-col justify-between h-[90vh] py-32'>
                <div className='flex gap-2 items-end'>
                    <h1 className='text-5xl sm:text-7xl font-semibold text-white'>Lets Talk</h1>
                    {/* <img className='w-[50px] sm:w-[70px]' src={Arrow} alt='icon'/> */}
                </div>
                <div className='flex gap-x-24 text-gray-300 uppercase'>
                    <div className='text-sm sm:text-md'>
                        <p>Wahyudi Firmansyah</p>
                        <p>Pamekasan, Jawa Timur<br />Indonesia.</p>
                    </div>
                    <div className='text-sm sm:text-md flex flex-col gap-y-2'>
                        <a href=''>Instagram</a>
                        <a href=''>Twitter</a>
                        <a href=''>E-mail</a>
                    </div>
                </div>
            </Container>
            <div className='p-8'>
                <img className='w-full' src={Text} alt='text' />
            </div>
        </footer>
    )
}

export default Footer