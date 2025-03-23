import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { skillData } from '../../assets/Assets';
const CircularAnimation = () => {
 
  const radius = 200; // Adjust this for perfect spacing

  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef(null);

  // Intersection observer to detect when divs come into view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    }, options);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="relative  transition-all duration-300  flex justify-center items-center ">
      
      <motion.div
  className="absolute w-[150px] h-[150px] border-4  rounded-full  bg-black border-white   text-white  flex items-center justify-center p-4 z-10"
  animate={{
    scale: isInView ? 0.8 : 1, // Shrink when circle is fully visible
    opacity: isInView ? 0.8 : 1, // Slight fade effect
  }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>

  
  <motion.div
    className="text-center  "
    animate={{ opacity: isInView ? 1 : 0.5 }}
    transition={{ duration: 0.5 }}
    
  >
    <div className="text-xl text-white/65 dark:font-dance dark:text-white dark:text-2xl   hover:text-white font-bold">Main Skill</div>
  </motion.div>


</motion.div>



      {/* Surrounding Divs */}
      {skillData.map((skill, index) => (
        <motion.div
          key={index}
          ref={observerRef}
          className="absolute border border-s border-black/40 overflow-hidden w-[200px]  h-[200px]  rounded-full
           bg-black/40 dark:bg-[url('/darkcircle.avif')]
            bg-cover dark:border-white/70 dark:text-white/70 dark:hover:text-white  text-white/60 hover:text-white hover:z-50 backdrop-blur hover:text-xl flex items-center hover:w-72 transition-all duration-500 
            justify-evenly group hover:bg-black/70  p-4" 
           
          initial={{
            opacity: 0,
            scale: 0.5,
            x: 0, // Initially, they stack at the center
            y: 0,
          }}
          animate={{
            opacity: isInView ? 1 : 0.3,
            scale: isInView ? 1 : 0.5,
            x: isInView
              ? 100 * Math.cos((index * Math.PI) / 3) // Distribute along a circle
              : 0,
            y: isInView
              ? 100 * Math.sin((index * Math.PI) / 3) // Distribute along a circle
              : 0,
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
           
          <div className=" text-xl  group-hover:text-2xl">
            <p className=''>{skill.name}</p>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem dolore accusamus, omnis harum, iste dolores qui assumenda rem ullam eaque voluptate voluptates </p> */}
          </div>
         {/* <div className='hidden group-hover:block'>

          <p className='text px-6'>{skill.desc}</p>
         </div> */}
          {/* <a href='/contact'  className="text-3xl absolute bottom-6">{skill.icon}</a> */}

        </motion.div>
      ))}
    </div>
  );
};

export default CircularAnimation;
