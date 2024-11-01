import PropTypes from 'prop-types';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">Cristian R.</a>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Proyectos</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Habilidades</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Sun className="w-4 h-4" />
            <div onClick={toggleDarkMode} className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer">
              <div className={`bg-white dark:bg-gray-800 w-4 h-4 rounded-full shadow-md transform ${darkMode ? 'translate-x-6' : ''} transition-transform duration-300`}></div>
            </div>
            <Moon className="w-4 h-4" />
          </div>
          <button onClick={toggleMenu} className="block md:hidden focus:outline-none text-gray-700 dark:text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-800 p-4">
          <a href="#about" onClick={closeMenu} className="hover:text-blue-600 dark:hover:text-blue-400">Sobre mí</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-blue-600 dark:hover:text-blue-400">Proyectos</a>
          <a href="#skills" onClick={closeMenu} className="hover:text-blue-600 dark:hover:text-blue-400">Habilidades</a>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Navbar;
