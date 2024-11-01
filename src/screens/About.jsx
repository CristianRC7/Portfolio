import Profile from '../assets/perfil.png';

function About() {
  return (
    <section id="about" className="mb-12 flex flex-col md:flex-row items-center">
      <img 
        src={Profile} 
        alt="foto de perfil" 
        className="rounded-full w-48 h-48 object-cover mb-6 md:mb-0 md:mr-8" 
        style={{ objectPosition: 'top' }}
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="mb-4">Soy un desarrollador apasionado por la creación de soluciones innovadoras...</p>
        <h3 className="text-xl font-semibold mb-2">Estudios</h3>
        <ul className="list-disc list-inside">
          <li>Ingeniería de Sistemas - Universidad UTEPSA</li>
        </ul>
      </div>
    </section>
  );
}

export default About;