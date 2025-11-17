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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-slate-800 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="text-8xl">{user.avatar}</div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
            <p className="text-cyan-400 mb-4">{user.email}</p>
            <p className="text-slate-300 mb-4 max-w-2xl">{user.bio}</p>
            <p className="text-slate-500 text-sm">
              Membro desde {formatDate(user.joinDate)}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">
            {enrolledCourses.length}
          </div>
          <div className="text-slate-400">Cursos Matriculados</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">
            {totalHours}h
          </div>
          <div className="text-slate-400">Total de Horas</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">
            {allSkillsInProgress.size}
          </div>
          <div className="text-slate-400">Habilidades em Desenvolvimento</div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Habilidades em Desenvolvimento
        </h2>
        {allSkillsInProgress.size === 0 ? (
          <p className="text-slate-400">
            Matricule-se em cursos para começar a desenvolver habilidades.
          </p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {Array.from(allSkillsInProgress).map((skillId) => (
              <span
                key={skillId}
                className="bg-slate-700 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skillsMap[skillId] || skillId}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Meus Cursos</h2>
          <Link
            to="/dashboard"
            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
          >
            Ver Dashboard Completo
          </Link>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">📚</div>
            <p className="text-slate-400 mb-4">
              Você ainda não está matriculado em nenhum curso.
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
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-slate-700 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{course.thumbnail}</div>
                  <div>
                    <h3 className="text-white font-medium">{course.title}</h3>
                    <p className="text-slate-400 text-sm">
                      {course.instructor} - {course.duration}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/course/${course.id}`}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
                >
                  Acessar Curso
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
