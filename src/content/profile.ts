/** Mês no formato `AAAA-MM`. */
export type YearMonth = `${number}-${number}`;

export type Experience = {
  company: string;
  role: string;
  start: YearMonth;
  end?: YearMonth;
  periodLabel?: string;
  segment: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
};

export const profile = {
  fullName: "Alex Sandro Fagundes",
  location: "São Paulo, Brasil",
  asOf: "2026-10" as YearMonth,
  careerStart: "1994-01" as YearMonth,
  bio: [
    "Sou Analista de Engenharia de Software Pleno, com trajetória em desenvolvimento, integração, sustentação e modernização de sistemas corporativos. Minha experiência combina mercado financeiro, saúde e seguros, ERP, recursos humanos e soluções fiscais.",
    "Trabalho principalmente com C#, .NET, Node.js, TypeScript e APIs REST. Nos projetos mais recentes, tenho atuado na evolução de aplicações legadas para arquiteturas BFF e na integração segura com plataformas corporativas como SAP e Salesforce.",
    "Ao longo da carreira, participei de ambientes de missão crítica no mercado de capitais, aplicações para saúde e seguros e soluções corporativas de alta complexidade. Também trabalho com cloud, DevOps, observabilidade e diferentes gerações de sistemas.",
  ],
  experiences: [
    {
      company: "Porto Seguro",
      role: "Analista de Engenharia de Software Pleno",
      start: "2023-10",
      segment: "Saúde e seguros",
      summary:
        "Manutenção, sustentação e evolução das aplicações digitais da Porto Seguro, Porto Saúde e Itaú Saúde.",
      highlights: [
        "Modernização de aplicações legadas em C# para arquitetura BFF com Node.js e TypeScript.",
        "Desenvolvimento e publicação de APIs RESTful e integrações seguras com SAP e Salesforce.",
        "Atuação em squads ágeis focadas na evolução de sistemas de saúde e seguros.",
      ],
      stack: ["Node.js", "TypeScript", "C#", "APIs REST", "Ionic", "SAP", "Salesforce"],
    },
    {
      company: "B3 — Brasil, Bolsa, Balcão",
      role: "Programador .NET — Resiliência Operacional",
      start: "2022-12",
      end: "2023-10",
      segment: "Mercado de capitais",
      summary:
        "Atuação na estabilidade e no suporte de sistemas críticos do mercado financeiro nacional.",
      highlights: [
        "Sustentação e monitoramento dos sistemas RoboTrader, AlgoServer e OMS.",
        "Acompanhamento de fluxos de ordens e negociações por meio do protocolo Mini-FIX.",
        "Análise de incidentes em produção em ambiente de missão crítica.",
      ],
      stack: ["C#", ".NET", "Trading", "OMS", "Mini-FIX", "Monitoramento"],
    },
    {
      company: "BTG Pactual",
      role: "Analista / Desenvolvedor .NET",
      start: "2021-07",
      end: "2022-12",
      segment: "Serviços financeiros",
      summary:
        "Sustentação, otimização e evolução de sistemas de operações Open e Swap e APIs do mercado de capitais.",
      highlights: [
        "Desenvolvimento e manutenção de soluções corporativas com práticas de DevOps e cloud.",
        "Uso de Grafana e Kibana para diagnóstico proativo e monitoramento em tempo real.",
      ],
      stack: ["C#", ".NET Core", "SQL Server", "AWS", "Azure", "APIs REST", "Grafana", "Kibana"],
    },
    {
      company: "Rede D'Or São Luiz",
      role: "Desenvolvedor .NET",
      start: "2020-02",
      end: "2021-06",
      segment: "Saúde",
      summary:
        "Desenvolvimento e manutenção de aplicações web e soluções back-end para o ecossistema hospitalar.",
      highlights: [
        "Atuação na aplicação Concierge e em sistemas de apoio operacional às unidades hospitalares.",
        "Correções, refatorações e entrega de funcionalidades com Azure DevOps.",
      ],
      stack: ["C#", ".NET", "SQL Server", "Azure DevOps", "ASP.NET"],
    },
    {
      company: "Itaú Unibanco · Indra Brasil",
      role: "Programador .NET / VB.NET",
      start: "2017-11",
      end: "2018-08",
      segment: "Serviços financeiros",
      summary:
        "Desenvolvimento de soluções de automação e integração para rotinas financeiras e administrativas.",
      highlights: [
        "Construção e manutenção de serviços corporativos e Web Services.",
        "Desenvolvimento de componentes de acesso a dados.",
      ],
      stack: ["C#", "VB.NET", "WPF", "WCF", "ASP.NET", "Entity Framework", "SQL Server"],
    },
    {
      company: "Serasa Experian · Resource IT",
      role: "Analista de Sistemas / Desenvolvedor .NET",
      start: "2011-06",
      end: "2012-01",
      segment: "Crédito e prevenção a fraudes",
      summary:
        "Desenvolvimento na plataforma MeProteja, com foco em prevenção a fraudes e segurança de identidade.",
      highlights: [
        "Construção de Web Services para integração e consumo de dados.",
        "Integração com barramento e sistemas mainframe.",
      ],
      stack: ["C#", ".NET MVC", "WCF", "Entity Framework", "Mainframe"],
    },
    {
      company: "TOTVS S.A.",
      role: "Analista de Sistemas II",
      start: "2009-06",
      end: "2011-07",
      segment: "ERP e localização fiscal",
      summary:
        "Atuação na área de inovação em projetos de localização fiscal internacional para Uruguai, Colômbia e Equador.",
      highlights: ["Desenvolvimento de soluções em ADVPL no ERP Protheus."],
      stack: ["ADVPL", "ERP Protheus", "Recursos Humanos", "Localização fiscal"],
    },
    {
      company: "Trajetória em ERP, RH e Fiscal",
      role: "Analista / Desenvolvedor",
      start: "1994-01",
      end: "2009-05",
      periodLabel: "1994–2009",
      segment: "ERP · folha de pagamento · sistemas fiscais",
      summary:
        "Experiência em empresas como Prosoft Technology / Wolters Kluwer, Bematech, SND Distribuidora e Grupo Aceex.",
      highlights: [
        "Atuação em folha de pagamento, eSocial, ponto eletrônico e sistemas ERP.",
        "Soluções fiscais para SPED, PIS/COFINS, NF-e, CT-e e MDF-e, além de WMS.",
      ],
      stack: ["ADVPL", "ERP", "eSocial", "SPED Fiscal", "NF-e", "CT-e", "MDF-e", "WMS"],
    },
  ],
  education: {
    institution: "UNISANT'ANNA",
    course: "Análise e Desenvolvimento de Sistemas",
    graduation: "2010",
  },
  certifications: [
    "Scrum Fundamentals Certified (SFC™)",
    "ITIL Fundamentals — IT Service Management",
    "API Security Fundamentals (2024)",
    "Microsoft Learn — Azure OpenAI Service (2024)",
    "Microsoft Certifications — .NET / C# / ASP.NET",
    "Certificações TOTVS — módulos GPE, PON e APT",
  ],
} as const;

const monthNames = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
] as const;

function parseYearMonth(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

/** Meses contados incluindo os meses de início e de fim. */
export function monthsBetween(start: YearMonth, end: YearMonth): number {
  const a = parseYearMonth(start);
  const b = parseYearMonth(end);
  return (b.year - a.year) * 12 + (b.month - a.month) + 1;
}

/** "3 anos e 8 meses", "1 ano", "4 meses". */
export function formatDuration(months: number): string {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [
    years > 0 ? `${years} ${years === 1 ? "ano" : "anos"}` : undefined,
    rest > 0 ? `${rest} ${rest === 1 ? "mês" : "meses"}` : undefined,
  ].filter(Boolean);
  return parts.join(" e ");
}

/** "out 2023". */
export function formatYearMonth(value: YearMonth): string {
  const { year, month } = parseYearMonth(value);
  return `${monthNames[month - 1]} ${year}`;
}

/** Formata o período conforme a precisão informada no currículo. */
export function formatPeriod(
  experience: Pick<Experience, "start" | "end" | "periodLabel">,
): string {
  if (experience.periodLabel) {
    return experience.periodLabel;
  }
  if (!experience.end) {
    return `${formatYearMonth(experience.start)} – atual`;
  }
  const months = monthsBetween(experience.start, experience.end);
  return `${formatYearMonth(experience.start)} – ${formatYearMonth(experience.end)} · ${formatDuration(months)}`;
}

/** Anos completos de carreira até a data em que o currículo foi conferido. */
export function careerYears(): number {
  return Math.floor((monthsBetween(profile.careerStart, profile.asOf) - 1) / 12);
}

export const currentExperience = profile.experiences.find((experience) => !("end" in experience));
