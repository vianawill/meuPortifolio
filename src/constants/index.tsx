/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Github,
  Globe,
  Home,
  Instagram,
  Layers,
  Link,
  Linkedin,
  Mail,
  MessageCircle,
  Settings,
  Smartphone,
  User,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projetos',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'Sobre mim', link: '#about', icon: User },
  {
    label: 'O que eu faço',
    link: '#services',
    icon: Settings,
  },
  { label: 'Minha Trajetória', link: '#resume', icon: FileText },
  {
    label: 'Recomendações',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contato', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Linkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/vianawill/',
  },
  {
    icon: Github,
    label: 'Github',
    link: 'https://www.github.com/vianawill/',
  },
  {
    icon: Mail,
    label: 'Gmail',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=willian.v.f.wv@gmail.com&su=Contato através do Portfólio',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/willianvna',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/Axon.jpg',
    title: 'Axon',
    description:
      'Desenvolvido para a empresa VIVEZA durante o curso no SENAC, este projeto soluciona o desafio de gerenciar múltiplas conversas de vendas simultaneamente. A plataforma centraliza o atendimento via WhatsApp e utiliza Inteligência Artificial para sugerir respostas e analisar a qualidade do atendimento. Liderei o desenvolvimento do Frontend, transformando requisitos complexos em uma interface intuitiva e ágil com Next.js e Tailwind CSS.',
    projectLink: 'https://github.com/oGhostWarrior/AXON',
  },
  {
    imgSrc: '/images/rdo.jpg',
    title: 'RDO - Relátorio Diário de Obra',
    description: 'Sistema web para gestão e controle do Relatório Diário de Obra (RDO), permitindo o registro de equipes, materiais e ocorrências para controle técnico e legal. O projeto foi desenvolvido em parceria com a empresa Alfa Engenharia durante o curso no SENAC. Fui responsável pelo desenvolvimento do Frontend, utilizando Tailwind CSS e JavaScript para personalizar o template AdminLTE. Meu foco foi garantir que a interface fosse intuitiva e totalmente responsiva para uso em celulares dentro do canteiro de obras.',
    projectLink: 'https://github.com/vianawill/RDO-RelatorioDiarioObra',
  },
  {
    imgSrc: '/images/cardapio.jpg',
    title: 'Cardápio Online',
    description: 'Cardápio online com integração direta à API do WhatsApp. O projeto foi construído seguindo a estratégia Mobile First, assegurando acessibilidade em qualquer dispositivo. Utilizei JavaScript Puro para a manipulação dinâmica do DOM (carrinho de compras) e Tailwind CSS para uma estilização rápida e consistente. Este projeto serviu para consolidar conhecimentos em estruturação de dados e eventos no navegador.',
    projectLink: 'https://cardapio-js-ecru.vercel.app/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2024 – 2026',
    title: 'Técnico em Desenvolvimento de Sistemas',
    institute: 'SENAC Minas',
    desc: 'Formação de base ampla abrangendo todo o ciclo de desenvolvimento, desde a criação de interfaces modernas (Front-end) e lógica de servidor (Back-end) até a gestão de bancos de dados. O curso também incluiu análise de dados, fundamentos de Inteligência Artificial e suporte técnico ao usuário.',
  },
  {
    year: '2025',
    title: 'UI Design - Design de Interface de Usuário',
    institute: 'Udemy / Online',
    desc: 'Criar wireframes, mockups e protótipos profissionais de aplicações mobile/desktop.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2025',
    title: 'Estágio em Desenvolvimento Frontend',
    institute: 'Alfa Engenharia',
    desc: 'Desenvolvimento de telas e módulos para sistemas de gestão (ERP), com foco em usabilidade e performance. Trabalhei na implementação de funcionalidades dinâmicas e na construção de interfaces, garantindo uma experiência fluida para os usuários do sistema.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'TypeScript',
    imgSrc: '/images/tools/typescript.svg',
  },
  {
    label: 'Tailwind',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Next.js',
    imgSrc: '/images/tools/nextjs.svg',
  },
  {
    label: 'Angular',
    imgSrc: '/images/tools/angular.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'PHP',
    imgSrc: '/images/tools/php.svg',
  },
  {
    label: 'MySQL',
    imgSrc: '/images/tools/mysql.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Desenvolvimento Web',
    desc: 'Desenvolvendo sites rápidos e modernos, garantindo uma excelente experiência de navegação com Next.js, Tailwind e tecnologias web atuais.',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Desenvolvo layouts limpos e amigáveis, priorizando a facilidade de uso para transformar cada visita em uma experiência positiva.',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },

  {
    title: 'Design Responsivo',
    desc: 'Criando interfaces que se adaptam a qualquer tamanho de tela, garantindo uma navegação impecável tanto no mobile quanto no desktop.',

    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Consumo de APIs',
    desc: 'Desenvolvimento de aplicações que utilizam APIs para garantir que o conteúdo seja dinâmico, atualizado e totalmente integrado com outros sistemas.',
    icon: <Link className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '30+',
    label: 'Happy Clients',
  },
  {
    number: '05+',
    label: 'Years Of Experience',
  },
  {
    number: '50+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
