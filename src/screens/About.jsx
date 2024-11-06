import { Eye } from 'lucide-react';
import Profile from '../assets/perfil.png';
import CV from '../assets/projectsImages/CV_CristianRamirez.pdf'

function About() {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Profile} 
            alt="foto de perfil" 
            className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" 
            style={{ objectPosition: 'top' }}
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Cristian Ramírez
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
            Desarrollador Web
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. Me especializo en el desarrollo de aplicaciones web y móviles, combinando funcionalidad, diseño y experiencia de usuario intuitiva.
          </p>
          <a 
            href={CV} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
          >
            <Eye className="w-6 h-6 mr-2" />
            Ver CV
          </a>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Sobre mí</h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
          Mi enfoque está en utilizar las mejores prácticas de desarrollo y mantenerme al tanto de las nuevas tendencias y tecnologías emergentes. Además del desarrollo de software, me apasionan los deportes, el aprendizaje de nuevas habilidades y la exploración de nuevas tecnologías.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Estudios</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 text-lg">
          <li>Ingeniería de Sistemas - Universidad UTEPSA</li>
        </ul>
      </div>
    </section>
  );
}

export default About;