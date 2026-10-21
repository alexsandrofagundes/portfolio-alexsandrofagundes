export type PortfolioProject = {
  name: string;
  description: string;
  language: string;
  href: string;
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    name: "ebook-por-tras-dos-prompts",
    description: "Projeto de inteligência artificial com Pinecone, OpenAI e Python.",
    language: "Python",
    href: "https://github.com/alexsandrofagundes/ebook-por-tras-dos-prompts",
  },
  {
    name: "PyChat",
    description: "Aplicação de chat em tempo real desenvolvida com Python.",
    language: "Python",
    href: "https://github.com/alexsandrofagundes/PyChat",
  },
  {
    name: "IntensivaoJavaScript",
    description:
      "Exercícios e projetos de estudo desenvolvidos durante um intensivão de JavaScript.",
    language: "JavaScript",
    href: "https://github.com/alexsandrofagundes/IntensivaoJavaScript",
  },
  {
    name: "DomBosco",
    description: "Exemplo de aplicação com PHP, HTML e conexão com MySQL.",
    language: "PHP",
    href: "https://github.com/alexsandrofagundes/DomBosco",
  },
];
