import { HashRouter, Routes, Route } from "react-router-dom";
import { SkillProvider } from "./context/skill-context";
import { AuthProvider } from "./context/auth-context";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/home";
import { SimulatorPage } from "./pages/simulator";
import { SimulatorConfirmPage } from "./pages/simulator-confirm";
import { ResultsPage } from "./pages/results";
import { AboutPage } from "./pages/about";
import { LoginPage } from "./pages/login";
import { DashboardPage } from "./pages/dashboard";
import { CoursesPage } from "./pages/courses";
import { ProfilePage } from "./pages/profile";
import { CourseDetailPage } from "./pages/course-detail";

const App = () => {
  return (
    <AuthProvider>
      <SkillProvider>
        <HashRouter>
          <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />

            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/simulator" element={<SimulatorPage />} />
                <Route path="/simulator/confirm" element={<SimulatorConfirmPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/course/:courseId" element={<CourseDetailPage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </HashRouter>
      </SkillProvider>
    </AuthProvider>
  );
};

export default App;
