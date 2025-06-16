import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';


const GlobalScrollIndicator = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const checkScrollable = () => {
      setIsScrollable(document.body.scrollHeight > window.innerHeight);
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  return (
    <motion.div
      className="fixed right-6 bottom-6 flex flex-col items-center z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isScrollable && scrollYProgress.get() < 0.95 ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-cyan-300 text-xs uppercase tracking-widest mb-2"
      >
        Scroll
      </motion.div>
      
      {/* Animated line with progress indicator */}
      <div className="relative h-20 w-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/30 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-cyan-400 origin-bottom"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
      
      {/* Pulsing dot at bottom */}
      <motion.div
        className="w-2 h-2 rounded-full bg-cyan-400 mt-1"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

const SocialLinks = () => {
  const socials = [
    { name: 'GitHub', url: 'https://github.com', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { name: 'Dribbble', url: 'https://dribbble.com', icon: 'M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm10-12c0 1.453-.36 2.823-.994 4.027-1.333-2.06-3.333-3.027-5.006-3.027-1.333 0-2.667.667-4 2-.667.667-1.333 1.333-2 2-1.333-4-2-7.333-2-10 4.667 0 9.333 0 14 0zm-16 0c0-1.453.36-2.823.994-4.027 1.333 2.06 3.333 3.027 5.006 3.027 1.333 0 2.667-.667 4-2 .667-.667 1.333-1.333 2-2 1.333 4 2 7.333 2 10-4.667 0-9.333 0-14 0z' }
  ];

  return (
    <div className="fixed left-6 bottom-1/2 transform translate-y-1/2 z-30 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
                <div className="h-12 w-px bg-gradient-to-b from-cyan-400/30 via-cyan-400/50 to-cyan-400/30 mt-4" />

        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
          >
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-cyan-300 group-hover:text-white transition-colors duration-300"
            >
              <path d={social.icon} />
            </svg>
            
            {/* Tooltip */}
            <span className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.name}
            </span>
          </motion.a>
        ))}
        
        {/* Vertical line */}
        <div className="h-20 w-px bg-gradient-to-b from-cyan-400/30 via-cyan-400/50 to-cyan-400/30 mt-4" />
      </div>
    </div>
  );
};

// Futuristic UI Components
const CyberButton = ({ children, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 168, 255, 0.7)' }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 bg-black/20 backdrop-blur-md border border-cyan-400/30 text-cyan-300 rounded-none
               relative overflow-hidden group"
  >
    <span className="relative z-10">{children}</span>
    <motion.span
      className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.3, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </motion.button>
);



const HolographicCard = ({ children }) => (
  <div className="relative p-8 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg
                 overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9InJnYmEoMCwxNjgsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />
    {children}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </div>
  </div>
);

const Landing = () => {
  
  const [activePhrase, setActivePhrase] = useState(0);
  const phrases = [
    "DESIGNING TOMORROW",
    "ENGINEERING FUTURES",
    "CREATING REALITIES"
  ];


  
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
const GlitchText = React.memo(({ text }) => (
  <span className="relative inline-block">
    {/* Main text - crisp and clear */}
    <span className="relative text-white font-bold z-10">{text}</span>
    
    {/* Glitch layers - subtle and non-distracting */}
    <span className="absolute left-0 top-0 w-full h-full text-cyan-400 opacity-30 animate-glitch1 select-none pointer-events-none">
      {text}
    </span>
    <span className="absolute left-0 top-0 w-full h-full text-pink-400 opacity-20 animate-glitch2 select-none pointer-events-none">
      {text}
    </span>
    
    {/* Gradient overlay - subtle effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-pink-500/10 z-0 pointer-events-none" />
  </span>
));



// Variants for the default (wipe) animation
const defaultTextVariants = {
  initial: {
    opacity: 0,
    y: -10,
    color: "#3b82f6",
    textShadow: "0 0 0px rgba(0,255,247,0)",
  },
  animate: {
    opacity: 1,
    y: 0,
    color: "#ffffff",
    textShadow: `
      0 0 8px rgba(0, 255, 247, 0.7),
      0 0 16px rgba(0, 168, 255, 0.4)`,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: 10,
    color: "#3b82f6",
    textShadow: "0 0 0px rgba(0,255,247,0)",
  }
};

const middleTextVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    rotateX: 45,
    color: "#ff64c8",
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    color: "#ffffff",
    textShadow: `
      0 0 10px rgba(255, 100, 200, 0.6),
      0 0 20px rgba(255, 50, 150, 0.3)`,
    transition: { 
      rotateX: { duration: 0.7, ease: "backOut" },
      scale: { duration: 0.5 }
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    rotateX: -45,
    color: "#ff64c8",
  }
};

const enhancedTextVariants = {
  initial: {
    opacity: 0,
    rotateX: 45,
    skewY: 8,
    scale: 0.8,
    filter: "blur(5px) brightness(1.4)",
    color: "#facc15",
    textShadow: "0 0 0px rgba(250,204,21,0)",
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    skewY: 0,
    scale: 1,
    color: "#ffffff",
    textShadow: "0 0 12px #facc15, 0 0 6px #f59e0b",
  },
  exit: {
    opacity: 0,
    rotateX: -45,
    skewY: -8,
    scale: 0.8,
    color: "#facc15",
    textShadow: "0 0 0px rgba(250,204,21,0)",
  },
};

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 font-mono">
           <SocialLinks />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgNTBMNTAgMFpNNTEgNDlMNDkgNTFaTS0xIDFMMSAtMVoiIHN0cm9rZT0icmdiYSgwLDE2OCwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          style={{ opacity: textOpacity }}
        >
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
<motion.span
  key={activePhrase}
  variants={activePhrase === 1 ? middleTextVariants : defaultTextVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  className="inline-block mb-8 text-6xl font-extrabold tracking-tight"
  style={{
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility"
  }}
>
  <GlitchText text={phrases[activePhrase]} />
</motion.span>





            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-light text-cyan-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              ERMIAS GETNET • FULL-STACK ARCHITECT
            </motion.h2>
          </motion.div>

          <HolographicCard>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Crafting immersive digital experiences at the intersection of design and technology
            </motion.p>
            
            <div className="flex justify-center gap-4">
              <CyberButton onClick={() => window.location.href = '/projects'}>
                EXPLORE WORK
              </CyberButton>
              <CyberButton onClick={() => window.location.href = '/contact'}>
                CONNECT
              </CyberButton>
            </div>
          </HolographicCard>
        </motion.div>

        {/* Floating cyber elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-cyan-400/30 pointer-events-none"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.2, 0],
              x: [null, (Math.random() - 0.5) * 100],
              y: [null, (Math.random() - 0.5) * 100]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          />
        ))}

        {/* Animated scroll indicator */}
 <GlobalScrollIndicator />
      </div>
    </div>
  );
};

export default Landing;