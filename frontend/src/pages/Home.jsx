  import React from 'react'
  import Nav from '../component/nav/Nav'
  import { NavLink } from 'react-router-dom';
  import { useEffect,useRef,useState } from 'react'
  import gsap from "gsap";
import Layout from '../component/Layout';
  import FireRain from '../component/FireRain'
import Landing from '../component/Landing'
import TechStack from '../component/TechStack'
import ScrollProgressBa from '../component/ScrollProgressBar'
import ScrollProgressBar from '../component/ScrollProgressBar'
import CircularAnimation from '../component/animation/CircularAnimation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import About from '../component/About'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  SingleAanimatin from '../component/animation/SingleAnimation'
import Projects from '../component/project/Projects'
import SphereAnimation from '../component/SphereAnimation'
import Buy from '../component/Buy';
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
     <SphereAnimation/>

     </div>

    <div className="relative flex flex-col md:flex-row items-center mt-2 sm:mt-0 dark:mt-0 bg-slate-200 dark:bg-black sm:items-start">
  <TechStack />

  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={50}
  slidesPerView={1}
  navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 20000 }}
  className="relative w-full min-h-[400px] flex items-center justify-center"
>
  <SwiperSlide>
    {/* Content of the first slide */}
    <div className="relative w-full min-h-[400px] flex items-center justify-center">
      <CircularAnimation />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative w-full min-h-[400px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg text-center">
        <img
          src={'/favicon.ico'}
          alt="Project Icon"
          className="w-16 h-16 mb-4 animate-bounce"
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Let's Connect for Your Next Project
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Collaborate with us to bring your ideas to life. We specialize in modern, scalable, and innovative solutions tailored to your needs.
        </p>
        <NavLink to={'/contact'}  className='w-auto hover:scale-125 sm:text-lg items-center gap-2 bg-slate-700  dark:hover:bg-slate-600  transition-all duration-500 text-white inline-flex px-4 rounded-full text-center hover:bg-black/50 sm:px-8 py-2 mt-8 mb-6 sm:mt-4 font-dance'>lets connect <img className='w-6' src={'/star_group.png'} alt="" />
      
      </NavLink>
      </div>
    </div>
  </SwiperSlide>

  {/* Custom Navigation Arrows */}
  <div className="absolute top-4 right-4 flex space-x-4 z-10">
    <button className="custom-prev bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button className="custom-next bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</Swiper>
</div>
    

<Projects/>
<ScrollProgressBar/> 
  <About />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-lg pointer-events-none"
        style={{ zIndex: 9999 }}
      />
      
    </>
  )
}

export default Home
