import PropTypes from 'prop-types';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 max-w-2xl w-full p-6 rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <X className="h-6 w-6" />
          </button>
        </div>
        <motion.p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</motion.p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Tecnologías:</h4>
          <div className="flex flex-wrap space-x-2 mt-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Detalles Adicionales:</h4>
          <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
