import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ResumeMenu } from "@/components/ResumeMenu";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Hari Milan Arora for meaningful conversations around AI engineering, software, and product development.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="route-page route-contact container-shell flex min-h-[calc(100vh-14rem)] items-center pb-24 pt-12 md:pb-32 md:pt-20">
      <FadeIn className="w-full">
        <section className="panel-strong rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-6xl">
            If you are building something meaningful, reach out.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            The best conversations usually start where clarity, ambition, and
            execution overlap.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              className="button-primary"
              href={`mailto:${siteConfig.email}?subject=Building%20something%20meaningful`}
            >
              {siteConfig.email}
            </Link>
            <Link className="button-secondary" href="/projects">
              Explore Projects
            </Link>
            <ResumeMenu compact />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
            <span className="text-redline font-semibold uppercase tracking-[0.14em]">
              Find me
            </span>
            <a
              className="hover:text-white focus-visible:text-white"
              href={siteConfig.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub ↗
            </a>
            <a
              className="hover:text-white focus-visible:text-white"
              href={siteConfig.linkedinUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn ↗
            </a>
            <a
              className="hover:text-white focus-visible:text-white"
              href={siteConfig.portfolioUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Portfolio ↗
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
