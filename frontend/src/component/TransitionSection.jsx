import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const TransitionSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Increase wave height for mobile for better visibility
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const waveHeight = isMobile ? 180 : 200; // was 100, now 180 for mobile

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -waveHeight * 0.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -waveHeight * 0.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -waveHeight * 0.1]);

  return (
    <section 
      ref={ref} 
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ height: `${waveHeight}px` }}
    >
      {/* Animated wave layers */}
      <motion.svg 
        className="absolute bottom-0 left-0 w-full"
        viewBox={`0 0 1200 ${waveHeight}`}
        style={{ y: y1, height: waveHeight }}
        preserveAspectRatio="none"
      >
        <path 
          d={`M0,${waveHeight} C150,${waveHeight * 0.7} 350,${waveHeight * 0.5} 500,${waveHeight * 0.6} C650,${waveHeight * 0.7} 800,${waveHeight * 0.9} 1200,${waveHeight * 0.4} L1200,${waveHeight} L0,${waveHeight} Z`}
          fill="rgba(59, 130, 246, 0.22)" // more opacity for mobile
        />
      </motion.svg>
      
      <motion.svg 
        className="absolute bottom-0 left-0 w-full"
        viewBox={`0 0 1200 ${waveHeight}`}
        style={{ y: y2, height: waveHeight }}
        preserveAspectRatio="none"
      >
        <path 
          d={`M0,${waveHeight} C200,${waveHeight * 0.6} 400,${waveHeight * 0.4} 600,${waveHeight * 0.5} C800,${waveHeight * 0.6} 1000,${waveHeight * 0.8} 1200,${waveHeight * 0.3} L1200,${waveHeight} L0,${waveHeight} Z`}
          fill="rgba(139, 92, 246, 0.22)"
        />
      </motion.svg>
      
      <motion.svg 
        className="absolute bottom-0 left-0 w-full"
        viewBox={`0 0 1200 ${waveHeight}`}
        style={{ y: y3, height: waveHeight }}
        preserveAspectRatio="none"
      >
        <path 
          d={`M0,${waveHeight} C250,${waveHeight * 0.5} 450,${waveHeight * 0.3} 700,${waveHeight * 0.4} C950,${waveHeight * 0.5} 1100,${waveHeight * 0.7} 1200,${waveHeight * 0.2} L1200,${waveHeight} L0,${waveHeight} Z`}
          fill="rgba(6, 182, 212, 0.22)"
        />
      </motion.svg>
      
      {/* Glowing connection point */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center z-10">
        <motion.div
          className="absolute inset-0 rounded-full bg-cyan-400/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative z-10 w-3 h-3 rounded-full bg-white shadow-lg shadow-cyan-400/50" />
      </div>
      
      {/* Subtle grid pattern */}
<div className={`absolute inset-0 ${isMobile ? "opacity-5" : "opacity-10"} bg-[url('data:image/svg+xml;base64,...')]`}></div>   
   </section>
  );
};

export default TransitionSection;