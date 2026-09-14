import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  isDark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  headline,
  isDark = false,
}) => {
  return (
    <div>
      <div className="eyebrow">
        <span className={isDark ? 'text-emerald-400' : 'text-emerald-600'}>
          {eyebrow}
        </span>
        <div className={`rule ${isDark ? 'bg-emerald-600' : 'bg-emerald-200'}`}></div>
      </div>

      <h2 className={`headline ${isDark ? 'text-white' : 'text-black'}`}>
        {headline}
      </h2>
    </div>
  );
};
