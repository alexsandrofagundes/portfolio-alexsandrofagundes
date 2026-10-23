export type PortfolioProject = {
  name: string;
  description: string;
  language: string;
  href: string;
  projectHref?: string;
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
    name: "Chanfana OpenAPI",
    description: "Template de API REST com documentação OpenAPI.",
    language: "TypeScript",
    href: "https://github.com/alexsandrofagundes/chanfana-openapi-template",
    projectHref: "https://chanfana-openapi-template.clubemobile.workers.dev/",
  },
  {
    name: "WorkFlows Starter",
    description: "Template inicial para criação e execução de workflows.",
    language: "TypeScript",
    href: "https://github.com/alexsandrofagundes/workflows-starter-template",
    projectHref: "https://chanfana-openapi-template.clubemobile.workers.dev/",
  },
];
