import { useState, useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { courses, skills } from "../data/db";
import { Module, Video, Resource, ResourceType } from "../types";

export const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { user, enrollInCourse, markVideoCompleted, markVideoIncomplete, completeQuiz } = useAuth();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return <Navigate to="/courses" />;
  }

  const isEnrolled = user?.enrolledCourses.includes(course.id) || false;
  const courseProgress = user?.courseProgress.find((p) => p.courseId === course.id);

  const totalVideos = useMemo(() => {
    return course.modules.reduce((acc, mod) => acc + mod.videos.length, 0);
  }, [course]);

  const completedVideosCount = courseProgress?.completedVideos.length || 0;
  const progressPercentage = totalVideos > 0 ? Math.round((completedVideosCount / totalVideos) * 100) : 0;
  const allVideosCompleted = completedVideosCount === totalVideos && totalVideos > 0;

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

  const averageRating =
    course.reviews.length > 0
      ? (
          course.reviews.reduce((acc, r) => acc + r.rating, 0) /
          course.reviews.length
        ).toFixed(1)
      : "N/A";

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-slate-600"}
      >
        ★
      </span>
    ));
  };

  const resourceTypeIcons: Record<ResourceType, string> = {
    article: "📄",
    video: "🎥",
    book: "📚",
    tool: "🛠️",
    course: "🎓",
  };

  const resourceTypeLabels: Record<ResourceType, string> = {
    article: "Artigo",
    video: "Vídeo",
    book: "Livro",
    tool: "Ferramenta",
    course: "Curso",
  };

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module);
    setSelectedVideo(module.videos[0] || null);
  };

  const isVideoCompleted = (videoId: string) => {
    return courseProgress?.completedVideos.includes(videoId) || false;
  };

  const toggleVideoCompletion = (videoId: string) => {
    if (!course) return;
    if (isVideoCompleted(videoId)) {
      markVideoIncomplete(course.id, videoId);
    } else {
      markVideoCompleted(course.id, videoId);
    }
  };

  const getModuleProgress = (module: Module) => {
    const completed = module.videos.filter((v) => isVideoCompleted(v.id)).length;
    return { completed, total: module.videos.length };
  };

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleQuizSubmit = () => {
    let correct = 0;
    course.quiz.forEach((question) => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    const score = Math.round((correct / course.quiz.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
    if (score >= 70) {
      completeQuiz(course.id, score);
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link
          to="/courses"
          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
        >
          ← Voltar para Cursos
        </Link>
      </div>

      <div className="bg-slate-800 rounded-lg p-8 mb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">{course.thumbnail}</div>
              <div>
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded border ${levelColors[course.level]} mb-2`}
                >
                  {levelLabels[course.level]}
                </span>
                <h1 className="text-3xl font-bold text-white">
                  {course.title}
                </h1>
              </div>
            </div>

            <p className="text-slate-300 mb-6">{course.description}</p>

            {isEnrolled && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Progresso do Curso</span>
                  <span className="text-white font-medium">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      progressPercentage === 100 ? "bg-green-500" : "bg-cyan-500"
                    }`}
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-slate-400 text-xs mt-1">
                  {completedVideosCount} de {totalVideos} vídeos concluídos
                </p>
                {courseProgress?.quizCompleted && (
                  <div className="mt-2 bg-green-500/20 border border-green-500 rounded p-2">
                    <p className="text-green-400 text-sm font-medium">
                      Curso Concluído! Nota no Quiz: {courseProgress.quizScore}%
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-slate-500 text-sm">Instrutor</p>
                <p className="text-white font-medium">{course.instructor}</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Duração</p>
                <p className="text-white font-medium">{course.duration}</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Módulos</p>
                <p className="text-white font-medium">
                  {course.modules.length} módulos
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Avaliação</p>
                <p className="text-white font-medium">
                  {renderStars(Math.round(parseFloat(averageRating) || 0))}{" "}
                  {averageRating} ({course.reviews.length} avaliações)
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-slate-500 text-sm mb-2">
                Habilidades desenvolvidas
              </p>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skillId) => (
                  <span
                    key={skillId}
                    className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm"
                  >
                    {skillsMap[skillId] || skillId}
                  </span>
                ))}
              </div>
            </div>

            {!isEnrolled && (
              <div className="flex gap-4">
                {user ? (
                  <button
                    onClick={() => enrollInCourse(course.id)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-md transition-colors"
                  >
                    Matricular-se Agora
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-md transition-colors"
                  >
                    Login para Matricular
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {isEnrolled && allVideosCompleted && !courseProgress?.quizCompleted && (
        <div className="bg-purple-500/20 border border-purple-500 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Parabéns! Você completou todos os vídeos!
              </h3>
              <p className="text-slate-300">
                Agora é hora de testar seus conhecimentos com o quiz final.
              </p>
            </div>
            <button
              onClick={() => setShowQuiz(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Iniciar Quiz Final
            </button>
          </div>
        </div>
      )}

      {showQuiz && !courseProgress?.quizCompleted && (
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">
              Quiz Final - Teste de Habilidades
            </h2>
            <button
              onClick={() => setShowQuiz(false)}
              className="text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {!quizSubmitted ? (
            <>
              <div className="space-y-6">
                {course.quiz.map((question, qIndex) => (
                  <div key={question.id} className="bg-slate-700 rounded-lg p-4">
                    <p className="text-white font-medium mb-3">
                      {qIndex + 1}. {question.question}
                    </p>
                    <div className="space-y-2">
                      {question.options.map((option, oIndex) => (
                        <label
                          key={oIndex}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={question.id}
                            checked={quizAnswers[question.id] === oIndex}
                            onChange={() => handleQuizAnswer(question.id, oIndex)}
                            className="w-4 h-4 text-cyan-500"
                          />
                          <span className="text-slate-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length !== course.quiz.length}
                  className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-md transition-colors"
                >
                  Enviar Respostas
                </button>
                <p className="text-slate-400 text-sm mt-2">
                  {Object.keys(quizAnswers).length} de {course.quiz.length} questões respondidas
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              {quizScore >= 70 ? (
                <>
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    Parabéns! Você passou!
                  </h3>
                  <p className="text-white text-xl mb-4">
                    Sua nota: <span className="font-bold text-cyan-400">{quizScore}%</span>
                  </p>
                  <p className="text-slate-300 mb-6">
                    Você concluiu o curso com sucesso e demonstrou domínio das habilidades!
                  </p>
                  <button
                    onClick={() => setShowQuiz(false)}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
                  >
                    Concluir
                  </button>
                </>
              ) : (
                <>
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                    Continue estudando!
                  </h3>
                  <p className="text-white text-xl mb-4">
                    Sua nota: <span className="font-bold text-yellow-400">{quizScore}%</span>
                  </p>
                  <p className="text-slate-300 mb-6">
                    Você precisa de pelo menos 70% para passar. Revise o conteúdo e tente novamente!
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
                  >
                    Tentar Novamente
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {isEnrolled && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Módulos do Curso
              </h2>
              <div className="space-y-3">
                {course.modules.map((module, index) => {
                  const { completed, total } = getModuleProgress(module);
                  const isModuleComplete = completed === total;
                  return (
                    <button
                      key={module.id}
                      onClick={() => handleModuleSelect(module)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedModule?.id === module.id
                          ? "bg-cyan-500/20 border border-cyan-500"
                          : "bg-slate-700 hover:bg-slate-600"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            isModuleComplete
                              ? "bg-green-500 text-white"
                              : "bg-slate-600 text-white"
                          }`}
                        >
                          {isModuleComplete ? "✓" : index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-sm">
                            {module.title}
                          </h3>
                          <p className="text-slate-400 text-xs">
                            {completed}/{total} vídeos
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedModule ? (
              <div className="bg-slate-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {selectedModule.title}
                </h2>
                <p className="text-slate-400 mb-6">
                  {selectedModule.description}
                </p>

                {selectedVideo && (
                  <div className="mb-6">
                    <div className="bg-slate-900 rounded-lg aspect-video flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-6xl mb-4">▶️</div>
                        <h3 className="text-white text-xl font-medium mb-2">
                          {selectedVideo.title}
                        </h3>
                        <p className="text-slate-400">
                          Duração: {selectedVideo.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => toggleVideoCompletion(selectedVideo.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                          isVideoCompleted(selectedVideo.id)
                            ? "bg-green-500/20 text-green-400 border border-green-500"
                            : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                        }`}
                      >
                        <span className="text-lg">
                          {isVideoCompleted(selectedVideo.id) ? "✓" : "○"}
                        </span>
                        {isVideoCompleted(selectedVideo.id)
                          ? "Concluído"
                          : "Marcar como Concluído"}
                      </button>
                    </div>
                  </div>
                )}

                <h3 className="text-lg font-medium text-white mb-4">
                  Vídeos do Módulo
                </h3>
                <div className="space-y-2">
                  {selectedModule.videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedVideo?.id === video.id
                          ? "bg-cyan-500/20 border border-cyan-500"
                          : "bg-slate-700 hover:bg-slate-600"
                      }`}
                    >
                      <button
                        onClick={() => setSelectedVideo(video)}
                        className="flex items-center gap-3 flex-1"
                      >
                        <span className="text-slate-400 text-sm">
                          {index + 1}.
                        </span>
                        <span className="text-white text-sm">
                          {video.title}
                        </span>
                      </button>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 text-sm">
                          {video.duration}
                        </span>
                        <button
                          onClick={() => toggleVideoCompletion(video.id)}
                          className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                            isVideoCompleted(video.id)
                              ? "bg-green-500 border-green-500 text-white"
                              : "border-slate-500 text-transparent hover:border-green-500"
                          }`}
                        >
                          ✓
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-slate-800 rounded-lg p-6 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="text-5xl mb-4">📖</div>
                  <p className="text-slate-400">
                    Selecione um módulo para começar a assistir
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            Avaliações dos Alunos
          </h2>
          <button
            onClick={() => setShowReviews(!showReviews)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            {showReviews ? "Ocultar" : "Mostrar Todas"} (
            {course.reviews.length})
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="text-4xl font-bold text-white">{averageRating}</div>
          <div>
            <div className="text-2xl">{renderStars(Math.round(parseFloat(averageRating) || 0))}</div>
            <p className="text-slate-400 text-sm">
              Baseado em {course.reviews.length} avaliações
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {(showReviews ? course.reviews : course.reviews.slice(0, 3)).map(
            (review) => (
              <div key={review.id} className="bg-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">
                      {review.userName}
                    </span>
                    <span className="text-sm">{renderStars(review.rating)}</span>
                  </div>
                  <span className="text-slate-400 text-sm">{review.date}</span>
                </div>
                <p className="text-slate-300">{review.comment}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Complementary Resources Section */}
      <div className="bg-slate-800 rounded-lg p-6 mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Recursos Complementares
          </h2>
          <p className="text-slate-400">
            Materiais adicionais selecionados para aprofundar seu aprendizado
          </p>
        </div>

        {/* AI Recommended Resources */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400">
                Recomendados por IA
              </h3>
              <p className="text-slate-500 text-sm">
                Recursos selecionados automaticamente com base no conteúdo do curso
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {course.resources.aiRecommended.map((resource) => (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-purple-500 rounded-lg p-4 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{resourceTypeIcons[resource.type]}</span>
                  <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-2 py-1 rounded">
                    {resourceTypeLabels[resource.type]}
                  </span>
                </div>
                <h4 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h4>
                <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                  {resource.description}
                </p>
                {resource.author && (
                  <p className="text-slate-500 text-xs">
                    Por: {resource.author}
                  </p>
                )}
                <div className="mt-3 text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Acessar →
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Hand-picked Resources */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-cyan-500 to-green-500 p-2 rounded-lg">
              <span className="text-xl">👨‍🏫</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400">
                Selecionados pelo Instrutor
              </h3>
              <p className="text-slate-500 text-sm">
                Recursos pessoalmente recomendados por {course.instructor}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {course.resources.handPicked.map((resource) => (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-cyan-500 rounded-lg p-4 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{resourceTypeIcons[resource.type]}</span>
                  <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                    {resourceTypeLabels[resource.type]}
                  </span>
                </div>
                <h4 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h4>
                <p className="text-slate-400 text-sm mb-3 line-clamp-2 italic">
                  "{resource.description}"
                </p>
                {resource.author && (
                  <p className="text-slate-500 text-xs">
                    Por: {resource.author}
                  </p>
                )}
                <div className="mt-3 text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Acessar →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
