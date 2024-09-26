import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react'
import PROJECT1 from '../assets/projects/project1.webp'
import PROJECT2 from '../assets/projects/project2.webp'
import PROJECT3 from '../assets/projects/project3.webp'
import ST_ME from '../assets/stickers/stme.webp'
import ST_ME2 from '../assets/stickers/stme2.webp'
import ST_NODE from '../assets/stickers/nodejs.webp'
import ST_TAILWIND from '../assets/stickers/tailwind.webp'
import ST_LARAVEL from '../assets/stickers/laravel.webp'
import ST_PYTHON from '../assets/stickers/python.webp'

const Project = () => {
    const IMAGES = [PROJECT1, PROJECT2, PROJECT3, PROJECT1, PROJECT2, PROJECT3, PROJECT1, PROJECT2, PROJECT3];
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const widthScreen = window.innerWidth;

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, widthScreen > 680 ? 0.4 : 0.7]);

    const imageIndex = useTransform(scrollYProgress, [0, 1], [0, IMAGES.length - 1]);
    const [currentImage, setCurrentImage] = useState(IMAGES[0]);

    useEffect(() => {
        return imageIndex.onChange((index) => {
            const roundedIndex = Math.round(index);
            setCurrentImage(IMAGES[roundedIndex]);
        });
    }, [imageIndex]);


    return (
        <section ref={ref} className='py-32 sm:py-64 h-[700vh] relative'>
            <motion.div
                style={{ scale }}
                className='w-full sticky top-[20%] sm:top-[-10%] h-screen'>
                <img className='w-full aspect-4/3 object-cover' src={currentImage} alt="banner" />
            </motion.div>
            <div className='absolute z-[99] top-[40%] rotate-3 left-[5%] sm:left-[15%]'>
                <img className='w-[180px] sm:w-[280px]' src={ST_ME} alt='sticker'/>
            </div>
            <div className='absolute z-[99] top-[50%] right-0 sm:right-[20%]'>
                <img className='w-[180px] grayscale hover:grayscale-0 sm:w-[200px]' src={ST_NODE} alt='sticker'/>
            </div>
            <div className='absolute z-[99] top-[60%] left-0 sm:left-[10%]'>
                <img className='w-[180px] grayscale hover:grayscale-0 sm:w-[280px]' src={ST_TAILWIND} alt='sticker'/>
            </div>
            <div className='absolute z-[99] top-[70%] right-0 sm:right-[10%]'>
                <img className='w-[180px] grayscale hover:grayscale-0 sm:w-[280px]' src={ST_LARAVEL} alt='sticker'/>
            </div>
            <div className='absolute z-[99] rotate-[35deg] top-[80%] left-0 sm:left-[15%]'>
                <img className='w-[180px] grayscale hover:grayscale-0 sm:w-[280px]' src={ST_PYTHON} alt='sticker'/>
            </div>
            <div className='absolute z-[99] top-[85%] right-[10%] sm:right-[20%]'>
                <img className='w-[180px] sm:w-[250px] -rotate-6' src={ST_ME2} alt='sticker'/>
            </div>
        </section>
    )
}

export default Project
