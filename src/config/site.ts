export const site = {
  name: "Alex Sandro Fagundes",
  role: "Analista de Engenharia de Software Pleno",
  description:
    "Profissional de tecnologia com experiência em C#, .NET, Node.js, TypeScript, APIs REST, BFF e sistemas corporativos críticos.",
  focusAreas: [
    "Desenvolvimento com C#, .NET, Node.js e TypeScript",
    "APIs REST e arquitetura BFF",
    "Modernização e integração de sistemas corporativos",
    "Mercado financeiro, saúde e seguros",
    "Soluções fiscais, ERP e recursos humanos",
  ],
  sectors: [
    "Mercado financeiro e de capitais",
    "Saúde e seguros",
    "ERP e sistemas fiscais",
    "Recursos humanos e folha de pagamento",
  ],
  links: {
    github: "https://github.com/alexsandrofagundes",
    linkedin: "https://www.linkedin.com/in/alexsandrofagundes/",
  },
} as const;

export type NavigationItem = { href: `/${string}`; label: string };

export const navigation: readonly NavigationItem[] = [
  { href: "/projetos", label: "Projetos" },
  { href: "/stack", label: "Stack" },
  { href: "/sobre", label: "Sobre" },
];

/** Rotas públicas, usadas pelo sitemap e pelos testes E2E. */
export const staticRoutes = ["/", "/projetos", "/stack", "/sobre"] as const;
