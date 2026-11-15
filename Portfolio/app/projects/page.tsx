import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { projects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A verified mission archive covering AI engineering, machine learning, and software systems.",
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <div className="route-page route-projects container-shell space-y-20 pb-24 pt-12 md:space-y-24 md:pb-32 md:pt-20">
      <FadeIn>
        <section className="space-y-6">
          <span className="eyebrow">Projects</span>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-6xl">
            A verified mission archive.
          </h1>
          <p className="max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            Selected projects with public GitHub sources, documented technologies,
            and capabilities grounded in their repositories.
          </p>
        </section>
      </FadeIn>

      {projects.map((project, index) => (
        <Section
          description={project.summary}
          eyebrow={project.label}
          index={`0${index + 1}`}
          key={project.slug}
          title={project.title}
        >
          <FadeIn delay={index * 0.08}>
            <article
              className={`mission-archive-card mission-archive-${project.visual} panel-strong overflow-hidden rounded-[2rem] p-6 md:p-8`}
              id={project.slug}
            >
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_18rem]">
                <div>
                  <div className="mission-archive-visual" aria-hidden="true">
                    <span className="mission-archive-code">{project.code}</span>
                    <span className="mission-archive-glyph">{project.visual === "sentinel" ? "SN" : project.visual === "interview" ? "IE" : "CA"}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-200">
                    {project.positioning}
                  </p>
                </div>
                <div className="panel rounded-[1.5rem] p-5">
                  <p className="text-redline text-sm font-semibold uppercase tracking-[0.18em]">
                    Technology
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-200">
                    {project.techStack.map((technology) => <li key={technology}>{`// ${technology}`}</li>)}
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {project.capabilities.map((capability, detailIndex) => (
                  <FadeIn
                    className="h-full"
                    delay={(index * 0.08) + detailIndex * 0.05}
                    key={capability}
                  >
                    <div className="panel h-full rounded-[1.45rem] p-5">
                      <p className="text-redline text-sm font-semibold uppercase tracking-[0.18em]">
                        Capability 0{detailIndex + 1}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-slate-300">
                        {capability}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="button-primary" href={`/projects/${project.slug}`}>
                  View case study <span aria-hidden="true">↗</span>
                </Link>
                <a className="button-secondary" href={project.repository} target="_blank" rel="noopener noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </FadeIn>
        </Section>
      ))}
    </div>
  );
}
