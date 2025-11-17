import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { courses, skills } from "../data/db";

export const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const enrolledCourses = courses.filter((course) =>
    user.enrolledCourses.includes(course.id)
  );

  const skillsMap = skills.reduce((acc, skill) => {
    acc[skill.id] = skill.name;
    return acc;
  }, {} as Record<string, string>);

  const allSkillsInProgress = new Set(
    enrolledCourses.flatMap((c) => c.skills)
  );

  const totalHours = enrolledCourses.reduce(
    (acc, course) => acc + parseInt(course.duration),
    0
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Generate activity history
  const activityHistory = [
    {
      id: 1,
      type: "enrollment",
      title: "Matriculou-se em um curso",
      description: enrolledCourses[0]?.title || "Curso de exemplo",
      timestamp: "Há 2 dias",
      icon: "📚",
      color: "cyan",
    },
    {
      id: 2,
      type: "completion",
      title: "Completou um módulo",
      description: "Introdução ao Machine Learning",
      timestamp: "Há 3 dias",
      icon: "✅",
      color: "green",
    },
    {
      id: 3,
      type: "quiz",
      title: "Quiz concluído com sucesso",
      description: "Quiz sobre Python Basics - Nota: 90%",
      timestamp: "Há 5 dias",
      icon: "🎯",
      color: "purple",
    },
    {
      id: 4,
      type: "skill",
      title: "Nova habilidade desbloqueada",
      description: "Data Analysis",
      timestamp: "Há 1 semana",
      icon: "⭐",
      color: "yellow",
    },
    {
      id: 5,
      type: "certificate",
      title: "Certificado obtido",
      description: "Fundamentos de Python",
      timestamp: "Há 2 semanas",
      icon: "🏆",
      color: "orange",
    },
  ];

  const completedModules = 12;
  const totalModules = enrolledCourses.reduce((acc, course) => acc + (course.modules?.length || 0), 0);
  const progressPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  return (
    <div className="text-white min-h-screen pb-12">
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          {/* Profile Header */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-6xl">
                  {user.avatar}
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {user.name}
                  </h1>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium">
                    Membro Ativo
                  </span>
                </div>
                <p className="text-slate-400 mb-4 flex items-center justify-center md:justify-start gap-2">
                  <span>📧</span>
                  {user.email}
                </p>
                <p className="text-slate-300 mb-4 max-w-2xl">{user.bio}</p>
                <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <span>📅</span>
                    Membro desde {formatDate(user.joinDate)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span>🔥</span>
                    {enrolledCourses.length} cursos ativos
                  </span>
                </div>
              </div>

              {/* Edit Button */}
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">📚</span>
              <div className="text-right">
                <div className="text-3xl font-bold text-cyan-400">
                  {enrolledCourses.length}
                </div>
                <div className="text-slate-400 text-sm">Cursos</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">⏱️</span>
              <div className="text-right">
                <div className="text-3xl font-bold text-purple-400">
                  {totalHours}h
                </div>
                <div className="text-slate-400 text-sm">Total de Horas</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-6 hover:border-green-500 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">💡</span>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400">
                  {allSkillsInProgress.size}
                </div>
                <div className="text-slate-400 text-sm">Habilidades</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">🎯</span>
              <div className="text-right">
                <div className="text-3xl font-bold text-orange-400">
                  {progressPercentage}%
                </div>
                <div className="text-slate-400 text-sm">Progresso</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Activity History */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Histórico de Atividades
                </h2>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  Ver Tudo
                </button>
              </div>

              <div className="space-y-4">
                {activityHistory.map((activity, index) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`text-3xl flex-shrink-0`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium mb-1">
                        {activity.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-2">
                        {activity.description}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {activity.timestamp}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-${activity.color}-400 mt-2 flex-shrink-0`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills in Progress */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">🎓</span>
                Habilidades em Desenvolvimento
              </h2>

              {allSkillsInProgress.size === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">💡</div>
                  <p className="text-slate-400 text-sm mb-4">
                    Matricule-se em cursos para começar a desenvolver habilidades.
                  </p>
                  <Link
                    to="/courses"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105"
                  >
                    Explorar Cursos
                  </Link>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {Array.from(allSkillsInProgress).map((skillId) => (
                    <span
                      key={skillId}
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:border-cyan-500 transition-colors"
                    >
                      {skillsMap[skillId] || skillId}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">
                Conquistas Recentes
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-white text-sm font-medium">Primeiro Certificado</p>
                    <p className="text-slate-400 text-xs">Desbloqueado há 2 semanas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="text-white text-sm font-medium">Sequência de 7 dias</p>
                    <p className="text-slate-400 text-xs">Continue assim!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="text-white text-sm font-medium">5 Habilidades Aprendidas</p>
                    <p className="text-slate-400 text-xs">Parabéns!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-2xl">📖</span>
              Meus Cursos
            </h2>
            <Link
              to="/dashboard"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1"
            >
              Ver Dashboard Completo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {enrolledCourses.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-slate-400 mb-6 text-lg">
                Você ainda não está matriculado em nenhum curso.
              </p>
              <Link
                to="/courses"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Explorar Cursos
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{course.thumbnail}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">
                        {course.instructor} • {course.duration}
                      </p>
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Progresso</span>
                          <span>45%</span>
                        </div>
                        <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" style={{ width: '45%' }} />
                        </div>
                      </div>
                      <Link
                        to={`/course/${course.id}`}
                        className="inline-flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500 border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                      >
                        Continuar
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
