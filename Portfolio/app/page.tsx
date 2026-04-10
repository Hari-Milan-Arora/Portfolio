import Link from "next/link";
import { AeaasEnterButton } from "@/components/AeaasEnterButton";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import {
  currentFocus,
  homeProof,
  projects,
  siteConfig,
  thinkingModels,
} from "@/lib/data";

export default function HomePage() {
  return (
    <div className="container-shell space-y-24 pb-24 pt-10 md:space-y-32 md:pb-32 md:pt-16">
      <section className="grid gap-10 pt-8 md:grid-cols-[minmax(0,1fr)_19rem] md:items-end md:gap-12 md:pt-16">
        <FadeIn className="space-y-8">
          <div className="space-y-6">
            <span className="eyebrow">Hari Milan Arora</span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.92] text-white sm:text-6xl md:text-7xl">
                I build systems that compound without me.
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
                AI-first products, strategic leverage, and venture-scale thinking.
                The goal is not output for its own sake. The goal is durable
                advantage.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/projects">
              Explore Work
            </Link>
            <AeaasEnterButton
              className="button-secondary"
              href={siteConfig.aeaasUrl}
              label="Enter AEAAS"
            />
          </div>

          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            {[
              "Products over projects",
              "Leverage over labor",
              "Systems over surface area",
            ].map((item) => (
              <div
                className="panel rounded-2xl px-4 py-4 text-sm font-medium text-slate-200"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="panel-strong rounded-[1.75rem] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200/80">
              Primary Focus
            </p>
            <div className="accent-line mt-5" />
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm text-slate-400">Main venture</p>
                <p className="mt-1 text-2xl font-semibold text-white">AEAAS</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Operating mode</p>
                <p className="mt-1 text-base leading-7 text-slate-200">
                  Build infrastructure that turns expertise into repeatable
                  systems with asymmetrical payoff.
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Signal</p>
                <p className="mt-1 text-base leading-7 text-slate-200">
                  From problem framing to shipped interface, with product,
                  strategy, and execution held in one stack.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Section
        description="Work in motion, chosen for strategic direction rather than volume."
        eyebrow="What I'm Building"
        title="A focused operating layer for leverage."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {currentFocus.map((item, index) => (
            <FadeIn className="h-full" delay={index * 0.08} key={item.title}>
              <article className="panel card-hover h-full rounded-[1.75rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                  {item.label}
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-pretty leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        description="Two products, both selected for what they reveal about judgment, speed, and leverage."
        eyebrow="Selected Work"
        title="High-signal systems, not a gallery of experiments."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn className="h-full" delay={index * 0.1} key={project.slug}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        description="The models behind the products matter as much as the interfaces themselves."
        eyebrow="Thinking"
        title="Principles that survive contact with reality."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {thinkingModels.map((model, index) => (
            <FadeIn className="h-full" delay={index * 0.08} key={model.title}>
              <article className="panel rounded-[1.6rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {model.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{model.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        description="Early traction signals and execution proof, framed around what compounds."
        eyebrow="Proof of Execution"
        title="Signals that the work is real."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeProof.map((item, index) => (
            <FadeIn className="h-full" delay={index * 0.07} key={item.label}>
              <article className="panel rounded-[1.6rem] p-6">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-sky-200/80">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.22}>
          <div className="panel-strong mt-8 rounded-[1.8rem] px-6 py-7 md:px-8">
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Building toward the venture, not away from it.
                </h3>
                <p className="mt-3 max-w-2xl text-pretty leading-7 text-slate-300">
                  Every project sharpens the same edge: clearer decisions, faster
                  execution, and systems that carry more weight than manual effort
                  ever could.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link className="button-primary" href="/about">
                  Read the Thesis
                </Link>
                <Link className="button-secondary" href="/contact">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}

