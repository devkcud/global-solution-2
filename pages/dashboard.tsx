import { useMemo } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { courses, skills } from "../data/db";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

export const DashboardPage = () => {
  const { user, unenrollFromCourse } = useAuth();

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

  const getCourseProgress = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    const progress = user.courseProgress.find((p) => p.courseId === courseId);
    if (!course || !progress) return { percentage: 0, completed: 0, total: 0 };

    const totalVideos = course.modules.reduce((acc, mod) => acc + mod.videos.length, 0);
    const completedVideos = progress.completedVideos.length;
    const percentage = totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;

    return { percentage, completed: completedVideos, total: totalVideos };
  };

  const statistics = useMemo(() => {
    const completedCourses = enrolledCourses.filter((course) => {
      const progress = user.courseProgress.find((p) => p.courseId === course.id);
      return progress?.quizCompleted;
    }).length;

    const inProgressCourses = enrolledCourses.length - completedCourses;

    const totalVideosWatched = user.courseProgress.reduce(
      (acc, p) => acc + p.completedVideos.length,
      0
    );

    const totalVideosAvailable = enrolledCourses.reduce(
      (acc, course) =>
        acc + course.modules.reduce((sum, mod) => sum + mod.videos.length, 0),
      0
    );

    const averageProgress =
      enrolledCourses.length > 0
        ? Math.round(
            enrolledCourses.reduce((acc, course) => {
              return acc + getCourseProgress(course.id).percentage;
            }, 0) / enrolledCourses.length
          )
        : 0;

    const totalHours = enrolledCourses.reduce(
      (acc, course) => acc + parseInt(course.duration),
      0
    );

    const estimatedHoursCompleted = Math.round(
      (totalHours * averageProgress) / 100
    );

    const quizzesPassed = user.courseProgress.filter(
      (p) => p.quizCompleted && p.quizScore >= 70
    ).length;

    const averageQuizScore =
      quizzesPassed > 0
        ? Math.round(
            user.courseProgress
              .filter((p) => p.quizCompleted)
              .reduce((acc, p) => acc + p.quizScore, 0) / quizzesPassed
          )
        : 0;

    const skillsInProgress = new Set(enrolledCourses.flatMap((c) => c.skills)).size;

    const skillsByCategory = {
      tech: 0,
      human: 0,
      innovation: 0,
    };

    enrolledCourses.forEach((course) => {
      course.skills.forEach((skillId) => {
        const skill = skills.find((s) => s.id === skillId);
        if (skill) {
          skillsByCategory[skill.category]++;
        }
      });
    });

    return {
      completedCourses,
      inProgressCourses,
      totalVideosWatched,
      totalVideosAvailable,
      averageProgress,
      totalHours,
      estimatedHoursCompleted,
      quizzesPassed,
      averageQuizScore,
      skillsInProgress,
      skillsByCategory,
    };
  }, [enrolledCourses, user.courseProgress]);

  const pieChartData = [
    { name: "Concluídos", value: statistics.completedCourses, color: "#10B981" },
    { name: "Em Progresso", value: statistics.inProgressCourses, color: "#06B6D4" },
  ];

  const skillsChartData = [
    { name: "Tech", value: statistics.skillsByCategory.tech, fill: "#06B6D4" },
    { name: "Human", value: statistics.skillsByCategory.human, fill: "#A855F7" },
    { name: "Innovation", value: statistics.skillsByCategory.innovation, fill: "#F59E0B" },
  ];

  const progressRadialData = [
    {
      name: "Progresso",
      value: statistics.averageProgress,
      fill: "#06B6D4",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Olá, <span className="text-cyan-400">{user.name}</span>
        </h1>
        <p className="text-slate-400">
          Acompanhe o progresso dos seus cursos e continue aprendendo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content - 3 columns */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Meus Cursos</h2>
              <Link
                to="/courses"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                Ver todos os cursos disponíveis
              </Link>
            </div>

            {enrolledCourses.length === 0 ? (
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhum curso matriculado
                </h3>
                <p className="text-slate-400 mb-4">
                  Explore nossos cursos disponíveis e comece sua jornada de
                  aprendizado.
                </p>
                <Link
                  to="/courses"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                >
                  Explorar Cursos
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {enrolledCourses.map((course) => {
                  const progress = getCourseProgress(course.id);
                  const courseProgressData = user.courseProgress.find(
                    (p) => p.courseId === course.id
                  );
                  const isCompleted = courseProgressData?.quizCompleted;

                  return (
                    <div
                      key={course.id}
                      className={`bg-slate-800 rounded-lg p-6 hover:ring-2 transition-all ${
                        isCompleted ? "hover:ring-green-400" : "hover:ring-cyan-400"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="text-4xl">{course.thumbnail}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-white">
                                {course.title}
                              </h3>
                              {isCompleted && (
                                <span className="bg-green-500/20 text-green-400 border border-green-500 px-2 py-0.5 text-xs rounded">
                                  Concluído
                                </span>
                              )}
                              <span
                                className={`px-2 py-0.5 text-xs font-medium rounded border ${levelColors[course.level]}`}
                              >
                                {levelLabels[course.level]}
                              </span>
                            </div>
                            <p className="text-slate-400 text-sm mb-3">
                              {course.instructor} • {course.duration}
                            </p>

                            <div className="mb-2">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-slate-400 text-xs">
                                  Progresso: {progress.completed}/{progress.total} vídeos
                                </span>
                                <span className="text-white text-sm font-medium">
                                  {progress.percentage}%
                                </span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full transition-all ${
                                    isCompleted
                                      ? "bg-green-500"
                                      : progress.percentage === 100
                                      ? "bg-yellow-500"
                                      : "bg-cyan-500"
                                  }`}
                                  style={{ width: `${progress.percentage}%` }}
                                />
                              </div>
                              {progress.percentage === 100 && !isCompleted && (
                                <p className="text-yellow-400 text-xs mt-1">
                                  Quiz pendente!
                                </p>
                              )}
                              {isCompleted && courseProgressData && (
                                <p className="text-green-400 text-xs mt-1">
                                  Nota no Quiz: {courseProgressData.quizScore}%
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 md:flex-col">
                          <Link
                            to={`/course/${course.id}`}
                            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm text-center"
                          >
                            {isCompleted ? "Revisar" : "Continuar"}
                          </Link>
                          <button
                            onClick={() => unenrollFromCourse(course.id)}
                            className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2 px-4 rounded transition-colors text-sm"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - 1 column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Overall Progress */}
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Progresso Geral
            </h3>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={150}>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  data={progressRadialData}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    background={{ fill: "#334155" }}
                    dataKey="value"
                    cornerRadius={10}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center -mt-8">
              <div className="text-3xl font-bold text-cyan-400">
                {statistics.averageProgress}%
              </div>
              <div className="text-slate-400 text-sm">Média de Conclusão</div>
            </div>
          </div>

          {/* Course Status Pie Chart */}
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Status dos Cursos
            </h3>
            {enrolledCourses.length > 0 ? (
              <>
                <div className="flex justify-center">
                  <ResponsiveContainer width="100%" height={120}>
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1E293B",
                          border: "1px solid #475569",
                          borderRadius: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-slate-400 text-xs">
                      Concluídos ({statistics.completedCourses})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-500" />
                    <span className="text-slate-400 text-xs">
                      Em Progresso ({statistics.inProgressCourses})
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-slate-400 text-sm text-center">
                Nenhum curso matriculado
              </p>
            )}
          </div>

          {/* Skills by Category */}
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Habilidades por Categoria
            </h3>
            {enrolledCourses.length > 0 ? (
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={skillsChartData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                    width={70}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #475569",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-slate-400 text-sm text-center">
                Nenhuma habilidade em desenvolvimento
              </p>
            )}
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Estatísticas
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Vídeos Assistidos</span>
                <span className="text-white font-medium">
                  {statistics.totalVideosWatched}/{statistics.totalVideosAvailable}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Horas Estimadas</span>
                <span className="text-white font-medium">
                  {statistics.estimatedHoursCompleted}h/{statistics.totalHours}h
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Quizzes Aprovados</span>
                <span className="text-white font-medium">
                  {statistics.quizzesPassed}
                </span>
              </div>
              {statistics.averageQuizScore > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Média nos Quizzes</span>
                  <span className="text-green-400 font-medium">
                    {statistics.averageQuizScore}%
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Skills em Desenvolvimento</span>
                <span className="text-cyan-400 font-medium">
                  {statistics.skillsInProgress}
                </span>
              </div>
            </div>
          </div>

          {/* Learning Streak */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg p-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-white mb-1">
                {statistics.totalVideosWatched}
              </div>
              <div className="text-slate-300 text-sm">
                Vídeos Concluídos
              </div>
              <p className="text-slate-400 text-xs mt-2">
                Continue assim! Você está progredindo bem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
