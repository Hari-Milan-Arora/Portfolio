import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Hari Milan Arora for meaningful conversations around products, systems, and venture-scale ideas.",
};

export default function ContactPage() {
  return (
    <div className="container-shell flex min-h-[calc(100vh-14rem)] items-center pb-24 pt-12 md:pb-32 md:pt-20">
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
            <Link className="button-secondary" href="/aeaas">
              View AEAAS
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
