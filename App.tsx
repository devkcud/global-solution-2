import { HashRouter, Routes, Route } from "react-router-dom";
import { SkillProvider } from "./context/skill-context";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/home";
import { SimulatorPage } from "./pages/simulator";
import { ResultsPage } from "./pages/results";
import { AboutPage } from "./pages/about";

const App = () => {
  return (
    <SkillProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-slate-900">
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/simulator" element={<SimulatorPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </HashRouter>
    </SkillProvider>
  );
};

export default App;
