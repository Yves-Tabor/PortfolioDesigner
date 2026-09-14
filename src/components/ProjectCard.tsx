import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="proj-card group"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(project);
        }
      }}
    >
      <div className="proj-meta">
        <span>{project.category}</span>
        <span className="text-gray-400 font-normal">{project.statusYear}</span>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="proj-title group-hover:text-emerald-600 transition-colors">
          {project.title}
        </h3>
        <ExternalLink size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="proj-desc">{project.description}</p>

      <div className="proj-stack">
        {project.stack.join(' • ')}
      </div>
    </div>
  );
};
