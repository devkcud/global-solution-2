import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
      isActive
        ? "text-cyan-400"
        : "text-slate-300 hover:text-white"
    }`;

  const NavIndicator = ({ isActive }: { isActive: boolean }) =>
    isActive ? (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
    ) : (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-cyan-400 rounded-full group-hover:w-4 transition-all duration-300" />
    );

  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">🧭</span>
            </div>
            <span className="text-xl font-bold text-white">
              Skill<span className="text-cyan-400">Navigator</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Home
                  <NavIndicator isActive={isActive} />
                </>
              )}
            </NavLink>

            <NavLink to="/courses" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Cursos
                  <NavIndicator isActive={isActive} />
                </>
              )}
            </NavLink>

            <NavLink to="/simulator" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-1">
                    Simulador
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold animate-pulse">
                      NEW
                    </span>
                  </span>
                  <NavIndicator isActive={isActive} />
                </>
              )}
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Sobre
                  <NavIndicator isActive={isActive} />
                </>
              )}
            </NavLink>

            {user && (
              <>
                <div className="w-px h-6 bg-slate-700 mx-2" />

                <NavLink to="/dashboard" className={navLinkClass}>
                  {({ isActive }) => (
                    <>
                      Dashboard
                      <NavIndicator isActive={isActive} />
                    </>
                  )}
                </NavLink>
              </>
            )}
          </div>

          {/* User Section */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <NavLink
                  to="/profile"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {user.name}
                  </span>
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Sair
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Entrar
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/courses"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                Cursos
              </NavLink>

              <NavLink
                to="/simulator"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                Simulador
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                  NEW
                </span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                Sobre
              </NavLink>

              {user && (
                <>
                  <div className="h-px bg-slate-700 my-2" />

                  <NavLink
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    to="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    {user.name}
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2 text-left"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Sair
                  </button>
                </>
              )}

              {!user && (
                <>
                  <div className="h-px bg-slate-700 my-2" />
                  <NavLink
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium px-4 py-3 rounded-lg text-center text-sm"
                  >
                    Entrar
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
