
import React from 'react';
import { Skill } from '../types';

interface SkillButtonProps {
  skill: Skill;
  isSelected: boolean;
  onClick: (id: string) => void;
  isRecommended?: boolean;
}

export const SkillButton: React.FC<SkillButtonProps> = ({ skill, isSelected, onClick, isRecommended = false }) => {
  const baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  const selectedClasses = "bg-cyan-500 border-cyan-400 text-white shadow-lg scale-105";
  const recommendedClasses = "bg-slate-700 border-purple-500 text-slate-200 hover:bg-purple-500/20 hover:border-purple-400 ring-2 ring-purple-500/30";
  const unselectedClasses = "bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:border-purple-600";

  const getClasses = () => {
    if (isSelected) return selectedClasses;
    if (isRecommended) return recommendedClasses;
    return unselectedClasses;
  };

  return (
    <button
      onClick={() => onClick(skill.id)}
      className={`${baseClasses} ${getClasses()}`}
    >
      <span className="font-semibold">{skill.name}</span>
    </button>
  );
};
