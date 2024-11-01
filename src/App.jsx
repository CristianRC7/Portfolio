import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import About from './screens/About';
import Projects from './screens/Projects';
import Skills from './screens/Skills';
import projectsData from './data/projects.json';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode); 
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-gray-100 dark:from-blue-900 dark:via-purple-900 dark:to-black text-gray-900 dark:text-white">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        
        <main className="container mx-auto px-6 py-8 pt-20"> 
          <About />
          <Projects projects={projectsData} setSelectedProject={setSelectedProject} />
          <Skills />
        </main>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
