import { duration } from "@mui/material";
import { useScroll, motion } from "framer-motion";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="">
      {/* Make the motion.div visible */}
      <motion.div 
      className={`w-full z-50 fixed top-0 left-0 h-1 bg-gradient-to-r from-black via-black to-orange-600 origin-left `}
      style={{
        scaleX:scrollYProgress, 
      }}
      />
      <div/>
    </div>
  );
}

export default ScrollProgressBar;
