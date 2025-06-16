import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import ProjectsHeader from './ProjectsHeader';

const projectCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
// Mock projectsdata for demonstration purposes. Replace with your actual data.
// In a real application, you would import this from '../../assets/Assets'
const projectsdata = [
  {
    id: 'proj1',
    title: 'AI image generator',
    catagory: 'AI',
    description: 'An intelligent AI assistant capable of natural language understanding and task automation.',
    image: '/ai.png',
    color: '#FF4D79',
    subdescribtion: ['Natural Language Processing', 'Task Automation', 'Voice Recognition'],
    tags: ['React', 'Node.js', 'TensorFlow',''],
    github: null,
    link: ''
  },
  {
    id: 'proj2',
    title: 'E-commerce Platform',
    catagory: 'WEB',
    description: 'A scalable e-commerce solution with secure payment gateway and product management.',
    image: '/amazon.png',
    color: '#3b82f6',
    subdescribtion: ['User Authentication', 'Shopping Cart', 'Secure Payments'],
    tags: ['react.js', 'Stripe', 'MongoDB',"tailwindcss"],
    github: '',
    link: ''
  },
  {
    id: 'proj3',
    title: 'VR Training Simulator',
    catagory: 'XR',
    description: 'An immersive virtual reality application for professional training and skill development.',
    image: 'https://placehold.co/400x200/A855F7/FFFFFF?text=XR+Project',
    color: '#A855F7',
    subdescribtion: ['Virtual Environment', 'Interactive Scenarios', 'Performance Tracking'],
    tags: ['Unity', 'C#', 'Oculus SDK'],
    github: '',
    link: ''
  },
  {
    id: 'proj4',
    title: 'Smart Home Hub',
    catagory: 'AI',
    description: 'Centralized control system for smart home devices with AI-powered automation.',
    image: 'https://placehold.co/400x200/FF4D79/FFFFFF?text=Smart+Home',
    color: '#FF4D79',
    subdescribtion: ['Device Integration', 'Automated Routines', 'Remote Access'],
    tags: ['Python', 'MQTT', 'Raspberry Pi'],
    github: '',
    link: ''
  },
  {
    id: 'proj5',
    title: 'Portfolio Website',
    catagory: 'WEB',
    description: 'A sleek and modern personal portfolio website showcasing various projects and skills.',
    image: '/portfolio.png',
    color: '#3b82f6',
    subdescribtion: ['Responsive Design', 'Interactive UI', 'Project Showcase'],
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: '',
    link: ''
  },
  {
    id: 'proj6',
    title: 'Augmented Reality Game',
    catagory: 'XR',
    description: 'An interactive AR game that blends digital content with the real world.',
    image: 'https://placehold.co/400x200/A855F7/FFFFFF?text=AR+Game',
    color: '#A855F7',
    subdescribtion: ['Real-time Tracking', '3D Models', 'Multiplayer'],
    tags: ['ARCore', 'Unity', 'Photon'],
    github: '',
    link: ''
  },
];

// Inline SVG icons to replace react-icons/fi
const GithubIcon = ({ className = "text-white", size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3S18.73 2 12 2C5.27 2 4.09 3 4.09 3A5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 8.54 9c0 3.87 3.33 5.23 6.44 7A3.37 3.37 0 0 0 18 13.87V19"></path>
    <path d="M12 20c-3.31 0-6-2.69-6-6 0-1.74.74-3.32 1.94-4.43M12 20c3.31 0 6-2.69 6-6 0-1.74-.74-3.32-1.94-4.43"></path>
  </svg>
);

const ExternalLinkIcon = ({ className = "text-white", size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const XIcon = ({ className = "text-white", size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const StarIcon = ({ className = "text-yellow-400", size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);


const ORBIT_SIZE_BASE = 600; // Base size for orbit container (e.g., on desktop)
const ORBIT_RADIUS_BASE = 260; // Base radius for orbiting projects
const CARD_SIZE = 192; // px, fixed size for project cards

const ProjectGalaxy = () => {
  const [activeStar, setActiveStar] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('orbit');
  const [orbitSize, setOrbitSize] = useState(ORBIT_SIZE_BASE);
  const [orbitRadius, setOrbitRadius] = useState(ORBIT_RADIUS_BASE);
  
  const detailViewRef = useRef(null);
const projectCardTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  duration: 0.5,
};
  // Cosmic categories
  const stars = [
    { id: 'ALL', name: 'All Systems', color: '#FFFFFF', size: 1.2 },
    { id: 'AI', name: 'AI', color: '#FF4D79', size: 1.0 },
    { id: 'WEB', name: 'Web', color: '#3b82f6', size: 0.9 },
    { id: 'XR', name: 'XR', color: '#A855F7', size: 0.8 }
  ];

  const filteredProjects = activeStar === 'ALL'
    ? projectsdata
    : projectsdata.filter(p => p.catagory === activeStar);

  // Adjust orbit size and radius based on window width for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newOrbitSize = ORBIT_SIZE_BASE;
      let newOrbitRadius = ORBIT_RADIUS_BASE;

      if (width < 640) { // Small mobile
        newOrbitSize = 300;
        newOrbitRadius = 100;
      } else if (width < 768) { // Mobile
        newOrbitSize = 350;
        newOrbitRadius = 120;
      } else if (width < 1024) { // Tablet
        newOrbitSize = 500;
        newOrbitRadius = 180;
      }
      setOrbitSize(newOrbitSize);
      setOrbitRadius(newOrbitRadius);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top when project is selected
  useEffect(() => {
    if (viewMode === 'detail' && detailViewRef.current) {
      // Scroll to the top of the detail view
      window.scrollTo({
        top: detailViewRef.current.offsetTop - 20,
        behavior: 'smooth'
      });
      
      // For mobile, ensure the content is not hidden by browser UI
      setTimeout(() => {
        detailViewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [viewMode, selectedProject]);


  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black p-4 sm:p-8 flex flex-col items-center justify-center">
      {/* Starfield Background */}
      <Starfield />
      <ProjectsHeader/>
   
      <div className="py-8 sm:block ">
  <div className="flex gap-2 sm:gap-4 bg-black/50 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-white/10">
    {stars.map(star => (
      <motion.button
        key={star.id}
        onClick={() => {
          setActiveStar(star.id);
          setViewMode('orbit');
          setSelectedProject(null);
        }}
        className="flex items-center gap-2 sm:gap-3 group focus:outline-none relative overflow-hidden px-3 py-2 rounded-lg" // Added styling for background
        whileHover={{ x: 5 }}
      >
        {/* Active background element */}
        {activeStar === star.id && (
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `linear-gradient(90deg, ${star.color}99, transparent)`, // Subtle gradient
              boxShadow: `10 10 15px white` // Glow effect
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full relative z-10`} // Ensure dot is above background
          style={{ backgroundColor: star.color }}
        >
          {activeStar === star.id && (
            <motion.span
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: star.color }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
          )}
        </div>
        <span
          className={`text-xs sm:text-sm z-10 ${ // Ensure text is above background
            activeStar === star.id
              ? 'text-white font-semibold'
              : 'text-white/60 group-hover:text-white'
          }`}
        >
          {star.name}
        </span>
      </motion.button>
    ))}
  </div>
</div>


      {/* Central Content Area - Adjusted for centering */}
      <div className="relative w-full h-full flex items-center justify-center py-16 md:py-26">
        <AnimatePresence mode="wait">
          {viewMode === 'orbit' ? (
            <motion.div
              key="orbit-view"
              className="grid place-items-center w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Orbit Layout - Centered container */}
              <div className="flex items-center justify-center w-full">
                <div
                  className="relative flex items-center justify-center mx-auto"
                  style={{ 
                    width: orbitSize, 
                    height: orbitSize,
                    minWidth: orbitSize, // Prevent shrinking
                    minHeight: orbitSize // Prevent shrinking
                  }}
                >
                  {/* Central Star */}
                  <div
                    className="absolute left-1/2 top-1/2 z-10 rounded-full"
                    style={{
                      width: 'clamp(64px, 6vw, 96px)', // Responsive size
                      height: 'clamp(64px, 6vw, 96px)',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 80px #3b82f6, 0 0 40px #fff'
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center border-4 border-white/20 shadow-2xl">
                      <span className="text-white text-lg font-bold drop-shadow">★</span>
                    </div>
                  </div>
                  
                  {/* Orbiting Projects - Adjusted for mobile */}
                  {filteredProjects.map((project, i) => {
                    const angle = (i / filteredProjects.length) * Math.PI * 2;
                    const x = Math.cos(angle - Math.PI / 2) * orbitRadius;
                    const y = Math.sin(angle - Math.PI / 2) * orbitRadius;

                    return (
                      <motion.div
                        key={project.id}
                        className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden border-2 backdrop-blur-sm cursor-pointer group"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: `translate(-50%, -50%)`,
                          borderColor: stars.find(s => s.id === project.catagory)?.color,
                          background: `linear-gradient(to bottom right, ${project.color}20, #00000080)`
                        }}
                        variants={projectCardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        whileHover="hover"
                        custom={{ catagory: project.catagory }}
                        transition={projectCardTransition}
                        onClick={() => {
                          setSelectedProject(project);
                          setViewMode('detail');
                        }}
                      >
                        <div className="h-10 sm:h-14 overflow-hidden border-b border-white/10">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x200/000000/FFFFFF?text=No+Image`; }}
                          />
                        </div>
                        <div className="p-2 sm:p-3 flex flex-col items-center justify-center h-[calc(100%-5rem)] sm:h-[calc(100%-6rem)]">
                          <h4 className="text-white font-medium text-xs sm:text-sm mb-1 truncate w-full text-center">
                            {project.title}
                          </h4>
                          <p className="text-white/70 text-xs line-clamp-2 text-center px-1">
                            {project.description}
                          </p>
                        </div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 sm:px-3 sm:py-1 rounded bg-black/80 text-cyan-300 text-xs font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                         <h1>view detail</h1>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail-view"
              ref={detailViewRef}
              className="w-full max-w-4xl mx-auto bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative p-4 sm:p-6 md:p-8"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {selectedProject && (
                <div className="relative">
                  {/* X Button - Adjusted position for mobile */}
                  <button
                    onClick={() => setViewMode('orbit')}
                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-50 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-cyan-500/80 border border-white/20 transition-colors shadow-lg focus:outline-none"
                    aria-label="Close"
                  >
                    <XIcon className="text-white text-lg sm:text-xl" />
                  </button>

                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
                    {/* Project Image */}
                    <div className="w-full h-48 sm:h-72 md:w-1/2 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full full object-contain flex justify-center items-center "
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x300/000000/FFFFFF?text=No+Image`; }}
                      />
                    </div>

                    {/* Project Details - Adjusted spacing for mobile */}
                    <div className="w-full md:w-1/2 flex flex-col">
                      <div className="mb-3 sm:mb-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                          {selectedProject.title}
                        </h2>
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: `${stars.find(s => s.id === selectedProject.catagory)?.color}20`,
                            color: stars.find(s => s.id === selectedProject.catagory)?.color
                          }}
                        >
                          {selectedProject.catagory}
                        </span>
                      </div>

                      <p className="text-white/80 mb-4 sm:mb-6 text-sm md:text-base flex-grow">
                        {selectedProject.description}
                      </p>

                      <div className="mb-4 sm:mb-6">
                        <h3 className="text-white font-medium mb-2 sm:mb-3">Key Features:</h3>
                        <ul className="space-y-1 sm:space-y-2">
                          {selectedProject.subdescribtion.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm">
                              <StarIcon className="text-yellow-400 mt-0.5 flex-shrink-0" size={12} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                        {selectedProject.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs border border-white/10 bg-white/5 text-white/80">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                        <a
                          // href={selectedProject.github}
                          
                          className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors text-xs sm:text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon size={16} /> Code
                        </a>
                        <a
                          // href={selectedProject.link}
                          className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-opacity text-xs sm:text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLinkIcon size={16} /> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}



// Starfield Component
const Starfield = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(80)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 1 + 0.5}px`,
          height: `${Math.random() * 1 + 0.5}px`,
        }}
        animate={{
          opacity: [0, 0.8, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
)

export default ProjectGalaxy;
