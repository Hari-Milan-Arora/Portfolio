import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { aboutSections, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Hari Milan Arora thinks and approaches AI engineering, machine learning, and software development.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="route-page route-about container-shell space-y-20 pb-24 pt-12 md:space-y-24 md:pb-32 md:pt-20">
      <FadeIn>
        <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_17rem] md:items-end">
          <div className="space-y-6">
            <span className="eyebrow">About</span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-6xl">
                Not a career narrative. A strategic operating thesis.
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
                The work is built around first principles: remove friction, raise
                decision quality, and design products that create leverage long
                after the first release.
              </p>
            </div>
          </div>

          <div className="panel rounded-[1.75rem] p-6">
            <p className="text-redline text-sm font-semibold uppercase tracking-[0.18em]">
              Orientation
            </p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>Systems thinker</p>
                <p>AI and software engineer</p>
                <p>Focused on useful intelligence</p>
                <p>Precision before noise</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {aboutSections.map((section, sectionIndex) => (
        <Section
          description={section.description}
          eyebrow={section.eyebrow}
          index={`0${sectionIndex + 1}`}
          key={section.title}
          title={section.title}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {section.points.map((point, pointIndex) => (
              <FadeIn
                className="h-full"
                delay={(sectionIndex * 0.08) + pointIndex * 0.06}
                key={point.title}
              >
                <article className="panel card-hover h-full rounded-[1.65rem] p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-pretty leading-7 text-slate-300">
                    {point.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Section>
      ))}

      <FadeIn delay={0.14}>
        <section className="panel-strong rounded-[1.9rem] px-6 py-8 md:px-8">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                The destination is clear.
              </h2>
              <p className="mt-3 max-w-2xl text-pretty leading-7 text-slate-300">
                Build products that become infrastructure, then use that
                infrastructure to unlock larger markets, stronger moats, and more
                durable outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link className="button-primary" href="/projects">
                See the Work
              </Link>
              <Link className="button-secondary" href="/contact">
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
