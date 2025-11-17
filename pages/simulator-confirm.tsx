import React, { useMemo } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSkills } from "../context/skill-context";
import { skills, skillComplementarity } from "../data/db";
import { Skill, SkillCategory } from "../types";

export const SimulatorConfirmPage: React.FC = () => {
  const { selectedSkills, toggleSkill } = useSkills();

  const skillsMap = useMemo(
    () => new Map(skills.map((skill) => [skill.id, skill])),
    []
  );

  const categoryLabels: Record<SkillCategory, string> = {
    tech: "Técnicas",
    human: "Humanas",
    innovation: "Inovação",
  };

  const categoryColors: Record<SkillCategory, string> = {
    tech: "bg-cyan-500/20 text-cyan-400 border-cyan-500",
    human: "bg-green-500/20 text-green-400 border-green-500",
    innovation: "bg-purple-500/20 text-purple-400 border-purple-500",
  };

  // Group selected skills by category
  const groupedSelectedSkills = useMemo(() => {
    const grouped: Record<SkillCategory, Skill[]> = {
      tech: [],
      human: [],
      innovation: [],
    };

    selectedSkills.forEach((skillId) => {
      const skill = skillsMap.get(skillId);
      if (skill) {
        grouped[skill.category].push(skill);
      }
    });

    return grouped;
  }, [selectedSkills, skillsMap]);

  // Calculate recommended skills not yet selected
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

    return Array.from(recommended.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([id, count]) => ({
        skill: skillsMap.get(id)!,
        count,
      }))
      .filter((item) => item.skill);
  }, [selectedSkills, skillsMap]);

  if (selectedSkills.length === 0) {
    return <Navigate to="/simulator" replace />;
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Revise Suas Seleções
        </h1>
        <p className="text-lg text-slate-300">
          Confira as competências selecionadas e considere adicionar as recomendações complementares.
        </p>
      </div>

      {/* Selected Skills Summary */}
      <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-cyan-400">
            Competências Selecionadas
          </h2>
          <span className="bg-cyan-500 text-white px-4 py-2 rounded-full font-bold">
            {selectedSkills.length} selecionada{selectedSkills.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="space-y-6">
          {(["human", "innovation", "tech"] as SkillCategory[]).map((category) => {
            const categorySkills = groupedSelectedSkills[category];
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                  {categoryLabels[category]} ({categorySkills.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className={`px-4 py-2 rounded-lg border ${categoryColors[category]} flex items-center gap-2`}
                    >
                      <span className="font-medium">{skill.name}</span>
                      <button
                        onClick={() => toggleSkill(skill.id)}
                        className="text-slate-400 hover:text-red-400 transition-colors"
                        title="Remover"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended Skills */}
      {recommendedSkills.length > 0 && (
        <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl p-8 border border-purple-500/30 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">💡</span>
            <div>
              <h2 className="text-2xl font-bold text-purple-400">
                Competências Complementares Recomendadas
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Adicione estas competências para fortalecer seu perfil profissional
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedSkills.map(({ skill, count }) => (
              <div
                key={skill.id}
                className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-purple-500 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{skill.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      <span className={`px-2 py-0.5 rounded ${categoryColors[skill.category]} text-xs`}>
                        {categoryLabels[skill.category]}
                      </span>
                      <span className="ml-2">
                        Complementa {count} de suas habilidades
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSkill(skill.id)}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 hover:scale-105"
                  >
                    <span className="text-lg">+</span>
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          to="/simulator"
          className="text-slate-400 hover:text-white font-semibold transition-colors"
        >
          ← Voltar e Editar Seleções
        </Link>

        <Link
          to="/results"
          className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900"
        >
          Analisar Meu Futuro →
        </Link>
      </div>

      {/* Stats Summary */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700 pt-4">
          <div className="text-3xl font-bold text-green-400">
            {groupedSelectedSkills.human.length}
          </div>
          <p className="text-slate-400 mt-2">Competências Humanas</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700">
          <div className="text-3xl font-bold text-purple-400">
            {groupedSelectedSkills.innovation.length}
          </div>
          <p className="text-slate-400 mt-2">Competências de Inovação</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700">
          <div className="text-3xl font-bold text-cyan-400">
            {groupedSelectedSkills.tech.length}
          </div>
          <p className="text-slate-400 mt-2">Competências Técnicas</p>
        </div>
      </div>
    </div>
  );
};
