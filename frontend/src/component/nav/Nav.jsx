import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchSharp,
  CloseSharp,
  HomeSharp,
  PersonSharp,
  WorkSharp,
  LinkSharp,
  CallSharp,
  LightMode,
  DarkMode
} from '@mui/icons-material';

const Nav = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const inputRef = useRef(null);

  const navItems = [
    { name: 'home', path: '/', icon: <HomeSharp /> },
    { name: 'about', path: '/about', icon: <PersonSharp /> },
    { name: 'projects', path: '/projects', icon: <WorkSharp /> },
    { name: 'contact', path: '/contact', icon: <CallSharp /> },
    { name: 'links', path: '/blog', icon: <LinkSharp /> }
  ];

  const filteredItems = navItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    const foundItem = navItems.find(item =>
      item.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundItem) {
      navigate(foundItem.path);
      setIsMenuOpen(false); // Close menu after navigation
      setSearchTerm("");
    }
  };

  useEffect(() => {
    if (isMenuOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/50 border-b border-white/10">

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover effect */}
          <div
            className="flex items-center"
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/favicon.ico"
                alt="Logo"
                className="h-10 w-10"
              />

              <AnimatePresence>
                {isHoveringLogo && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-40 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg shadow-purple-500/30 p-2 z-50"
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
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  relative px-4 py-2 text-sm font-medium rounded-lg
                  transition-all duration-300
                  ${isActive
                    ? "text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                        layoutId="navUnderline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <LightMode className="text-yellow-300" />
              ) : (
                <DarkMode className="text-gray-700" />
              )}
            </button>

            {/* Mobile menu button (CSS-only Burger/Close Animation) */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors w-10 h-10 flex flex-col justify-center items-center space-y-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Vertical Dropdown) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }} // Use 'auto' for height animation
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // Position fixed to layer over content below, right below the header
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-lg shadow-xl border-t border-white/10 overflow-hidden"
          >
            <div className="p-4">
              <form onSubmit={handleSearchSubmit} className="relative mb-6">
                <input
                  type="text"
                  ref={inputRef}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </form>

              <div className="space-y-2">
                {filteredItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={toggleMenu}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-colors duration-200
                      ${isActive
                        ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <span className="text-white/80">{item.icon}</span>
                    <span className="capitalize">{item.name}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;