import type { Metadata } from "next";
import { ExternalLink } from "@/components/external-link";
import { PageHeader } from "@/components/page-header";
import { portfolioProjects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Projetos públicos de Alex Fagundes em inteligência artificial, Python, JavaScript e desenvolvimento web.";

export const metadata: Metadata = pageMetadata({
  title: "Projetos",
  description,
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <div className="max-w-4xl space-y-12">
      <PageHeader title="Projetos" eyebrow="Código aberto">
        <p>{description}</p>
      </PageHeader>

      <p
        role="note"
        className="border-accent bg-surface rounded-md border-l-4 px-4 py-3 text-sm leading-relaxed"
      >
        A experiência em sistemas corporativos faz parte da minha trajetória profissional. Os
        repositórios abaixo são projetos públicos disponíveis no GitHub.
      </p>

      <ul className="grid gap-5 sm:grid-cols-2">
        {portfolioProjects.map((project) => (
          <li key={project.name}>
            <article className="border-border bg-surface flex h-full flex-col gap-4 rounded-xl border p-6">
              <div className="space-y-2">
                <p className="text-accent font-mono text-xs">{project.language}</p>
                <h2 className="text-xl font-semibold tracking-tight">{project.name}</h2>
                <p className="text-muted leading-relaxed">{project.description}</p>
              </div>
              <ExternalLink
                href={project.href}
                className="text-accent mt-auto font-medium underline underline-offset-4"
              >
                Explorar repositório
              </ExternalLink>
            </article>
          </li>
        ))}
      </ul>

      <p className="text-muted">
        Veja mais projetos e contribuições no{" "}
        <ExternalLink href="https://github.com/alexsandrofagundes" className="underline">
          meu perfil do GitHub
        </ExternalLink>
        .
      </p>
    </div>
  );
}
