import PropTypes from 'prop-types';

function Projects({ projects, setSelectedProject }) {
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
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
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
  projects: PropTypes.array.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};

export default Projects;
