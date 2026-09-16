import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { StatCard } from '../components/StatCard';
import { StatItem } from '../types/portfolio';

interface HomeSectionProps {
  eyebrow: string;
  headline: string;
  stats: StatItem[];
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  eyebrow,
  headline,
  stats,
}) => {
  return (
    <section id="home" className="stack-section" data-id="home">
      <div className="inner reveal in-view">
        <SectionHeader eyebrow={eyebrow} headline={headline} />

        <p className="text-gray-600 text-[14px] leading-[22.75px] mb-[15px] mt-0">
          I am a UI/UX designer and junior developer with 2+ years of experience exploring how thoughtful design and code can solve real-world problems.
        </p>

        <p className="text-gray-600 text-[14px] leading-[22.75px] m-0">
          I enjoy designing interfaces in Figma and turning them into functional web applications using modern frontend and backend technologies.
        </p>

        <div className="stat-grid">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
