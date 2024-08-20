import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import SUZUNE1 from '../assets/stickers/suzune1.webp'
import SUZUNE2 from '../assets/stickers/suzune2.webp'

const Quote = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yTransform = useTransform(scrollYProgress, [0, 0, 1], [0, 0, -500]);
  const yInverseTransform = useTransform(
    scrollYProgress,
    [0, 0, 3],
    [0, 0, 1200]
  );

  return (
    <motion.div
      ref={ref}
      style={{ translateY: yTransform }}
      className='bg-white h-[250vh] relative'
    >
      <motion.div
        style={{ translateY: yInverseTransform }}
        className='max-w-[1200px] mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center sticky top-0'
      >
        <div className='w-[90%] mx-auto sm:w-[80%] text-left sm:text-center'>
          <h1 className='text-5xl sm:text-7xl uppercase font-bold supports-[animation-timeline]:reveal-text-colorfull'>
            Being alone is not synonymous with being lonely
          </h1>
        </div>
      </motion.div>
      <div className='bg-white border border-1 border-gray-300 rotate-6 p-2 w-[150px] sm:w-[200px] absolute left-[10%] z-[-10] top-[40%]'>
        <img className='w-full' src={SUZUNE1} alt='sticker'/>
      </div>
      <div className='bg-white border border-1 border-gray-300 -rotate-6 p-2 w-[150px] sm:w-[200px] absolute right-[10%] top-[70%]'>
        <img className='w-full' src={SUZUNE2} alt='sticker'/>
      </div>
    </motion.div>
  );
};

export default Quote;
