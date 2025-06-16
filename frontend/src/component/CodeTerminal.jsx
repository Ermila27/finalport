import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CodeTerminal = () => {
  const [displayedText, setDisplayedText] = useState("");
  const terminalRef = useRef(null);
  const cursorRef = useRef(null);

  // Your terminal content with typing animation
  const terminalContent = [
    "const aboutMe = {",
    "  name: 'Ermias Getnet',",
    "  role: 'Full-Stack Developer',",
    "  location: 'Addis Ababa, Ethiopia',",
    "  availability: [",
    "    'Open for full-time roles',",
    "  ]",
    "};"
  ];

  // Auto-typing effect
  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let fullText = "";

    const type = () => {
      if (currentLine < terminalContent.length) {
        if (currentChar <= terminalContent[currentLine].length) {
          const currentText = terminalContent[currentLine].substring(0, currentChar);
          setDisplayedText(
            (prev) => prev.split('\n').slice(0, currentLine).join('\n') + 
            (currentLine > 0 ? '\n' : '') + currentText
          );
          currentChar++;
          setTimeout(type, Math.random() * 30 + 20); // Random typing speed
        } else {
          fullText += terminalContent[currentLine] + '\n';
          currentLine++;
          currentChar = 0;
          setTimeout(type, 100); // Delay between lines
        }
      } else {
        // Blinking cursor after typing completes
        if (cursorRef.current) {
          cursorRef.current.style.animation = "blink 1s infinite";
        }
      }
    };

    type();

    return () => clearTimeout();
  }, []);

  // Scroll to bottom when typing
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText]);

  return (
<div className="flex lg:mt-12 lg:ml-12  flex-col md:flex-row gap-10 items-center">
     
    <div className="bg-gradient-to-r   from-zinc-900 to-black text-white rounded-xl sm:p-8 sm:ml-5 shadow-lg max-w-xl space-y-5 font-light tracking-wide">
  <h2 className="text-2xl md:text-3xl font-semibold text-purple-400">Fragments of a Builder</h2>
  <p>
    Somewhere between caffeine-powered nights and the rhythm of lo-fi beats, I found joy in building things that *think*.
  </p>
  <p>
    I’m not just a developer. I’m a **digital architect**, a **debugging poet**, and a curious mind always pushing pixels and logic to dance better together.
  </p>
  <p>
    Whether it's sculpting responsive UI with Tailwind or wrangling Node.js servers into obedience, I live for that “aha!” moment when it *just works*.
  </p>
  <p>
    Outside code, I dive into obscure tech biographies, herbal medicine, and old-school terminal aesthetics. Life is a stack — I’m just building mine with purpose.
  </p>
  <p className="text-xs text-zinc-400">
    ps: I believe the best software feels invisible. Clean. Effortless. Almost magic.
  </p>
</div>
 <motion.div 
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center bg-gray-900 px-4 py-3 rounded-t-xl border-b border-gray-700">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-300 text-sm">about-me.js - Terminal</span>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="bg-gray-950 p-5 rounded-b-xl font-mono text-sm sm:text-base overflow-y-auto"
        style={{ height: "320px", scrollBehavior: "smooth" }}
      >
        <div className="text-green-400 mb-4">
          <span className="text-purple-400">$</span> cat about-me.js
        </div>
        
        <pre className="text-gray-300 whitespace-pre-wrap">
          {displayedText}
          <span 
            ref={cursorRef}
            className="ml-1 w-2 h-6 bg-green-400 inline-block align-middle"
            style={{ animation: "none" }}
          />
        </pre>

        <div className="text-green-400 mt-4">
          <span className="text-purple-400">$</span>{" "}
          <span className="text-gray-400">// Ready for new challenges</span>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="flex justify-between items-center mt-2 px-2 text-xs text-gray-500">
        <span>ESC to exit</span>
        <span>↑↓ to scroll</span>
        <span>ENTER to continue</span>
      </div>

      {/* Custom styles for cursor blink */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </motion.div>
    </div>
    
  );
};

export default CodeTerminal;