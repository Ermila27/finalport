import React, { useRef } from 'react'
import Marquee from "react-fast-marquee";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { GiGearStick } from "react-icons/gi";
import { FaHtml5 } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiVuedotjs } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoNetlify } from "react-icons/bi";

import {motion} from 'framer-motion'
import CircularAnimation from './animation/CircularAnimation';
const TechStack = () => {
    
  return (
   

    <div  className='bg-black/0 grid grid-cols-1 relative    justify-around sm:items-center z-30'>
       
  <div className=' md:w-96 sm:w-full flex  items-center bg-slate-200 border-black/30 py-2  dark:bg-black/90 dark:hover:bg-black '>
                  
                  <div className=' w-full'>
                        <h1 className='dark:text-white text-gray-700  p-6 text-lg sm:text-2xl capitalize font-semibold  justify-center items-center'>our <span className='dark:bg-gradient-to-b from-purple-500 dark:via-white to dark:black dark:text-transparent bg-clip-text'>tech</span> stack</h1>
                  <div className='flex  justify-center items-center '>
              <Marquee className=' ' direction='' speed={20}   onmouseover="this.stop();" onmouseout="this.start();"    >
              <div className='flex  gap-6'>
              <div className=''>
                      <div className=' bg-slate-800 p-4 rounded-lg'>
                      <FaGithub color='yellow' size={30}/>
                      </div>
                  </div>
                 
                  <div className=''>
                      <div className=' bg-slate-800  p-4 rounded-lg'>
                      <FaNodeJs color='green' size={30}/>
                       
                      </div>
                  </div>
              
                  <div className=''>
                      <div className='p-4 bg-slate-800 mr-4 rounded-lg'>
                      <BiLogoMongodb  className='text-green-400 ' size={30}/>
                       
                      </div>
                  </div>
              </div>
                
                 
              </Marquee>
              
              <Marquee className=' ' direction='left'  onmouseover="this.stop();" onmouseout="this.start();" speed={25}>
              <div className='flex  gap-6'>
              <div className=''>
                      <div className=' bg-slate-800 p-4   ml-4 rounded-lg'>
                      <FaHtml5 color='orange' size={30}/>
                      </div>
                  </div>
                 
                  <div className=''>
                      <div className=' bg-slate-800  p-4 rounded-lg'>
                      <FaFigma color='purple' size={30}/>
                       
                      </div>
                  </div>
              
                  <div className=''>
                      <div className='p-4 bg-slate-800 rounded-lg'>
                      <SiMysql   className='text-blue-300' size={30}/>
                       
                      </div>
                  </div>
              </div>
                
                 
              </Marquee>
              </div>      
                 
              
              <div className='flex  px-2 justify-center items-center '>
              <Marquee className=' ' direction='left' speed={25}>
              <div className='flex  gap-6'>
              <div className=''>
                      <div className=' bg-slate-800 p-4 rounded-lg'>
                      <FaJava color='white' size={30}/>
                      </div>
                  </div>
                 
                  <div className=''>
                      <div className=' bg-slate-800  p-4 rounded-lg'>
                      <SiVuedotjs  className='text-green-200' size={30}/>
                       
                      </div>
                  </div>
              
                  <div className=''>
                      <div className='p-4 bg-slate-800 mr-4 rounded-lg'>
                      < FiFramer  className='text-blue-400' size={30}/>
                       
                      </div>
                  </div>
              </div>
                
                 
              </Marquee>
              
              <Marquee className=' ' direction='' speed={25}>
              <div className='flex  gap-6'>
              <div className=''>
                      <div className=' bg-slate-800 p-4 rounded-lg'>
                      <FaGitAlt className='text-orange-500' size={30}/>
                      </div>
                  </div>
                 
                  <div className=''>
                      <div className=' bg-slate-800  p-4 rounded-lg'>
                      < FaLinux className='text-white' size={30}/>
                       
                      </div>
                  </div>
              
                  <div className=''>
                      <div className='p-4 mr-4 bg-slate-800 rounded-lg'>
                      <SiTypescript  className='text-blue-700' size={30}/>
                       
                      </div>
                  </div>
              </div>
                
                 
              </Marquee>
              </div>  
              
              
              
              
              
              <div className='flex px-2 justify-center items-center '>
              <Marquee className=' ' direction='' speed={20}>
              <div className='flex  gap-6'>
              <div className=''>
                      <div className=' bg-slate-800 p-4 rounded-lg'>
                      <FaSass color='yellow' size={30}/>
                      </div>
                  </div>
                 
                  <div className=''>
                      <div className=' bg-slate-800  p-4 rounded-lg'>
                      <BiLogoNetlify color='green' size={30}/>
                       
                      </div>
                  </div>
              
                  <div className=''>
                      <div className='p-4 mr-4 bg-slate-800 rounded-lg'>
                      <BiLogoMongodb  color='orange' size={30}/>
                       
                      </div>
                  </div>
              </div>
                
                 
              </Marquee>
              
              <Marquee className=' ' direction='' speed={20}>
              <div className='flex  gap-6'>
              <div className=''>
                      <div className=' bg-slate-800 p-4 rounded-lg'>
                      <FaGithub color='yellow' size={30}/>
                      </div>
                  </div>
                 
                  <div className=''>
                      <div className=' bg-slate-800  p-4 rounded-lg'>
                      < RiTailwindCssFill  className='text-green-500' size={30}/>
                       
                      </div>
                  </div>
              
                  <div className=''>
                      <div className='p-4 mr-4 bg-slate-800 rounded-lg'>
                      <BiLogoNetlify  color='orange' size={30}/>
                       
                      </div>
                  </div>
              </div>
                
                 
              </Marquee>
              </div>  
              <div className='dark:text-white/70 bg-slate-300 text-black hover:bg-slate-100 transition-all duration-200 dark:bg-gray-800 mt-4 py-6 px-4 rounded-lg dark:hover:text-white dark:hover:bg-black  w-full    text-lg'>
              <GiGearStick size={30} className=''/>
              
              <p className='text-opacity-80 dark:text-white '>I don’t just write code; I craft digital ecosystems</p>
              </div>
              
              
              
                  </div>
              
              
                    
                     
                   </div>

                 
    </div>
    
  
  )
}

export default TechStack


