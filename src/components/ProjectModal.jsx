import PropTypes from 'prop-types';
import { X } from 'lucide-react';

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 max-w-2xl w-full p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mb-4">{project.description}</p>
        {/*<img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-lg mb-4" /> */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Tecnologías:</h4>
          <div className="flex space-x-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Detalles Adicionales:</h4>
          <p className="text-gray-600">
            Link: <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </p>
        </div>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
