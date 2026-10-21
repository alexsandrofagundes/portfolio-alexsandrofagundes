import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/external-link";
import { JsonLd } from "@/components/json-ld";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { PageHeader } from "@/components/page-header";
import { site } from "@/config/site";
import { siteUrl } from "@/config/site-url";
import { currentExperience, profile } from "@/content/profile";
import { stackGroups } from "@/content/stack";
import { formatList } from "@/lib/format-list";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Trajetória profissional, formação e competências de Alex Sandro Fagundes em engenharia de software, mercado financeiro, saúde, seguros e sistemas corporativos.";

export const metadata: Metadata = pageMetadata({ title: "Sobre", description, path: "/sobre" });

const practices = [
  {
    title: "Modernização de sistemas",
    text: "Evolução de aplicações legadas com serviços e arquiteturas BFF em Node.js e TypeScript, mantendo integrações com sistemas corporativos.",
  },
  {
    title: "Integração entre plataformas",
    text: "Desenvolvimento de APIs REST e Web Services para comunicação entre aplicações, serviços internos, SAP, Salesforce e sistemas mainframe.",
  },
  {
    title: "Sistemas críticos em produção",
    text: "Sustentação e monitoramento de aplicações de mercado financeiro, saúde e seguros, com análise de incidentes e foco na continuidade operacional.",
  },
  {
    title: "Aprendizado contínuo",
    text: "Atualização técnica em desenvolvimento de software, cloud, segurança de APIs, inteligência artificial e práticas ágeis.",
  },
] as const;

export default function SobrePage() {
  return (
    <div className="max-w-3xl space-y-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.role,
          url: new URL("/sobre", siteUrl.url).href,
          sameAs: [site.links.linkedin, site.links.github],
          homeLocation: { "@type": "Place", name: profile.location },
          ...(currentExperience
            ? { worksFor: { "@type": "Organization", name: currentExperience.company } }
            : {}),
          alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.institution },
          knowsAbout: stackGroups.flatMap((group) => group.items),
        }}
      />

      <PageHeader title="Sobre" eyebrow={site.role}>
        <p>{profile.bio[0]}</p>
      </PageHeader>

      <section aria-labelledby="quem-sou" className="space-y-6">
        <h2 id="quem-sou" className="text-2xl font-semibold tracking-tight">
          Quem sou
        </h2>
        <div className="text-muted space-y-4 leading-relaxed">
          {profile.bio.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="border-border bg-border grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2">
          <div className="bg-surface space-y-1 p-4">
            <dt className="text-muted font-mono text-xs uppercase">Base</dt>
            <dd>{profile.location}</dd>
          </div>
          <div className="bg-surface space-y-1 p-4">
            <dt className="text-muted font-mono text-xs uppercase">Formação</dt>
            <dd>
              {profile.education.course} · {profile.education.institution} (
              {profile.education.graduation})
            </dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="experiencia" className="space-y-8">
        <h2 id="experiencia" className="text-2xl font-semibold tracking-tight">
          Experiência
        </h2>
        <ExperienceTimeline experiences={profile.experiences} />
      </section>

      <section aria-labelledby="como-trabalho" className="space-y-6">
        <h2 id="como-trabalho" className="text-2xl font-semibold tracking-tight">
          Como eu trabalho
        </h2>
        <dl className="space-y-6">
          {practices.map((practice) => (
            <div key={practice.title} className="space-y-1">
              <dt className="font-semibold">{practice.title}</dt>
              <dd className="text-muted leading-relaxed">{practice.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="formacao" className="space-y-6">
        <h2 id="formacao" className="text-2xl font-semibold tracking-tight">
          Formação e certificações
        </h2>
        <ul className="space-y-3">
          <li className="border-border rounded-lg border p-4">
            <p className="font-semibold">{profile.education.course}</p>
            <p className="text-muted font-mono text-sm">
              {profile.education.institution} · Conclusão em {profile.education.graduation}
            </p>
          </li>
        </ul>
        <div className="space-y-3">
          <h3 className="font-semibold">Certificações e capacitações</h3>
          <ul className="text-muted list-disc space-y-1.5 pl-5">
            {profile.certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="para-quem" className="space-y-4">
        <h2 id="para-quem" className="text-2xl font-semibold tracking-tight">
          Áreas de atuação
        </h2>
        <p className="text-muted leading-relaxed">
          Minha trajetória profissional inclui projetos e sistemas nos segmentos de{" "}
          {formatList(site.sectors)}.
        </p>
      </section>

      <section aria-labelledby="vitrine" className="space-y-4">
        <h2 id="vitrine" className="text-2xl font-semibold tracking-tight">
          Projetos públicos
        </h2>
        <p className="text-muted leading-relaxed">
          Além da experiência em sistemas corporativos, mantenho projetos de estudo e código aberto.
          <Link href="/projetos" className="text-foreground ml-1 underline">
            Conheça os projetos em destaque.
          </Link>
        </p>
      </section>

      <section aria-labelledby="contato" className="space-y-4">
        <h2 id="contato" className="text-2xl font-semibold tracking-tight">
          Contato
        </h2>
        <p className="text-muted leading-relaxed">
          O caminho mais direto é o{" "}
          <ExternalLink href={site.links.linkedin} className="text-foreground underline">
            LinkedIn
          </ExternalLink>
          . Meus projetos de código aberto estão no{" "}
          <ExternalLink href={site.links.github} className="text-foreground underline">
            GitHub
          </ExternalLink>
          .
        </p>
      </section>
    </div>
  );
}
