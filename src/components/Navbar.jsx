import PropTypes from 'prop-types';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center"> 
        <a href="#" className="text-2xl font-bold">Cristian R.</a> 
        <div className="hidden md:flex items-center space-x-6"> 
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Sobre mí
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Proyectos
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Habilidades
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {darkMode ? (
              <Moon 
                className="w-7 h-7 cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1" 
                onClick={toggleDarkMode} 
              />
            ) : (
              <Sun 
                className="w-7 h-7 cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1" 
                onClick={toggleDarkMode} 
              />
            )}
          </div>
          <button onClick={toggleMenu} className="block md:hidden focus:outline-none text-gray-700 dark:text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden flex flex-col items-center bg-white dark:bg-gray-800 p-4"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-lg py-2 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Sobre mí
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-lg py-2 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Proyectos
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-lg py-2 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Habilidades
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Navbar;
