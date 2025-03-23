import { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import gsap from "gsap";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion"; // Import Framer Motion

import { NavLink } from "react-router-dom";
const AboutMe = () => {
  const [hovered, setHovered] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 3, ease: "easeOut" } }, // Animate into view
  };

  useEffect(() => {
    if (hovered) {
      gsap.to(imageRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 2 });
    } else {
      gsap.to(imageRef.current, { clipPath: "inset(0% 100% 0% 0%)", duration: 2 });
    }
  }, [hovered]);

  return (
    <section id="about-section" className="    text-white p-8 relative">
      {/* Left Conte 
      nt */}
   
<div className="flex flex-col  dark:text-slate-200 text-black md:flex-row items-center justify-center gap-36">
<div className="max-w-lg">
<motion.h1
            className="text-5xl font-bold mb-6"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false , amount: 0.5 }} // Trigger animation when 50% of the element is in view
          >
            Full-Stack Developer and a little bit of{" "}
            <span className="font-dance text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text">
              everything
            </span>
          </motion.h1>        <p className=" text-lg dark:text-neutral dark:text-gray-300 ">
        I'm Ermias Getnet, a dedicated full-stack developer with a deep passion for building interactive and efficient web applications.  I thrive on writing clean and scalable code.
        
        <br /><br /> My expertise includes React, Next.js, and Node.js.

Beyond coding, I’m constantly exploring new ideas, staying up-to-date with the latest tech trends, and embracing curiosity in all aspects of life.
<br /><br />
 I believe every day is an opportunity to innovate, grow, and make a meaningful impact.        </p>
      </div>

      {/* Right Image Section */}
      <div
        ref={containerRef}
        className="relative w-64 h-64 rounded-full flex dark:border-white/50 border-black/60 dark:hover:border-white transition-all duration-200 border-2 items-center justify-center overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Placeholder Icon */}
        
        <FaUser className="text-6xl text-black dark:text-gray-400 absolute transition-opacity duration-500" style={{ opacity: hovered ? 0 : 1 }} />
        {/* Image Reveal Effect */}
        <img
          ref={imageRef}
          src={'/mypic.jpg'}
          alt="Profile"
          className="absolute w-full h-full object-cover  rounded-xl shadow-lg"
          style={{ clipPath: "inset(0% 100% 0% 0%)" }}
        />
      </div>
</div>
<hr className="my-12 border-gray-600" />
{/* Custom Cursor */}
      <div className="py-24 items-center text-black bg-slate-200 text-dark dark:bg-black justify-center">

        <div className="flex justify-center items-center py-4 rounded-lg  " >
        <div className="dark:bg-gray-800 dark:text-white bg-slate-200 rounded-lg shadow-lg p-8 text-center">
  <h1 className="sm:text-6xl text-2xl font-bold font-dance mb-6">
    I'm available for <span className= "dark:text-gray-400 text-gray-600">full-time roles</span> <br />
    <span className="font-extrabold bg-gradient-to-r from-purple-600 dark:to-white to-black text-transparent bg-clip-text ">& freelance projects</span>
  </h1>
  <p className="text-lg sm:text-2xl dark:text-white/90 font-dance mb-8">
    I thrive on crafting dynamic web applications and delivering seamless user experiences.
  </p>
  <NavLink
    to={'/contact'}
    className="inline-flex items-center gap-3 bg-gray-700 hover:bg-gray-500  text-white  font-semibold text-lg sm:text-xl px-6 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
  >
    Let's Connect
    <img className="w-6" src={'/star_group.png'} alt="Star Icon" />
  </NavLink>
</div>
      
        </div>
   
      </div>
     
    </section>
  );
};

export default AboutMe;
