  import React from 'react'
  
  import Nav from '../component/nav/Nav'
  import { NavLink } from 'react-router-dom';
  import { useEffect,useRef,useState } from 'react'
  import gsap from "gsap";
   import AboutMe from '../component/AboutMe';
import Layout from '../component/Layout';
import Landing from '../component/Landing'
import TransitionSection from '../component/TransitionSection';
import TechStack from '../component/TechStack'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Projects from '../component/project/Projects'
import MarqueeShowcase from '../component/MarqueeShowcase';
import  CollaborationSection  from '../component/CollaborationSection';
const Home = () => {
  const cursorRef = useRef(null);


  useEffect(() => {
    const cursor = cursorRef.current;
    gsap.set(cursor, { opacity: 0, scale: 0 });

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <>
    
     <Landing/>
     <div className='h-64 dark:bg-black bg-slate-200   flow-hidden relative'>
      <TransitionSection/>

     </div>

    <div className="relative flex flex-col md:flex-row items-center mt-2 sm:mt-0 dark:mt-0 bg-slate-200 dark:bg-black sm:items-start">
  <TechStack />

  </div>
    

<Projects/>
  <AboutMe />
      <MarqueeShowcase />
      <CollaborationSection />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-lg pointer-events-none"
        style={{ zIndex: 9999 }}
      />
      
    </>
  )
}

export default Home
