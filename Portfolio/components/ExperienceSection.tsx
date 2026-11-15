import { education, experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="experience-section redline-section" id="experience" aria-labelledby="experience-title">
      <div className="section-intro-line">
        <span className="section-number">02</span>
        <p className="hud-kicker">Field experience</p>
      </div>
      <div className="experience-heading-grid">
        <div>
          <h2 id="experience-title">Applied systems.<br /><em>Real constraints.</em></h2>
        </div>
        <p>One verified professional engagement across machine learning, agent workflows, retrieval, and application delivery.</p>
      </div>
      <div className="experience-records">
        {experience.map((role) => (
          <article className="experience-record" key={`${role.company}-${role.role}`}>
            <div className="experience-marker" aria-hidden="true">
              <span />
            </div>
            <div className="experience-main">
              <div className="experience-meta">
                <span>{role.duration}</span>
                <span>Verified experience</span>
              </div>
              <h3>{role.role}</h3>
              <p className="experience-company">{role.company}</p>
              <p className="experience-summary">{role.summary}</p>
              <ul>
                {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
            <div className="experience-stack">
              <span className="hud-kicker">Stack</span>
              {role.stack.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </article>
        ))}
      </div>
      <div className="education-row">
        <span className="hud-kicker">Education // Current track</span>
        <div className="education-items">
          {education.map(({ qualification, institution, period }) => (
            <div className="education-item" key={qualification}>
              <strong>{qualification}</strong>
              <span>{institution}</span>
              <small>{period}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
