import React from 'react'
import { FaTelegram, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Import social media icons

import { useState } from 'react';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import {motion} from 'framer-motion'
import SphereAnimation from './SphereAnimation';
import { NavLink } from 'react-router-dom';
const Landing = () => {
  const [copied,setCopied]=useState(false);
  const handleCopy = () => {
    const email="ermiasgetnet677@gmail.com"
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500); 
    });
  };
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

    const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.5 } },
  };
  return (
    <div className='  flex w-full  justify-center  items-center text-center sm:h-[90v]  bg-black '>
      <div className='w-full dark:bg-black bg-slate-200' >
      <div className='flex  justify-center  text-sm sm:gap-5 gap-2 py-4  items-center'>
        <div className='flex gap-4 dark:border-0 border border-black/40 dark:text-white text-black  sm:px-8 px-4 rounded-full py-2'>
        <button  onClick={handleCopy} className=' dark:hover:text-white/70 hover:text-black/40 transition-all duration-300'><ContentCopyOutlinedIcon  className=' '/></button> 
         {copied?<p  className='text-orange-600/80 '>copied to clipboard</p>:<a href="mailto:youremail@example.com" className="dark:text-gray-400 text-black/70 hover:text-blue-950 dark:hover:text-white transition-all duration-200 hover:scale-110">
          ermiasgetnet677.com
        </a> } 
         <img src={'/star_icon.svg'} alt="" />
         </div>
        </div>
        
        <div className="flex justify-center items-center">
          <motion.h1
            className="capitalize sm:text-6xl text-black text-3xl dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:to-purple-600 bg-clip-text"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
          >
            Blending Aesthetics & Functionality
            <br />
            <motion.p
              className="text-center mt-6 text-black/60 font-dance dark:text-transparent dark:bg-gradient-to-r dark:from-black/50 dark:via-white/90 dark:to-white/50 bg-clip-text"
              variants={subheadingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              for Impactful Web Experiences
            </motion.p>
          </motion.h1>
        </div>

         <div className=' flex justify-center  mt-6  items-center text-center bg-cover'>
        <div className='relative items-center justify-center flex group '>
        <h3 className='text-slate-500 text-2xl dark:bg-gradient-to-l dark:from-white dark:via-purple-200 dark:to-slate-400 dark:text-transparent bg-clip-text  font-semibold capitalize py-6   '>i'm Ermias full stack deveoloper</h3>
<img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Waving Hand" className="w-6 h-6 dark:bg-black absolute -right-12 hidden  group-hover:flex transition-all duration-500 " />

        </div>
   
</div>  
<NavLink to={'/contact'}  className='w-auto hover:scale-125 sm:text-lg items-center gap-2 bg-slate-700  dark:hover:bg-slate-600  transition-all duration-500 text-white inline-flex px-4 rounded-full text-center hover:bg-black/50 sm:px-8 py-2 mt-8 mb-6 sm:mt-4 font-dance'>lets connect <img className='w-6' src={'/star_group.png'} alt="" />
      
      </NavLink>

    


  

      </div>



      <div className="fixed left-0 sm:top-2/4 transform -translate-y-1/2 flex flex-col items-center z-30">
  {/* Social Media Links with Connecting Lines */}
  <div className="flex flex-col items-center">
    <a
  href="https://t.me/ermila27"
  target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-blue-300 bg-transparent hover:text-blue-600 dark:hover:text-blue-600 transition-all duration-300"
    >
      <FaTelegram size={24} />
    </a>
    {/* Line between icons */}
    <div className="w-[2px] h-6 bg-gray-400 dark:bg-gray-600"></div>

    <a
  href="https://www.instagram.com/ermias6819"
  target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-red-100 hover:text-red-400 dark:hover:text-red-300 transition-all duration-300"
    >
      <FaInstagram size={24} />
    </a>
    {/* Line between icons */}
    <div className="w-[2px] h-6 bg-gray-400 dark:bg-gray-500"></div>

    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-all duration-300"
    >
      <FaLinkedinIn size={24} />
    </a>
    {/* Line between icons */}
    <div className="w-[2px] h-6 bg-gray-400 dark:bg-gray-400"></div>

    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
    >
      <FaGithub size={24} />
    </a>
  </div>
</div>

    
    

    </div>
  )
}

export default Landing
