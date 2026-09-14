import React from 'react';
import { StatItem } from '../types/portfolio';

interface StatCardProps {
  stat: StatItem;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className={`stat ${stat.isAccent ? 'accent' : ''}`}>
      <div className="stat-label mono">{stat.label}</div>
      <div className="stat-value">{stat.value}</div>
    </div>
  );
};
