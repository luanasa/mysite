
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define supported languages
export type SupportedLanguage = 'en' | 'pt' | 'es' | 'fr' | 'ko';

// Translation context type
type TranslationContextType = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  translate: (key: string) => string;
};

// Create the context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Translations data
const translations = {
  // Hero section
  'hero.greeting': {
    en: "Hi, I'm",
    pt: "Olá, eu sou",
    es: "Hola, soy",
    fr: "Bonjour, je suis",
    ko: "안녕하세요, 저는"
  },
  'hero.title': {
    en: "Cloud Engineer, Developer & IA Student creating cute and functional digital experiences",
    pt: "Engenheira de Cloud, Desenvolvedora e Estudante de IA criando experiências digitais bonitas e funcionais",
    es: "Ingeniera de la Nube, Desarrolladora y Estudiante de IA creando experiencias digitales bonitas y funcionales",
    fr: "Ingénieure Cloud, Développeuse et Étudiante en IA créant des expériences numériques mignonnes et fonctionnelles",
    ko: "귀엽고 기능적인 디지털 경험을 만드는 클라우드 엔지니어, 개발자 및 AI 학생"
  },
  'social.email': {
    en: "Email Me",
    pt: "Envie-me um Email",
    es: "Envíame un Email",
    fr: "Envoyez-moi un Email",
    ko: "이메일 보내기"
  },
  // About section
  'about.title': {
    en: "About Me",
    pt: "Sobre Mim",
    es: "Sobre Mí",
    fr: "À Propos de Moi",
    ko: "나에 대해"
  },
  'about.p1': {
    en: "Hello! I'm a creative professional with a deep passion for crafting stunning designs and writing clean, efficient code. When I'm not immersed in creating great digital experiences, you can find me exploring my artistic side through crocheting, sculpting ceramics, or enjoying cozy moments with my cats. ✨",
    pt: "Olá! Sou uma profissional criativa com uma profunda paixão por criar designs incríveis e escrever código limpo e eficiente. Quando não estou imersa na criação de ótimas experiências digitais, você pode me encontrar explorando meu lado artístico através do crochê, esculpindo cerâmica ou aproveitando momentos aconchegantes com meus gatos. ✨",
    es: "¡Hola! Soy una profesional creativa con una profunda pasión por crear diseños impresionantes y escribir código limpio y eficiente. Cuando no estoy inmersa en la creación de experiencias digitales perfectas, puedes encontrarme explorando mi lado artístico a través del ganchillo, esculpiendo cerámica o disfrutando de momentos acogedores con mis gatos. ✨",
    fr: "Bonjour! Je suis une professionnelle créative avec une passion profonde pour la conception de designs magnifiques et l'écriture de code propre et efficace. Quand je ne suis pas plongée dans la création d'expériences numériques fluides, vous pouvez me trouver en train d'explorer mon côté artistique à travers le crochet, la sculpture de céramique, ou en profitant de moments douillets avec mes chats. ✨",
    ko: "안녕하세요! 저는 멋진 디자인을 만들고 깨끗하고 효율적인 코드를 작성하는 데 깊은 열정을 가진 크리에이티브 전문가입니다. 훌륭한 디지털 경험을 만드는 데 몰두하지 않을 때는 코바늘질, 도자기 조각을 통해 예술적인 면을 탐구하거나 고양이와 함께 아늑한 시간을 보내는 모습을 볼 수 있습니다. ✨"
  },
  'about.p2': {
    en: "I believe in creating work that's not just functional but also brings a smile to people's faces. That's why I love incorporating playful elements into my professional projects.",
    pt: "Acredito na criação de trabalhos que não são apenas funcionais, mas também trazem um sorriso ao rosto das pessoas. É por isso que adoro incorporar elementos lúdicos em meus projetos profissionais.",
    es: "Creo en crear trabajos que no solo sean funcionales sino que también hagan sonreír a la gente. Por eso me encanta incorporar elementos lúdicos en mis proyectos profesionales.",
    fr: "Je crois en la création de travaux qui ne sont pas seulement fonctionnels mais qui apportent aussi un sourire aux visages des gens. C'est pourquoi j'aime incorporer des éléments ludiques dans mes projets professionnels.",
    ko: "저는 단지 기능적일 뿐만 아니라 사람들의 얼굴에 미소를 가져다주는 작업을 만드는 것을 믿습니다. 그래서 저는 전문 프로젝트에 즐거운 요소를 통합하는 것을 좋아합니다."
  },
  'about.quote': {
    en: "\"Creativity is where aesthetics meet purpose—turning ideas into experiences that are not only visually captivating but also intuitively functional.\"",
    pt: "\"A criatividade é onde a estética encontra o propósito—transformando ideias em experiências que não são apenas visualmente cativantes, mas também intuitivamente funcionais.\"",
    es: "\"La creatividad es donde la estética se encuentra con el propósito—convirtiendo ideas en experiencias que no solo son visualmente cautivadoras sino también intuitivamente funcionales.\"",
    fr: "\"La créativité est là où l'esthétique rencontre l'objectif—transformant les idées en expériences qui sont non seulement visuellement captivantes mais aussi intuitivement fonctionnelles.\"",
    ko: "\"창의성은 미학과 목적이 만나는 곳입니다—아이디어를 시각적으로 매력적일 뿐만 아니라 직관적으로 기능적인 경험으로 전환합니다.\""
  },
  // Skills section
  'skills.title': {
    en: "My Skills",
    pt: "Minhas Habilidades",
    es: "Mis Habilidades",
    fr: "Mes Compétences",
    ko: "내 기술"
  },

    // Projects section

    'projects.title': {
      en: "Projects",
      pt: "Projetos",
      es: "Proyectos",
      fr: "Projets",
      ko: "프로젝트"
    },
    'projects.subtitle': {
      en: "Take a look at some of my recent projects",
      pt: "Confira alguns dos meus projetos recentes",
      es: "Echa un vistazo a algunos de mis proyectos recientes",
      fr: "Découvrez certains de mes projets récents",
      ko: "최근에 진행한 몇 가지 프로젝트를 살펴보세요"
    },
    'projects.view': {
      en: "Live Demo",
      pt: "Demonstração",
      es: "Demostración",
      fr: "Démo Live",
      ko: "라이브 데모"
    },
    'projects.code': {
      en: "View Code",
      pt: "Ver Código",
      es: "Ver Código",
      fr: "Voir Code",
      ko: "코드 보기"
    },
    'projects.project1.title': {
      en: "Personal Portfolio",
      pt: "Portfólio Pessoal",
      es: "Portafolio Personal",
      fr: "Portfolio Personnel",
      ko: "개인 포트폴리오"
    },
    'projects.project1.description': {
      en: "A minimalist, responsive, and easy-to-navigate portfolio designed to showcase my favorite projects.",
      pt: "Um portfólio minimalista, responsivo e de fácil navegação, projetado para destacar meus projetos favoritos.",
      es: "Un portafolio minimalista, responsivo y de fácil navegación, diseñado para destacar mis proyectos favoritos.",
      fr: "Un portfolio minimaliste, réactif et facile à naviguer, conçu pour mettre en valeur mes projets favoris.",
      ko: "미니멀하고 반응형이며 쉽게 탐색할 수 있는 포트폴리오로, 내가 가장 좋아하는 프로젝트를 돋보이게 합니다."
    },
    'projects.project2.title': {
      en: "Cloudy The Chat",
      pt: "Cloudy The Chat",
      es: "Cloudy The Chat",
      fr: "Cloudy The Chat",
      ko: "Cloudy The Chat"
    },
    'projects.project2.description': {
      en: "The Cloudy Chatbot uses AI to understand specific problems and provide relevant links, such as tutorials and documentation, organized by relevance or trusted source.",
      pt: "O Cloudy Chatbot usa IA para entender problemas específicos e fornecer links relevantes, como tutoriais e documentações, organizados por relevância ou fonte confiável.",
      es: "El Cloudy Chatbot utiliza IA para entender problemas específicos y proporcionar enlaces relevantes, como tutoriales y documentación, organizados por relevancia o fuente confiable.",
      fr: "Le Cloudy Chatbot utilise l'IA pour comprendre des problèmes spécifiques et fournir des liens pertinents, tels que des tutoriels et de la documentation, organisés par pertinence ou source fiable.",
      ko: "Cloudy Chatbot은 AI를 사용하여 특정 문제를 이해하고 관련 링크(예: 튜토리얼 및 문서)를 제공하며, 신뢰할 수 있는 출처나 관련성에 따라 정리합니다."
    },
    'projects.project3.title': {
      en: "Ghibli Timer",
      pt: "Ghibli Timer",
      es: "Ghibli Timer",
      fr: "Ghibli Timer",
      ko: "지브리 타이머"
    },
    'projects.project3.description': {
      en: "Just a simple ghibli inspired timer <3",
      pt: "Apenas um simples timer inspirado no mundo mágico dos estudios Ghibli <3",
      es: "Solo un simple temporizador inspirado en Ghibli <3",
      fr: "Juste un simple minuteur inspiré par Ghibli <3",
      ko: "그냥 간단한 지브리 영감을 받은 타이머 <3"
    },
    'projects.project4.title': {
      en: "Vida+ App",
      pt: "Vida+ App",
      es: "Vida+ App",
      fr: "Vida+ App",
      ko: "Vida+ App"
    },
    'projects.project4.description': {
      en: "Vida+ is a preventive health app that helps you build healthy habits by tracking your sleep, stress, physical activity, and hydration. With smart alerts, wearable integration, and detailed reports, the app provides personalized suggestions to improve your quality of life.",
      pt: "O Vida+ é um aplicativo de saúde preventiva que ajuda você a criar hábitos saudáveis através do acompanhamento de sono, estresse, atividade física e hidratação. Com alertas inteligentes, integração com wearables e relatórios detalhados, o app oferece sugestões personalizadas para melhorar sua qualidade de vida.",
      es: "Vida+ es una aplicación de salud preventiva que te ayuda a crear hábitos saludables mediante el seguimiento de tu sueño, estrés, actividad física e hidratación. Con alertas inteligentes, integración con wearables e informes detallados, la aplicación ofrece sugerencias personalizadas para mejorar tu calidad de vida.",
      fr: "Vida+ est une application de santé préventive qui vous aide à adopter des habitudes saines en suivant votre sommeil, votre stress, votre activité physique et votre hydratation. Avec des alertes intelligentes, une intégration aux objets connectés et des rapports détaillés, l'application fournit des suggestions personnalisées pour améliorer votre qualité de vie.",
      ko: "Vida+는 수면, 스트레스, 신체 활동 및 수분 섭취를 추적하여 건강한 습관을 만들도록 도와주는 예방 건강 앱입니다. 스마트 알림, 웨어러블 연동, 상세 보고서를 통해 삶의 질을 향상시키기 위한 개인 맞춤형 제안을 제공합니다."
    },
      'projects.project5.title': {
        en: "Currency Converter",
        pt: "Conversor de Moedas",
        es: "Convertidor de Monedas",
        fr: "Convertisseur de Devises",
        ko: "환율 변환기"
    },
    'projects.project5.description': {
      en: "A complete and elegant currency converter built with React, TypeScript, and Tailwind CSS, offering real-time conversion, historical charts, and an exceptional user experience.",
      pt: "Um conversor de moedas completo e elegante construído com React, TypeScript e Tailwind CSS, oferecendo conversão em tempo real, gráficos históricos e uma experiência de usuário excepcional.",
      es: "Un convertidor de monedas completo y elegante construido con React, TypeScript y Tailwind CSS, que ofrece conversión en tiempo real, gráficos históricos y una experiencia de usuario excepcional.",
      fr: "Un convertisseur de devises complet et élégant construit avec React, TypeScript et Tailwind CSS, offrant une conversion en temps réel, des graphiques historiques et une expérience utilisateur exceptionnelle.",
      ko: "React, TypeScript 및 Tailwind CSS로 구축된 완전하고 세련된 환율 변환기이며, 실시간 변환, 과거 차트 및 뛰어난 사용자 경험을 제공합니다."
},

  // Experience section
  'experience.title': {
    en: "Experience & Education",
    pt: "Experiência & Educação",
    es: "Experiencia & Educación",
    fr: "Expérience & Éducation",
    ko: "경험 & 교육"
  },
  'experience.work': {
    en: "Work Experience",
    pt: "Experiência Profissional",
    es: "Experiencia Laboral",
    fr: "Expérience Professionnelle",
    ko: "직장 경험"
  },
  'experience.job1.title': {
    en: "Cloud Infrastructure Technician",
    pt: "Técnica de Infraestrutura em Nuvem",
    es: "Técnica de Infraestructura en la Nube",
    fr: "Technicienne d'Infrastructure Cloud",
    ko: "클라우드 인프라 기술자"
  },
  'experience.job1.description': {
    en: "Expert in cloud platform administration, database management, version control, training material creation, client problem resolution, and strategic team consulting.",
    pt: "Especialista em administração de plataformas em nuvem, gerenciamento de banco de dados, controle de versão, criação de material de treinamento, resolução de problemas de clientes e consultoria estratégica para equipes.",
    es: "Experta en administración de plataformas en la nube, gestión de bases de datos, control de versiones, creación de material de formación, resolución de problemas de clientes y consultoría estratégica para equipos.",
    fr: "Expert en administration de plateformes cloud, gestion de bases de données, contrôle de version, création de matériel de formation, résolution de problèmes clients et conseil stratégique d'équipe.",
    ko: "클라우드 플랫폼 관리, 데이터베이스 관리, 버전 제어, 교육 자료 제작, 고객 문제 해결 및 전략적 팀 컨설팅 전문가."
  },
  'experience.job2.title': {
    en: "Web Developer",
    pt: "Desenvolvedora Web",
    es: "Desarrolladora Web",
    fr: "Développeuse Web",
    ko: "웹 개발자"
  },
  'experience.job2.description': {
    en: "Developed responsive websites and implemented front-end solutions using modern frameworks.",
    pt: "Desenvolvi sites responsivos e implementei soluções front-end usando frameworks modernos.",
    es: "Desarrollé sitios web responsivos e implementé soluciones front-end utilizando frameworks modernos.",
    fr: "J'ai développé des sites web responsifs et implémenté des solutions front-end en utilisant des frameworks modernes.",
    ko: "반응형 웹사이트를 개발하고 최신 프레임워크를 사용하여 프론트엔드 솔루션을 구현했습니다."
  },
  'experience.education': {
    en: "Education",
    pt: "Educação",
    es: "Educación",
    fr: "Éducation",
    ko: "교육"
  },
  'experience.edu1.title': {
    en: "Specialization in Program Analysis and Development",
    pt: "Especialização em Análise e Desenvolvimento de Programas",
    es: "Especialización en Análisis y Desarrollo de Programas",
    fr: "Spécialisation en Analyse et Développement de Programmes",
    ko: "프로그램 분석 및 개발 전문화"
  },
  'experience.edu1.description': {
    en: "Specialized in designing, developing, and optimizing software solutions through comprehensive program analysis and efficient development practices.",
    pt: "Especializada em projetar, desenvolver e otimizar soluções de software por meio de análise abrangente de programas e práticas de desenvolvimento eficientes.",
    es: "Especializada en diseñar, desarrollar y optimizar soluciones de software a través de un análisis integral de programas y prácticas de desarrollo eficientes.",
    fr: "Spécialisée dans la conception, le développement et l'optimisation de solutions logicielles grâce à une analyse complète des programmes et des pratiques de développement efficaces.",
    ko: "포괄적인 프로그램 분석과 효율적인 개발 관행을 통해 소프트웨어 솔루션을 설계, 개발 및 최적화하는 전문 지식을 갖추고 있습니다."
  },
  'experience.edu2.title': {
    en: "MBA in Digital Marketing and Sales",
    pt: "MBA em Marketing Digital e Vendas",
    es: "MBA en Marketing Digital y Ventas",
    fr: "MBA en Marketing Digital et Ventes",
    ko: "디지털 마케팅 및 판매 MBA"
  },
  'experience.edu2.description': {
    en: "Specializing in strategic planning, customer engagement, and data-driven sales optimization.",
    pt: "Especialização em planejamento estratégico, engajamento do cliente e otimização de vendas orientada por dados.",
    es: "Especialización en planificación estratégica, compromiso del cliente y optimización de ventas basada en datos.",
    fr: "Spécialisation en planification stratégique, engagement client et optimisation des ventes basée sur les données.",
    ko: "전략적 계획, 고객 참여 및 데이터 기반 판매 최적화 전문."
  },
  'experience.edu3.title': {
    en: "Bachelor in Systems For The Internet",
    pt: "Bacharelado em Sistemas para Internet",
    es: "Licenciatura en Sistemas para Internet",
    fr: "Licence en Systèmes pour Internet",
    ko: "인터넷 시스템 학사"
  },
  'experience.edu3.description': {
    en: "Studied programming fundamentals, data structures, and web development.",
    pt: "Estudei fundamentos de programação, estruturas de dados e desenvolvimento web.",
    es: "Estudié fundamentos de programación, estructuras de datos y desarrollo web.",
    fr: "J'ai étudié les fondamentaux de la programmation, les structures de données et le développement web.",
    ko: "프로그래밍 기초, 데이터 구조 및 웹 개발을 공부했습니다."
  },
  // Contact section
  'contact.title': {
    en: "Let's Connect!",
    pt: "Vamos Conectar!",
    es: "¡Conectémonos!",
    fr: "Connectons-nous!",
    ko: "연결해요!"
  },
  'contact.message': {
    en: "I'm always open to new opportunities, collaborations, or just a friendly chat!",
    pt: "Estou sempre aberta a novas oportunidades, colaborações ou apenas uma conversa amigável!",
    es: "¡Siempre estoy abierta a nuevas oportunidades, colaboraciones o simplemente una charla amistosa!",
    fr: "Je suis toujours ouverte aux nouvelles opportunités, collaborations, ou simplement une conversation amicale!",
    ko: "저는 항상 새로운 기회, 협업 또는 친근한 대화에 열려 있습니다!"
  },
  // Footer
  'footer.copyright': {
    en: "Made with ❤️ by Luana Sá",
    pt: "Feito com ❤️ por Luana Sá",
    es: "Hecho con ❤️ por Luana Sá",
    fr: "Fait avec ❤️ par Luana Sá",
    ko: "Luana Sá가 ❤️로 만들었습니다"
  }
};

// Provider component
type TranslationProviderProps = {
  children: ReactNode;
};

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  // Default to English, but we'll detect the browser language
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  useEffect(() => {
    // Detect browser language
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language.split('-')[0];
      
      // Check if browser language is supported
      if (browserLang === 'pt' || browserLang === 'en' || browserLang === 'es' || browserLang === 'fr' || browserLang === 'ko') {
        return browserLang as SupportedLanguage;
      }
      
      // Default to English if language not supported
      return 'en';
    };

    setLanguage(detectBrowserLanguage());
  }, []);

  // Function to translate a key
  const translate = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    
    // Fallback to English if translation not found
    if (translations[key] && translations[key]['en']) {
      return translations[key]['en'];
    }
    
    // Return the key if no translation found at all
    return key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};



// Custom hook for using the translation context
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  
  return context;
};


