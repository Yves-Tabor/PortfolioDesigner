import React from 'react';
import { SectionData } from '../types/portfolio';

interface MobileNavProps {
  sections: SectionData[];
  activeIndex: number;
  onNavigate: (sectionId: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  sections,
  activeIndex,
  onNavigate,
}) => {
  const currentSection = sections[activeIndex] || sections[0];
  const formattedIndex = String(activeIndex + 1).padStart(2, '0');
  const formattedTotal = String(sections.length).padStart(2, '0');

  return (
    <nav className="mobile-nav-bar">
      <div className="flex justify-between items-baseline text-[11px] text-gray-500 mb-2">
        <span>
          Section <span className="mono text-emerald-600 font-bold">{formattedIndex}</span>/{formattedTotal}
        </span>
        <strong className="text-black text-[13px] font-bold">
          {currentSection.title}
        </strong>
      </div>

      <div className="flex gap-2">
        {sections.map((sec, i) => {
          const numStr = String(i + 1).padStart(2, '0');
          const isActive = i === activeIndex;

          return (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className={`dot-btn flex-1 h-8 text-[11px] ${isActive ? 'active' : ''}`}
              aria-label={`Go to ${sec.title}`}
            >
              {numStr}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
