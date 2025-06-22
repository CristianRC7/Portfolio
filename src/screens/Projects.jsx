import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import projectsData from '../data/projects.json';

function Projects({ setSelectedProject }) {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg flex items-center gap-2">
                  <Eye className="w-5 h-5" /> Ver Detalles
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

Projects.propTypes = {
  setSelectedProject: PropTypes.func.isRequired,
};

export default Projects;
