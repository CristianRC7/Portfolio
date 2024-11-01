import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

function Projects({ setSelectedProject }) {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            onClick={() => setSelectedProject(project)}
          >
            <motion.h3 className="text-2xl font-semibold mb-2 text-center">{project.title}</motion.h3>
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-center text-blue-600 font-bold cursor-pointer hover:underline">
              Ver detalles
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
