import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ExternalLink } from "@/components/external-link";
import { site } from "@/config/site";
import { portfolioProjects } from "@/content/projects";
import { careerYears, currentExperience, profile } from "@/content/profile";
import { stackGroups } from "@/content/stack";
import { formatList } from "@/lib/format-list";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} | ${site.role}`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const sectionTitle = "text-2xl font-semibold tracking-tight";
const eyebrow = "text-accent font-mono text-xs font-medium tracking-[0.16em] uppercase";
const recentExperiences = 4;

export default function Home() {
  const years = careerYears();
  const experienceDecade = Math.floor(years / 10) * 10;

  return (
    <div className="space-y-24">
      <header className="relative">
        <div
          aria-hidden="true"
          className="profile-grid absolute -inset-x-6 -top-14 bottom-0 -z-10"
        />
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="space-y-6">
            <p className={eyebrow}>{site.role}</p>
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
              {site.name}
            </h1>
            <p className="text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl">
              Experiência que conecta tecnologia e negócio.
            </p>
            <p className="text-muted max-w-xl text-lg leading-relaxed">
              Há mais de três décadas atuo no desenvolvimento e na evolução de sistemas. Minha
              trajetória passa por {formatList(site.sectors)}, com foco em C#, .NET, Node.js,
              TypeScript, APIs REST e integração entre plataformas.
            </p>
            {currentExperience ? (
              <p className="text-muted flex items-start gap-2.5 font-mono text-sm">
                <span
                  aria-hidden="true"
                  className="text-ok status-dot mt-1.5 size-2 shrink-0 rounded-full bg-current"
                />
                <span>
                  Atualmente: {currentExperience.role} na {currentExperience.company}
                </span>
              </p>
            ) : null}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/sobre"
                className="bg-accent text-background rounded-md px-5 py-2.5 font-medium hover:opacity-90"
              >
                Conheça minha trajetória
              </Link>
              <ExternalLink
                href={site.links.linkedin}
                className="border-border bg-background hover:bg-surface rounded-md border px-5 py-2.5 font-medium"
              >
                Vamos conversar
              </ExternalLink>
            </div>
          </div>
          <figure className="border-border bg-surface/80 rounded-xl border p-6 sm:p-8">
            <p className={eyebrow}>Experiência em diferentes domínios</p>
            <ul
              aria-label="Experiência em diferentes domínios"
              className="mt-5 grid gap-3 sm:grid-cols-2"
            >
              {site.sectors.map((sector, index) => (
                <li key={sector} className="border-border bg-background rounded-lg border p-4">
                  <span className="text-accent font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block font-medium">{sector}</span>
                </li>
              ))}
            </ul>
            <figcaption className="text-muted border-border mt-5 border-t pt-4 font-mono text-xs">
              Soluções corporativas, integrações e sistemas que precisam funcionar na prática.
            </figcaption>
          </figure>
        </div>

        <dl className="border-border bg-border mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border lg:grid-cols-4">
          {[
            { value: `${experienceDecade}+`, label: "anos de experiência em tecnologia" },
            { value: String(site.sectors.length), label: "frentes de negócio" },
            { value: String(profile.experiences.length), label: "etapas profissionais" },
            { value: String(portfolioProjects.length), label: "projetos públicos em destaque" },
          ].map((indicator) => (
            <div
              key={indicator.label}
              className="bg-surface flex flex-col-reverse justify-end gap-1 p-5"
            >
              <dt className="text-muted text-sm leading-snug">{indicator.label}</dt>
              <dd className="font-mono text-3xl font-medium tabular-nums">{indicator.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section aria-labelledby="trajetoria" className="space-y-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="space-y-2">
            <p className={eyebrow}>Experiência profissional</p>
            <h2 id="trajetoria" className={sectionTitle}>
              Trajetória
            </h2>
          </div>
          <Link href="/sobre#experiencia" className="text-muted hover:text-foreground underline">
            Ver a trajetória completa
          </Link>
        </div>
        <ExperienceTimeline
          experiences={profile.experiences.slice(0, recentExperiences)}
          variant="compact"
        />
      </section>

      <section aria-labelledby="competencias" className="space-y-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="space-y-2">
            <p className={eyebrow}>Conhecimentos</p>
            <h2 id="competencias" className={sectionTitle}>
              Competências
            </h2>
          </div>
          <Link href="/stack" className="text-muted hover:text-foreground underline">
            Ver tecnologias e domínios
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <li key={group.id} className="border-border space-y-3 rounded-lg border p-5">
              <h3 className="font-semibold">{group.title}</h3>
              <ul aria-label={group.title} className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="bg-surface text-muted rounded-md px-2 py-0.5 font-mono text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="projetos" className="space-y-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="space-y-2">
            <p className={eyebrow}>Código aberto</p>
            <h2 id="projetos" className={sectionTitle}>
              Projetos públicos
            </h2>
          </div>
          <Link href="/projetos" className="text-muted hover:text-foreground underline">
            Ver todos os projetos
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {portfolioProjects.slice(0, 2).map((project) => (
            <li key={project.name} className="border-border bg-surface rounded-lg border p-5">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-muted mt-2 leading-relaxed">{project.description}</p>
              <ExternalLink
                href={project.href}
                className="text-accent mt-4 inline-block text-sm underline underline-offset-4"
              >
                Ver no GitHub
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
