import React, { useRef, useEffect, useState } from 'react';
import { motion,useInView, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

// Icons
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaFigma, FaJava, FaSass } from 'react-icons/fa';
import { SiTypescript, SiPostman, SiMysql, SiVuedotjs, SiTailwindcss } from 'react-icons/si';
import { BiLogoMongodb, BiLogoNetlify } from 'react-icons/bi';
import { FiFramer } from 'react-icons/fi';
import { FaLinux } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';

const TechStack = () => {
  const [showFullStack, setShowFullStack] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  // Brighter icon components with less opacity
  const ReactIcon = () => <FaReact className="text-4xl text-[#61DAFB] opacity-90" />;
  const NodeIcon = () => <FaNodeJs className="text-4xl text-[#68A063] opacity-90" />;
  const TypeScriptIcon = () => <SiTypescript className="text-4xl text-[#3178C6] opacity-90" />;
  const MongoDBIcon = () => <BiLogoMongodb className="text-4xl text-[#4DB33D] opacity-90" />;
  const JavaScriptIcon = () => <IoLogoJavascript className="text-4xl text-[#F7DF1E] opacity-90" />;
  const TailwindIcon = () => <SiTailwindcss className="text-4xl text-[#38BDF8] opacity-90" />;
  const GitHubIcon = () => <FaGithub className="text-4xl text-white opacity-90" />;
  const GitIcon = () => <FaGitAlt className="text-4xl text-[#F05032] opacity-90" />;
  const PostmanIcon = () => <SiPostman className="text-4xl text-[#FF6C37] opacity-90" />;
  const FigmaIcon = () => <FaFigma className="text-4xl text-[#A259FF] opacity-90" />;
  const HTML5Icon = () => <FaHtml5 className="text-4xl text-[#E34C26] opacity-90" />;
  const SassIcon = () => <FaSass className="text-4xl text-[#CC6699] opacity-90" />;
  const NetlifyIcon = () => <BiLogoNetlify className="text-4xl text-[#33B3CC] opacity-90" />;
  const MySQLIcon = () => <SiMysql className="text-4xl text-[#4479A1] opacity-90" />;
  const JavaIcon = () => <FaJava className="text-4xl text-[#E76F00] opacity-90" />;
  const VueIcon = () => <SiVuedotjs className="text-4xl text-[#4FC08D] opacity-90" />;
  const FramerIcon = () => <FiFramer className="text-4xl text-[#0055FF] opacity-90" />;
  const LinuxIcon = () => <FaLinux className="text-4xl text-white opacity-90" />;

  const techCategories = [
    {
      title: "Core Stack",
      items: [
        { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
        { name: "Node.js", icon: <NodeIcon />, color: "#68A063" },
        { name: "TypeScript", icon: <TypeScriptIcon />, color: "#3178C6" },
        { name: "MongoDB", icon: <MongoDBIcon />, color: "#4DB33D" }
      ]
    },
    {
      title: "Frontend",
      items: [
        { name: "Tailwind", icon: <TailwindIcon />, color: "#38BDF8" },
        { name: "Framer Motion", icon: <FramerIcon />, color: "#0055FF" },
        { name: "JavaScript", icon: <JavaScriptIcon />, color: "#F7DF1E" },
        { name: "HTML5", icon: <HTML5Icon />, color: "#E34C26" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: <GitIcon />, color: "#F05032" },
        { name: "GitHub", icon: <GitHubIcon />, color: "white" },
        { name: "Postman", icon: <PostmanIcon />, color: "#FF6C37" },
        { name: "Figma", icon: <FigmaIcon />, color: "#A259FF" }
      ]
    }
  ];

  const allTechnologies = [
    ...techCategories[0].items,
    ...techCategories[1].items,
    ...techCategories[2].items,
    { name: "Sass", icon: <SassIcon />, color: "#CC6699" },
    { name: "Netlify", icon: <NetlifyIcon />, color: "#33B3CC" },
    { name: "MySQL", icon: <MySQLIcon />, color: "#4479A1" },
    { name: "Java", icon: <JavaIcon />, color: "#E76F00" },
    { name: "Vue.js", icon: <VueIcon />, color: "#4FC08D" },
    { name: "Linux", icon: <LinuxIcon />, color: "white" }
  ];

  // Three.js setup (same as before)
 useEffect(() => {
    if (!canvasRef.current || !isInView) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Tech-themed particles
    const particleCount = 2000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    
    // Tech brand colors
    const techColors = [
      [0x61, 0xDA, 0xFB], // React
      [0x68, 0xA0, 0x63], // Node
      [0x4D, 0xAB, 0xF7], // Blue
      [0xA8, 0x55, 0xF7], // Purple
      [0xE8, 0x79, 0xF9]  // Pink
    ];

    for(let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i+1] = (Math.random() - 0.5) * 10;
      posArray[i+2] = (Math.random() - 0.5) * 10;
      
      const color = techColors[Math.floor(Math.random() * techColors.length)];
      colorArray[i] = color[0] / 255;
      colorArray[i+1] = color[1] / 255;
      colorArray[i+2] = color[2] / 255;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Bloom effect
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, 0.4, 0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 1.5;
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(bloomPass);

    // Animation
    camera.position.z = 5;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.001;
      
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      composer.render();
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, [isInView]);

  return (
 <div 
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-black py-20"
    >
         <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
      />
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-20">
          <motion.h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#036562] to-[#2DC8EE]">
              TECH DOMAIN
            </span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge technologies powering innovative solutions
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  {category.title}
                </span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative z-10">
                      {tech.icon}
                      <p className="text-white mt-3 text-sm font-medium group-hover:text-cyan-300">
                        {tech.name}
                      </p>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                      style={{ background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)` }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Full Tech Stack Button */}
        <div className="mt-20 text-center">
          <motion.button
            onClick={() => setShowFullStack(!showFullStack)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              {showFullStack ? 'Hide Full Stack' : 'Explore Full Tech Stack'}
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </div>

        {/* Full Tech Stack Modal */}
        <AnimatePresence>
          {showFullStack && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFullStack(false)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Full Tech Stack</h3>
                  <button 
                    onClick={() => setShowFullStack(false)}
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {allTechnologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {tech.icon}
                      <p className="text-white mt-2 text-sm font-medium">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechStack;