import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProjectsHeader = () => {
  const [glowPosition, setGlowPosition] = useState(0);
  
  // Animate the glow position
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowPosition(prev => (prev + 0.02) % 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-6 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4dabf740_0%,transparent_50%)]"
          animate={{
            backgroundPosition: `${glowPosition * 100}% ${glowPosition * 50}%`
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Main heading */}
      <motion.div 
        className="relative text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          initial={{ letterSpacing: '0.5em', opacity: 0 }}
          whileInView={{ letterSpacing: '0.1em', opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#036562] to-[#2DC8EE]">
              CURATED WORK
            </span>
            {/* Animated underline */}
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-[linear-gradient(90deg,#4dabf7,#a855f7,#e879f9)] w-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </span>
        </motion.h2>

        {/* Animated subtitle */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block relative">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              viewport={{ once: true }}
            >
              Selected projects showcasing innovation and technical excellence
            </motion.span>
            {/* Floating dots */}
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute -bottom-4 h-2 w-2 rounded-full bg-purple-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 20, 40],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  delay: 1.8 + i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                style={{ left: `${10 + i * 15}%` }}
              />
            ))}
          </span>
        </motion.p>

        {/* Animated scroll hint (only on desktop) */}
        <motion.div
          className="hidden md:flex flex-col items-center mt-12 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
          viewport={{ once: true }}
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.span>
          <span className="mt-2">EXPLORE</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsHeader;