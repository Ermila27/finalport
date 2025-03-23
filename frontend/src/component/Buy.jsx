import React from "react";
import Marquee from "react-fast-marquee";
import { FaTelegram, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Import social media icons
import { NavLink } from "react-router-dom";

const Buy = () => {
  return (
    <div className="w-full  py-4 bg-gray-500 dark:bg-gray-900">
    
      <Marquee gradient={true} gradientColor={[20, 20, 20]} speed={60}>
        <div className="flex items-center mx-4 space-x-16">
          {/* First Item */}
          <div className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-lg text-2xl font-bold">
           <NavLink  to={'/payment'} >Buy Coffee ☕ if you are inspired by this project</NavLink> 
          </div>

          {/* Second Item */}

          <div className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl shadow-lg text-2xl font-bold">
            <NavLink to={'/payment'} >Try it now 🚀</NavLink>
          </div>

          {/* Third Item (Custom) */}
          <div className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl shadow-lg text-2xl  font-bold">
      <NavLink to={'/payment'}> Support My Work to Keep Creating </NavLink>     
                 </div>
        </div>
      </Marquee>
      <div className="flex  justify-center gap-6 py-4 text-white text-xl">
        <a href="https://github.com/ermila27" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 text-2xl transition duration-300" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="hover:text-gray-400 text-2xl transition duration-300" />
        </a>
        <a href="https://www.instagram.com/ermias6819" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-gray-400  text-2xltransition duration-300" />
        </a>
        <a href="https://t.me/ermila27" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="hover:text-gray-400 text-2xl transition duration-300" />
        </a>
        
      </div>
      <p className="mt-2  text-white/60 hover:text-white text-center">© {new Date().getFullYear()} Ermias Getnet</p>

    </div>
  );
};

export default Buy;
