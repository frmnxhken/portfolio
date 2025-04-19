import { useScroll, motion } from 'framer-motion'
import React from 'react'

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="fixed top-0 w-full bg-black h-[5px] z-[9999]">
          <motion.div style={{scaleX: scrollYProgress}} className="origin-left h-[5px] bg-yellow-400 sticky top-0 z-[99]"></motion.div>
      </div>
    </>
  )
}

export default ProgressBar