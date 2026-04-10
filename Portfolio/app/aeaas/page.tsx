import type { Metadata } from "next";
import { AeaasEnterButton } from "@/components/AeaasEnterButton";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { aeaasPage, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "AEAAS",
  description:
    "AEAAS is the primary venture: an AI-first operating layer built for leverage, scale, and durable strategic value.",
};

export default function AeaasPage() {
  return (
    <div className="container-shell space-y-20 pb-24 pt-12 md:space-y-24 md:pb-32 md:pt-20">
      <FadeIn>
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
          <div className="space-y-6">
            <span className="eyebrow">Primary Venture</span>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-6xl">
              AEAAS is where the long-term bet gets operationalized.
            </h1>
            <p className="max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
              Not a side project. Not a one-off experiment. AEAAS is the core
              vehicle for building AI-native systems that create leverage at a
              venture scale.
            </p>
          </div>

          <div className="panel rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/80">
              Strategic Thesis
            </p>
            <p className="mt-4 text-pretty leading-7 text-slate-200">
              The next meaningful businesses will not win by adding more effort.
              They will win by designing systems that make judgment, speed, and
              execution compound.
            </p>
          </div>
        </section>
      </FadeIn>

      <Section
        description={aeaasPage.summary}
        eyebrow="Why AEAAS"
        title="A venture shaped around compounding intelligence."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {aeaasPage.pillars.map((pillar, index) => (
            <FadeIn className="h-full" delay={index * 0.07} key={pillar.title}>
              <article className="panel card-hover h-full rounded-[1.7rem] p-6">
                <h2 className="text-2xl font-semibold text-white">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-pretty leading-7 text-slate-300">
                  {pillar.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        description="What the venture is designed to change in practical terms."
        eyebrow="What It Unlocks"
        title="From fragmented execution to operating leverage."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aeaasPage.outcomes.map((outcome, index) => (
            <FadeIn className="h-full" delay={index * 0.08} key={outcome.title}>
              <article className="panel rounded-[1.65rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                  {outcome.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {outcome.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {outcome.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <FadeIn delay={0.16}>
        <section className="panel-strong rounded-[1.95rem] px-6 py-8 md:px-8">
          <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <span className="eyebrow">Enter AEAAS</span>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Step into the main build.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty leading-7 text-slate-300">
                The external destination is wired into the site now, so the
                venture page is ready to redirect as soon as the live AEAAS
                domain is finalized.
              </p>
            </div>
            <AeaasEnterButton
              className="button-primary"
              href={siteConfig.aeaasUrl}
              label="Enter AEAAS"
            />
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

