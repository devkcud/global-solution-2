import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useSkills } from "../context/skill-context";
import { skills, skillComplementarity } from "../data/db";
import { SkillButton } from "../components/skill-button";
import { Skill, SkillCategory } from "../types";

export const SimulatorPage: React.FC = () => {
  const { selectedSkills, toggleSkill } = useSkills();

  const skillCategories: Record<SkillCategory, string> = {
    tech: "Competências Técnicas",
    human: "Competências Humanas",
    innovation: "Competências de Inovação",
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  const orderedCategories: SkillCategory[] = ["human", "innovation", "tech"];

  // Calculate recommended skills based on current selections
  const recommendedSkills = useMemo(() => {
    const recommended = new Map<string, number>();

    selectedSkills.forEach((skillId) => {
      const complements = skillComplementarity[skillId] || [];
      complements.forEach((complementId) => {
        if (!selectedSkills.includes(complementId)) {
          recommended.set(complementId, (recommended.get(complementId) || 0) + 1);
        }
      });
    });

    // Sort by recommendation count and return top recommendations
    return Array.from(recommended.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([id]) => id);
  }, [selectedSkills]);

  const skillsMap = useMemo(
    () => new Map(skills.map((skill) => [skill.id, skill])),
    []
  );

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Simulador de Carreira
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Selecione as habilidades que você possui. Vamos encontrar as carreiras
          do futuro que mais combinam com você.
        </p>
      </div>

      {/* Recommended Skills Section */}
      {recommendedSkills.length > 0 && (
        <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💡</span>
            <h3 className="text-lg font-semibold text-purple-400">
              Competências Recomendadas
            </h3>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Com base nas suas seleções, estas competências complementariam bem seu perfil:
          </p>
          <div className="flex flex-wrap gap-2">
            {recommendedSkills.slice(0, 6).map((skillId) => {
              const skill = skillsMap.get(skillId);
              if (!skill) return null;
              return (
                <button
                  key={skillId}
                  onClick={() => toggleSkill(skillId)}
                  className="group relative px-4 py-2 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/50 hover:border-purple-400 rounded-lg text-purple-300 hover:text-purple-200 transition-all duration-200 flex items-center gap-2"
                >
                  <span className="text-green-400 font-bold">+</span>
                  {skill.name}
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Adicionar
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-12 space-y-12">
        {orderedCategories.map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-bold text-cyan-400 border-b-2 border-slate-700 pb-2 mb-6">
              {skillCategories[category]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {groupedSkills[category]?.map((skill) => {
                const isRecommended = recommendedSkills.includes(skill.id);
                return (
                  <div key={skill.id} className="relative">
                    {isRecommended && !selectedSkills.includes(skill.id) && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                          Recomendado
                        </span>
                      </div>
                    )}
                    <SkillButton
                      skill={skill}
                      isSelected={selectedSkills.includes(skill.id)}
                      onClick={toggleSkill}
                      isRecommended={isRecommended && !selectedSkills.includes(skill.id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        {selectedSkills.length > 0 ? (
          <Link
            to="/simulator/confirm"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900"
          >
            Revisar Seleções ({selectedSkills.length})
          </Link>
        ) : (
          <button
            disabled
            className="bg-slate-600 text-slate-400 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg cursor-not-allowed"
          >
            Revisar Seleções
          </button>
        )}
        {selectedSkills.length === 0 && (
          <p className="text-slate-400 mt-4 text-sm">
            Selecione pelo menos uma habilidade para continuar.
          </p>
        )}
      </div>
    </div>
  );
};
