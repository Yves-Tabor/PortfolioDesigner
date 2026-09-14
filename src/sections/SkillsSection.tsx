import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCategoryCard } from '../components/SkillCategoryCard';
import { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  eyebrow: string;
  headline: string;
  categories: SkillCategory[];
  tags: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  eyebrow,
  headline,
  categories,
  tags,
}) => {
  return (
    <section id="skills" className="stack-section bg-tint" data-id="skills">
      <div className="inner reveal in-view">
        <SectionHeader eyebrow={eyebrow} headline={headline} />

        <div className="skill-grid-responsive flex gap-4">
          {categories.map((cat) => (
            <SkillCategoryCard key={cat.title} category={cat} />
          ))}
        </div>

        <div className="flex gap-2 flex-wrap pt-6">
          {tags.map((tag, idx) => (
            <span
              key={tag}
              className={`tag ${idx === 3 ? 'tag-accent' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
