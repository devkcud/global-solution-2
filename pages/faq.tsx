import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'Como funciona o Simulador de Carreira?',
      answer: 'O Simulador de Carreira analisa suas habilidades selecionadas e compara com as competências necessárias para carreiras emergentes. Ele calcula uma pontuação de compatibilidade e sugere habilidades complementares que podem aumentar suas chances de sucesso nas profissões do futuro.',
      category: 'Simulador',
    },
    {
      id: '2',
      question: 'Os certificados são reconhecidos no mercado?',
      answer: 'Sim! Nossos certificados são emitidos em parceria com instituições reconhecidas e incluem informações verificáveis. Eles podem ser compartilhados no LinkedIn e outras plataformas profissionais.',
      category: 'Cursos',
    },
    {
      id: '3',
      question: 'Como posso me matricular em um curso?',
      answer: 'Para se matricular, primeiro faça login na plataforma, navegue até a página de Cursos, escolha o curso desejado e clique em "Matricular-se". Se for seu primeiro curso, você será automaticamente matriculado ao fazer login.',
      category: 'Cursos',
    },
    {
      id: '4',
      question: 'Posso acessar os cursos pelo celular?',
      answer: 'Sim! Nossa plataforma é totalmente responsiva e otimizada para dispositivos móveis. Você pode assistir às aulas, fazer quizzes e acompanhar seu progresso de qualquer dispositivo.',
      category: 'Plataforma',
    },
    {
      id: '5',
      question: 'Como funciona o sistema de quizzes?',
      answer: 'Cada módulo possui quizzes de avaliação com questões de múltipla escolha. Você precisa acertar pelo menos 70% para avançar. Caso não atinja essa pontuação, pode refazer o quiz quantas vezes precisar.',
      category: 'Cursos',
    },
    {
      id: '6',
      question: 'Posso alterar meu e-mail ou senha?',
      answer: 'Sim! Acesse seu Perfil clicando no seu nome no canto superior direito, depois em "Editar Perfil". Lá você pode atualizar suas informações pessoais, e-mail e senha.',
      category: 'Conta',
    },
    {
      id: '7',
      question: 'O que são habilidades complementares?',
      answer: 'São competências que trabalham bem em conjunto com as habilidades que você já possui. O sistema recomenda habilidades complementares baseado em análises de mercado e requisitos das carreiras do futuro.',
      category: 'Simulador',
    },
    {
      id: '8',
      question: 'Como funciona o Dashboard?',
      answer: 'O Dashboard é sua central de aprendizado, mostrando cursos matriculados, progresso, estatísticas de tempo dedicado, habilidades em desenvolvimento e gráficos interativos do seu desempenho.',
      category: 'Plataforma',
    },
    {
      id: '9',
      question: 'Existe limite de cursos que posso fazer?',
      answer: 'Não! Você pode se matricular em quantos cursos desejar e estudar no seu próprio ritmo. Recomendamos focar em 2-3 cursos simultaneamente para melhor aproveitamento.',
      category: 'Cursos',
    },
    {
      id: '10',
      question: 'Como cancelo minha conta?',
      answer: 'Se deseja cancelar sua conta, entre em contato com nosso suporte através da página de Suporte. Faremos o processo de forma rápida e seus dados serão removidos conforme a LGPD.',
      category: 'Conta',
    },
    {
      id: '11',
      question: 'Os recursos complementares são gratuitos?',
      answer: 'Sim! Todos os recursos complementares (artigos, vídeos, ferramentas) listados nos cursos são de acesso gratuito e foram cuidadosamente selecionados para complementar seu aprendizado.',
      category: 'Cursos',
    },
    {
      id: '12',
      question: 'Como funciona o sistema de recomendação de carreiras?',
      answer: 'Nosso algoritmo compara suas habilidades com os requisitos de 10+ carreiras emergentes, calculando uma pontuação de compatibilidade. Quanto maior a sobreposição de competências, maior sua pontuação.',
      category: 'Simulador',
    },
  ];

  const categories = ['Todos', ...Array.from(new Set(faqItems.map(item => item.category)))];

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Simulador': return '🎯';
      case 'Cursos': return '📚';
      case 'Plataforma': return '💻';
      case 'Conta': return '👤';
      default: return '❓';
    }
  };

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">Perguntas Frequentes</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Como podemos{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              ajudar?
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Encontre respostas rápidas para as dúvidas mais comuns sobre a plataforma SkillNavigator.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por palavra-chave..."
                className="w-full px-6 py-4 pl-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {category !== 'Todos' && <span>{getCategoryIcon(category)}</span>}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <div
                key={item.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-2xl mt-1">{getCategoryIcon(item.category)}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.question}
                      </h3>
                      <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-cyan-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      expandedItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedItems.has(item.id) && (
                  <div className="px-6 pb-5 pl-20">
                    <p className="text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-slate-400 text-lg mb-2">Nenhum resultado encontrado</p>
              <p className="text-slate-500 text-sm">
                Tente usar outras palavras-chave ou explore outras categorias
              </p>
            </div>
          )}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">💬</div>
          <h2 className="text-3xl font-bold mb-4">Ainda Precisa de Ajuda?</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Não encontrou a resposta que procurava? Nossa equipe de suporte está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Contatar Suporte
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 border border-slate-600 hover:border-cyan-500"
            >
              Ler o Blog
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/about"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group text-center"
          >
            <div className="text-4xl mb-3">ℹ️</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
              Sobre Nós
            </h3>
            <p className="text-slate-400 text-sm">
              Conheça nossa missão e visão
            </p>
          </Link>

          <Link
            to="/courses"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group text-center"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              Cursos
            </h3>
            <p className="text-slate-400 text-sm">
              Explore nossos cursos disponíveis
            </p>
          </Link>

          <Link
            to="/simulator"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 group text-center"
          >
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
              Simulador
            </h3>
            <p className="text-slate-400 text-sm">
              Descubra sua carreira ideal
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
