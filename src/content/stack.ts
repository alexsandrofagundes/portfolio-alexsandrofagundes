export type StackGroup = {
  id: string;
  title: string;
  summary: string;
  items: readonly string[];
};

export const stackGroups: readonly StackGroup[] = [
  {
    id: "desenvolvimento",
    title: "Desenvolvimento",
    summary: "Linguagens e frameworks usados na construção e modernização de aplicações.",
    items: ["C#", ".NET", ".NET Core", "Node.js", "TypeScript", "JavaScript", "ASP.NET", "ADVPL"],
  },
  {
    id: "apis-integracao",
    title: "APIs e integração",
    summary: "Serviços e integrações para conectar aplicações e plataformas corporativas.",
    items: ["APIs REST", "BFF", "WCF", "WPF", "Entity Framework", "SAP", "Salesforce", "Mainframe"],
  },
  {
    id: "dados",
    title: "Dados",
    summary: "Persistência relacional e acesso a dados em sistemas corporativos.",
    items: ["SQL Server", "Entity Framework", "MySQL"],
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps e observabilidade",
    summary: "Ferramentas de entrega, operação e acompanhamento de sistemas em produção.",
    items: ["AWS", "Azure", "Azure DevOps", "Grafana", "Kibana"],
  },
  {
    id: "negocios",
    title: "Domínios de negócio",
    summary: "Experiência em plataformas corporativas e operações de diferentes setores.",
    items: [
      "Mercado de capitais",
      "OMS",
      "Mini-FIX",
      "ERP Protheus",
      "Localização fiscal",
      "Folha de pagamento",
      "eSocial",
      "SPED Fiscal",
    ],
  },
];
