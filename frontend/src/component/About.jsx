import { useState ,useRef ,useEffect} from "react";
import { FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { VscFolder, VscFileCode } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { FaCodeBranch } from "react-icons/fa6";
import { GoCopy } from "react-icons/go";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { VscExtensions } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

import { IoSearchSharp } from "react-icons/io5";
import AboutMe from "./Aboutme";

  const file =()=>{
    document.getElementById("files").classList.toggle('hidden')
  }
const files = [
  {
    id: "bio",
    name: "bio.txt",
    content: `// bio.txt\n{\n  name: "ERMIAS GETNET",\n  \n  title: "Architect of Digital Realities",\n \n  description: "A passionate software engineer driven by the pursuit of elegant solutions, \n               seamless user experiences, and the harmony between logic and creativity in the digital realm.",\n  ...\n}`,
    icon: <FaUser />,
    clickable: true,
  },
  {
    id: "skills",
    name: "skills.json",
    content: `// skills.json\n{\n   "programmingLanguages": ["JavaScript", "Python", "java"],\n \n    "frameworks": ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "Laravel"],
       ,\n    "tools": ["Git", "VS Code", "Docker", "Postman", "Webpack", "Figma"],

       \n}`,
    icon: <FaCode />,
    clickable: true,
  },
  {
    id: "experience",
    name: "experience.md",
    content: `// experience.md\n# Experience\n\n**Tech Innovators Inc.**\n* Role: Software Engineer\n* Dates: 2021 - Present\n* Responsibilities:\n  * Develop and maintain scalable web applications\n  * Optimize system performance and database queries\n  * Collaborate with cross-functional teams to deliver high-quality solutions\n  * Implement CI/CD pipelines for efficient deployment\n\n**CodeCraft Solutions**\n* Role: Junior Developer\n* Dates: 2020 - 2021\n* Responsibilities:\n  * Assisted in front-end and back-end`,






    icon: <FaBriefcase />,
    clickable: true,
  },
  {
    id: "contact",
    name: "contact.txt",
    content: `// contact.txt\nEmail: ermiasgetnet677@gmail.com\nGitHub: github.com/ermila27\nLinkedIn: linkedin.com/in/yourprofile`,
    icon: <FaEnvelope />,
    clickable: true, // This file is not clickable
  },
];

const About = () => {
  const [history, setHistory] = useState([
    { command: "Welcome to the Developer Terminal!", response: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current && terminalRef.current.offsetParent !== null) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFocused.current) {
          inputRef.current?.focus();
          hasFocused.current = true;
        }
      },
      { threshold: 0.6 }
    );

    if (terminalRef.current) observer.observe(terminalRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (outputRef.current && outputRef.current.offsetParent !== null) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: [
      "Available commands:",
      "whoami - Display user info",
      "cat about-me.txt - Show About Me",
      "ls skills - List skills",
      "clear - Clear terminal",
      "exit - Close session"
    ],
    whoami: ["👨‍💻 Software Engineer", "🎓 Student at Arba Minch University (4th Year)"],
    "cat about-me.txt": [
      "A passionate developer who enjoys crafting scalable solutions.",
      "Currently exploring modern web technologies and system architecture."
    ],
    "ls skills": ["📌 Problem-solving", "📌 System Design", "📌 API Development", "📌 Continuous Learning"],
    clear: [],
    exit: ["Session terminated."]
  };

  const handleCommand = (e) => {
    if (e.key === "Enter" && input.trim()) {
      const commandText = input.trim();
      let response = commands[commandText] || ["Command not found. Type 'help' for a list of commands."];

      if (commandText === "clear") {
        setHistory([]);
      } else {
        setHistory([...history, { command: `$ ${commandText}`, response }]);
      }

      setInput("");
    }
  };


  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [isExplorerMinimized, setIsExplorerMinimized] = useState(false); // State for minimizing sidebar
  const [isEditorMinimized, setIsEditorMinimized] = useState(false); // State for minimizing editor
   const [iseditor ,setiseditor]=useState(true);
   const inputRef = useRef(null);
   const hasFocused = useRef(false);
   const outputRef = useRef(null);

  // Handle file opening
  const openFile = (file) => {
    if (!file.clickable) return; // Prevent opening non-clickable files
    if (!openFiles.find((f) => f.id === file.id)) {
      setOpenFiles([...openFiles, file]); // Add to open files
    }
    setActiveFile(file); // Set as active file
  };

  // Handle file closing
  const closeFile = (fileId) => {
    setOpenFiles(openFiles.filter((file) => file.id !== fileId));
    if (activeFile?.id === fileId) {
      setActiveFile(openFiles.length > 1 ? openFiles[0] : null);
    }
  };
 const hide=()=>{

  setiseditor(!iseditor)
 }
  
  // Toggle minimize/maximize of explorer and editor
  const toggleExplorer = () => {
    setIsExplorerMinimized(!isExplorerMinimized);
    setIsEditorMinimized(!isEditorMinimized); // Also collapse the editor when explorer is minimized
  };
 
  
  return (
  
      <div className="max-w-full  bg-gray-900   text-white  shadow-lg overflow-hidden border  border-gray-700 flex ">
   

        {iseditor? <div className="flex relative items-center justify-center min-h-screen bg-slate-200 dark:bg-black w-full px-6">
<div onClick={hide} className="absolute right-4 z-30 hidden top-6 sm:flex ">

<button  className='w-auto  sm:text-lg items-center gap-2 bg-slate-700  dark:hover:bg-slate-600 hover:scale-105 transition-all duration-500 text-white inline-flex px-4 rounded-full text-center hover:bg-black/50 sm:px-8 py-2 mt-8 mb-6 sm:mt-4 font-dance'>vs mode <img className='w-6' src={'/star_group.png'} alt="" />
      
      </button>


 </div>  
      <AboutMe/>
    </div>: <div  className={ `w-full hidden sm:flex bg-gray-900 text-white  shadow-lg overflow-hidden border  border-gray-700 flex h-[500px]   `  }>
        <div className="absolute right-0 flex">

<button onClick={hide} className=" hover:text-red text-lg hover:bg-red-900  "><IoCloseOutline />


</button>

 </div>  
{/* Sidebar - File Explorer */}

<div id="id1"
  className={`transition-all '' duration-300 ${isExplorerMinimized ? "w-16" : "w-1/4"} bg-gray-800 p-3 text-sm border-r border-gray-700 relative`}
>
  {/* Minimize/Maximize Button in Explorer */}
  {isExplorerMinimized && <p className="absolute bottom-4"> <FiSettings className="font-bold text-lg text-white/70 hover:text-white" />
    </p> }
  <div
    className="absolute top-3 right-0 text-gray-400 "
  >
    {isExplorerMinimized ? <div className=" flex-col space-y-8">
      <button     onClick={toggleExplorer}
        className="flex text-white/70  hover:text-white justify-center items-center text-lg gap-2 text-white"><p className="text-xs">max</p> <GoCopy  />
      </button>
       <VscExtensions className="hover:text-white text-lg"/>
       <IoSearchSharp className="hover:text-white text-lg" />
       <FaGithub className="hover:text-white text-lg"  />

      </div>:  <button     onClick={toggleExplorer}
       className="flex justify-center items-center text-lg text-white"> <FaRegWindowMinimize />
      </button>}
  </div>
 

  {!isExplorerMinimized && (
    <div className="mt-2   ">
      <div className="">
      <button onClick={file} className="flex items-center text-gray-300">
        <VscFolder className="mr-2 text-yellow-500" /> Portfolio
      </button>
      <div className="sm:ml-5  " id="files">
        {files.map((file) => (
          <p 
            key={file.id}
            className={`flex border-b transion-all duration-300 border-white/40 border-l p-2 items-center cursor-pointer hover:text-white ${file.clickable ? "text-gray-400" : "text-gray-600"}`}
            onClick={() => openFile(file)}
          >
            <VscFileCode className="mr-2 text-blue-400" /> {file.name}
          </p>
          
        ))}
    <div className="absolute bottom-4 gap-4 transition-all duration-300 flex justify-center items-center">
  {/* Group wrapper to keep hover state active */}
  <div className="flex relative  group gap-8">
    {/* Theme Button Container (Hidden initially, shown on hover) */}
    <div className="absolute transition-all duration-300 border px-4 hidden group-hover:flex border-white/40 rounded-lg left-0">
      <div className="relative group/theme"> 
        {/* Theme Button */}
        <button className="text-white/80 hover:text-white px-2">
          Theme
        </button>
        {/* White & Dark Buttons (Hidden initially, shown on hover) */}
        <div className="absolute left-12 hidden group-hover/theme:block bottom-4 p-6 bg-gray-700 rounded-lg font-dance">
          <button className="text-white/80 hover:text-white py-2 block">White</button>
          <button className="text-white/80 hover:text-white py-2 block">Dark</button>
        </div>
      </div>
    </div>
    {/* Settings Icon (Triggers hover effect) */}
    <FiSettings className="font-bold text-lg text-white/70 hover:text-white" />
  </div>
</div>

      </div>
      </div>
    
    
    </div>
  )}
</div>

{/* Main Editor */}
<div id="id"
  className={`transition-all duration-300 ${isEditorMinimized ? "w-full" : "w-3/4"} flex flex-col`}
>
  {/* Tabs */}
  <div className="bg-gray-900 flex text-sm border-b border-gray-700">
    {openFiles.map((file) => (
      <div
        key={file.id}
        className={`flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer ${
          activeFile?.id === file.id ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700"
        }`}
        onClick={() => setActiveFile(file)}
      >
        {file.icon} <span className="ml-2">{file.name}</span>
        <IoCloseSharp
          className="ml-2 text-gray-500 hover:text-red-400"
          onClick={(e) => {
            e.stopPropagation();
            closeFile(file.id);
          }}
        />
      </div>
    ))}
  </div>

  {/* Code Editor */}
  <div className="p-5 text-green-500 font-mono overflow-auto h-full">
    {activeFile ? <pre>{activeFile.content}</pre> :  
    
    <div className="flex items-center justify-center w-full h-full bg-gray-900 px-6">  {/* 1st view */}
      <div className="flex  w-full items-center justify-center  bg-gray-900 px-6">
      <motion.div
        ref={terminalRef}
        className="max-w-2xl w-full hidden sm:block bg-black h-full text-green-600 p-6 rounded-lg shadow-xl font-mono border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Terminal Header */}
        <div className="flex items-center  bg-gray-800 px-4 py-2 rounded-t-lg text-white">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-gray-300 text-sm">bash - VS Code Terminal</span>
        </div>

        {/* Terminal Content */}
        <div ref={outputRef} className="p-4 h-64 overflow-y-auto">
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              <p>{item.command}</p>
              {Array.isArray(item.response) ? (
                item.response.map((line, i) => <p key={i} className="text-green-300">{line}</p>)
              ) : (
                <p className="text-green-300">{item.response}</p>
              )}
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="flex items-center">
          <span className="text-green-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none text-green-400 px-2 w-full"
          />
        </div>
      </motion.div>
    </div>
    {/* end of first view */}
    </div> }
  </div>
</div>

</div>}
      </div>
   
    
  );
};

export default About;
