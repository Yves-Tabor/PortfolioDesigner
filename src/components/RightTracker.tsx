import React from 'react';
import { SectionData } from '../types/portfolio';

interface RightTrackerProps {
  sections: SectionData[];
  activeIndex: number;
  onNavigate: (sectionId: string) => void;
}

export const RightTracker: React.FC<RightTrackerProps> = ({
  sections,
  activeIndex,
  onNavigate,
}) => {
  const currentSection = sections[activeIndex] || sections[0];
  const progressPct = Math.round(((activeIndex + 1) / sections.length) * 100);
  const formattedIndex = String(activeIndex + 1).padStart(2, '0');
  const formattedTotal = String(sections.length).padStart(2, '0');

  return (
    <aside className="aside-right-sticky bg-white border-l border-gray-200 p-10 flex flex-col justify-between">
      <div className="tracker-top mono flex justify-between items-center pb-4 border-b border-gray-100 text-xs">
        <span className="text-gray-400">STATUS</span>
        <span>
          <span className="text-emerald-600 font-bold">{formattedIndex}</span>{' '}
          <span className="text-gray-200">/</span>{' '}
          <span className="text-gray-400">{formattedTotal}</span>
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center py-6">
        <div key={currentSection.id} className="tracker-card active">
          <div className="tracker-eyebrow mono">
            Section {currentSection.number} of {formattedTotal}
          </div>
          <h3 className="tracker-title">{currentSection.title}</h3>
          <p className="tracker-desc">{currentSection.desc}</p>
          <div className="tracker-context mono">
            <span className="badge-dot"></span>
            Context: {currentSection.context}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs mono mb-1">
          <span className="text-gray-400">Progress</span>
          <span className="text-emerald-700 font-bold">{progressPct}%</span>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPct}%` }}
          ></div>
        </div>

        <div className="dots-row">
          {sections.map((sec, i) => {
            const numStr = String(i + 1).padStart(2, '0');
            const isActive = i === activeIndex;

            return (
              <button
                key={sec.id}
                onClick={() => onNavigate(sec.id)}
                className={`dot-btn ${isActive ? 'active' : ''}`}
                aria-label={`Go to ${sec.title}`}
              >
                {numStr}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
