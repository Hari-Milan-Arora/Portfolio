import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="skills-section redline-section" id="skills" aria-labelledby="skills-title">
      <div className="section-intro-line">
        <span className="section-number">04</span>
        <p className="hud-kicker">Technical loadout</p>
      </div>
      <div className="skills-heading-grid">
        <h2 id="skills-title">The stack is<br /><em>the system.</em></h2>
        <p>Technologies drawn from the verified resumes and the three public project repositories. No proficiency theatre. Just the tools used to build.</p>
      </div>
      <div className="skill-matrix">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.label}>
            <div className="skill-group-topline">
              <span>0{index + 1}</span>
              <span className="skill-group-rule" />
            </div>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
