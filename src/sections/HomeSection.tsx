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
          I am a digital product designer and full-stack technologist with 10+ years dedicated to turning complex data landscapes into clear, intuitive human experiences.
        </p>
        
        <p className="text-gray-600 text-[14px] leading-[22.75px] m-0">
          Currently spearheading next-generation software interfaces at Synthetix Cloud, establishing design tokens, high-velocity frontend architecture, and AI-accelerated workflows.
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
