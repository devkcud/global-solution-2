import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { courses, skills } from "../data/db";

export const CoursesPage = () => {
  const { user, enrollInCourse, unenrollFromCourse } = useAuth();
  const [filter, setFilter] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const skillsMap = skills.reduce((acc, skill) => {
    acc[skill.id] = skill.name;
    return acc;
  }, {} as Record<string, string>);

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

  const filteredCourses = courses.filter((course) => {
    const matchesFilter = filter === "all" || course.level === filter;
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const isEnrolled = (courseId: string) =>
    user?.enrolledCourses.includes(courseId) || false;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Cursos Disponíveis
        </h1>
        <p className="text-slate-400">
          Explore nossa biblioteca de cursos e desenvolva as habilidades do futuro.
        </p>
      </div>

      <div className="bg-slate-800 rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("beginner")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "beginner"
                  ? "bg-green-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Iniciante
            </button>
            <button
              onClick={() => setFilter("intermediate")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "intermediate"
                  ? "bg-yellow-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Intermediário
            </button>
            <button
              onClick={() => setFilter("advanced")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "advanced"
                  ? "bg-red-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Avançado
            </button>
          </div>
        </div>
      </div>

      {!user && (
        <div className="bg-cyan-500/10 border border-cyan-500 rounded-lg p-4 mb-6">
          <p className="text-cyan-400">
            <Link to="/login" className="font-semibold underline hover:text-cyan-300">
              Faça login
            </Link>{" "}
            para se matricular nos cursos e acompanhar seu progresso.
          </p>
        </div>
      )}

      {filteredCourses.length === 0 ? (
        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Nenhum curso encontrado
          </h3>
          <p className="text-slate-400">
            Tente ajustar os filtros ou termos de busca.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`bg-slate-800 rounded-lg overflow-hidden transition-all ${
                isEnrolled(course.id)
                  ? "ring-2 ring-cyan-400"
                  : "hover:ring-2 hover:ring-slate-600"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{course.thumbnail}</div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded border ${levelColors[course.level]}`}
                    >
                      {levelLabels[course.level]}
                    </span>
                    {isEnrolled(course.id) && (
                      <span className="px-2 py-1 text-xs font-medium rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500">
                        Matriculado
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-300">
                    <span className="text-slate-500 mr-2">Instrutor:</span>
                    {course.instructor}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <span className="text-slate-500 mr-2">Duração:</span>
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <span className="text-slate-500 mr-2">Alunos:</span>
                    <span className="text-green-400 font-medium">
                      {course.enrolledCount.toLocaleString('pt-BR')} matriculados
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">
                    Habilidades desenvolvidas:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skillId) => (
                      <span
                        key={skillId}
                        className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs"
                      >
                        {skillsMap[skillId] || skillId}
                      </span>
                    ))}
                  </div>
                </div>

                {user ? (
                  isEnrolled(course.id) ? (
                    <div className="flex gap-2">
                      <Link
                        to="/dashboard"
                        className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm text-center"
                      >
                        Ir para Dashboard
                      </Link>
                      <button
                        onClick={() => unenrollFromCourse(course.id)}
                        className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2 px-4 rounded transition-colors text-sm"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => enrollInCourse(course.id)}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
                    >
                      Matricular-se
                    </button>
                  )
                ) : (
                  <Link
                    to="/login"
                    className="block w-full bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2 px-4 rounded transition-colors text-sm text-center"
                  >
                    Login para Matricular
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
