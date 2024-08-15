import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Quote = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
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
      className="bg-white h-[250vh]"
    >
      <motion.div
        style={{ translateY: yInverseTransform }}
        className="max-w-[1200px] mx-auto px-4 pt-24 min-h-screen flex flex-col justify-center sticky top-0"
      >
        <div className="w-[90%] mx-auto sm:w-[80%] text-center">
          <h1 className="text-5xl sm:text-7xl uppercase font-bold supports-[animation-timeline]:reveal-text-colorfull">
            jangan menganggap remeh siapapun, karena siapapun bisa menjadi apapun.
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Quote;
