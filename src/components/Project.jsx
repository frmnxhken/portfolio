import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import PROJECT_IMAGE from "../assets/project.jpg"
import ST_ME from "../assets/stme.png"
import ST_REACT from "../assets/streact.png"
import ST_KON from "../assets/stkon.png"
import ST_LIKE from "../assets/stlike.png"

const Project = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const widthScreen = window.innerWidth;

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, widthScreen > 680 ? 0.4 : 0.8]);

    return (
        <section ref={ref} className='py-64 h-[700vh] relative'>
            <motion.div
                style={{ scale }}
                className='w-full sticky top-[20%] sm:top-[-10%] h-screen'>
                <img className='w-full aspect-square object-cover' src={PROJECT_IMAGE} alt="banner" />
            </motion.div>
            <div className='absolute z-[999] top-[40%] left-[5%] sm:left-[15%]'>
                <img className='w-[180px] sm:w-[280px]' src={ST_ME} alt='iamagus'/>
            </div>
            <div className='absolute z-[999] top-[50%] right-[15%]'>
                <img className='w-[100px] sm:w-[200px]' src={ST_REACT} alt='iamagus'/>
            </div>
            <div className='absolute z-[999] top-[60%] left-0 sm:left-[20%]'>
                <img className='w-[200px] sm:w-[280px]' src={ST_LIKE} alt='iamagus'/>
            </div>
            <div className='absolute z-[999] top-[70%] right-[10%] sm:right-[20%]'>
                <img className='w-[250px]' src={ST_KON} alt='iamagus'/>
            </div>
        </section>
    )
}

export default Project
