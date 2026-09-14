import React from 'react';
import { SkillCategory } from '../types/portfolio';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => {
  return (
    <div className="skill-col">
      <div className="skill-head">
        <span
          className="skill-dot"
          style={{ background: category.color }}
        ></span>
        {category.title}
      </div>

      {category.items.map((item, index) => {
        const isLast = index === category.items.length - 1;
        const isDarkText = category.color === 'var(--black)';

        return (
          <div
            key={item.name}
            className="skill-item"
            style={isLast ? { borderBottom: 'none', marginBottom: 0 } : {}}
          >
            <span>{item.name}</span>
            <span style={{ color: isDarkText ? 'var(--black)' : 'var(--emerald-600)' }}>
              {item.detail}
            </span>
          </div>
        );
      })}
    </div>
  );
};
