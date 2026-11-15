import Link from "next/link";
import { OperatorVisual } from "@/components/OperatorVisual";
import { RedlineIntro } from "@/components/RedlineIntro";
import { AchievementStrip } from "@/components/AchievementStrip";
import { ResumeMenu } from "@/components/ResumeMenu";
import { TechArsenal } from "@/components/TechArsenal";
import { projects, siteConfig } from "@/lib/data";

export function RedlineHero() {
  const sentinel = projects[0];

  return (
    <section className="redline-hero" aria-labelledby="hero-title">
      <RedlineIntro />
      <span className="hero-side-label hero-metadata" aria-hidden="true">HMA // REDLINE</span>
      <div className="hero-topline hero-metadata">
        <span>OPERATOR PROFILE <span className="text-redline">{"//"} HMA—01</span></span>
        <span className="hero-system-status">Personal interface / online</span>
      </div>
      <div className="hero-composition">
        <div className="hero-copy">
          <p className="hero-name hero-metadata">AI / SOFTWARE / SYSTEMS</p>
          <h1 className="hero-title operator-name" id="hero-title" tabIndex={-1}>
            <span>HARI</span>
            <span>MILAN</span>
            <span>ARORA</span>
          </h1>
          <p className="hero-motto">AI ENGINEER <span>{"//"}</span> FULL-STACK DEVELOPER <span>{"//"}</span> ML BUILDER</p>
          <p className="hero-introduction">
            A systems-focused builder working across AI engineering, machine learning,
            multi-agent systems, and software development.
          </p>
          <div className="hero-actions">
            <a className="button-primary hero-action" href="#arsenal">
              Explore arsenal <span aria-hidden="true">→</span>
            </a>
            <ResumeMenu />
          </div>
          <p className="hero-resume-note" id="resume-note">
            Two verified profiles available: software engineering and AI engineering.
          </p>
          <div className="hero-principles hero-metadata">
            <span>01 / Think</span><span>02 / Engineer</span><span>03 / Execute</span>
          </div>
        </div>
        <div className="hero-visual-column">
          <OperatorVisual
            portrait={{
              src: "/images/redline-operator.jpg",
              alt: "Red-lit tactical portrait of Hari Milan Arora in a dark operator jacket",
            }}
          />
        </div>
        <div className="hero-intelligence">
          <aside className="hero-signal hero-intelligence-panel" aria-labelledby="sentinel-title">
            <div className="hud-panel-heading">
              <span className="hud-kicker">01 / Currently building</span>
              <span className="hud-corner" aria-hidden="true">SN</span>
            </div>
            <div className="hero-signal-title-row">
              <div className="hero-signal-marker" aria-hidden="true">SN<span>↗</span></div>
              <div>
                <h2 id="sentinel-title">{sentinel.title}</h2>
                <p>{sentinel.positioning}</p>
              </div>
            </div>
            <ul className="hero-capability-list">
              {sentinel.capabilities.slice(0, 4).map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <Link className="panel-link" href={`/projects/${sentinel.slug}`}>
              Open case study <span aria-hidden="true">↗</span>
            </Link>
          </aside>
          <TechArsenal />
        </div>
      </div>
      <AchievementStrip />
      <div className="hero-bottomline">
        <a className="hero-scroll hero-metadata" href="#arsenal"><span aria-hidden="true">↓</span> Discover the arsenal</a>
        <div className="hero-bottom-meta">
          <Link href="/projects">Mission archive / verified projects</Link>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
    </section>
  );
}
