import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { courses } from "../data/db";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enrollmentMessage, setEnrollmentMessage] = useState<string[]>([]);
  const { login, user, enrollInCourse } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    navigate("/dashboard");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const success = login(email, password);
    if (success) {
      // Check for recommended courses in localStorage
      const storedCourses = localStorage.getItem("recommendedCourses");
      if (storedCourses) {
        try {
          const courseIds: string[] = JSON.parse(storedCourses);
          const enrolledCourseNames: string[] = [];

          // Auto-enroll in recommended courses
          courseIds.forEach((courseId) => {
            enrollInCourse(courseId);
            const course = courses.find((c) => c.id === courseId);
            if (course) {
              enrolledCourseNames.push(course.title);
            }
          });

          // Clear localStorage after enrollment
          localStorage.removeItem("recommendedCourses");

          if (enrolledCourseNames.length > 0) {
            setEnrollmentMessage(enrolledCourseNames);
            // Delay navigation to show enrollment message
            setTimeout(() => {
              navigate("/dashboard");
            }, 3000);
            return;
          }
        } catch (error) {
          console.error("Error parsing recommended courses:", error);
          localStorage.removeItem("recommendedCourses");
        }
      }
      navigate("/dashboard");
    } else {
      setError("Email ou senha incorretos");
    }
  };

  // Show enrollment success message
  if (enrollmentMessage.length > 0) {
    return (
      <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-4">
        <div className="w-full max-w-lg">
          <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl shadow-2xl p-10 border border-green-500/30">
            <div className="text-center">
              <div className="text-7xl mb-6 animate-bounce">🎉</div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Login Realizado com Sucesso!
              </h1>
              <p className="text-lg text-slate-300 mb-6">
                Você foi automaticamente matriculado nos cursos recomendados:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <ul className="space-y-2">
                  {enrollmentMessage.map((courseName, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-cyan-400 font-medium"
                    >
                      <span className="text-green-400">✓</span>
                      {courseName}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-400 text-sm">
                Redirecionando para o dashboard em 3 segundos...
              </p>
              <div className="mt-4">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-green-500 h-2 rounded-full animate-pulse w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Bem-vindo de volta
            </h1>
            <p className="text-slate-400">
              Entre na sua conta para acessar seus cursos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Digite sua senha"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 rounded-md p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              Credenciais de teste:
            </p>
            <p className="text-slate-300 text-sm mt-1">
              Email: <span className="text-cyan-400">joao@email.com</span>
            </p>
            <p className="text-slate-300 text-sm">
              Senha: <span className="text-cyan-400">123456</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
