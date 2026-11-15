import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ArchitectureMap } from "@/components/ArchitectureMap";
import type { Project } from "@/lib/data";

type CaseStudyPageProps = {
  project: Project;
  number: string;
};

export function CaseStudyPage({ project, number }: CaseStudyPageProps) {
  const study = project.caseStudy;

  return (
    <div className={`case-study case-study-${project.visual}`}>
      <div className="container-shell pb-24 pt-10 md:pb-32 md:pt-16">
        <FadeIn>
          <div className="case-study-backline hero-metadata">
            <Link href="/projects">← Mission archive</Link>
            <span>{project.label}</span>
          </div>
          <header className="case-study-header">
            <div>
              <p className="hero-metadata text-redline">Case file / {number}</p>
              <h1>{project.title}</h1>
              <p className="case-study-positioning">{project.positioning}</p>
            </div>
            <div className="case-study-signal" aria-hidden="true">
              <span>{project.code}</span>
              <strong>{project.visual === "sentinel" ? "SN" : project.visual === "interview" ? "IE" : "CA"}</strong>
            </div>
          </header>
        </FadeIn>

        <div className="case-study-grid">
          <div className="case-study-content">
            <FadeIn>
              <section className="case-study-section case-study-overview">
                <h2 className="tactical-label">01 / Overview</h2>
                <p className="case-study-lead">{study.overview}</p>
                <div className="case-study-actions">
                  <a className="button-primary" href={project.repository} target="_blank" rel="noopener noreferrer">
                    Open source <span aria-hidden="true">↗</span>
                  </a>
                  <Link className="button-secondary" href="/projects">
                    All projects
                  </Link>
                </div>
              </section>
            </FadeIn>

            <FadeIn>
              <section className="case-study-section case-study-two-column">
                <div>
                  <h2 className="tactical-label">02 / Problem</h2>
                  <p>{study.problem}</p>
                </div>
                <div>
                  <h2 className="tactical-label">03 / Solution</h2>
                  <p>{study.solution}</p>
                </div>
              </section>
            </FadeIn>

            <FadeIn>
              <section className="case-study-section">
                <div className="case-study-section-heading">
                  <h2 className="tactical-label">04 / Architecture</h2>
                  <p>{study.architecture.summary}</p>
                </div>
                <ArchitectureMap nodes={study.architecture.nodes} flow={study.architecture.flow} />
              </section>
            </FadeIn>

            <FadeIn>
              <section className="case-study-section">
                <h2 className="tactical-label">05 / Technical implementation</h2>
                <div className="case-study-detail-grid">
                  {study.implementation.map((item, index) => (
                    <article className="case-study-detail" key={item.title}>
                      <span>0{index + 1}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            </FadeIn>

            <FadeIn>
              <section className="case-study-section">
                <h2 className="tactical-label">06 / Engineering decisions</h2>
                <div className="case-study-detail-grid">
                  {study.challenges.map((item) => (
                    <article className="case-study-detail" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            </FadeIn>
          </div>

          <aside className="case-study-aside">
            <div className="case-study-aside-panel">
              <h2 className="tactical-label">07 / Stack</h2>
              <ul className="case-study-stack">
                {project.techStack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            <div className="case-study-aside-panel">
              <h2 className="tactical-label">08 / Contribution</h2>
              <p>{study.contribution}</p>
            </div>
            <div className="case-study-aside-panel case-study-source-panel">
              <h2 className="tactical-label">Source</h2>
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                GitHub repository <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
