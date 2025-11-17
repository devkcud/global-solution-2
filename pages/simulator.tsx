import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSkills } from "../context/skill-context";
import { skills, skillComplementarity } from "../data/db";
import { SkillButton } from "../components/skill-button";
import { Skill, SkillCategory } from "../types";

export const SimulatorPage: React.FC = () => {
  const { selectedSkills, toggleSkill } = useSkills();
  const [animateCount, setAnimateCount] = useState(false);

  const skillCategories: Record<SkillCategory, { name: string; icon: string; color: string }> = {
    tech: { name: "Competências Técnicas", icon: "💻", color: "cyan" },
    human: { name: "Competências Humanas", icon: "🧠", color: "green" },
    innovation: { name: "Competências de Inovação", icon: "🚀", color: "purple" },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  const orderedCategories: SkillCategory[] = ["human", "innovation", "tech"];

  // Animate counter when skills change
  useEffect(() => {
    setAnimateCount(true);
    const timer = setTimeout(() => setAnimateCount(false), 300);
    return () => clearTimeout(timer);
  }, [selectedSkills.length]);

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

    return Array.from(recommended.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([id]) => id);
  }, [selectedSkills]);

  const skillsMap = useMemo(
    () => new Map(skills.map((skill) => [skill.id, skill])),
    []
  );

  const progressPercentage = Math.min((selectedSkills.length / 10) * 100, 100);

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-green-500/5" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full animate-bounce">
            <span className="text-cyan-400 text-sm font-medium">Descubra Seu Potencial</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Simulador de{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Carreira do Futuro
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Selecione suas habilidades e descubra quais carreiras emergentes
            combinam com seu perfil único.
          </p>

          {/* Progress Indicator */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Progresso</span>
              <span className={`font-bold transition-all duration-300 ${animateCount ? 'scale-125 text-cyan-400' : 'text-white'}`}>
                {selectedSkills.length} habilidade{selectedSkills.length !== 1 ? 's' : ''} selecionada{selectedSkills.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Recomendamos selecionar pelo menos 5-10 habilidades para melhores resultados
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Recommended Skills Section */}
        {recommendedSkills.length > 0 && (
          <div className="mb-12 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500/20 p-3 rounded-xl animate-pulse">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400">
                  Competências Recomendadas
                </h3>
                <p className="text-slate-400 text-sm">
                  Baseado nas suas seleções, estas competências complementariam bem seu perfil
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {recommendedSkills.slice(0, 6).map((skillId, index) => {
                const skill = skillsMap.get(skillId);
                if (!skill) return null;
                return (
                  <button
                    key={skillId}
                    onClick={() => toggleSkill(skillId)}
                    className="group relative px-4 py-2.5 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/50 hover:border-purple-400 rounded-xl text-purple-300 hover:text-purple-100 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-green-400 font-bold text-lg">+</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      Adicionar
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Skills Categories */}
        <div className="space-y-16 pt-8">
          {orderedCategories.map((category, categoryIndex) => {
            const categoryInfo = skillCategories[category];
            const categorySkillsCount = groupedSkills[category]?.filter(s =>
              selectedSkills.includes(s.id)
            ).length || 0;

            return (
              <div
                key={category}
                className="relative"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`bg-${categoryInfo.color}-500/20 p-4 rounded-2xl border border-${categoryInfo.color}-500/30`}>
                      <span className="text-3xl">{categoryInfo.icon}</span>
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold text-${categoryInfo.color}-400`}>
                        {categoryInfo.name}
                      </h2>
                      <p className="text-slate-400 text-sm">
                        {groupedSkills[category]?.length || 0} competências disponíveis
                      </p>
                    </div>
                  </div>
                  {categorySkillsCount > 0 && (
                    <div className={`bg-${categoryInfo.color}-500/20 px-4 py-2 rounded-full border border-${categoryInfo.color}-500/30 animate-pulse`}>
                      <span className={`text-${categoryInfo.color}-400 font-bold`}>
                        {categorySkillsCount} selecionada{categorySkillsCount !== 1 ? 's' : ''}
                      </span>
                    </div>
                  )}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {groupedSkills[category]?.map((skill, skillIndex) => {
                    const isRecommended = recommendedSkills.includes(skill.id);
                    return (
                      <div
                        key={skill.id}
                        className="relative transform transition-all duration-300 hover:-translate-y-1"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {isRecommended && !selectedSkills.includes(skill.id) && (
                          <div className="absolute -top-2 -right-2 z-10">
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
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
            );
          })}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          {selectedSkills.length > 0 ? (
            <Link
              to="/simulator/confirm"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 animate-bounce"
            >
              <span>Revisar</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {selectedSkills.length}
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ) : (
            <div className="bg-slate-700 text-slate-400 font-bold py-4 px-8 rounded-2xl text-lg shadow-xl cursor-not-allowed opacity-75">
              <span>Selecione habilidades</span>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4">
              {selectedSkills.length === 0
                ? "Comece Selecionando Suas Habilidades"
                : selectedSkills.length < 3
                ? "Continue Selecionando..."
                : "Pronto Para Descobrir Seu Futuro?"
              }
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              {selectedSkills.length === 0
                ? "Clique nas competências acima que você possui ou deseja desenvolver."
                : selectedSkills.length < 3
                ? `Você selecionou ${selectedSkills.length} habilidade${selectedSkills.length !== 1 ? 's' : ''}. Recomendamos pelo menos 3 para uma análise mais precisa.`
                : `Com ${selectedSkills.length} habilidades selecionadas, você está pronto para descobrir suas carreiras ideais!`
              }
            </p>

            {selectedSkills.length >= 3 && (
              <Link
                to="/simulator/confirm"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 shadow-lg hover:scale-105"
              >
                <span>Revisar e Analisar</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {selectedSkills.length}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
