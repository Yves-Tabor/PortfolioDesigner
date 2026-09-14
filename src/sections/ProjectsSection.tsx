import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  eyebrow: string;
  headline: string;
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  eyebrow,
  headline,
  projects,
  onSelectProject,
}) => {
  return (
    <section id="projects" className="stack-section" data-id="projects">
      <div className="inner reveal in-view">
        <SectionHeader eyebrow={eyebrow} headline={headline} />

        <div className="space-y-4">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onClick={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
