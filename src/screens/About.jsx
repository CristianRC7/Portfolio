import { Eye, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import Profile from '../assets/perfil.png';
import CV from '../assets/projectsImages/CV_CristianRamirez.pdf'

function About() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/CristianRC7/',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/cristian-ramirez7/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/people/Cristian-David-Ramirez-Callejas/pfbid025xAwYY21vu6UphQmqD9mzQku8svhPWWGdcmD3CXT8J7Eo81Vovn2hgrtjzqYZpNYl/',
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/cristian_rcxd/',
      color: 'hover:bg-pink-600'
    }
  ];

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
          {/* Social Media Links */}
          <div className="mt-6 flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white group`}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6 transition-transform group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Cristian Ramírez
          </h1>
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