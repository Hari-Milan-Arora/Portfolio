import Link from "next/link";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { RedlineHero } from "@/components/RedlineHero";
import { SkillsSection } from "@/components/SkillsSection";
import { projects, siteConfig, thinkingModels } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="home-page">
      <RedlineHero />
      <ExperienceSection />

      <section className="home-arsenal redline-section container-shell" id="arsenal" aria-labelledby="arsenal-title">
        <div className="section-intro-line">
          <span className="section-number">03</span>
          <p className="hud-kicker">Project arsenal // verified</p>
        </div>
        <div className="arsenal-heading-grid">
          <div>
            <h2 id="arsenal-title">Systems built for<br /><em>the real world.</em></h2>
          </div>
          <p>Three public repositories. Three different engineering problems. One consistent focus: making intelligent software useful, inspectable, and shippable.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <FadeIn className="h-full" delay={index * 0.08} key={project.slug}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
        <div className="arsenal-footer-line">
          <span>03 / 03 approved projects</span>
          <Link href="/projects">Open full mission archive <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <SkillsSection />

      <section className="home-about redline-section container-shell" id="about-preview" aria-labelledby="about-preview-title">
        <div className="section-intro-line">
          <span className="section-number">05</span>
          <p className="hud-kicker">Operator profile // approach</p>
        </div>
        <div className="about-preview-grid">
          <div className="about-preview-copy">
            <h2 id="about-preview-title">Clarity first.<br /><em>Then execution.</em></h2>
            <p>I am Hari Milan Arora, a computer science student focused on AI engineering, machine learning, and the software underneath intelligent products.</p>
            <p>I care about the distance between a difficult problem and a reliable system: the decisions, constraints, interfaces, APIs, data paths, and failure modes that make the result work.</p>
            <Link className="button-secondary" href="/about">Read the full profile <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="principle-grid">
            {thinkingModels.map((model, index) => (
              <article className="principle-card" key={model.title}>
                <span>0{index + 1}</span>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact redline-section container-shell" id="contact-preview" aria-labelledby="contact-preview-title">
        <div className="contact-signal-card">
          <div>
            <p className="hud-kicker">06 / Open channel</p>
            <h2 id="contact-preview-title">Have a hard problem<br /><em>worth solving?</em></h2>
          </div>
          <div className="contact-signal-actions">
            <a className="button-primary" href={`mailto:${siteConfig.email}?subject=Building%20something%20meaningful`}>Start a conversation <span aria-hidden="true">↗</span></a>
            <Link className="button-secondary" href="/contact">Contact details</Link>
          </div>
          <p className="contact-signal-email">{siteConfig.email}</p>
        </div>
      </section>
    </div>
  );
}
