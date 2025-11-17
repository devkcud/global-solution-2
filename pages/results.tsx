import React, { useState, useEffect, useMemo } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSkills } from "../context/skill-context";
import { useAuth } from "../context/auth-context";
import { futureJobs, skills, courses } from "../data/db";
import { calculateMatches } from "../utils/analysis";
import { ResultCard } from "../components/result-card";
import { MatchedJob, Course } from "../types";

export const ResultsPage: React.FC = () => {
  const { selectedSkills, setRecommendedCourses } = useSkills();
  const { user } = useAuth();
  const [topMatches, setTopMatches] = useState<MatchedJob[]>([]);
  const [recommendedCoursesList, setRecommendedCoursesList] = useState<Course[]>([]);

  const skillsMap = useMemo(
    () => new Map(skills.map((skill) => [skill.id, skill.name])),
    []
  );

  useEffect(() => {
    if (selectedSkills.length > 0) {
      const matches = calculateMatches(selectedSkills, futureJobs);
      setTopMatches(matches);

      // Calculate recommended courses based on skills to develop
      const skillsToLearn = new Set<string>();

      // Add skills from matched jobs that user doesn't have
      matches.forEach((job) => {
        job.skillsToDevelop.forEach((skill) => {
          if (!selectedSkills.includes(skill)) {
            skillsToLearn.add(skill);
          }
        });
        // Also add required skills they don't have
        job.mappedFrom.forEach((skill) => {
          if (!selectedSkills.includes(skill)) {
            skillsToLearn.add(skill);
          }
        });
      });

      // Score courses by how many of the needed skills they teach
      const coursesWithScores = courses.map((course) => {
        let score = 0;
        let matchingSkills: string[] = [];

        course.skills.forEach((skillId) => {
          if (skillsToLearn.has(skillId)) {
            score += 3; // High priority for skills to learn
            matchingSkills.push(skillId);
          } else if (selectedSkills.includes(skillId)) {
            score += 1; // Lower priority for skills they have (reinforcement)
          }
        });

        return { course, score, matchingSkills };
      });

      // Sort by score and pick top courses
      const sortedCourses = coursesWithScores
        .filter((c) => c.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);

      const recommended = sortedCourses.map((c) => c.course);
      setRecommendedCoursesList(recommended);

      // Store recommended course IDs for auto-enrollment
      const courseIds = recommended.map((c) => c.id);
      setRecommendedCourses(courseIds);
    }
  }, [selectedSkills, setRecommendedCourses]);

  if (selectedSkills.length === 0) {
    return <Navigate to="/simulator" replace />;
  }

  const levelColors = {
    beginner: "bg-green-500/20 text-green-400 border-green-500",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500",
    advanced: "bg-red-500/20 text-red-400 border-red-500",
  };

  const levelLabels = {
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Seu Futuro em Potencial
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Com base nas suas habilidades, estas são as carreiras emergentes mais
          promissoras para você.
        </p>
      </div>

      <div className="mt-12">
        {topMatches.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {topMatches.map((job) => (
              <ResultCard key={job.id} job={job} skillsMap={skillsMap} />
            ))}
          </div>
        ) : (
          <div className="text-center bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-cyan-400">
              Nenhuma correspondência encontrada
            </h2>
            <p className="mt-2 text-slate-300">
              Não encontramos uma carreira com alta compatibilidade no momento.
              Tente selecionar mais habilidades para um resultado mais preciso.
            </p>
          </div>
        )}
      </div>

      {/* Course Recommendations Section */}
      {recommendedCoursesList.length > 0 && (
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Cursos Recomendados Para Você
            </h2>
            <p className="text-slate-400">
              Estes cursos complementam suas habilidades e preparam você para as carreiras identificadas.
            </p>
            {!user && (
              <div className="mt-4 bg-cyan-500/10 border border-cyan-500 rounded-lg p-4 inline-block">
                <p className="text-cyan-400">
                  <Link to="/login" className="font-semibold underline hover:text-cyan-300">
                    Faça login
                  </Link>{" "}
                  para se matricular automaticamente nesses cursos!
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedCoursesList.map((course, index) => (
              <div
                key={course.id}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 relative"
              >
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Mais Recomendado
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{course.thumbnail}</div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded border ${levelColors[course.level]}`}
                  >
                    {levelLabels[course.level]}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="text-slate-500 text-xs mb-4">
                  {course.instructor} • {course.duration}
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">
                    Habilidades que você desenvolverá:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skillId) => {
                      const isNewSkill = !selectedSkills.includes(skillId);
                      return (
                        <span
                          key={skillId}
                          className={`px-2 py-1 rounded text-xs ${
                            isNewSkill
                              ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                              : "bg-slate-700 text-slate-400"
                          }`}
                        >
                          {isNewSkill && "+"} {skillsMap.get(skillId) || skillId}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="block w-full bg-slate-700 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm text-center"
                >
                  Ver Detalhes
                </Link>
              </div>
            ))}
          </div>

          {user ? (
            <div className="mt-8 text-center">
              <div className="bg-green-500/10 border border-green-500 rounded-lg p-6 inline-block">
                <div className="text-3xl mb-2">✅</div>
                <p className="text-green-400 font-medium">
                  Esses cursos foram salvos no seu perfil e serão automaticamente adicionados ao seu dashboard!
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-8 text-center">
              <Link
                to="/login"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg hover:scale-105"
              >
                Fazer Login e Matricular-se
              </Link>
              <p className="text-slate-400 text-sm mt-2">
                Seus cursos recomendados serão salvos
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-12 text-center">
        <Link
          to="/simulator"
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          &larr; Voltar e ajustar minhas habilidades
        </Link>
      </div>
    </div>
  );
};
