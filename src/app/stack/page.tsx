import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { stackGroups } from "@/content/stack";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Tecnologias, práticas e domínios de negócio da trajetória profissional de Alex Fagundes.";

export const metadata: Metadata = pageMetadata({ title: "Stack", description, path: "/stack" });

export default function StackPage() {
  return (
    <div className="max-w-3xl space-y-16">
      <PageHeader title="Stack" eyebrow="Ferramentas e domínios">
        <p>
          Tecnologias e áreas de negócio presentes na minha experiência profissional, da
          modernização de aplicações à integração de plataformas corporativas.
        </p>
      </PageHeader>

      {stackGroups.map((group) => (
        <section key={group.id} aria-labelledby={group.id} className="space-y-4">
          <div className="space-y-1">
            <h2 id={group.id} className="text-2xl font-semibold tracking-tight">
              {group.title}
            </h2>
            <p className="text-muted">{group.summary}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="border-border bg-surface text-muted rounded-md border px-3 py-1.5 font-mono text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
