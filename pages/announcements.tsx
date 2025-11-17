import React from 'react';

interface Announcement {
  id: string;
  type: 'update' | 'feature' | 'maintenance' | 'event';
  title: string;
  description: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  icon: string;
}

export const AnnouncementsPage: React.FC = () => {
  const announcements: Announcement[] = [
    {
      id: '1',
      type: 'feature',
      title: 'Novo Simulador de Carreira Lançado! 🎉',
      description: 'Apresentamos nosso revolucionário Simulador de Carreira com recomendações inteligentes de habilidades complementares. Descubra as profissões do futuro que combinam com seu perfil único!',
      date: '17 de Janeiro, 2025',
      priority: 'high',
      icon: '🚀',
    },
    {
      id: '2',
      type: 'update',
      title: 'Novos Cursos Adicionados à Plataforma',
      description: 'Adicionamos 3 novos cursos à nossa biblioteca: Análise de Dados Avançada, UX Design para IA, e Blockchain Fundamentals. Explore agora!',
      date: '15 de Janeiro, 2025',
      priority: 'medium',
      icon: '📚',
    },
    {
      id: '3',
      type: 'event',
      title: 'Webinar: O Futuro do Trabalho com IA',
      description: 'Participe do nosso webinar exclusivo dia 25/01 às 19h. Palestrantes especialistas discutirão como se preparar para as carreiras do futuro. Inscrições abertas!',
      date: '14 de Janeiro, 2025',
      priority: 'high',
      icon: '🎓',
    },
    {
      id: '4',
      type: 'maintenance',
      title: 'Manutenção Programada do Sistema',
      description: 'Realizaremos uma manutenção programada no dia 20/01 das 2h às 4h (horário de Brasília). Alguns recursos poderão ficar temporariamente indisponíveis.',
      date: '13 de Janeiro, 2025',
      priority: 'medium',
      icon: '🔧',
    },
    {
      id: '5',
      type: 'update',
      title: 'Melhorias na Interface do Dashboard',
      description: 'Redesenhamos completamente o dashboard com gráficos mais intuitivos, visualizações aprimoradas e um design moderno. Confira as mudanças!',
      date: '10 de Janeiro, 2025',
      priority: 'low',
      icon: '✨',
    },
    {
      id: '6',
      type: 'feature',
      title: 'Sistema de Conquistas e Badges',
      description: 'Desbloqueie conquistas conforme progride nos cursos! Ganhe badges especiais ao completar módulos, fazer quizzes e atingir metas de aprendizado.',
      date: '8 de Janeiro, 2025',
      priority: 'medium',
      icon: '🏆',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'feature': return 'from-purple-500/20 to-pink-500/20 border-purple-500/30';
      case 'update': return 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30';
      case 'maintenance': return 'from-orange-500/20 to-red-500/20 border-orange-500/30';
      case 'event': return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
      default: return 'from-slate-500/20 to-slate-600/20 border-slate-500/30';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'feature': return { label: 'Nova Funcionalidade', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' };
      case 'update': return { label: 'Atualização', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' };
      case 'maintenance': return { label: 'Manutenção', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' };
      case 'event': return { label: 'Evento', color: 'bg-green-500/20 text-green-400 border-green-500/30' };
      default: return { label: 'Anúncio', color: 'bg-slate-500/20 text-slate-400 border-slate-500/30' };
    }
  };

  const getPriorityIndicator = (priority: string) => {
    switch (priority) {
      case 'high': return <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />;
      case 'medium': return <span className="w-2 h-2 bg-yellow-400 rounded-full" />;
      case 'low': return <span className="w-2 h-2 bg-green-400 rounded-full" />;
      default: return null;
    }
  };

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full animate-bounce">
            <span className="text-cyan-400 text-sm font-medium">Fique por Dentro</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Anúncios e{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Novidades
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Acompanhe as últimas atualizações, novos recursos e eventos importantes da plataforma SkillNavigator.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">
              {announcements.filter(a => a.type === 'feature').length}
            </div>
            <div className="text-slate-400 text-xs">Novas Funcionalidades</div>
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">
              {announcements.filter(a => a.type === 'update').length}
            </div>
            <div className="text-slate-400 text-xs">Atualizações</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {announcements.filter(a => a.type === 'event').length}
            </div>
            <div className="text-slate-400 text-xs">Eventos</div>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">
              {announcements.filter(a => a.priority === 'high').length}
            </div>
            <div className="text-slate-400 text-xs">Alta Prioridade</div>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {announcements.map((announcement, index) => {
            const badge = getTypeBadge(announcement.type);
            return (
              <div
                key={announcement.id}
                className={`bg-gradient-to-r ${getTypeColor(announcement.type)} border rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-4xl flex-shrink-0 mt-1">
                    {announcement.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border ${badge.color}`}>
                        {badge.label}
                      </span>
                      <span className="text-slate-500 text-xs">•</span>
                      <span className="text-slate-400 text-xs flex items-center gap-2">
                        📅 {announcement.date}
                      </span>
                      {getPriorityIndicator(announcement.priority)}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {announcement.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed">
                      {announcement.description}
                    </p>

                    {announcement.priority === 'high' && (
                      <div className="mt-4 flex items-center gap-2 text-red-400 text-sm">
                        <span className="animate-pulse">🔴</span>
                        <span className="font-medium">Requer Atenção</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">🔔</div>
          <h2 className="text-3xl font-bold mb-4">Receba Notificações</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Ative as notificações para ser o primeiro a saber sobre novas funcionalidades, eventos e atualizações importantes.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">
            Ativar Notificações
          </button>
        </div>
      </div>
    </div>
  );
};
