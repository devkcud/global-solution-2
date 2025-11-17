import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  thumbnail: string;
  content: string[];
  tags: string[];
}

export const BlogDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

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
      tags: ['IA', 'Futuro do Trabalho', 'Tecnologia', 'Carreira'],
      content: [
        'A inteligência artificial não é mais ficção científica. Ela está aqui, transformando fundamentalmente a forma como trabalhamos, aprendemos e nos desenvolvemos profissionalmente.',
        'Nos últimos anos, testemunhamos uma aceleração sem precedentes na adoção de tecnologias de IA em diversos setores. Desde assistentes virtuais que automatizam tarefas administrativas até algoritmos complexos que auxiliam em diagnósticos médicos, a IA está redefinindo o que significa ser produtivo no século XXI.',
        'Mas ao contrário do que muitos temem, a IA não está aqui para substituir completamente os humanos. Em vez disso, ela está criando uma nova dinâmica de trabalho onde a colaboração entre humanos e máquinas se torna essencial.',
        '## Habilidades Essenciais na Era da IA',
        'Para prosperar neste novo cenário, profissionais precisam desenvolver um conjunto específico de competências:',
        '**1. Pensamento Crítico e Resolução de Problemas Complexos** - Enquanto a IA pode processar dados em velocidade incrível, humanos ainda são superiores em analisar contextos complexos e tomar decisões baseadas em nuances éticas e sociais.',
        '**2. Criatividade e Inovação** - A capacidade de pensar fora da caixa e criar soluções originais permanece uma vantagem competitiva humana fundamental.',
        '**3. Inteligência Emocional** - Habilidades como empatia, comunicação efetiva e gestão de relacionamentos são cada vez mais valorizadas em um mundo automatizado.',
        '**4. Adaptabilidade e Aprendizado Contínuo** - A mentalidade de lifelong learning não é mais opcional. Profissionais precisam estar constantemente atualizando suas habilidades.',
        '## Carreiras Emergentes',
        'A IA está criando novas oportunidades profissionais que nem existiam há cinco anos. Algumas das carreiras mais promissoras incluem:',
        '- **Engenheiros de Prompt**: Especialistas em comunicação com sistemas de IA generativa',
        '- **Especialistas em Ética de IA**: Profissionais que garantem o uso responsável da tecnologia',
        '- **Analistas de Dados com IA**: Combinam análise tradicional com ferramentas de machine learning',
        '- **Designers de Experiência Humano-IA**: Criam interfaces intuitivas para interação com sistemas inteligentes',
        '## Preparando-se para o Futuro',
        'A chave para navegar esta transformação é a preparação proativa. Não espere que as mudanças aconteçam para então reagir. Comece agora:',
        '1. Identifique como a IA está impactando sua área específica',
        '2. Invista em cursos e certificações relevantes',
        '3. Experimente com ferramentas de IA disponíveis',
        '4. Desenvolva projetos que combinem suas habilidades atuais com tecnologias emergentes',
        '5. Construa uma rede de contatos em comunidades tech',
        '## Conclusão',
        'O futuro do trabalho não é sobre competir com a IA, mas sobre aprender a trabalhar ao lado dela. Aqueles que abraçarem esta colaboração, desenvolvendo as habilidades certas e mantendo uma mentalidade de crescimento contínuo, não apenas sobreviverão a esta transformação - eles prosperarão.',
        'A pergunta não é se a IA mudará sua carreira, mas como você se preparará para essa mudança inevitável.',
      ],
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
      tags: ['Habilidades', 'Mercado', 'Desenvolvimento', 'Carreira'],
      content: [
        'O mercado de trabalho de 2025 demanda um conjunto único de habilidades que combinam competências técnicas com capacidades humanas essenciais. Vamos explorar as 10 habilidades mais procuradas.',
        '## 1. Análise de Dados e Data Literacy',
        'A capacidade de interpretar, trabalhar e comunicar com dados se tornou fundamental. Empresas buscam profissionais que possam extrair insights significativos de grandes volumes de informação.',
        '**Como desenvolver**: Cursos de Python, SQL, estatística básica e ferramentas de visualização como Tableau ou Power BI.',
        '## 2. Inteligência Artificial e Machine Learning',
        'Conhecimento em IA deixou de ser exclusivo de cientistas de dados. Profissionais de diversas áreas precisam entender como funcionam e aplicar essas tecnologias.',
        '**Como desenvolver**: Comece com fundamentos de Python, depois avance para bibliotecas como scikit-learn e TensorFlow.',
        '## 3. Cloud Computing',
        'Com a migração massiva para a nuvem, conhecimento em plataformas como AWS, Azure ou Google Cloud é altamente valorizado.',
        '**Como desenvolver**: Certificações cloud específicas e projetos práticos de deploy de aplicações.',
        '## 4. Cibersegurança',
        'A crescente digitalização aumentou exponencialmente a demanda por profissionais de segurança da informação.',
        '**Como desenvolver**: Cursos de ethical hacking, criptografia e certificações como CompTIA Security+ ou CEH.',
        '## 5. Design Thinking e UX/UI',
        'A experiência do usuário se tornou diferencial competitivo crucial. Designers que entendem comportamento humano são essenciais.',
        '**Como desenvolver**: Cursos de design centrado no usuário, prototipagem e ferramentas como Figma.',
        '## 6. Gestão de Projetos Ágil',
        'Metodologias ágeis dominam ambientes corporativos modernos. Scrum Masters e Product Owners são altamente requisitados.',
        '**Como desenvolver**: Certificações Scrum, participação em projetos ágeis e cursos de gestão de produtos.',
        '## 7. Comunicação Digital e Marketing de Conteúdo',
        'Capacidade de criar narrativas envolventes e comunicar efetivamente em canais digitais.',
        '**Como desenvolver**: Cursos de copywriting, SEO, redes sociais e estratégia de conteúdo.',
        '## 8. Sustentabilidade e ESG',
        'Empresas buscam profissionais que entendam práticas sustentáveis e governança ambiental, social e corporativa.',
        '**Como desenvolver**: Cursos de sustentabilidade empresarial, economia circular e relatórios ESG.',
        '## 9. Pensamento Crítico e Resolução de Problemas',
        'Habilidade de analisar situações complexas e desenvolver soluções criativas permanece insubstituível.', '**Como desenvolver**: Prática deliberada, estudo de casos, filosofia e lógica.',
        '## 10. Inteligência Emocional e Liderança',
        'Soft skills como empatia, gestão de conflitos e inspiração de equipes são cada vez mais valorizadas.',
        '**Como desenvolver**: Coaching, mentoria, cursos de liderança e prática de autoconhecimento.',
        '## Conclusão',
        'O profissional completo de 2025 combina competências técnicas com habilidades humanas únicas. Invista em um portfólio equilibrado de skills para maximizar sua empregabilidade.',
      ],
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
      tags: ['Aprendizado', 'Desenvolvimento', 'Mindset', 'Educação'],
      content: [
        'A educação tradicional - estudar na juventude e trabalhar pelo resto da vida - está obsoleta. Bem-vindo à era do lifelong learning.',
        '## A Nova Realidade',
        'Estudos indicam que 50% das habilidades técnicas se tornam obsoletas a cada 3-5 anos. Em setores de tecnologia, esse ciclo é ainda mais rápido.',
        'Isso significa que o diploma universitário, embora ainda importante, é apenas o começo de uma jornada de aprendizado que se estende por toda a vida profissional.',
        '## Por Que Lifelong Learning é Essencial?',
        '**1. Evolução Tecnológica Acelerada** - Novas ferramentas e plataformas surgem constantemente.',
        '**2. Mudanças nas Demandas do Mercado** - Setores inteiros emergem enquanto outros desaparecem.',
        '**3. Longevidade das Carreiras** - Trabalhamos por mais tempo, exigindo múltiplas reinvenções profissionais.',
        '**4. Competitividade Global** - Profissionais do mundo todo competem pelas mesmas oportunidades.',
        '## Como Cultivar a Mentalidade de Aprendizado Contínuo',
        '### 1. Adote uma Growth Mindset',
        'Acredite que suas habilidades podem ser desenvolvidas através de dedicação e trabalho. Erros são oportunidades de aprendizado, não falhas definitivas.',
        '### 2. Estabeleça Rotinas de Aprendizado',
        'Dedique tempo regular ao estudo. Mesmo 30 minutos diários fazem diferença significativa ao longo do ano.',
        '### 3. Diversifique Suas Fontes de Conhecimento',
        '- Cursos online (MOOCs, plataformas especializadas)',
        '- Livros e artigos acadêmicos',
        '- Podcasts e videoaulas',
        '- Conferências e webinars',
        '- Comunidades de prática',
        '### 4. Aprenda Fazendo',
        'Conhecimento teórico sem aplicação prática tem valor limitado. Busque projetos que permitam experimentar novos conceitos.',
        '### 5. Ensine o Que Aprende',
        'Explicar conceitos para outros solidifica seu próprio entendimento e revela gaps de conhecimento.',
        '## Superando Barreiras Comuns',
        '**Falta de Tempo**: Priorize microlearning - sessões curtas e focadas são mais efetivas que maratonas esporádicas.',
        '**Sobrecarga de Informação**: Crie um plano de aprendizado estruturado. Foque em uma habilidade por vez.',
        '**Falta de Motivação**: Conecte o aprendizado a objetivos concretos de carreira. Celebre pequenas vitórias.',
        '**Síndrome do Impostor**: Todos começam como iniciantes. Persistência supera talento natural.',
        '## O Papel das Empresas',
        'Organizações progressivas reconhecem que colaboradores que aprendem continuamente são mais inovadores e adaptáveis. Muitas oferecem:',
        '- Orçamentos para desenvolvimento profissional',
        '- Tempo dedicado ao aprendizado durante o horário de trabalho',
        '- Bibliotecas corporativas de cursos online',
        '- Programas de mentoria e coaching',
        '## Conclusão',
        'Lifelong learning não é um fardo adicional - é uma vantagem competitiva e fonte de realização pessoal. Transforme-se em um eterno estudante e prospere na economia do conhecimento.',
        'O futuro pertence àqueles que nunca param de aprender.',
      ],
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
      tags: ['Machine Learning', 'IA', 'Python', 'Tutorial'],
      content: [
        'Machine Learning pode parecer intimidante para iniciantes, mas com a abordagem certa, qualquer pessoa pode começar sua jornada nesta área fascinante.',
        '## O Que é Machine Learning?',
        'Machine Learning (ML) é um subcampo da Inteligência Artificial que permite que computadores aprendam e melhorem com a experiência, sem serem explicitamente programados para cada tarefa.',
        'Em vez de escrever regras específicas, criamos algoritmos que identificam padrões nos dados e fazem previsões.',
        '## Pré-requisitos Essenciais',
        'Antes de mergulhar em ML, você precisa de uma base sólida em:',
        '### 1. Matemática Fundamental',
        '- **Álgebra Linear**: Vetores, matrizes e operações',
        '- **Cálculo**: Derivadas e otimização',
        '- **Estatística**: Probabilidade, distribuições e inferência',
        '**Não se assuste**: Você pode começar sem dominar tudo isso. Aprenda conforme avança.',
        '### 2. Programação em Python',
        'Python é a linguagem padrão para ML. Você precisa conhecer:',
        '- Sintaxe básica e estruturas de dados',
        '- Bibliotecas fundamentais: NumPy e Pandas',
        '- Conceitos de programação orientada a objetos',
        '## Seu Roadmap de Aprendizado',
        '### Fase 1: Fundamentos (2-3 meses)',
        '**Semanas 1-4: Python Básico**',
        '- Aprenda sintaxe, tipos de dados, loops e funções',
        '- Recursos: Python.org, Codecademy, freeCodeCamp',
        '**Semanas 5-8: Bibliotecas de Dados**',
        '- NumPy: Operações com arrays',
        '- Pandas: Manipulação de dataframes',
        '- Matplotlib/Seaborn: Visualização de dados',
        '**Semanas 9-12: Matemática para ML**',
        '- Khan Academy: Álgebra linear e cálculo',
        '- StatQuest: Estatística de forma intuitiva',
        '### Fase 2: Machine Learning Introdutório (3-4 meses)',
        '**Conceitos Fundamentais:**',
        '1. **Aprendizado Supervisionado** - Algoritmos aprendem com dados rotulados',
        '   - Regressão Linear',
        '   - Árvores de Decisão',
        '   - Random Forests',
        '2. **Aprendizado Não Supervisionado** - Descobrem padrões sem rótulos',
        '   - K-Means Clustering',
        '   - PCA (Análise de Componentes Principais)',
        '3. **Avaliação de Modelos**',
        '   - Métricas de desempenho',
        '   - Validação cruzada',
        '   - Overfitting vs Underfitting',
        '**Ferramenta Principal: Scikit-learn**',
        'Esta biblioteca Python torna ML acessível com APIs simples e documentação excelente.',
        '### Fase 3: Projetos Práticos (Ongoing)',
        'Aprendizado teórico sem aplicação tem valor limitado. Comece com projetos simples:',
        '**Projeto 1: Previsão de Preços de Casas**',
        '- Dataset: Boston Housing ou similar',
        '- Técnica: Regressão Linear',
        '- Aprenda: Limpeza de dados, feature engineering, avaliação',
        '**Projeto 2: Classificação de Emails (Spam ou Não)**',
        '- Dataset: SpamAssassin',
        '- Técnica: Naive Bayes ou Logistic Regression',
        '- Aprenda: Processamento de texto, NLP básico',
        '**Projeto 3: Segmentação de Clientes**',
        '- Dataset: Customer data',
        '- Técnica: K-Means Clustering',
        '- Aprenda: Análise exploratória, interpretação de clusters',
        '## Recursos Recomendados',
        '**Cursos Online:**',
        '- Andrew Ng - Machine Learning (Coursera)',
        '- Fast.ai - Practical Deep Learning',
        '- Google - Machine Learning Crash Course',
        '**Livros:**',
        '- "Hands-On Machine Learning" - Aurélien Géron',
        '- "Python Machine Learning" - Sebastian Raschka',
        '**Plataformas de Prática:**',
        '- Kaggle - Competições e datasets',
        '- Google Colab - Ambiente de desenvolvimento gratuito',
        '- GitHub - Compartilhe seus projetos',
        '## Erros Comuns a Evitar',
        '1. **Pular os fundamentos** - Matemática e programação são essenciais',
        '2. **Focar só em teoria** - Projetos práticos são cruciais',
        '3. **Usar algoritmos complexos cedo demais** - Comece simples',
        '4. **Ignorar a qualidade dos dados** - Garbage in, garbage out',
        '5. **Não validar adequadamente** - Modelos precisam generalizar',
        '## Próximos Passos: Deep Learning',
        'Após dominar ML tradicional, você pode avançar para:',
        '- Redes Neurais e Deep Learning',
        '- Computer Vision (CNNs)',
        '- Processamento de Linguagem Natural (Transformers)',
        '- Reinforcement Learning',
        '## Conclusão',
        'Machine Learning é uma jornada, não um destino. Comece devagar, seja consistente, e construa projetos reais. Em 6-12 meses de estudo dedicado, você terá habilidades valiosas para o mercado.',
        'Lembre-se: Todo especialista já foi um iniciante. O importante é dar o primeiro passo hoje.',
      ],
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
      tags: ['Soft Skills', 'Power Skills', 'Liderança', 'Carreira'],
      content: [
        'Por décadas, habilidades humanas foram chamadas de "soft skills" - um termo que inadvertidamente as diminuía. Mas isso está mudando.',
        '## A Evolução da Nomenclatura',
        'O termo "soft skills" surgiu em contraste com "hard skills" (habilidades técnicas). A própria nomenclatura sugeria que habilidades humanas eram secundárias, menos importantes ou "mais fáceis".',
        'Nada poderia estar mais longe da verdade.',
        '## Por Que "Power Skills"?',
        'Líderes empresariais e educadores começaram a usar "power skills" para refletir melhor o valor real dessas competências:',
        '**1. São Difíceis de Desenvolver** - Levar anos para dominar comunicação efetiva ou inteligência emocional',
        '**2. São Insubstituíveis por IA** - Máquinas podem processar dados, mas não podem liderar com empatia',
        '**3. Determinam o Sucesso** - Estudos mostram que 85% do sucesso profissional vem de power skills',
        '**4. Geram Impacto Multiplicador** - Um líder com excelentes power skills eleva toda uma equipe',
        '## As 7 Power Skills Essenciais',
        '### 1. Inteligência Emocional',
        'Capacidade de reconhecer, entender e gerenciar suas próprias emoções e as dos outros.',
        '**Por que importa**: Líderes emocionalmente inteligentes criam ambientes psicologicamente seguros onde equipes prosperam.',
        '**Como desenvolver**: Prática de autoconhecimento, mindfulness, feedback 360°, coaching.',
        '### 2. Pensamento Crítico',
        'Habilidade de analisar informações objetivamente e formar julgamentos fundamentados.',
        '**Por que importa**: Em uma era de sobrecarga de informação e fake news, discernir verdade de ficção é crucial.',
        '**Como desenvolver**: Estudo de lógica, questionar suposições, análise de argumentos, debate estruturado.',
        '### 3. Comunicação Efetiva',
        'Capacidade de transmitir ideias claramente e adaptar a mensagem ao público.',
        '**Por que importa**: As melhores ideias são inúteis se você não consegue comunicá-las convincentemente.',
        '**Como desenvolver**: Prática de apresentações, escrita clara, escuta ativa, storytelling.',
        '### 4. Colaboração e Trabalho em Equipe',
        'Habilidade de trabalhar efetivamente com pessoas diversas em direção a objetivos comuns.',
        '**Por que importa**: Problemas complexos exigem perspectivas multidisciplinares.',
        '**Como desenvolver**: Projetos em grupo, entendimento de dinâmicas de equipe, resolução de conflitos.',
        '### 5. Adaptabilidade e Resiliência',
        'Capacidade de se ajustar rapidamente a mudanças e se recuperar de adversidades.',
        '**Por que importa**: Mudança é a única constante. Profissionais rígidos ficam para trás.',
        '**Como desenvolver**: Sair da zona de conforto regularmente, prática de growth mindset, gerenciamento de estresse.',
        '### 6. Criatividade e Inovação',
        'Habilidade de gerar ideias originais e soluções não convencionais.',
        '**Por que importa**: Automação assume tarefas repetitivas. Criatividade é vantagem humana.',
        '**Como desenvolver**: Brainstorming, exposição a diversas áreas, pensamento lateral, prototipagem rápida.',
        '### 7. Liderança e Influência',
        'Capacidade de inspirar, motivar e guiar outros em direção a uma visão.',
        '**Por que importa**: Liderança não é título, é habilidade que todos os profissionais precisam.',
        '**Como desenvolver**: Mentoria, assumir responsabilidades, estudo de liderança, feedback constante.',
        '## Power Skills no Contexto da IA',
        'A ascensão da Inteligência Artificial torna power skills ainda mais críticas:',
        '- **IA automatiza**: Análise de dados, processamento de informações, tarefas repetitivas',
        '- **Humanos destacam-se em**: Empatia, julgamento ético, liderança inspiradora, criatividade contextual',
        'O futuro não é humano OU máquina - é humano E máquina. Power skills são o que torna humanos insubstituíveis nesta parceria.',
        '## Como Empresas Avaliam Power Skills',
        'Recrutadores estão cada vez mais sofisticados na avaliação:',
        '- **Entrevistas comportamentais**: "Conte sobre uma vez que..."',
        '- **Assessment centers**: Simulações e exercícios em grupo',
        '- **Referências aprofundadas**: Foco em como você trabalha, não apenas o que entrega',
        '- **Período de experiência**: Observação de comportamentos em situações reais',
        '## Desenvolvendo Power Skills: Plano de Ação',
        '**Mês 1: Autoavaliação**',
        '- Identifique suas power skills mais fortes e mais fracas',
        '- Peça feedback honesto de colegas e mentores',
        '- Defina 1-2 skills prioritárias para desenvolvimento',
        '**Meses 2-6: Aprendizado Estruturado**',
        '- Cursos específicos (comunicação, liderança, etc.)',
        '- Leitura de livros fundamentais',
        '- Participação em workshops e treinamentos',
        '**Meses 7-12: Prática Deliberada**',
        '- Busque oportunidades de aplicação no trabalho',
        '- Voluntarie-se para liderar projetos',
        '- Pratique em ambientes seguros (Toastmasters, grupos de estudo)',
        '## Conclusão',
        'Power skills não são "soft" - são essenciais, complexas e cada vez mais valorizadas. Em um mundo onde habilidades técnicas ficam obsoletas rapidamente, power skills são seu diferencial sustentável.',
        'Invista em desenvolvê-las. Seu futuro profissional depende disso.',
      ],
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
      tags: ['Sustentabilidade', 'ESG', 'Green Tech', 'Carreira'],
      content: [
        'A urgência climática encontrou a inovação tecnológica, criando um novo setor vibrante: Green Tech. E com ele, surgem carreiras fascinantes.',
        '## O Contexto: Por Que Agora?',
        'Três forças convergem para criar demanda explosiva por profissionais em sustentabilidade:',
        '**1. Pressão Regulatória** - Governos implementam metas carbono zero',
        '**2. Demanda de Investidores** - ESG se torna critério de investimento',
        '**3. Expectativa de Consumidores** - Especialmente gerações mais jovens',
        'Resultado: Empresas de todos os setores precisam de expertise em sustentabilidade AGORA.',
        '## As 8 Carreiras Verdes Mais Promissoras',
        '### 1. Especialista em ESG (Environmental, Social, Governance)',
        '**O que faz**: Desenvolve estratégias de sustentabilidade corporativa, mede impactos e cria relatórios ESG.',
        '**Salário médio**: R$ 12.000 - R$ 25.000',
        '**Skills necessárias**: Análise de dados, regulamentação ambiental, comunicação, gestão de stakeholders',
        '**Formação**: Administração, Ciências Ambientais, Engenharia + especialização em ESG',
        '### 2. Engenheiro de Energia Renovável',
        '**O que faz**: Projeta e otimiza sistemas de energia solar, eólica, biomassa e outras fontes limpas.',
        '**Salário médio**: R$ 10.000 - R$ 20.000',
        '**Skills necessárias**: Engenharia elétrica/mecânica, modelagem de sistemas, análise de viabilidade',
        '**Formação**: Engenharia + especialização em renováveis',
        '### 3. Cientista de Dados em Sustentabilidade',
        '**O que faz**: Analisa grandes volumes de dados ambientais para identificar padrões e otimizar recursos.',
        '**Salário médio**: R$ 15.000 - R$ 30.000',
        '**Skills necessárias**: Python/R, machine learning, análise estatística, domínio ambiental',
        '**Formação**: Ciência da Computação, Estatística, Ciências Ambientais',
        '### 4. Arquiteto de Edifícios Verdes',
        '**O que faz**: Projeta construções sustentáveis com eficiência energética e mínimo impacto ambiental.',
        '**Salário médio**: R$ 12.000 - R$ 28.000',
        '**Skills necessárias**: Arquitetura, certificações LEED/AQUA, modelagem BIM, eficiência energética',
        '**Formação**: Arquitetura + especialização em construção sustentável',
        '### 5. Especialista em Economia Circular',
        '**O que faz**: Redesenha processos produtivos para eliminar desperdício e criar loops fechados.',
        '**Salário médio**: R$ 11.000 - R$ 22.000',
        '**Skills necessárias**: Design thinking, análise de ciclo de vida, logística reversa',
        '**Formação**: Engenharia de Produção, Administração, Design',
        '### 6. Desenvolvedor de IoT para Agricultura Inteligente',
        '**O que faz**: Cria sistemas de sensores e analytics para otimizar uso de água, fertilizantes e reduzir pegada ambiental.',
        '**Salário médio**: R$ 13.000 - R$ 26.000',
        '**Skills necessárias**: IoT, programação, agronomia, análise de dados',
        '**Formação**: Ciência da Computação, Engenharia + conhecimento em agronegócio',
        '### 7. Consultor de Pegada de Carbono',
        '**O que faz**: Mede emissões de gases de efeito estufa e desenvolve estratégias de neutralização.',
        '**Salário médio**: R$ 10.000 - R$ 24.000',
        '**Skills necessárias**: Cálculo de emissões, normas ISO 14064, mercado de carbono',
        '**Formação**: Ciências Ambientais, Engenharia + certificações específicas',
        '### 8. Designer de Produtos Sustentáveis',
        '**O que faz**: Cria produtos eco-friendly desde a concepção, considerando materiais, produção e descarte.',
        '**Salário médio**: R$ 9.000 - R$ 20.000',
        '**Skills necessárias**: Design, análise de materiais, lifecycle assessment, biomimética',
        '**Formação**: Design, Engenharia de Materiais',
        '## Certificações Valorizadas',
        'Credenciais que fazem diferença no currículo:',
        '- **LEED AP** (Leadership in Energy and Environmental Design)',
        '- **CEM** (Certified Energy Manager)',
        '- **GRI Professional** (Global Reporting Initiative)',
        '- **ISO 14001 Lead Auditor**',
        '- **CBESC** (Certified Business Environmental & Sustainability Consultant)',
        '## Transição de Carreira para Green Tech',
        'Já trabalha em outra área? Veja como fazer a transição:',
        '**De TI para Green Tech:**',
        '→ Foque em análise de dados ambientais ou desenvolvimento de soluções IoT sustentáveis',
        '**De Finanças para Sustentabilidade:**',
        '→ Especialize-se em finanças verdes, investimentos ESG ou carbon markets',
        '**De Marketing para Comunicação Sustentável:**',
        '→ Torne-se especialista em comunicação de impacto e combate ao greenwashing',
        '**De Engenharia Tradicional para Green Engineering:**',
        '→ Adicione certificações em eficiência energética ou gestão ambiental',
        '## Empresas Líderes Contratando',
        'Setores aquecidos:',
        '- **Energy**: EDP, Engie, Enel Green Power',
        '- **Consultoria**: McKinsey Sustainability, Deloitte, EY',
        '- **Tech**: Microsoft (AI for Earth), Google (Sustainability)',
        '- **Agricultura**: Bayer, Raízen, startups de agtech',
        '- **Construção**: Tishman Speyer, Cyrela (sustentabilidade)',
        '## O Futuro é Verde (e Digital)',
        'Projeções indicam:',
        '- 24 milhões de novos empregos verdes até 2030 (ILO)',
        '- Crescimento de 30% em carreiras de sustentabilidade',
        '- Salários 15-20% acima da média do mercado',
        '## Seu Plano de Ação',
        '**Próximos 30 dias:**',
        '1. Identifique qual carreira verde alinha com seu background',
        '2. Faça curso introdutório em sustentabilidade',
        '3. Conecte-se com profissionais da área no LinkedIn',
        '**Próximos 6 meses:**',
        '1. Obtenha certificação relevante',
        '2. Desenvolva projeto pessoal demonstrando skills',
        '3. Participe de eventos e conferências ESG',
        '**Próximo ano:**',
        '1. Candidate-se a posições júnior/transição',
        '2. Continue aprendendo e se especializando',
        '3. Construa portfólio de cases de impacto',
        '## Conclusão',
        'Carreiras em sustentabilidade combinam propósito com prosperidade. Você pode fazer bem ao planeta enquanto constrói uma carreira lucrativa e significativa.',
        'O momento é agora. O planeta - e seu futuro profissional - agradecem.',
      ],
    },
  ];

  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const relatedPosts = blogPosts.filter(p => p.id !== postId && p.category === post.category).slice(0, 3);

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-500/20 text-purple-400 text-sm font-medium px-3 py-1 rounded-full border border-purple-500/30">
              {post.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 text-sm">{post.readTime} de leitura</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-slate-400 text-sm">{post.date}</p>
              </div>
            </div>
          </div>

          <div className="text-6xl mb-8 text-center">{post.thumbnail}</div>

          <p className="text-xl text-slate-300 italic border-l-4 border-cyan-500 pl-6 mb-8">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-invert prose-lg max-w-none">
          {post.content.map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-cyan-400">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="text-lg font-bold text-white mt-6 mb-3">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              );
            } else if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="text-slate-300 ml-6 mb-2">
                  {paragraph.replace('- ', '')}
                </li>
              );
            } else if (paragraph.match(/^\d+\./)) {
              return (
                <li key={index} className="text-slate-300 ml-6 mb-2">
                  {paragraph.replace(/^\d+\.\s/, '')}
                </li>
              );
            } else {
              return (
                <p key={index} className="text-slate-300 mb-4 leading-relaxed">
                  {paragraph.split('**').map((part, i) =>
                    i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                  )}
                </p>
              );
            }
          })}
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-slate-400 text-sm">Compartilhe:</span>
          <div className="flex gap-3">
            <button className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
            <button className="bg-slate-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="text-4xl mb-4">{related.thumbnail}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{related.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
