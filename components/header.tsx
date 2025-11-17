import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors";
  const activeLinkClass = "bg-slate-900 text-white";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-slate-800 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-white text-xl font-bold">
              Skill<span className="text-cyan-400">Navigator</span>
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                Cursos
              </NavLink>

              <NavLink
                to="/simulator"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                Simulador
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
              >
                Sobre
              </NavLink>

              {user ? (
                <>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? activeLinkClass : ""}`
                    }
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? activeLinkClass : ""}`
                    }
                  >
                    Perfil
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    Sair
                  </button>
                  <NavLink
                    to="/profile"
                    className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                  >
                    {user.name}
                  </NavLink>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-cyan-500 text-white"
                        : "bg-cyan-600 text-white hover:bg-cyan-500"
                    }`
                  }
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
