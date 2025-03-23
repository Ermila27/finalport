import React from 'react'
import SingleAnimation from './SingleAnimation'
import {skillData} from '../../assets/Assets'
import { motion } from 'framer-motion';

const CircularAnimation = () => {
  return (
    <div className="p-5 w-full   bg-[url('/favicon.ico')] bg-cover gap-4">

    {skillData.map((item, index) => (
      <motion.div
        key={index}
        className="bg-white/50 text-white backdrop-blur-2xl hover:bg-black transition-all duration-300 rounded-lg shadow-lg p-6 border border-white/50 text-opacity-80"
        whileHover={{ scale: 1.05 }} // Adds scaling effect on hover
        whileTap={{ scale: 0.95 }} // Adds tapping effect
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className="text-4xl"
            animate={{ rotate: 360 }}
            transition={{ loop: Infinity, duration: 1 }}
          >
            {item.icon}
          </motion.div>
          <h1 className="text-lg font-semibold text-white">
            Lorem ipsum, dolor itatis, quaerat libero voluptates accusamus velit amet! Perspiciatis, sunt labore!
          </h1>
        </div>
      </motion.div>
    ))}
  </div>
  )
}

export default CircularAnimation;

