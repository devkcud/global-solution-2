
import { Skill, FutureJob, Course, User } from '../types';

export const skills: Skill[] = [
  // Tech Skills
  { id: 'data_analysis', name: 'Análise de Dados', category: 'tech' },
  { id: 'python_programming', name: 'Programação Python', category: 'tech' },
  { id: 'machine_learning', name: 'Machine Learning', category: 'tech' },
  { id: 'cloud_computing', name: 'Cloud Computing', category: 'tech' },
  { id: 'cybersecurity', name: 'Cibersegurança', category: 'tech' },
  { id: 'ui_ux_design', name: 'UI/UX Design', category: 'tech' },
  { id: 'blockchain', name: 'Desenvolvimento Blockchain', category: 'tech' },
  { id: 'iot', name: 'Internet das Coisas (IoT)', category: 'tech' },
  { id: 'ar_vr', name: 'Desenvolvimento AR/VR', category: 'tech' },
  { id: 'rpa', name: 'Automação de Processos Robóticos (RPA)', category: 'tech' },

  // Human Skills
  { id: 'critical_thinking', name: 'Pensamento Crítico', category: 'human' },
  { id: 'creativity', name: 'Criatividade', category: 'human' },
  { id: 'emotional_intelligence', name: 'Inteligência Emocional', category: 'human' },
  { id: 'interpersonal_communication', name: 'Comunicação Interpessoal', category: 'human' },
  { id: 'adaptative_leadership', name: 'Liderança Adaptativa', category: 'human' },
  { id: 'complex_problem_solving', name: 'Resolução de Problemas Complexos', category: 'human' },
  { id: 'cultural_intelligence', name: 'Inteligência Cultural e Diversidade', category: 'human' },
  { id: 'negotiation', name: 'Negociação e Persuasão', category: 'human' },
  { id: 'cognitive_flexibility', name: 'Flexibilidade Cognitiva', category: 'human' },
  { id: 'collaboration', name: 'Colaboração e Trabalho em Equipe', category: 'human' },

  // Innovation Skills
  { id: 'design_thinking', name: 'Design Thinking', category: 'innovation' },
  { id: 'agile_methodologies', name: 'Metodologias Ágeis', category: 'innovation' },
  { id: 'data_storytelling', name: 'Storytelling com Dados', category: 'innovation' },
  { id: 'innovation_management', name: 'Gestão da Inovação', category: 'innovation' },
];

// Skill complementarity mapping - skills that work well together
export const skillComplementarity: Record<string, string[]> = {
  // Tech Skills
  data_analysis: ['python_programming', 'data_storytelling', 'machine_learning', 'critical_thinking'],
  python_programming: ['data_analysis', 'machine_learning', 'cloud_computing', 'rpa'],
  machine_learning: ['data_analysis', 'python_programming', 'critical_thinking', 'complex_problem_solving'],
  cloud_computing: ['cybersecurity', 'python_programming', 'iot', 'agile_methodologies'],
  cybersecurity: ['cloud_computing', 'critical_thinking', 'complex_problem_solving', 'blockchain'],
  ui_ux_design: ['design_thinking', 'creativity', 'emotional_intelligence', 'interpersonal_communication'],
  blockchain: ['cybersecurity', 'python_programming', 'critical_thinking', 'innovation_management'],
  iot: ['cloud_computing', 'python_programming', 'data_analysis', 'complex_problem_solving'],
  ar_vr: ['ui_ux_design', 'creativity', 'design_thinking', 'innovation_management'],
  rpa: ['python_programming', 'data_analysis', 'agile_methodologies', 'complex_problem_solving'],

  // Human Skills
  critical_thinking: ['complex_problem_solving', 'data_analysis', 'cognitive_flexibility', 'creativity'],
  creativity: ['design_thinking', 'critical_thinking', 'innovation_management', 'ui_ux_design'],
  emotional_intelligence: ['interpersonal_communication', 'adaptative_leadership', 'collaboration', 'negotiation'],
  interpersonal_communication: ['emotional_intelligence', 'negotiation', 'collaboration', 'data_storytelling'],
  adaptative_leadership: ['emotional_intelligence', 'collaboration', 'agile_methodologies', 'innovation_management'],
  complex_problem_solving: ['critical_thinking', 'creativity', 'data_analysis', 'design_thinking'],
  cultural_intelligence: ['emotional_intelligence', 'collaboration', 'interpersonal_communication', 'adaptative_leadership'],
  negotiation: ['interpersonal_communication', 'emotional_intelligence', 'critical_thinking', 'cultural_intelligence'],
  cognitive_flexibility: ['critical_thinking', 'creativity', 'adaptative_leadership', 'agile_methodologies'],
  collaboration: ['interpersonal_communication', 'emotional_intelligence', 'adaptative_leadership', 'agile_methodologies'],

  // Innovation Skills
  design_thinking: ['creativity', 'ui_ux_design', 'complex_problem_solving', 'innovation_management'],
  agile_methodologies: ['collaboration', 'adaptative_leadership', 'innovation_management', 'rpa'],
  data_storytelling: ['data_analysis', 'interpersonal_communication', 'creativity', 'critical_thinking'],
  innovation_management: ['design_thinking', 'creativity', 'adaptative_leadership', 'agile_methodologies'],
};

export const futureJobs: FutureJob[] = [
  {
    id: 'ia_ethicist',
    title: 'Especialista em Ética de IA',
    emoji: '⚖️',
    description: 'Garante que os sistemas de inteligência artificial operem de forma justa, transparente e sem vieses, alinhados aos valores humanos.',
    detailedDescription: `O Especialista em Ética de IA atua na vanguarda da tecnologia e da humanidade, sendo o guardião dos princípios morais no desenvolvimento de sistemas autônomos. Este profissional analisa algoritmos e conjuntos de dados para identificar e mitigar vieses potenciais que poderiam levar a resultados discriminatórios em áreas críticas como contratação, concessão de crédito e justiça criminal. Sua responsabilidade é garantir que a IA sirva ao bem comum, protegendo os direitos e a dignidade dos indivíduos.

Além da análise técnica, o trabalho envolve a criação de frameworks de governança, políticas de uso responsável e a condução de auditorias de impacto ético. Eles colaboram com equipes multidisciplinares, incluindo engenheiros, cientistas de dados, advogados e formuladores de políticas, para traduzir valores éticos complexos em diretrizes práticas e implementáveis. Este papel exige uma comunicação clara para educar stakeholders sobre os riscos e benefícios da IA, promovendo uma cultura de responsabilidade e transparência em toda a organização.`,
    mappedFrom: ['critical_thinking', 'interpersonal_communication', 'complex_problem_solving', 'data_storytelling'],
    skillsToDevelop: ['machine_learning', 'data_analysis']
  },
  {
    id: 'metaverse_architect',
    title: 'Arquiteto de Metaverso',
    emoji: '🌐',
    description: 'Projeta e constrói espaços virtuais imersivos, experiências e economias digitais para trabalho, socialização e entretenimento.',
    detailedDescription: `O Arquiteto de Metaverso é o urbanista da próxima fronteira digital. Este profissional combina design de jogos, arquitetura, design de UX e economia para criar mundos virtuais coesos, funcionais e envolventes. Eles não apenas projetam a aparência dos ambientes, mas também definem as regras de interação, os sistemas econômicos e as experiências sociais que acontecem dentro desses espaços, seja para escritórios virtuais, locais de eventos ou novos reinos de entretenimento.

Seu trabalho é fundamental para garantir que o metaverso seja mais do que apenas um espaço 3D, mas um lugar onde as pessoas possam se conectar, colaborar e criar valor de maneiras novas. Eles precisam pensar em escalabilidade, segurança e interoperabilidade entre diferentes plataformas, garantindo que as experiências sejam acessíveis e significativas para uma base de usuários diversificada. É uma carreira que exige uma mistura única de visão criativa e conhecimento técnico profundo.`,
    mappedFrom: ['ui_ux_design', 'python_programming', 'creativity', 'design_thinking'],
    skillsToDevelop: ['ar_vr', 'cloud_computing', 'cybersecurity']
  },
  {
    id: 'digital_detox_therapist',
    title: 'Terapeuta de Desintoxicação Digital',
    emoji: '🧘',
    description: 'Ajuda indivíduos e organizações a desenvolverem relacionamentos saudáveis com a tecnologia, combatendo o vício digital e o esgotamento.',
    detailedDescription: `Em um mundo hiperconectado, o Terapeuta de Desintoxicação Digital oferece orientação para restabelecer o equilíbrio. Este profissional trabalha com clientes para identificar padrões de uso problemático de tecnologia, como o vício em redes sociais e a sobrecarga de informações, que levam ao estresse, ansiedade e burnout. Utilizando técnicas de mindfulness, terapia cognitivo-comportamental e coaching, eles criam estratégias personalizadas para que os indivíduos recuperem o controle sobre sua atenção e bem-estar.

O objetivo não é eliminar a tecnologia, mas cultivar um relacionamento intencional e saudável com ela. Os terapeutas ajudam a estabelecer limites, como horários sem tela e "higiene do sono digital", e a redescobrir atividades offline que promovem a saúde mental e a conexão humana. Eles também podem trabalhar com empresas para desenvolver políticas de bem-estar digital que aumentem o foco e a produtividade da equipe, combatendo a cultura do "sempre online".`,
    mappedFrom: ['emotional_intelligence', 'interpersonal_communication', 'critical_thinking'],
    skillsToDevelop: ['cybersecurity', 'ui_ux_design']
  },
  {
    id: 'human_machine_team_manager',
    title: 'Gerente de Equipes Humano-Máquina',
    emoji: '🤝',
    description: 'Lidera equipes colaborativas compostas por humanos e IAs, otimizando a sinergia e a produtividade para atingir objetivos complexos.',
    detailedDescription: `O Gerente de Equipes Humano-Máquina é o maestro da colaboração do futuro. Este líder não gerencia apenas pessoas, mas a interação dinâmica entre talentos humanos e sistemas de inteligência artificial. Sua principal responsabilidade é projetar fluxos de trabalho onde humanos e máquinas se complementem, delegando tarefas analíticas e repetitivas para a IA, liberando os humanos para se concentrarem em criatividade, estratégia e resolução de problemas complexos.

Este papel exige uma profunda compreensão tanto das capacidades da IA quanto da psicologia humana. O gerente deve ser capaz de "traduzir" as necessidades da equipe para os sistemas de IA e interpretar os insights gerados pela máquina de volta para a equipe de forma acionável. Eles são responsáveis por treinar a equipe a confiar e trabalhar efetivamente com seus colegas algorítmicos, resolvendo conflitos e garantindo que a colaboração seja produtiva e eticamente sólida.`,
    mappedFrom: ['adaptative_leadership', 'complex_problem_solving', 'emotional_intelligence', 'collaboration'],
    skillsToDevelop: ['data_analysis', 'machine_learning', 'rpa', 'agile_methodologies']
  },
  {
    id: 'personal_memory_curator',
    title: 'Curador de Memórias Pessoais',
    emoji: '🎞️',
    description: 'Utiliza tecnologia para ajudar pessoas a gerenciar, reviver e preservar suas memórias digitais e físicas de maneira significativa e segura.',
    detailedDescription: `Na era da sobrecarga de dados, o Curador de Memórias Pessoais atua como um arquivista da vida de um indivíduo. Este profissional ajuda os clientes a navegar em suas vastas coleções de fotos, vídeos, e-mails e postagens de mídia social para organizar, contextualizar e preservar as memórias mais importantes. Eles utilizam ferramentas tecnológicas para criar narrativas coesas, como linhas do tempo interativas ou experiências de realidade virtual, que permitem aos clientes reviver momentos significativos.

Além da organização, a segurança e a privacidade são fundamentais. O curador garante que o legado digital de uma pessoa seja armazenado de forma segura e acessível apenas para as pessoas certas, mesmo após sua morte. Este serviço pode ser terapêutico, ajudando as pessoas a processar experiências de vida, ou prático, criando um arquivo familiar organizado para as gerações futuras. É uma profissão que combina empatia, storytelling e conhecimento técnico.`,
    mappedFrom: ['creativity', 'emotional_intelligence', 'ui_ux_design'],
    skillsToDevelop: ['data_analysis', 'cybersecurity']
  },
  {
    id: 'climate_change_reversal_specialist',
    title: 'Especialista em Reversão Climática',
    emoji: '🌍',
    description: 'Desenvolve e implementa soluções tecnológicas e estratégicas em larga escala para combater e reverter os efeitos das mudanças climáticas.',
    detailedDescription: `O Especialista em Reversão Climática é um agente de mudança em uma escala planetária. Este profissional trabalha na interseção da ciência, engenharia, política e finanças para desenvolver e escalar soluções que não apenas reduzam as emissões, mas também removam ativamente o carbono da atmosfera. Suas áreas de foco podem incluir tecnologias de captura direta de ar, reflorestamento em massa, bioengenharia de oceanos e agricultura regenerativa.

Este papel exige uma abordagem sistêmica para resolver um dos problemas mais complexos da humanidade. O especialista analisa dados climáticos para modelar o impacto de diferentes intervenções, avalia a viabilidade econômica de novas tecnologias e trabalha com governos e corporações para criar incentivos para a adoção de práticas sustentáveis. É uma carreira movida por um forte senso de propósito, exigindo resiliência, inovação e a capacidade de colaborar globalmente.`,
    mappedFrom: ['complex_problem_solving', 'data_analysis', 'innovation_management'],
    skillsToDevelop: ['machine_learning', 'python_programming', 'iot']
  },
  {
    id: 'ai_trainer',
    title: 'Treinador de IA e Designer de Personalidade',
    emoji: '🤖',
    description: 'Ensina e refina modelos de IA, especialmente em chatbots e assistentes virtuais, para que interajam de forma mais natural, empática e humana.',
    detailedDescription: `O Treinador de IA é o "educador" dos sistemas de inteligência artificial conversacional. Este profissional vai além da programação, ensinando aos modelos de linguagem as nuances da comunicação humana, como tom, empatia e contexto cultural. Eles projetam a "personalidade" de assistentes virtuais e chatbots, garantindo que a interação seja consistente com a marca e agradável para o usuário final.

O trabalho envolve a curadoria de conjuntos de dados de treinamento, a revisão de conversas geradas pela IA para identificar erros e a criação de diretrizes que ajudam o modelo a responder de forma mais adequada e útil. Eles atuam como uma ponte entre a linguística, a psicologia e a ciência da computação, garantindo que a tecnologia não seja apenas funcional, mas também genuinamente útil e humana em sua interação.`,
    mappedFrom: ['creativity', 'emotional_intelligence', 'interpersonal_communication', 'data_storytelling'],
    skillsToDevelop: ['python_programming', 'machine_learning', 'data_analysis']
  },
  {
    id: 'decentralized_identity_manager',
    title: 'Gestor de Identidade Descentralizada',
    emoji: '🆔',
    description: 'Cria e gerencia sistemas de identidade digital soberana baseados em blockchain, dando aos usuários controle total sobre seus dados pessoais.',
    detailedDescription: `O Gestor de Identidade Descentralizada está na vanguarda da revolução da privacidade de dados. Este especialista projeta e implementa sistemas que permitem aos indivíduos possuir e controlar sua própria identidade digital, sem depender de provedores centralizados como governos ou grandes empresas de tecnologia. Utilizando tecnologias como blockchain e credenciais verificáveis, eles capacitam os usuários a compartilhar seletivamente informações de identificação de forma segura e privada.

Este papel é crucial para construir a confiança na economia digital. O gestor trabalha para criar ecossistemas onde a verificação de identidade seja contínua e segura, reduzindo fraudes e simplificando processos como abertura de contas bancárias ou acesso a serviços. Eles precisam de um profundo conhecimento de cibersegurança, criptografia e blockchain, além de uma forte compreensão das implicações legais e éticas da soberania de dados.`,
    mappedFrom: ['cybersecurity', 'critical_thinking', 'complex_problem_solving'],
    skillsToDevelop: ['blockchain', 'python_programming']
  },
  {
    id: 'vr_experience_designer',
    title: 'Designer de Experiências em Realidade Virtual',
    emoji: '👓',
    description: 'Cria jornadas e simulações imersivas para treinamento, terapia, educação e entretenimento, focando na interação e engajamento do usuário.',
    detailedDescription: `O Designer de Experiências em RV é um contador de histórias para um novo meio. Em vez de telas planas, sua tela é o espaço tridimensional, e seu objetivo é criar imersão total. Eles projetam tudo, desde simulações de treinamento cirúrgico realistas e programas de terapia de exposição para fobias até viagens educacionais a locais históricos e narrativas de jogos envolventes.

Seu trabalho vai além do visual; eles precisam considerar o som, o tato (através de feedback háptico) e o movimento para criar uma sensação de presença crível. O design de interação é fundamental, pois eles devem criar maneiras intuitivas para os usuários manipularem objetos e navegarem no mundo virtual. Este profissional combina habilidades de design de jogos, psicologia cognitiva e storytelling para criar experiências que não são apenas vistas, mas sentidas.`,
    mappedFrom: ['ui_ux_design', 'creativity', 'cognitive_flexibility', 'design_thinking'],
    skillsToDevelop: ['ar_vr', 'python_programming']
  },
  {
    id: 'sustainable_urban_agronomist',
    title: 'Agrônomo Urbano Sustentável',
    emoji: '🌱',
    description: 'Projeta e gerencia fazendas verticais e sistemas de cultivo hidropônico em centros urbanos, utilizando IoT para otimizar a produção de alimentos localmente.',
    detailedDescription: `O Agrônomo Urbano Sustentável está reinventando a forma como as cidades se alimentam. Este especialista projeta, implementa e gerencia sistemas de agricultura de ambiente controlado, como fazendas verticais e estufas em telhados, para cultivar alimentos frescos diretamente nos centros urbanos. O objetivo é criar cadeias de suprimentos de alimentos mais curtas, resilientes e sustentáveis, reduzindo a dependência do transporte de longa distância e o impacto ambiental da agricultura tradicional.

Utilizando tecnologias como hidroponia, aeroponia e sensores de IoT, eles otimizam as condições de cultivo – luz, água e nutrientes – para maximizar a produção e minimizar o desperdício. Este papel requer uma combinação de conhecimento em biologia vegetal, engenharia de sistemas e análise de dados. Eles estão na linha de frente da segurança alimentar, transformando espaços não utilizados em fontes vibrantes de nutrição para a comunidade.`,
    mappedFrom: ['complex_problem_solving', 'creativity', 'data_analysis'],
    skillsToDevelop: ['iot', 'rpa', 'innovation_management']
  }
];

export const courses: Course[] = [
  {
    id: 'course_ml_fundamentals',
    title: 'Fundamentos de Machine Learning',
    description: 'Aprenda os conceitos básicos de Machine Learning, desde regressão linear até redes neurais. Curso ideal para iniciantes que desejam entrar no mundo da IA.',
    instructor: 'Dr. Carlos Silva',
    duration: '40 horas',
    level: 'beginner',
    thumbnail: '🤖',
    skills: ['machine_learning', 'python_programming', 'data_analysis'],
    modules: [
      {
        id: 'ml_mod_1',
        title: 'Introdução ao Machine Learning',
        description: 'Conceitos fundamentais e história do ML',
        videos: [
          { id: 'ml_v1', title: 'O que é Machine Learning?', duration: '15:30', videoUrl: 'https://example.com/ml1' },
          { id: 'ml_v2', title: 'Tipos de Aprendizado', duration: '20:00', videoUrl: 'https://example.com/ml2' },
          { id: 'ml_v3', title: 'Preparando o Ambiente', duration: '12:45', videoUrl: 'https://example.com/ml3' }
        ]
      },
      {
        id: 'ml_mod_2',
        title: 'Regressão Linear',
        description: 'Seu primeiro algoritmo de ML',
        videos: [
          { id: 'ml_v4', title: 'Teoria da Regressão Linear', duration: '25:00', videoUrl: 'https://example.com/ml4' },
          { id: 'ml_v5', title: 'Implementação em Python', duration: '30:00', videoUrl: 'https://example.com/ml5' }
        ]
      },
      {
        id: 'ml_mod_3',
        title: 'Redes Neurais Básicas',
        description: 'Introdução ao Deep Learning',
        videos: [
          { id: 'ml_v6', title: 'Neurônios Artificiais', duration: '22:00', videoUrl: 'https://example.com/ml6' },
          { id: 'ml_v7', title: 'Backpropagation', duration: '28:00', videoUrl: 'https://example.com/ml7' }
        ]
      }
    ],
    reviews: [
      { id: 'r1', oderId: 'course_ml_fundamentals', userName: 'Maria Clara', rating: 5, comment: 'Excelente curso! O professor explica muito bem os conceitos complexos.', date: '2024-11-10' },
      { id: 'r2', oderId: 'course_ml_fundamentals', userName: 'Pedro Henrique', rating: 4, comment: 'Muito bom para iniciantes. Gostaria de mais exercícios práticos.', date: '2024-11-05' },
      { id: 'r3', oderId: 'course_ml_fundamentals', userName: 'Ana Beatriz', rating: 5, comment: 'Transformou minha carreira! Recomendo fortemente.', date: '2024-10-28' }
    ],
    quiz: [
      { id: 'q_ml_1', question: 'Qual é o principal objetivo do Machine Learning?', options: ['Substituir humanos', 'Aprender padrões a partir de dados', 'Criar interfaces gráficas', 'Armazenar grandes volumes de dados'], correctAnswer: 1 },
      { id: 'q_ml_2', question: 'O que é regressão linear?', options: ['Um tipo de banco de dados', 'Um algoritmo para prever valores contínuos', 'Uma linguagem de programação', 'Um sistema operacional'], correctAnswer: 1 },
      { id: 'q_ml_3', question: 'Qual técnica é usada para treinar redes neurais?', options: ['Regressão logística', 'Backpropagation', 'Quick sort', 'Binary search'], correctAnswer: 1 },
      { id: 'q_ml_4', question: 'Qual tipo de aprendizado usa dados rotulados?', options: ['Não supervisionado', 'Por reforço', 'Supervisionado', 'Semi-supervisionado'], correctAnswer: 2 },
      { id: 'q_ml_5', question: 'O que é overfitting?', options: ['Modelo muito simples', 'Modelo que memoriza os dados de treino', 'Falta de dados', 'Erro de sintaxe'], correctAnswer: 1 }
    ],
    resources: {
      aiRecommended: [
        { id: 'ml_ai_1', title: 'Introduction to Machine Learning with Python', description: 'Comprehensive guide covering ML fundamentals with practical Python examples', url: 'https://example.com/ml-python-intro', type: 'article', author: 'Andreas Müller' },
        { id: 'ml_ai_2', title: 'Neural Networks and Deep Learning', description: 'Free online book explaining neural networks from the ground up', url: 'https://example.com/neural-networks-book', type: 'book', author: 'Michael Nielsen' },
        { id: 'ml_ai_3', title: 'Google Machine Learning Crash Course', description: 'Fast-paced introduction to ML concepts with TensorFlow', url: 'https://example.com/google-ml', type: 'course', author: 'Google AI' }
      ],
      handPicked: [
        { id: 'ml_hp_1', title: 'Hands-On Machine Learning with Scikit-Learn', description: 'Meu livro favorito para aprender ML na prática. Excelentes exemplos!', url: 'https://example.com/hands-on-ml', type: 'book', author: 'Aurélien Géron' },
        { id: 'ml_hp_2', title: '3Blue1Brown: Neural Networks', description: 'Visualizações incríveis que me ajudaram a entender backpropagation', url: 'https://example.com/3b1b-nn', type: 'video', author: 'Grant Sanderson' },
        { id: 'ml_hp_3', title: 'Kaggle Learn', description: 'Plataforma prática onde você pode competir e aprender com datasets reais', url: 'https://example.com/kaggle-learn', type: 'tool', author: 'Kaggle' }
      ]
    }
  },
  {
    id: 'course_ethical_ai',
    title: 'Ética em Inteligência Artificial',
    description: 'Explore os desafios éticos da IA moderna, incluindo vieses algorítmicos, privacidade e transparência em sistemas automatizados.',
    instructor: 'Profa. Maria Santos',
    duration: '20 horas',
    level: 'intermediate',
    thumbnail: '⚖️',
    skills: ['critical_thinking', 'data_storytelling', 'machine_learning'],
    modules: [
      {
        id: 'eth_mod_1',
        title: 'Fundamentos da Ética em IA',
        description: 'Por que a ética importa na IA',
        videos: [
          { id: 'eth_v1', title: 'Introdução à Ética em IA', duration: '18:00', videoUrl: 'https://example.com/eth1' },
          { id: 'eth_v2', title: 'Casos Históricos de Falhas Éticas', duration: '25:00', videoUrl: 'https://example.com/eth2' }
        ]
      },
      {
        id: 'eth_mod_2',
        title: 'Vieses Algorítmicos',
        description: 'Identificando e mitigando vieses',
        videos: [
          { id: 'eth_v3', title: 'O que são Vieses Algorítmicos?', duration: '20:00', videoUrl: 'https://example.com/eth3' },
          { id: 'eth_v4', title: 'Ferramentas de Detecção', duration: '22:00', videoUrl: 'https://example.com/eth4' }
        ]
      }
    ],
    reviews: [
      { id: 'r4', oderId: 'course_ethical_ai', userName: 'Lucas Oliveira', rating: 5, comment: 'Curso essencial para qualquer profissional de tecnologia.', date: '2024-11-12' },
      { id: 'r5', oderId: 'course_ethical_ai', userName: 'Camila Souza', rating: 4, comment: 'Conteúdo muito relevante e atual.', date: '2024-11-01' }
    ],
    quiz: [
      { id: 'q_eth_1', question: 'O que é viés algorítmico?', options: ['Um erro de programação', 'Preconceito sistemático nos resultados da IA', 'Um tipo de malware', 'Uma técnica de otimização'], correctAnswer: 1 },
      { id: 'q_eth_2', question: 'Por que a transparência é importante em sistemas de IA?', options: ['Para aumentar a velocidade', 'Para permitir auditoria e responsabilização', 'Para reduzir custos', 'Para melhorar a interface'], correctAnswer: 1 },
      { id: 'q_eth_3', question: 'Qual princípio ético exige que a IA trate todos igualmente?', options: ['Eficiência', 'Justiça/Fairness', 'Velocidade', 'Escalabilidade'], correctAnswer: 1 },
      { id: 'q_eth_4', question: 'O que é explicabilidade em IA?', options: ['Capacidade de processar mais dados', 'Capacidade de explicar como decisões são tomadas', 'Velocidade de resposta', 'Custo de implementação'], correctAnswer: 1 },
      { id: 'q_eth_5', question: 'Quem deve ser responsável por decisões tomadas por IA?', options: ['Ninguém', 'Apenas a máquina', 'Os desenvolvedores e organizações', 'Apenas os usuários'], correctAnswer: 2 }
    ],
    resources: {
      aiRecommended: [
        { id: 'eth_ai_1', title: 'AI Ethics: Global Perspectives', description: 'Comprehensive overview of ethical AI frameworks worldwide', url: 'https://example.com/ai-ethics-global', type: 'article', author: 'IEEE' },
        { id: 'eth_ai_2', title: 'Weapons of Math Destruction', description: 'Eye-opening book on how algorithms can perpetuate inequality', url: 'https://example.com/weapons-math', type: 'book', author: 'Cathy O\'Neil' },
        { id: 'eth_ai_3', title: 'AI Fairness 360 Toolkit', description: 'Open-source toolkit to detect and mitigate bias in ML models', url: 'https://example.com/aif360', type: 'tool', author: 'IBM Research' }
      ],
      handPicked: [
        { id: 'eth_hp_1', title: 'The Alignment Problem', description: 'Livro essencial que uso como base para minhas aulas sobre alinhamento de IA', url: 'https://example.com/alignment-problem', type: 'book', author: 'Brian Christian' },
        { id: 'eth_hp_2', title: 'Coded Bias Documentary', description: 'Documentário impactante sobre viés facial - sempre recomendo aos alunos', url: 'https://example.com/coded-bias', type: 'video', author: 'Shalini Kantayya' },
        { id: 'eth_hp_3', title: 'Montreal AI Ethics Institute', description: 'Newsletter semanal que acompanho para me manter atualizada', url: 'https://example.com/montreal-ai', type: 'article', author: 'MAIEI Team' }
      ]
    }
  },
  {
    id: 'course_cloud_architecture',
    title: 'Arquitetura em Cloud Computing',
    description: 'Domine os principais serviços de nuvem AWS, Azure e GCP. Aprenda a projetar sistemas escaláveis e resilientes.',
    instructor: 'Eng. Roberto Lima',
    duration: '60 horas',
    level: 'advanced',
    thumbnail: '☁️',
    skills: ['cloud_computing', 'cybersecurity', 'python_programming'],
    modules: [
      {
        id: 'cloud_mod_1',
        title: 'Fundamentos de Cloud',
        description: 'Conceitos básicos de computação em nuvem',
        videos: [
          { id: 'cloud_v1', title: 'O que é Cloud Computing?', duration: '16:00', videoUrl: 'https://example.com/cloud1' },
          { id: 'cloud_v2', title: 'IaaS, PaaS e SaaS', duration: '20:00', videoUrl: 'https://example.com/cloud2' }
        ]
      },
      {
        id: 'cloud_mod_2',
        title: 'AWS em Profundidade',
        description: 'Serviços principais da AWS',
        videos: [
          { id: 'cloud_v3', title: 'EC2 e S3', duration: '35:00', videoUrl: 'https://example.com/cloud3' },
          { id: 'cloud_v4', title: 'Lambda e API Gateway', duration: '40:00', videoUrl: 'https://example.com/cloud4' }
        ]
      },
      {
        id: 'cloud_mod_3',
        title: 'Arquitetura Resiliente',
        description: 'Design patterns para alta disponibilidade',
        videos: [
          { id: 'cloud_v5', title: 'Load Balancing', duration: '25:00', videoUrl: 'https://example.com/cloud5' },
          { id: 'cloud_v6', title: 'Auto Scaling', duration: '30:00', videoUrl: 'https://example.com/cloud6' }
        ]
      }
    ],
    reviews: [
      { id: 'r6', oderId: 'course_cloud_architecture', userName: 'Fernando Costa', rating: 5, comment: 'Conteúdo avançado e muito bem estruturado. Vale cada minuto!', date: '2024-11-08' },
      { id: 'r7', oderId: 'course_cloud_architecture', userName: 'Juliana Lima', rating: 5, comment: 'O melhor curso de cloud que já fiz.', date: '2024-10-25' }
    ],
    quiz: [
      { id: 'q_cloud_1', question: 'O que significa IaaS?', options: ['Internet as a Service', 'Infrastructure as a Service', 'Integration as a Service', 'Information as a Service'], correctAnswer: 1 },
      { id: 'q_cloud_2', question: 'Qual serviço AWS é usado para armazenamento de objetos?', options: ['EC2', 'S3', 'Lambda', 'RDS'], correctAnswer: 1 },
      { id: 'q_cloud_3', question: 'O que é Auto Scaling?', options: ['Backup automático', 'Ajuste automático de recursos baseado na demanda', 'Atualização automática de software', 'Monitoramento automático'], correctAnswer: 1 },
      { id: 'q_cloud_4', question: 'Qual é a principal vantagem do serverless?', options: ['Maior controle do hardware', 'Pagar apenas pelo uso efetivo', 'Melhor performance', 'Mais segurança'], correctAnswer: 1 },
      { id: 'q_cloud_5', question: 'O que é um Load Balancer?', options: ['Um tipo de banco de dados', 'Distribuidor de tráfego entre servidores', 'Um serviço de email', 'Um sistema de backup'], correctAnswer: 1 }
    ],
    resources: {
      aiRecommended: [
        { id: 'cloud_ai_1', title: 'AWS Well-Architected Framework', description: 'Official AWS guide for building secure, high-performing architectures', url: 'https://example.com/aws-well-architected', type: 'article', author: 'AWS' },
        { id: 'cloud_ai_2', title: 'Cloud Design Patterns', description: 'Microsoft patterns for scalable cloud applications', url: 'https://example.com/cloud-patterns', type: 'book', author: 'Microsoft Azure' },
        { id: 'cloud_ai_3', title: 'Kubernetes Up and Running', description: 'Comprehensive guide to container orchestration', url: 'https://example.com/k8s-running', type: 'book', author: 'Kelsey Hightower' }
      ],
      handPicked: [
        { id: 'cloud_hp_1', title: 'A Cloud Guru', description: 'Plataforma que uso para me manter atualizado com certificações', url: 'https://example.com/acloudguru', type: 'course', author: 'A Cloud Guru' },
        { id: 'cloud_hp_2', title: 'AWS re:Invent Videos', description: 'Apresentações técnicas que assisto anualmente para novidades', url: 'https://example.com/reinvent', type: 'video', author: 'AWS' },
        { id: 'cloud_hp_3', title: 'Terraform Registry', description: 'Ferramenta essencial para IaC que uso em todos os projetos', url: 'https://example.com/terraform', type: 'tool', author: 'HashiCorp' }
      ]
    }
  },
  {
    id: 'course_leadership',
    title: 'Liderança Adaptativa para o Futuro',
    description: 'Desenvolva habilidades de liderança para equipes híbridas humano-máquina. Aprenda a motivar, delegar e gerenciar conflitos.',
    instructor: 'Dra. Ana Oliveira',
    duration: '30 horas',
    level: 'intermediate',
    thumbnail: '👥',
    skills: ['adaptative_leadership', 'emotional_intelligence', 'collaboration'],
    modules: [
      {
        id: 'lead_mod_1',
        title: 'Liderança no Século XXI',
        description: 'O novo paradigma de liderança',
        videos: [
          { id: 'lead_v1', title: 'Evolução da Liderança', duration: '20:00', videoUrl: 'https://example.com/lead1' },
          { id: 'lead_v2', title: 'Liderança Adaptativa', duration: '25:00', videoUrl: 'https://example.com/lead2' }
        ]
      },
      {
        id: 'lead_mod_2',
        title: 'Gestão de Equipes Híbridas',
        description: 'Humanos e máquinas trabalhando juntos',
        videos: [
          { id: 'lead_v3', title: 'Delegação Inteligente', duration: '22:00', videoUrl: 'https://example.com/lead3' },
          { id: 'lead_v4', title: 'Resolução de Conflitos', duration: '28:00', videoUrl: 'https://example.com/lead4' }
        ]
      }
    ],
    reviews: [
      { id: 'r8', oderId: 'course_leadership', userName: 'Ricardo Almeida', rating: 4, comment: 'Ótimas dicas práticas para o dia a dia.', date: '2024-11-14' },
      { id: 'r9', oderId: 'course_leadership', userName: 'Patrícia Mendes', rating: 5, comment: 'Mudou minha forma de liderar completamente!', date: '2024-11-02' }
    ],
    quiz: [
      { id: 'q_lead_1', question: 'O que caracteriza a liderança adaptativa?', options: ['Manter sempre o mesmo estilo', 'Ajustar o estilo conforme a situação', 'Delegar todas as decisões', 'Evitar mudanças'], correctAnswer: 1 },
      { id: 'q_lead_2', question: 'Qual habilidade é essencial para gerenciar equipes híbridas?', options: ['Apenas conhecimento técnico', 'Inteligência emocional', 'Habilidades de programação', 'Conhecimento financeiro'], correctAnswer: 1 },
      { id: 'q_lead_3', question: 'Como um líder deve lidar com conflitos na equipe?', options: ['Ignorar', 'Mediar e buscar soluções construtivas', 'Punir os envolvidos', 'Transferir responsabilidade'], correctAnswer: 1 },
      { id: 'q_lead_4', question: 'O que é delegação efetiva?', options: ['Transferir todas as tarefas', 'Atribuir tarefas adequadas às competências', 'Não delegar nada', 'Delegar apenas tarefas fáceis'], correctAnswer: 1 },
      { id: 'q_lead_5', question: 'Por que feedback é importante na liderança?', options: ['Para criticar', 'Para promover crescimento e alinhamento', 'Para demonstrar autoridade', 'Não é importante'], correctAnswer: 1 }
    ],
    resources: {
      aiRecommended: [
        { id: 'lead_ai_1', title: 'The Practice of Adaptive Leadership', description: 'Framework for leading through complex challenges', url: 'https://example.com/adaptive-leadership', type: 'book', author: 'Ronald Heifetz' },
        { id: 'lead_ai_2', title: 'Harvard Business Review on Leadership', description: 'Curated articles on modern leadership practices', url: 'https://example.com/hbr-leadership', type: 'article', author: 'HBR' },
        { id: 'lead_ai_3', title: 'Emotional Intelligence 2.0', description: 'Practical strategies for improving EQ', url: 'https://example.com/eq-2', type: 'book', author: 'Travis Bradberry' }
      ],
      handPicked: [
        { id: 'lead_hp_1', title: 'Dare to Lead', description: 'Livro transformador que recomendo a todos os meus alunos', url: 'https://example.com/dare-to-lead', type: 'book', author: 'Brené Brown' },
        { id: 'lead_hp_2', title: 'TED: How Great Leaders Inspire Action', description: 'Palestra clássica sobre o "porquê" da liderança', url: 'https://example.com/ted-sinek', type: 'video', author: 'Simon Sinek' },
        { id: 'lead_hp_3', title: '15Five', description: 'Ferramenta de feedback contínuo que implemento em consultorias', url: 'https://example.com/15five', type: 'tool', author: '15Five Inc' }
      ]
    }
  },
  {
    id: 'course_ux_design',
    title: 'UX Design para Produtos Digitais',
    description: 'Crie experiências de usuário excepcionais. Do wireframe ao protótipo interativo, aprenda todo o processo de design.',
    instructor: 'Designer Paulo Costa',
    duration: '45 horas',
    level: 'beginner',
    thumbnail: '🎨',
    skills: ['ui_ux_design', 'design_thinking', 'creativity'],
    modules: [
      {
        id: 'ux_mod_1',
        title: 'Introdução ao UX Design',
        description: 'Fundamentos do design centrado no usuário',
        videos: [
          { id: 'ux_v1', title: 'O que é UX?', duration: '15:00', videoUrl: 'https://example.com/ux1' },
          { id: 'ux_v2', title: 'Pesquisa com Usuários', duration: '30:00', videoUrl: 'https://example.com/ux2' }
        ]
      },
      {
        id: 'ux_mod_2',
        title: 'Wireframes e Protótipos',
        description: 'Ferramentas e técnicas práticas',
        videos: [
          { id: 'ux_v3', title: 'Criando Wireframes', duration: '35:00', videoUrl: 'https://example.com/ux3' },
          { id: 'ux_v4', title: 'Prototipagem no Figma', duration: '45:00', videoUrl: 'https://example.com/ux4' }
        ]
      }
    ],
    reviews: [
      { id: 'r10', oderId: 'course_ux_design', userName: 'Gabriela Santos', rating: 5, comment: 'Perfeito para quem está começando na área!', date: '2024-11-11' },
      { id: 'r11', oderId: 'course_ux_design', userName: 'Thiago Ferreira', rating: 4, comment: 'Muito prático e hands-on.', date: '2024-10-30' }
    ],
    quiz: [
      { id: 'q_ux_1', question: 'O que significa UX?', options: ['User Experience', 'Universal Exchange', 'Unique Extension', 'User Execution'], correctAnswer: 0 },
      { id: 'q_ux_2', question: 'Qual é o primeiro passo no processo de UX Design?', options: ['Criar protótipos', 'Pesquisa com usuários', 'Escolher cores', 'Programar'], correctAnswer: 1 },
      { id: 'q_ux_3', question: 'O que é um wireframe?', options: ['Código fonte', 'Esboço estrutural de uma interface', 'Um tipo de animação', 'Um banco de dados'], correctAnswer: 1 },
      { id: 'q_ux_4', question: 'Por que testes de usabilidade são importantes?', options: ['Para impressionar clientes', 'Para validar se o design atende às necessidades dos usuários', 'Para aumentar o custo', 'Não são importantes'], correctAnswer: 1 },
      { id: 'q_ux_5', question: 'O que é design centrado no usuário?', options: ['Design focado na estética', 'Design baseado nas necessidades e comportamentos dos usuários', 'Design barato', 'Design rápido'], correctAnswer: 1 }
    ],
    resources: {
      aiRecommended: [
        { id: 'ux_ai_1', title: 'Don\'t Make Me Think', description: 'Classic book on web usability and common sense approach', url: 'https://example.com/dont-make-think', type: 'book', author: 'Steve Krug' },
        { id: 'ux_ai_2', title: 'Laws of UX', description: 'Collection of UX principles based on psychology', url: 'https://example.com/laws-ux', type: 'article', author: 'Jon Yablonski' },
        { id: 'ux_ai_3', title: 'Nielsen Norman Group Articles', description: 'Research-based UX guidance from industry leaders', url: 'https://example.com/nngroup', type: 'article', author: 'NN/g' }
      ],
      handPicked: [
        { id: 'ux_hp_1', title: 'Refactoring UI', description: 'Minha bíblia para decisões de design visual - exemplos práticos incríveis', url: 'https://example.com/refactoring-ui', type: 'book', author: 'Adam Wathan & Steve Schoger' },
        { id: 'ux_hp_2', title: 'Figma Community', description: 'Onde busco inspiração e templates para acelerar projetos', url: 'https://example.com/figma-community', type: 'tool', author: 'Figma' },
        { id: 'ux_hp_3', title: 'The Design of Everyday Things', description: 'Livro fundamental que moldou minha filosofia de design', url: 'https://example.com/design-everyday', type: 'book', author: 'Don Norman' }
      ]
    }
  },
  {
    id: 'course_blockchain',
    title: 'Desenvolvimento Blockchain e Web3',
    description: 'Construa aplicações descentralizadas (dApps) e smart contracts. Entenda a tecnologia por trás das criptomoedas.',
    instructor: 'Eng. Lucas Mendes',
    duration: '50 horas',
    level: 'advanced',
    thumbnail: '🔗',
    skills: ['blockchain', 'python_programming', 'cybersecurity'],
    modules: [
      {
        id: 'block_mod_1',
        title: 'Fundamentos de Blockchain',
        description: 'Como funciona a tecnologia blockchain',
        videos: [
          { id: 'block_v1', title: 'Criptografia e Hash', duration: '25:00', videoUrl: 'https://example.com/block1' },
          { id: 'block_v2', title: 'Consenso Distribuído', duration: '30:00', videoUrl: 'https://example.com/block2' }
        ]
      },
      {
        id: 'block_mod_2',
        title: 'Smart Contracts',
        description: 'Programando contratos inteligentes',
        videos: [
          { id: 'block_v3', title: 'Solidity Básico', duration: '40:00', videoUrl: 'https://example.com/block3' },
          { id: 'block_v4', title: 'Deploy na Ethereum', duration: '35:00', videoUrl: 'https://example.com/block4' }
        ]
      }
    ],
    reviews: [
      { id: 'r12', oderId: 'course_blockchain', userName: 'André Rocha', rating: 5, comment: 'Conteúdo de altíssima qualidade!', date: '2024-11-09' },
      { id: 'r13', oderId: 'course_blockchain', userName: 'Beatriz Carvalho', rating: 4, comment: 'Desafiador mas muito recompensador.', date: '2024-10-27' }
    ],
    quiz: [
      { id: 'q_block_1', question: 'O que é uma blockchain?', options: ['Um tipo de banco de dados centralizado', 'Um registro distribuído e imutável', 'Uma linguagem de programação', 'Um sistema operacional'], correctAnswer: 1 },
      { id: 'q_block_2', question: 'O que é um smart contract?', options: ['Um contrato em papel', 'Código que executa automaticamente quando condições são atendidas', 'Um tipo de criptomoeda', 'Um sistema de email'], correctAnswer: 1 },
      { id: 'q_block_3', question: 'Qual linguagem é mais usada para smart contracts na Ethereum?', options: ['Python', 'JavaScript', 'Solidity', 'Java'], correctAnswer: 2 },
      { id: 'q_block_4', question: 'O que garante a segurança da blockchain?', options: ['Senhas fortes', 'Criptografia e consenso distribuído', 'Antivírus', 'Firewall'], correctAnswer: 1 },
      { id: 'q_block_5', question: 'O que é descentralização?', options: ['Controle por uma única entidade', 'Distribuição do controle entre múltiplos participantes', 'Centralização de dados', 'Backup de dados'], correctAnswer: 1 }
    ],
    resources: {
      aiRecommended: [
        { id: 'block_ai_1', title: 'Mastering Ethereum', description: 'Comprehensive guide to Ethereum and smart contract development', url: 'https://example.com/mastering-ethereum', type: 'book', author: 'Andreas Antonopoulos' },
        { id: 'block_ai_2', title: 'Solidity by Example', description: 'Learn Solidity through practical examples', url: 'https://example.com/solidity-example', type: 'article', author: 'Solidity Team' },
        { id: 'block_ai_3', title: 'CryptoZombies', description: 'Interactive game to learn smart contract development', url: 'https://example.com/cryptozombies', type: 'course', author: 'Loom Network' }
      ],
      handPicked: [
        { id: 'block_hp_1', title: 'Ethereum.org Developer Docs', description: 'Documentação oficial que consulto diariamente', url: 'https://example.com/eth-docs', type: 'article', author: 'Ethereum Foundation' },
        { id: 'block_hp_2', title: 'Patrick Collins YouTube', description: 'Tutoriais práticos excelentes que recomendo aos iniciantes', url: 'https://example.com/patrick-collins', type: 'video', author: 'Patrick Collins' },
        { id: 'block_hp_3', title: 'Hardhat', description: 'Framework que uso em todos os meus projetos profissionais', url: 'https://example.com/hardhat', type: 'tool', author: 'Nomic Foundation' }
      ]
    }
  },
  {
    id: 'course_data_storytelling',
    title: 'Storytelling com Dados',
    description: 'Transforme dados complexos em narrativas convincentes. Aprenda visualização de dados e técnicas de apresentação.',
    instructor: 'Profa. Julia Ferreira',
    duration: '25 horas',
    level: 'intermediate',
    thumbnail: '📊',
    skills: ['data_storytelling', 'data_analysis', 'interpersonal_communication'],
    modules: [
      {
        id: 'story_mod_1',
        title: 'A Arte de Contar Histórias',
        description: 'Narrativas que engajam',
        videos: [
          { id: 'story_v1', title: 'Por que Histórias Importam?', duration: '18:00', videoUrl: 'https://example.com/story1' },
          { id: 'story_v2', title: 'Estrutura Narrativa', duration: '22:00', videoUrl: 'https://example.com/story2' }
        ]
      },
      {
        id: 'story_mod_2',
        title: 'Visualização de Dados',
        description: 'Gráficos que comunicam',
        videos: [
          { id: 'story_v3', title: 'Escolhendo o Gráfico Certo', duration: '25:00', videoUrl: 'https://example.com/story3' },
          { id: 'story_v4', title: 'Ferramentas de Visualização', duration: '30:00', videoUrl: 'https://example.com/story4' }
        ]
      }
    ],
    reviews: [
      { id: 'r14', oderId: 'course_data_storytelling', userName: 'Carolina Dias', rating: 5, comment: 'Aprendi a apresentar dados de forma muito mais impactante!', date: '2024-11-13' },
      { id: 'r15', oderId: 'course_data_storytelling', userName: 'Marcos Pereira', rating: 5, comment: 'Excelente didática da professora.', date: '2024-11-04' }
    ],
    quiz: [
      { id: 'q_story_1', question: 'O que é storytelling com dados?', options: ['Apenas criar gráficos bonitos', 'Transformar dados em narrativas significativas', 'Esconder informações', 'Complicar análises'], correctAnswer: 1 },
      { id: 'q_story_2', question: 'Qual é o primeiro passo para contar uma história com dados?', options: ['Escolher cores', 'Entender o público e o objetivo', 'Criar gráficos', 'Coletar mais dados'], correctAnswer: 1 },
      { id: 'q_story_3', question: 'Quando usar um gráfico de linhas?', options: ['Para mostrar proporções', 'Para mostrar tendências ao longo do tempo', 'Para comparar categorias', 'Para mostrar distribuição'], correctAnswer: 1 },
      { id: 'q_story_4', question: 'O que torna uma visualização efetiva?', options: ['Muitas cores e efeitos', 'Clareza e foco na mensagem principal', 'Complexidade', 'Quantidade de dados'], correctAnswer: 1 },
      { id: 'q_story_5', question: 'Por que contexto é importante em data storytelling?', options: ['Não é importante', 'Ajuda o público a entender o significado dos dados', 'Para aumentar o tamanho da apresentação', 'Para impressionar'], correctAnswer: 1 }
    ],
    resources: {
      aiRecommended: [
        { id: 'story_ai_1', title: 'Storytelling with Data', description: 'The definitive guide on data visualization for business', url: 'https://example.com/storytelling-data', type: 'book', author: 'Cole Nussbaumer Knaflic' },
        { id: 'story_ai_2', title: 'D3.js Gallery', description: 'Interactive examples of data visualizations', url: 'https://example.com/d3-gallery', type: 'tool', author: 'D3.js Community' },
        { id: 'story_ai_3', title: 'Information is Beautiful', description: 'Award-winning data visualizations for inspiration', url: 'https://example.com/info-beautiful', type: 'article', author: 'David McCandless' }
      ],
      handPicked: [
        { id: 'story_hp_1', title: 'The Functional Art', description: 'Livro que transformou minha abordagem à visualização', url: 'https://example.com/functional-art', type: 'book', author: 'Alberto Cairo' },
        { id: 'story_hp_2', title: 'Flourish Studio', description: 'Ferramenta que uso para criar visualizações interativas rapidamente', url: 'https://example.com/flourish', type: 'tool', author: 'Flourish' },
        { id: 'story_hp_3', title: 'Data Viz Project', description: 'Catálogo que consulto para escolher o tipo certo de gráfico', url: 'https://example.com/dataviz-project', type: 'article', author: 'Ferdio' }
      ]
    }
  },
  {
    id: 'course_agile',
    title: 'Metodologias Ágeis na Prática',
    description: 'Scrum, Kanban e Lean. Implemente metodologias ágeis em sua equipe e aumente a produtividade dos projetos.',
    instructor: 'Scrum Master André Souza',
    duration: '35 horas',
    level: 'beginner',
    thumbnail: '🚀',
    skills: ['agile_methodologies', 'collaboration', 'innovation_management'],
    modules: [
      {
        id: 'agile_mod_1',
        title: 'Introdução ao Agile',
        description: 'Manifesto e princípios ágeis',
        videos: [
          { id: 'agile_v1', title: 'O Manifesto Ágil', duration: '15:00', videoUrl: 'https://example.com/agile1' },
          { id: 'agile_v2', title: 'Agile vs Waterfall', duration: '20:00', videoUrl: 'https://example.com/agile2' }
        ]
      },
      {
        id: 'agile_mod_2',
        title: 'Scrum Framework',
        description: 'Roles, eventos e artefatos',
        videos: [
          { id: 'agile_v3', title: 'Papéis no Scrum', duration: '25:00', videoUrl: 'https://example.com/agile3' },
          { id: 'agile_v4', title: 'Sprints e Cerimônias', duration: '30:00', videoUrl: 'https://example.com/agile4' }
        ]
      }
    ],
    reviews: [
      { id: 'r16', oderId: 'course_agile', userName: 'Rafael Gomes', rating: 4, comment: 'Muito útil para implementar na minha equipe.', date: '2024-11-15' },
      { id: 'r17', oderId: 'course_agile', userName: 'Vanessa Ribeiro', rating: 5, comment: 'Curso completo e muito bem organizado!', date: '2024-11-06' }
    ],
    quiz: [
      { id: 'q_agile_1', question: 'Qual é o principal valor do Manifesto Ágil?', options: ['Processos e ferramentas', 'Indivíduos e interações', 'Documentação abrangente', 'Seguir um plano'], correctAnswer: 1 },
      { id: 'q_agile_2', question: 'O que é uma Sprint no Scrum?', options: ['Uma reunião diária', 'Um período fixo para entregar incremento', 'Um tipo de documento', 'Uma ferramenta de gestão'], correctAnswer: 1 },
      { id: 'q_agile_3', question: 'Quem é responsável pelo Product Backlog?', options: ['Scrum Master', 'Product Owner', 'Time de Desenvolvimento', 'Stakeholders'], correctAnswer: 1 },
      { id: 'q_agile_4', question: 'O que é o Daily Scrum?', options: ['Reunião semanal', 'Reunião diária de 15 minutos', 'Reunião mensal', 'Reunião anual'], correctAnswer: 1 },
      { id: 'q_agile_5', question: 'Qual é o objetivo da retrospectiva?', options: ['Planejar o produto', 'Melhorar o processo da equipe', 'Apresentar para stakeholders', 'Definir requisitos'], correctAnswer: 1 }
    ],
    resources: {
      aiRecommended: [
        { id: 'agile_ai_1', title: 'Scrum Guide', description: 'The official and definitive guide to Scrum', url: 'https://example.com/scrum-guide', type: 'article', author: 'Ken Schwaber & Jeff Sutherland' },
        { id: 'agile_ai_2', title: 'Agile Manifesto', description: 'The foundational document of agile software development', url: 'https://example.com/agile-manifesto', type: 'article', author: 'Agile Alliance' },
        { id: 'agile_ai_3', title: 'User Story Mapping', description: 'Build better products using agile story mapping', url: 'https://example.com/story-mapping', type: 'book', author: 'Jeff Patton' }
      ],
      handPicked: [
        { id: 'agile_hp_1', title: 'The Phoenix Project', description: 'Romance que ensina DevOps e Agile de forma envolvente', url: 'https://example.com/phoenix-project', type: 'book', author: 'Gene Kim' },
        { id: 'agile_hp_2', title: 'Mountain Goat Software Blog', description: 'Blog que acompanho há anos para dicas práticas de Scrum', url: 'https://example.com/mountain-goat', type: 'article', author: 'Mike Cohn' },
        { id: 'agile_hp_3', title: 'Miro', description: 'Ferramenta colaborativa que uso em todas as retrospectivas', url: 'https://example.com/miro', type: 'tool', author: 'Miro' }
      ]
    }
  }
];

export const mockUsers: User[] = [
  {
    id: 'user_1',
    name: 'João Pedro',
    email: 'joao@email.com',
    enrolledCourses: ['course_ml_fundamentals', 'course_ethical_ai'],
    courseProgress: [
      { courseId: 'course_ml_fundamentals', completedVideos: [], quizCompleted: false, quizScore: 0 },
      { courseId: 'course_ethical_ai', completedVideos: [], quizCompleted: false, quizScore: 0 }
    ],
    avatar: '👨‍💻',
    bio: 'Desenvolvedor apaixonado por tecnologia e inovação. Buscando sempre aprender novas habilidades para me preparar para o futuro do trabalho.',
    joinDate: '2024-09-15'
  }
];