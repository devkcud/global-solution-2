import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  thumbnail: string;
  featured?: boolean;
}

export const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'O Futuro do Trabalho: Como a IA Está Transformando as Carreiras',
      excerpt: 'Descubra como a inteligência artificial está remodelando o mercado de trabalho e quais habilidades serão essenciais para prosperar nesta nova era.',
      author: 'Dr. Maria Santos',
      date: '15 de Janeiro, 2025',
      category: 'Tendências',
      readTime: '8 min',
      thumbnail: '🤖',
      featured: true,
    },
    {
      id: '2',
      title: 'As 10 Habilidades Mais Procuradas em 2025',
      excerpt: 'Análise detalhada das competências que estão em alta demanda e como você pode desenvolvê-las através de cursos online.',
      author: 'João Silva',
      date: '12 de Janeiro, 2025',
      category: 'Carreira',
      readTime: '6 min',
      thumbnail: '🎯',
    },
    {
      id: '3',
      title: 'Lifelong Learning: A Mentalidade do Século XXI',
      excerpt: 'Por que a aprendizagem contínua não é mais opcional e como cultivar uma mentalidade de crescimento constante.',
      author: 'Ana Oliveira',
      date: '10 de Janeiro, 2025',
      category: 'Educação',
      readTime: '5 min',
      thumbnail: '📚',
    },
    {
      id: '4',
      title: 'Machine Learning para Iniciantes: Por Onde Começar?',
      excerpt: 'Um guia completo para quem deseja entrar no mundo do aprendizado de máquina sem experiência prévia em programação.',
      author: 'Carlos Tech',
      date: '8 de Janeiro, 2025',
      category: 'Tecnologia',
      readTime: '10 min',
      thumbnail: '🧠',
    },
    {
      id: '5',
      title: 'Soft Skills vs Power Skills: Entenda a Diferença',
      excerpt: 'Descubra por que habilidades humanas estão sendo reclassificadas como "power skills" e sua importância crescente.',
      author: 'Dr. Maria Santos',
      date: '5 de Janeiro, 2025',
      category: 'Desenvolvimento',
      readTime: '7 min',
      thumbnail: '💪',
    },
    {
      id: '6',
      title: 'Sustentabilidade e Tecnologia: Carreiras Verdes em Ascensão',
      excerpt: 'Explore as oportunidades emergentes na interseção entre sustentabilidade e inovação tecnológica.',
      author: 'Pedro Ambiente',
      date: '3 de Janeiro, 2025',
      category: 'Sustentabilidade',
      readTime: '9 min',
      thumbnail: '🌱',
    },
  ];

  const categories = ['Todos', 'Tendências', 'Carreira', 'Educação', 'Tecnologia', 'Desenvolvimento', 'Sustentabilidade'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredPosts = selectedCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-400 text-sm font-medium">Blog Oficial</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Insights e{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Tendências
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore artigos sobre o futuro do trabalho, desenvolvimento de carreira e as últimas tendências em educação e tecnologia.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ✨ EM DESTAQUE
                </span>
                <span className="text-slate-400 text-sm">•</span>
                <span className="text-purple-400 text-sm font-medium">{featuredPost.category}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-slate-400 text-sm flex items-center gap-2">
                      <span>👤</span>
                      {featuredPost.author}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-sm flex items-center gap-2">
                      <span>📅</span>
                      {featuredPost.date}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-sm flex items-center gap-2">
                      <span>⏱️</span>
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Ler Artigo Completo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-9xl">{featuredPost.thumbnail}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4">{post.thumbnail}</div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-purple-400 text-xs font-medium bg-purple-500/20 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-slate-500 text-xs">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>

              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors group-hover:gap-3"
              >
                Ler mais
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Não Perca Nenhuma Novidade</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Inscreva-se na nossa newsletter e receba os melhores artigos sobre carreira e educação diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
