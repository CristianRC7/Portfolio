import Profile from '../assets/perfil.png';

function About() {
  return (
    <section id="about" className="mb-12 flex flex-col md:flex-row items-center">
      <div className="flex-shrink-0">
        <img 
          src={Profile} 
          alt="foto de perfil" 
          className="rounded-full w-48 h-48 object-cover mb-6 md:mb-0 md:mr-8" 
          style={{ objectPosition: 'top' }}
        />
      </div>
      <div className="md:flex-grow">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="mb-4">
          Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. Me especializo en el desarrollo de aplicaciones web y móviles, donde busco combinar funcionalidad, diseño y una experiencia de usuario intuitiva. Mi enfoque está en utilizar las mejores prácticas de desarrollo y mantenerme al tanto de las nuevas tendencias y tecnologías emergentes. Además del desarrollo de software, me apasionan los deportes, el aprendizaje de nuevas habilidades y la exploración de nuevas tecnologías.
        </p>
        <h3 className="text-xl font-semibold mb-2">Estudios</h3>
        <ul className="list-disc list-inside">
          <li>Ingeniería de Sistemas - Universidad UTEPSA</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
