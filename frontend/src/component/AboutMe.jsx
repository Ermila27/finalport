import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import CodeTerminal from "./CodeTerminal"; // Assuming you have a CodeTerminal component
const AboutMe = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  const [penPosition, setPenPosition] = useState({ x: 0, y: 0 });
  const [revealProgress, setRevealProgress] = useState(0);
  const [isPenVisible, setIsPenVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      gsap.from(imageRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }
  }, [isInView, controls]);

  // Track mouse across the whole section
 const handleSectionMouseMove = (e) => {
  if (containerRef.current && imageRef.current) {
    const sectionRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();

    const cursorX = e.clientX - sectionRect.left;

    // Set pen X only
    const clampedX = Math.max(0, Math.min(cursorX, sectionRect.width));
    const fixedPenY = containerRef.current.offsetHeight / 2 - 200;
    setPenPosition({ x: clampedX, y: fixedPenY });
    setIsPenVisible(true);

    // Handle image reveal logic:
    const imageStartX = imageRect.left - sectionRect.left;
    const imageEndX = imageStartX + imageRect.width;

    // Check if pen is within the image's horizontal area
    if (cursorX >= imageStartX && cursorX <= imageEndX) {
      // Calculate reveal progress from 0 (left) to 1 (right)
      const progress = (cursorX - imageStartX) / imageRect.width;
      setRevealProgress(progress);
    } else if (cursorX > imageEndX) {
      setRevealProgress(1); // fully revealed if pen is past right edge
    } else {
      setRevealProgress(0); // hidden if to the left
    }
  }
};


  const handleSectionMouseLeave = () => {
    setIsPenVisible(false);
  };

  const handleImageHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = Math.min(1, Math.max(0, x / rect.width));
    setRevealProgress(progress);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden bg-black text-white py-20 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      {isPenVisible && (
        <motion.img
          src="/pen.png"
          alt="pen cursor"
          className="absolute z-20 pointer-events-none"
          style={{
            left: 0,
            top: -240,
            width: "200px",
            height: "550px",
          }}
          animate={{ x: penPosition.x, y: penPosition.y }}
          transition={{
            x: { type: "spring", stiffness: 500, damping: 30 },
            y: { type: "spring", stiffness: 500, damping: 30 },
          }}
        />
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          animate={controls}
          variants={variants}
        >
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#036562] to-[#2DC8EE]">
              About Me
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            transition={{ delay: 0.2 }}
          >
            Who I am and what I do
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
          <motion.div
            ref={textRef}
            className="flex-1 max-w-2xl relative"
            style={{ cursor: isPenVisible ? "none" : "default" }}
          >
            <motion.h3
              className="text-3xl sm:text-4xl font-bold lg:ml-12 mb-6"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={variants}
              transition={{ delay: 0.6 }}
            >
              Full-Stack Developer &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Digital Craftsman
              </span>
            </motion.h3>

            <motion.p
              className="text-lg text-gray-300 mb-6 lg:ml-12"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={variants}
              transition={{ delay: 0.8 }}
            >
              I'm Ermias Getnet, a passionate full-stack developer specializing in building exceptional digital experiences. With expertise across the entire stack, I bring ideas to life with clean, efficient code and intuitive interfaces.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8 lg:ml-12"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={variants}
              transition={{ delay: 1 }}
            >
              My toolkit includes React, Next.js, Node.js, and modern design principles. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </motion.p>

            <motion.div
              className="flex gap-4 mb-8 lg:ml-12"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={variants}
              transition={{ delay: 1.2 }}
            >
              <a href="https://github.com/ermila27" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all">
                <FaTwitter className="text-xl" />
              </a>
              <a href="mailto:ermiasgetnet677@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all">
                <HiOutlineMail className="text-xl" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={controls}
              variants={variants}
              transition={{ delay: 1.4 }}
            >
              <NavLink
                to="/contact"
                className="relative inline-flex lg:ml-12 items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </NavLink>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-64 h-64 sm:w-96 sm:h-80 group"
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.4 }}
            onMouseLeave={() => setRevealProgress(0)}
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
              <div className="absolute inset-0 border-2 border-white/10 rounded-[20%]"></div>
            </div>
            <motion.div
    className="absolute inset-0 z-40"
    style={{
      backgroundImage: 'url("/webb.svg")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
        filter: 'brightness(0) saturate(50%) invert(79%) sepia(36%) saturate(319%) hue-rotate(128deg) brightness(59%) contrast(50%)',

      opacity: 1 - revealProgress,
      pointerEvents: 'none',
    }}
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
  />

            <div className="absolute inset-0 flex items-center justify-center z-30">
              <motion.img
                ref={imageRef}
                src="/mypic.jpg"
                alt="Ermias Getnet"
                className="w-full h-full object-cover pointer-events-none"
                style={{
                    pointerEvents: 'none',

                  opacity: 0.2 + revealProgress * 0.5,
                  filter: `grayscale(${1 - revealProgress}) contrast(${1 + revealProgress * 0.5})`,
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                  pointerEvents: 'none',
                }}
                transition={{ type: "tween", duration: 0.3 }}
              />
            </div>

          
            <motion.div
              className="absolute inset-0  z-30"
              style={{
                opacity: 1 - revealProgress,
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
              }}
            />
          </motion.div>
        </div>
      </div>
      <CodeTerminal/>
    </section>
  );
};

export default AboutMe;
