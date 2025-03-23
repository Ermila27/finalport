



import { FaGithub } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { GiFlatStar } from "react-icons/gi";
import { red } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

const Singleproject = ({ sections = [] }) => {
  // console.log(sections.length)

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (!sections.length) return; // Ensure sections exist

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5 }
      );
    });

    sectionRefs.current.forEach((ref, index) => {
      if (ref && observers[index]) observers[index].observe(ref);
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && sectionRefs.current[index]) observer.unobserve(sectionRefs.current[index]);
      });
    };
  }, [sections]);

  // Prevent errors if sections are empty
  if (!sections.length) return <p className="text-center text-white">No sections available</p>;

  return (
    <div className="py-14 flex justify-center items-center relative">
      <div className="grid md:grid-cols-12 w-full">


      <div className="md:col-span-8  relative">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              style={{ backgroundColor: section.color || "#000" }}
              className="group transition-all duration-200 text-white rounded-2xl m-6  sm:h-screen overflow-hidden flex flex-col "
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
            >
             <div className="flex items-center  ">
              <p className="sm:text-xl text-lg opacity-80 px-6 md:py-6 ">{section.description}</p>
             <a href={`${section.link}`}><FaArrowRight className="text-xl hidden sm:block" /></a> 
             </div>
          <a href={'#'} className="md:p-12  p-4 group-hover:-rotate-2 transition-all duration-200 md:shadow-lg  md:hover:shadow-white md:m-4   ">
             <img className=" rounded-xl h-64 sm:h-32 w-full  object-contain  md:h-full" src={section.image} alt="" />
          </a>
            <div className=" md:hidden "> <ul className="list-none space-y-2 py-2 text-gray-300">
            {(sections[activeIndex]?.subdescribtion || []).map((item, index) => (
              <li key={index} className="flex items-center  gap-2 rounded text-white">
                <GiFlatStar style={{ color: sections[activeIndex]?.text_color || "#FFF" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul></div>

            </motion.div>
          ))}
        </div>
        {/* Sticky Description Section */}
        <div className="col-span-4 m-6 hidden text-black md:block dark:text-white sticky top-20 h-fit">
          <div className="flex items-center">
            <GoDash style={{ color: sections[activeIndex]?.text_color || "#FFF" }} size={50} />
            <p 
style={{ color: sections[activeIndex]?.text_color || "#FFF" }}            className="font-dance text-2xl  font-bold px-2 py-5">
              {sections[activeIndex]?.title || "Loading..."}
            </p>
          </div>
          <p className="px-2 text-black dark:text-white/60">{sections[activeIndex]?.description || "..."}</p>
          <ul className="list-none space-y-2 text-gray-300">
            {(sections[activeIndex]?.subdescribtion || []).map((item, index) => (
              <li key={index} className="flex items-center gap-3 p-2 rounded text-black dark:text-white">
                <GiFlatStar style={{ color: sections[activeIndex]?.text_color || "#FFF" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
         {/* <a href="https://github.com/ermila27"> <FaGithub className="text-2xl m-4 text-black hover:text-gray-400 dark:text-gray-300 dark:hover:text-white/90 transition-all duration-300 "/></a> */}
        </div>

        {/* Scrollable Image Sections */}
     
      </div>
    </div>
  );
};

export default Singleproject;
