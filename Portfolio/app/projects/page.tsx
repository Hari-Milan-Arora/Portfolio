import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Depth-first product breakdowns covering AI Board Meeting Slide Generator and eConsultation AI.",
};

export default function ProjectsPage() {
  return (
    <div className="container-shell space-y-20 pb-24 pt-12 md:space-y-24 md:pb-32 md:pt-20">
      <FadeIn>
        <section className="space-y-6">
          <span className="eyebrow">Projects</span>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-6xl">
            The work is evaluated by leverage, not by count.
          </h1>
          <p className="max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            Two systems. Both grounded in real operational pain. Both designed to
            remove bottlenecks, compress decision cycles, and create durable
            value beyond the demo.
          </p>
        </section>
      </FadeIn>

      {projects.map((project, index) => (
        <Section
          description={project.summary}
          eyebrow={project.label}
          key={project.slug}
          title={project.title}
        >
          <FadeIn delay={index * 0.08}>
            <article
              className="panel-strong overflow-hidden rounded-[2rem] p-6 md:p-8"
              id={project.slug}
            >
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_18rem]">
                <div>
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
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                    Outcome signal
                  </p>
                  <p className="mt-4 text-pretty leading-7 text-slate-200">
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
                {project.details.map((detail, detailIndex) => (
                  <FadeIn
                    className="h-full"
                    delay={(index * 0.08) + detailIndex * 0.05}
                    key={detail.label}
                  >
                    <div className="panel h-full rounded-[1.45rem] p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                        {detail.label}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-slate-300">
                        {detail.text}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </article>
          </FadeIn>
        </Section>
      ))}
    </div>
  );
}

