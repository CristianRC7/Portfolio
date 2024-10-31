import { useState } from 'react'
import { Moon, Sun, Code, Database, Globe, Smartphone, Server, Cpu, X } from 'lucide-react'

import Profile from './assets/perfil.png'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Aplicación Web de Comercio Electrónico',
      description: 'Una plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de pedidos.',
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['react', 'node', 'mongodb']
    },
    {
      id: 2,
      title: 'Aplicación Móvil de Fitness',
      description: 'Una app móvil para seguimiento de ejercicios, nutrición y progreso personal.',
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['react-native', 'firebase']
    },
    {
      id: 3,
      title: 'Sistema de Gestión de Contenidos',
      description: 'Un CMS personalizado para la gestión de blogs y sitios web dinámicos.',
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['php', 'mysql', 'jquery']
    },
  ]

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

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-gray-100 dark:from-blue-900 dark:via-purple-900 dark:to-black text-gray-900 dark:text-white">
        <nav className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#" className="text-xl font-bold">Mi Portfolio</a>
            <div className="flex items-center space-x-4">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">Sobre mí</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Proyectos</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Habilidades</a>
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4" />
                <div
                  onClick={toggleDarkMode}
                  className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer"
                >
                  <div
                    className={`bg-white dark:bg-gray-800 w-4 h-4 rounded-full shadow-md transform ${darkMode ? 'translate-x-6' : ''
                      } transition-transform duration-300`}
                  ></div>
                </div>
                <Moon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-8">
          <section id="about" className="mb-12 flex flex-col md:flex-row items-center">
          <img
              src={Profile}
              alt="Tu foto"
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
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="mb-4">{selectedProject.description}</p>
              <div className="flex gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded flex items-center">
                    {techIcons[tech]}
                    <span className="ml-1">{tech}</span>
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