import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiArrowRight, FiGithub, FiGlobe } from 'react-icons/fi'
import {projectsdata} from '../../assets/Assets'
import ProjectGalaxy from './ProjectGalaxy'
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ALL')
  
  
  return (
    <div className="min-h-screen bg-black p-8 overflow-hidden">
      {/* Floating Categories */}
    <ProjectGalaxy  projects={projectsdata}/>
    </div>
  )
}
export default Projects;