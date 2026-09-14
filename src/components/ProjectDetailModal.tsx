import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ExternalLink, Code, CheckCircle } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white border border-gray-200 rounded-sm shadow-xl max-w-xl w-full p-6 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black p-1 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="proj-meta mb-2">
          <span>{project.category}</span>
          <span className="text-gray-400 font-normal">{project.statusYear}</span>
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-black mb-3">
          {project.title}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {project.longDescription || project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 mono">
              Key Metrics & Impact
            </h4>
            <ul className="space-y-2 text-xs text-emerald-900">
              {project.metrics.map((metric, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 mono">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tag tag-accent">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <a
            href={project.demoUrl || '#'}
            onClick={(e) => e.preventDefault()}
            className="btn btn-primary text-xs"
          >
            <span>Live Demonstration</span>
            <ExternalLink size={14} />
          </a>
          <a
            href={project.githubUrl || '#'}
            onClick={(e) => e.preventDefault()}
            className="btn btn-dark text-xs"
          >
            <Code size={14} />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
