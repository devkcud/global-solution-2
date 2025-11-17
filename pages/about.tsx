
import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-400 text-sm font-medium">Conheça Nossa História</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Sobre o{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              SkillNavigator
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Mais do que uma ferramenta de simulação; um convite à reflexão sobre nosso lugar
            em um futuro do trabalho em constante evolução.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold">Nossa Missão</h2>
              </div>

              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                Empoderar Sua Jornada
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Nossa missão é empoderar indivíduos para que naveguem as transições de carreira
                com <strong className="text-white">confiança e curiosidade</strong>. Acreditamos que o futuro não é algo
                que simplesmente acontece conosco, mas algo que co-criamos.
              </p>

              <p className="text-slate-400 leading-relaxed">
                Ao entender como nossas competências atuais podem ser a semente para as profissões
                do amanhã, transformamos a ansiedade em ação e a incerteza em oportunidade.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500 transition-colors">
                <div className="text-4xl mb-3">🚀</div>
                <p className="font-semibold text-white">Inovação</p>
                <p className="text-slate-400 text-sm mt-1">Tecnologia de ponta</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-purple-500 transition-colors">
                <div className="text-4xl mb-3">💡</div>
                <p className="font-semibold text-white">Conhecimento</p>
                <p className="text-slate-400 text-sm mt-1">Aprendizado contínuo</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-green-500 transition-colors">
                <div className="text-4xl mb-3">🤝</div>
                <p className="font-semibold text-white">Colaboração</p>
                <p className="text-slate-400 text-sm mt-1">Humano + Máquina</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-yellow-500 transition-colors">
                <div className="text-4xl mb-3">🌟</div>
                <p className="font-semibold text-white">Empoderamento</p>
                <p className="text-slate-400 text-sm mt-1">Seu potencial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Filosofia</h2>
            <p className="text-slate-400 text-lg">Humano + Máquina = Sucesso</p>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Pensamento Crítico</h3>
                <p className="text-slate-400 text-sm">
                  Não é uma "soft skill", é uma "power skill" que nos diferencia das máquinas.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-cyan-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Inteligência Emocional</h3>
                <p className="text-slate-400 text-sm">
                  Nossa maior vantagem competitiva continua sendo nossa humanidade.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Criatividade</h3>
                <p className="text-slate-400 text-sm">
                  A engenhosidade única para resolver problemas complexos.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                O sucesso futuro não virá da competição com as máquinas, mas da nossa
                capacidade de <strong className="text-white">colaborar com elas</strong>,
                aplicando nossa engenhosidade única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-lg">
              <span className="text-3xl">⚙️</span>
            </div>
            <h2 className="text-3xl font-bold">Metodologia de "Match"</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3 mt-2">Mapeamento</h3>
              <p className="text-slate-400">
                Identificamos suas habilidades atuais através de uma seleção intuitiva de competências.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-orange-400 mb-3 mt-2">Análise</h3>
              <p className="text-slate-400">
                Calculamos correspondências com carreiras emergentes baseado em competências fundamentais.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-red-400 mb-3 mt-2">Recomendação</h3>
              <p className="text-slate-400">
                Sugerimos cursos complementares para desenvolver as competências necessárias.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-slate-700/50 rounded-lg p-6 border-l-4 border-yellow-500">
            <p className="text-slate-300 italic">
              "O objetivo não é ser uma previsão exata, mas um <strong className="text-white">ponto de partida
              para o autoconhecimento</strong> e um catalisador para a aprendizagem contínua (lifelong learning)."
            </p>
          </div>
        </div>
      </section>

      {/* ODS Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
              <span className="text-blue-400 text-sm font-medium">Compromisso Global</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Conexão com os ODS da ONU</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Alinhados com os Objetivos de Desenvolvimento Sustentável para um futuro mais justo e próspero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-red-500/30 hover:border-red-500 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-500 text-white font-bold w-12 h-12 rounded-lg flex items-center justify-center text-lg">
                  4
                </div>
                <h3 className="text-xl font-semibold text-red-400">Educação de Qualidade</h3>
              </div>
              <p className="text-slate-400">
                Promovendo a mentalidade de aprendizagem ao longo da vida e a aquisição de competências relevantes para o mercado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-xl p-6 border border-pink-500/30 hover:border-pink-500 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-500 text-white font-bold w-12 h-12 rounded-lg flex items-center justify-center text-lg">
                  8
                </div>
                <h3 className="text-xl font-semibold text-pink-400">Trabalho Decente</h3>
              </div>
              <p className="text-slate-400">
                Incentivando a preparação proativa para os empregos do futuro e a resiliência no mercado de trabalho.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-600/10 rounded-xl p-6 border border-fuchsia-500/30 hover:border-fuchsia-500 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-fuchsia-500 text-white font-bold w-12 h-12 rounded-lg flex items-center justify-center text-lg">
                  10
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400">Redução das Desigualdades</h3>
              </div>
              <p className="text-slate-400">
                Democratizando o acesso à orientação de carreira estratégica através de ferramentas de autoconhecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <div className="text-5xl mb-4">🎓</div>
            <h2 className="text-2xl font-bold mb-4">Projeto Global Solution - FIAP</h2>
            <p className="text-slate-300 mb-6">
              O SkillNavigator foi criado como um protótipo inovador para a Global Solution da FIAP,
              buscando desmistificar a transição profissional na era da automação e da inteligência artificial.
            </p>
            <div className="flex justify-center gap-8">
              <div>
                <p className="text-3xl font-bold text-cyan-400">2025</p>
                <p className="text-slate-400 text-sm">Ano de Criação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">8+</p>
                <p className="text-slate-400 text-sm">Cursos Disponíveis</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400">10</p>
                <p className="text-slate-400 text-sm">Carreiras do Futuro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Descobrir Seu Potencial?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Comece sua jornada de autoconhecimento e prepare-se para as profissões do futuro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/simulator"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              Iniciar Simulação
            </Link>
            <Link
              to="/courses"
              className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 border border-slate-600 hover:border-cyan-500"
            >
              Ver Cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
