import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', category: '', subject: '', message: '' });
  };

  const supportCategories = [
    {
      id: 'technical',
      title: 'Suporte Técnico',
      description: 'Problemas com a plataforma, bugs ou erros',
      icon: '🔧',
      color: 'cyan',
    },
    {
      id: 'courses',
      title: 'Cursos e Conteúdo',
      description: 'Dúvidas sobre cursos, módulos ou materiais',
      icon: '📚',
      color: 'purple',
    },
    {
      id: 'account',
      title: 'Conta e Perfil',
      description: 'Gerenciamento de conta, login ou configurações',
      icon: '👤',
      color: 'green',
    },
    {
      id: 'billing',
      title: 'Pagamento',
      description: 'Questões sobre pagamentos ou assinaturas',
      icon: '💳',
      color: 'orange',
    },
  ];

  const contactMethods = [
    {
      icon: '📧',
      title: 'E-mail',
      description: 'suporte@skillnavigator.com',
      action: 'Enviar e-mail',
      color: 'cyan',
    },
    {
      icon: '💬',
      title: 'Chat ao Vivo',
      description: 'Disponível das 9h às 18h',
      action: 'Iniciar chat',
      color: 'purple',
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      description: '+55 (11) 98765-4321',
      action: 'Enviar mensagem',
      color: 'green',
    },
  ];

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-400 text-sm font-medium">Estamos Aqui Para Ajudar</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Central de{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Suporte
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Encontre respostas, entre em contato conosco ou explore nossa base de conhecimento.
          </p>

          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Ou consulte as Perguntas Frequentes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Support Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Como Podemos Ajudar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-gradient-to-br from-${category.color}-500/10 to-${category.color}-600/10 border border-${category.color}-500/30 rounded-2xl p-6 hover:border-${category.color}-500 transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold text-${category.color}-400 mb-2`}>
                  {category.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">✉️</span>
              Envie sua Mensagem
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Categoria
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="technical">Suporte Técnico</option>
                  <option value="courses">Cursos e Conteúdo</option>
                  <option value="account">Conta e Perfil</option>
                  <option value="billing">Pagamento</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Resumo do seu problema"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Descreva detalhadamente seu problema ou dúvida..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">📞</span>
              Outras Formas de Contato
            </h2>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className={`bg-gradient-to-r from-${method.color}-500/10 to-${method.color}-600/10 border border-${method.color}-500/30 rounded-xl p-6 hover:border-${method.color}-500 transition-all duration-300 group cursor-pointer`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold text-${method.color}-400 mb-1`}>
                        {method.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {method.description}
                      </p>
                    </div>
                    <button className={`text-${method.color}-400 hover:text-${method.color}-300 font-medium text-sm flex items-center gap-1 transition-colors`}>
                      {method.action}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⏱️</span>
                <h3 className="text-xl font-bold text-green-400">Tempo de Resposta</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Chat ao Vivo:</span>
                  <span className="text-white font-medium">Imediato</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">E-mail:</span>
                  <span className="text-white font-medium">24-48 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">WhatsApp:</span>
                  <span className="text-white font-medium">1-2 horas</span>
                </div>
              </div>
            </div>

            {/* Knowledge Base Link */}
            <div className="mt-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="text-lg font-bold mb-2">Base de Conhecimento</h3>
              <p className="text-slate-400 text-sm mb-4">
                Encontre respostas rápidas em nossa documentação completa
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
              >
                Acessar FAQ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Horário de Atendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-cyan-400 font-bold mb-2">Segunda a Sexta</div>
              <div className="text-slate-300">9:00 - 18:00</div>
            </div>
            <div>
              <div className="text-purple-400 font-bold mb-2">Sábados</div>
              <div className="text-slate-300">10:00 - 14:00</div>
            </div>
            <div>
              <div className="text-slate-500 font-bold mb-2">Domingos e Feriados</div>
              <div className="text-slate-400">Fechado</div>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Horário de Brasília (GMT-3)
          </p>
        </div>
      </div>
    </div>
  );
};
