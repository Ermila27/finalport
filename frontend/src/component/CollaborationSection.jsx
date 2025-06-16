import { useState } from 'react';
import { Globe, Headphones, Link2, Monitor, Cpu, HardDrive } from 'lucide-react'; // Added new icons
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench } from "lucide-react";
import { SiGooglechrome } from "react-icons/si";
import { FaTerminal } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FaTrello } from "react-icons/fa";

const CollaborationSection = () => {
  const [activeClient, setActiveClient] = useState(null);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  const clients = [
    { id: 1, name: "Client 1", image: "/client3.jpg" },
    { id: 2, name: "Client 2", image: "/client6.jpg" },
    { id: 3, name: "Client 3", image: "/century.jpg" },
    { id: 4, name: "Client 4", image: "/client1.jpg" },
    { id: 5, name: "Client 5", image: "/client5.jpg" }
  ];

  const techIcons = [
    { name: "React", icon: "/moon.jpg" },
    { name: "Tailwind", icon: "/wave-bot.png" },
    { name: "Vite", icon: "/vite-icon.svg" },
    { name: "Node", icon: "/node-icon.svg" }
  ];

  // Animation variants for the small circles
  const circleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
  };

  return (
    <section className="w-full bg-black max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Column (70%) */}
        <div className="w-full lg:w-7/12 space-y-12 sm:ml-12">
        
          {/* Client Circles Row */}
          <div className='rounded-lg mb-8'>
            <div className="relative flex flex-wrap sm:flex-nowrap items-center bg-gray-800/50 p-6 justify-center py-12 px-4">

              {/* Connection lines - curved path */}
              <svg 
                className="absolute w-4/5 h-24 z-0"
                viewBox="0 0 500 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M20,50 Q250,100 480,50" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Client Circles */}
              {clients.map((client, index) => (
                <div 
                  key={client.id}
                  className={`relative  transition-all duration-500 
                              ${index === 2 ? 'mx-4 w-24 h-24' : 'mx-2 w-20 h-20 sm:w-32 sm:h-32'}`}
                  onMouseEnter={() => setActiveClient(client.id)}
                  onMouseLeave={() => setActiveClient(null)}
                >
                  {/* Main Circle */}
                  <div className={`
                    relative flex items-center justify-center
                    ${index === 2 ? 
                      'w-full h-full shadow-lg shadow-purple-500/30' : 
                      'w-full h-full shadow-md shadow-purple-400/20'
                    }
                    rounded-full border-2 border-purple-400/50
                    transition-all duration-300
                    ${activeClient !== null ? (index === 2 ? 'scale-105' : 'scale-95') : ''}
                    ${index === 2 ? 'bg-gray-800' : 'bg-gray-900'}
                  `}>
                    {/* Always show image for middle circle */}
                    {index === 2 && (
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <img 
                          src={client.image} 
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {index === 0 && (
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <img 
                          src="/star_group.png" 
                          alt={client.name}
                          className="w-full h-full object-cover opacity-20"
                        />
                      </div>
                    )}
                    {index === 4 && (
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <img 
                          src="/star_group.png" 
                          alt={client.name}
                          className="w-full h-full object-cover opacity-20"
                        />
                      </div>
                    )}

                    {/* Conditional small circles on hover */}
                    <AnimatePresence>
                      {activeClient !== null && index !== 2 && (
                        <>
                          {/* First circle - single top image */}
                          {index === 0 && (
                            <motion.div
                              className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-purple-300 overflow-hidden shadow-lg"
                              variants={circleVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
                            </motion.div>
                          )}

                          {/* Second circle - top and bottom images */}
                          {index === 1 && (
                            <>
                              <motion.div
                                className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-purple-300 overflow-hidden shadow-lg"
                                variants={circleVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                              >
                                <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
                              </motion.div>
                              <motion.div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-purple-300 overflow-hidden shadow-lg"
                                variants={circleVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                              >
                                <img src='client4.jpg' alt={client.name} className="w-full h-full object-cover" />
                              </motion.div>
                            </>
                          )}

                          {/* Fourth circle - bottom image */}
                          {index === 3 && (
                            <motion.div
                              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-purple-300 overflow-hidden shadow-lg"
                              variants={circleVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              <img src={client.image} alt={client.name} className="w-full h-full object-contain" />
                            </motion.div>
                          )}

                          {/* Fifth circle - single bottom image */}
                          {index === 4 && (
                            <>
                              <motion.div
                                className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-purple-300 overflow-hidden shadow-lg"
                                variants={circleVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                              >
                                <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
                              </motion.div>
                              <motion.div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-purple-300 overflow-hidden shadow-lg"
                                variants={circleVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                              >
                                <img src='client2.jpg' alt={client.name} className="w-full h-full object-cover" />
                              </motion.div>
                            </>
                          )}
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className='text-lg sm:ml-12 text-white/50 bg-gray-800/50'>collaboration</p>
              <p className="font-bold sm:ml-12 text-gray-300 bg-gray-800/50 leading-relaxed">
                I prioritize client collaboration, fostering open communication.
              </p>
            </div>
          </div>

          {/* Info Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* World Image + Timezone */}
            <div className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="relative">
                <Globe className="w-12 h-12 text-purple-400" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Current timezone</p>
                <p className="text-lg font-medium text-white">
                  {new Date().toLocaleTimeString('en-US', {
                    timeZoneName: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>

            {/* Let's Connect */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-800/50">
              <h3 className="text-xl font-bold text-white mb-2">Let's connect</h3>
              <p className="text-gray-300 mb-4">Available for collaborations and interesting projects</p>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className=" top-full left-0 mt-2 w-40 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg shadow-purple-500/30 p-2 z-50"
                  >
                    <a
                      href="https://drive.google.com/file/d/1PxRjrZYzmkhSQYnNrUpqer1HM_UWgdHT/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-white/90 hover:text-white transition-colors border border-white/10 hover:border-purple-400/50 rounded-md"
                    >
                      Download CV
                    </a>
                  </motion.div>
              
            </div>
          </div>
        </div>
 <div className="relative z-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Wrench className="text-blue-400" size={24} /> My Favorite Tools
        </h3>
        <span className="text-sm text-indigo-400 bg-indigo-900/30 px-3 py-1 rounded-full border border-indigo-700">
          Updated Weekly
        </span>
      </div>

 

<div className="space-y-4">
  {/* First Row */}
  <div className="grid grid-cols-1 sm:grid-cols-3 ">
    {/* VS Code */}
    <div className="flex items-center gap-4  p-4  shadow-md hover:bg-gray-700/50 transition-all duration-300 group">
      <div>
        <p className="text-xs sm:text-sm text-gray-400">Editor</p>
        <p className="text-base sm:text-lg font-medium text-white">VS Code</p>
      </div>
    </div>

    {/* Trello */}
    <div className="flex items-center gap-4  p-4 rounded-xl  shadow-md hover:bg-gray-700/50 transition-all duration-300 group">
      <FaTrello className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-125" />
      <div>
        <p className="text-xs sm:text-sm text-gray-400">Task Management</p>
        <p className="text-base sm:text-lg font-medium text-white">Trello</p>
      </div>
    </div>

    {/* Jira */}
    <div className="flex items-center gap-4  p-4  shadow-md hover:bg-gray-700/50 transition-all duration-300 group">
      <SiJira className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-125" />
      <div>
        <p className="text-xs sm:text-sm text-gray-400">Project Tracking</p>
        <p className="text-base sm:text-lg font-medium text-white">Jira</p>
      </div>
    </div>
  </div>

  {/* Second Row */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {/* Zsh */}
    <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-600/50 shadow-md hover:bg-gray-700/50 transition-all duration-300 group">
      <FaTerminal className="text-green-400 w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-125" />
      <div>
        <p className="text-xs sm:text-sm text-gray-400">Shell</p>
        <p className="text-base sm:text-lg font-medium text-white">Zsh</p>
      </div>
    </div>

    {/* NPM */}
    <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-600/50 shadow-md hover:bg-gray-700/50 transition-all duration-300 group">
      <SiNpm className="text-red-500 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-125" />
      <div>
        <p className="text-xs sm:text-sm text-gray-400">Package Manager</p>
        <p className="text-base sm:text-lg font-medium text-white">NPM</p>
      </div>
    </div>

    {/* Chrome DevTools */}
    <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-600/50 shadow-md hover:bg-gray-700/50 transition-all duration-300 group">
      <SiGooglechrome className="text-yellow-400 w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-125" />
      <div>
        <p className="text-xs sm:text-sm text-gray-400">Debugger</p>
        <p className="text-base sm:text-lg font-medium text-white">Chrome DevTools</p>
      </div>
    </div>
      <div className="mt-6 text-right bg-gray-800">
        <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm flex items-center justify-end gap-1 ml-auto">
          See Full Stack <Link2 size={16} />
        </button>
      </div>
  </div>
  
</div>

    
    </div>

      </div>
    </section>
  );
};

export default CollaborationSection;