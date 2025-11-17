import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                <span className="text-xl">🧭</span>
              </div>
              <span className="text-xl font-bold text-white">
                Skill<span className="text-cyan-400">Navigator</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Navegue o futuro do trabalho com confiança. Descubra suas competências
              e prepare-se para as carreiras do amanhã.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-slate-800 hover:bg-cyan-500 p-2 rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-purple-500 p-2 rounded-lg transition-colors group"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-blue-500 p-2 rounded-lg transition-colors group"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/simulator"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Simulador de Carreira
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Cursos Disponíveis
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Meu Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Meu Perfil
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/announcements"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Anúncios
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Fique Atualizado</h3>
            <p className="text-sm mb-4">
              Receba as últimas novidades sobre carreiras do futuro e novas funcionalidades.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              />
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm">
              <p>&copy; {currentYear} SkillNavigator. Todos os direitos reservados.</p>
              <span className="hidden md:inline">•</span>
              <p className="text-cyan-400">Um MVP para o Futuro do Trabalho</p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">
              Desenvolvido com{" "}
              <span className="text-red-400">❤️</span> para a{" "}
              <span className="text-cyan-400 font-medium">Global Solution FIAP 2025</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
