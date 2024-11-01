import PropTypes from 'prop-types';

function Projects({ setSelectedProject }) {
  const projects = [
    {
      id: 1,
      title: "Página JETS 2023",
      description:
        "Desarrollo de una página web para la Universidad UTEPSA, dedicada a las JETS (Jornadas Empresariales, Tecnológicas y Sociales). Esta página, construida con HTML, CSS y JavaScript, proporciona a los estudiantes información sobre conferencias, foros, actividades lúdicas y convocatorias durante los cuatro días del evento, facilitando así su participación y acceso a contenidos relevantes.",
      image: "/assets/projectsImages/jets2023.jpg",
      technologies: ["html", "css", "js"],
      link: "https://www.utepsa.edu/jets/2023/"
    },
    {
      id: 2,
      title: "URBACAR WhatsApp-Bot",
      description:
        "Desarrollado en Python y desplegado en Glitch, este bot de WhatsApp utiliza la API de Meta para proporcionar una interacción fluida con los clientes. Su propósito principal es mantener a los clientes informados sobre las últimas ofertas de URBACAR, así como brindar información sobre urbanizaciones, redes sociales, y la posibilidad de agendar visitas.",
      image: "../assets/perfil.png",
      technologies: ["python", "meta-api"],
      link: "https://api.whatsapp.com/send?phone=59167800870&text=Hola"
    },
    {
      id: 3,
      title: "JETS APP",
      description:
        "Aplicación móvil desarrollada en Expo React Native con backend en PHP, diseñada para estudiantes y administradores de los JETS. Esta plataforma permite a los estudiantes mantenerse informados sobre actividades lúdicas, conferencias y fotos, con la opción de calificar cada evento.",
      image: "/assets/projectsImages/jetsapp.jpg",
      technologies: ["react native", "php"],
      link: "https://github.com/CristianRC7/EventsApp.git"
    },
    {
      id: 4,
      title: "Página Diario Zona Norte",
      description:
        "Desarrollo de una plataforma de noticias para el Diario Zona Norte, un medio de comunicación de la provincia de Montero. Construida en WordPress con personalización en CSS, la página presenta un diseño dinámico y adaptable que permite al diario compartir noticias y contenido multimedia.",
      image: "/assets/projectsImages/zonanorte.jpg",
      technologies: ["wordpress", "css"],
      link: "https://diariozonanorte.com.bo/"
    }
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Ver detalles
              </button>
              <div className="flex space-x-1">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Projects.propTypes = {
  setSelectedProject: PropTypes.func.isRequired,
};

export default Projects;
