
import React from 'react';
import { Link } from 'react-router-dom';
import { courses, skills } from '../data/db';

const FeatureCard: React.FC<{ icon: string; title: string; description: string; color: string }> = ({
  icon, title, description, color
}) => (
  <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-slate-700 h-full transform hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-300">
    <div className={`text-5xl mb-4 ${color}`}>{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-300 leading-relaxed">{description}</p>
  </div>
);

const StatCard: React.FC<{ value: string; label: string; icon: string }> = ({ value, label, icon }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 text-center transform hover:scale-105 transition-all duration-300 group">
    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
    <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{value}</p>
    <p className="mt-2 text-slate-400 text-sm font-medium">{label}</p>
  </div>
);

const TestimonialCard: React.FC<{ name: string; role: string; quote: string; avatar: string }> = ({
  name, role, quote, avatar
}) => (
  <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700">
    <div className="flex items-center gap-4 mb-4">
      <div className="text-4xl">{avatar}</div>
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-cyan-400 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-slate-300 italic">"{quote}"</p>
  </div>
);

export const HomePage: React.FC = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="flex-grow text-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative py-24 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">Plataforma de Educação do Futuro</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Construa o Futuro da
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sua Carreira
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Descubra suas habilidades, encontre carreiras do futuro e aprenda com cursos personalizados.
            Sua jornada de transformação começa aqui.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/simulator"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
            >
              <span>Descobrir Meu Potencial</span>
              <span className="text-xl">→</span>
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 border border-slate-600 hover:border-cyan-500"
            >
              <span>Explorar Cursos</span>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="8+" icon="📚" label="Cursos Disponíveis" />
            <StatCard value="34" icon="🎯" label="Habilidades Mapeadas" />
            <StatCard value="10" icon="🚀" label="Carreiras do Futuro" />
            <StatCard value="100%" icon="✨" label="Gratuito" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-slate-400 text-lg">Três passos simples para transformar sua carreira</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
              <FeatureCard
                icon="🎯"
                title="Mapeie Suas Habilidades"
                description="Selecione suas competências atuais - técnicas, humanas e de inovação. Nosso simulador analisa seu perfil único."
                color="text-cyan-400"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
              <FeatureCard
                icon="🔮"
                title="Descubra Carreiras"
                description="Veja quais profissões do futuro combinam com seu perfil e receba recomendações de cursos complementares."
                color="text-purple-400"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
              <FeatureCard
                icon="📈"
                title="Evolua e Cresça"
                description="Matricule-se nos cursos sugeridos, complete os módulos e conquiste certificações para o mercado do futuro."
                color="text-green-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Cursos em Destaque</h2>
            <p className="text-slate-400 text-lg">Desenvolva as habilidades mais demandadas do mercado</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4">{course.thumbnail}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{course.duration}</span>
                  <span className="text-cyan-400 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Ver curso →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold text-lg border-b-2 border-cyan-400 hover:border-cyan-300 transition-colors"
            >
              Ver todos os cursos disponíveis
            </Link>
          </div>
        </div>
      </section>

      {/* World Economic Forum Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">O Futuro do Trabalho</h2>
            <p className="text-slate-400 text-lg">Dados do Fórum Econômico Mundial</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 backdrop-blur p-8 rounded-xl border border-red-500/30 text-center">
              <div className="text-5xl font-black text-red-400 mb-4">85M</div>
              <p className="text-white font-semibold mb-2">Empregos Deslocados</p>
              <p className="text-slate-400 text-sm">pela automação até 2025</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur p-8 rounded-xl border border-green-500/30 text-center">
              <div className="text-5xl font-black text-green-400 mb-4">97M</div>
              <p className="text-white font-semibold mb-2">Novos Empregos</p>
              <p className="text-slate-400 text-sm">criados com novas tecnologias</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur p-8 rounded-xl border border-yellow-500/30 text-center">
              <div className="text-5xl font-black text-yellow-400 mb-4">50%</div>
              <p className="text-white font-semibold mb-2">Requalificação</p>
              <p className="text-slate-400 text-sm">dos trabalhadores até 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">O Que Dizem Nossos Alunos</h2>
            <p className="text-slate-400 text-lg">Histórias de transformação</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              avatar="👩‍💻"
              name="Marina Silva"
              role="Especialista em IA"
              quote="O SkillNavigator me ajudou a identificar lacunas nas minhas habilidades e encontrar os cursos certos. Hoje trabalho com IA ética!"
            />
            <TestimonialCard
              avatar="👨‍🔬"
              name="Carlos Mendes"
              role="Arquiteto de Cloud"
              quote="A simulação de carreira foi reveladora. Descobri que minhas soft skills eram tão importantes quanto as técnicas."
            />
            <TestimonialCard
              avatar="👩‍🎨"
              name="Ana Costa"
              role="UX Designer"
              quote="Os cursos complementares sugeridos formaram um caminho de aprendizado perfeito. Recomendo a todos!"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Pronto para Começar?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Faça a simulação gratuita, descubra seu potencial e receba recomendações personalizadas de cursos.
              </p>
              <Link
                to="/simulator"
                className="inline-block bg-white text-slate-900 font-bold py-4 px-12 rounded-xl text-lg hover:bg-slate-100 transition-all duration-300 shadow-xl hover:scale-105"
              >
                Começar Agora - É Grátis!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
