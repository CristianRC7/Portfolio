import { useState, useEffect } from 'react'
import { Moon, Sun, Code, Database, Globe, Smartphone, Server, Cpu, X, Menu } from 'lucide-react'
import Profile from './assets/perfil.png'
import projectsData from './data/projects.json'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  const skills = [
    { name: 'JavaScript', icon: <Code className="w-6 h-6" /> },
    { name: 'HTML/CSS', icon: <Globe className="w-6 h-6" /> },
    { name: 'PHP', icon: <Server className="w-6 h-6" /> },
    { name: 'C#', icon: <Cpu className="w-6 h-6" /> },
    { name: 'React', icon: <Code className="w-6 h-6" /> },
    { name: 'React Native', icon: <Smartphone className="w-6 h-6" /> },
  ]

  const techIcons = {
    'react': <Code className="w-6 h-6" />,
    'node': <Server className="w-6 h-6" />,
    'mongodb': <Database className="w-6 h-6" />,
    'react-native': <Smartphone className="w-6 h-6" />,
    'firebase': <Server className="w-6 h-6" />,
    'php': <Server className="w-6 h-6" />,
    'mysql': <Database className="w-6 h-6" />,
    'jquery': <Code className="w-6 h-6" />,
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-gray-100 dark:from-blue-900 dark:via-purple-900 dark:to-black text-gray-900 dark:text-white">
        <nav className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#" className="text-xl font-bold">Cristian R.</a>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">Sobre mí</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Proyectos</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Habilidades</a>
            </div>
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4" />
                <div
                  onClick={toggleDarkMode}
                  className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer"
                >
                  <div
                    className={`bg-white dark:bg-gray-800 w-4 h-4 rounded-full shadow-md transform ${darkMode ? 'translate-x-6' : ''} transition-transform duration-300`}
                  ></div>
                </div>
                <Moon className="w-4 h-4" />
              </div>

              {/* Responsive Toggle Button (Only Visible on Small Screens) */}
              <button
                onClick={toggleMenu}
                className="block md:hidden focus:outline-none text-gray-700 dark:text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links for Small Screens */}
          <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-4">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">Sobre mí</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Proyectos</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Habilidades</a>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-8">
          <section id="about" className="mb-12 flex flex-col md:flex-row items-center">
            <img
              src={Profile}
              alt="foto de perfil"
              className="rounded-full w-48 h-48 object-cover mb-6 md:mb-0 md:mr-8"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
              <p className="mb-4">
                Soy un desarrollador apasionado por la creación de soluciones innovadoras. 
                Me especializo en desarrollo web y móvil utilizando tecnologías modernas.
              </p>
              <h3 className="text-xl font-semibold mb-2">Estudios</h3>
              <ul className="list-disc list-inside">
                <li>Grado en Ingeniería Informática - Universidad XYZ</li>
                <li>Máster en Desarrollo Web - Instituto ABC</li>
              </ul>
            </div>
          </section>

          <section id="projects" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-blue-600 dark:text-blue-400">
                          {techIcons[tech]}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section id="skills" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 flex items-center p-4 rounded-lg">
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        </main>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 max-w-2xl w-full p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mb-4">{selectedProject.description}</p>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-60 object-cover rounded-lg mb-4" />
              <div className="flex space-x-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
