import React from 'react';
import { projectsdata } from '../../assets/Assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // Import Framer Motion

import Sinleproject from './Sinleproject';
const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,     // Trigger when 50% of the element is visible
  });
  
  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Animate into view
  };

  return (
    <div className='w-full flex justify-center items-center'
      ref={ref}

    >
      <div className='dark:bg-black bg-slate-200'>
      <div className='sm:py-16 py-8 dark:bg-black bg-slate-200 '>
      <motion.h1
            className="text-5xl text-center font-bold mb-6    "
             variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false , amount: 0.5 }} // Trigger animation when 50% of the element is in view
          >
  <span className='font-dance font-semibold  text-black/70 dark:text-white/80'>curated </span>  <span className=' font-dance text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text'>work</span>

  </motion.h1>
  </div>

        < Sinleproject sections={projectsdata} />
      </div>
 

    </div>
  );
};
export default Projects