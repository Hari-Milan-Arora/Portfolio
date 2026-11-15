import { heroTechnologies } from "@/lib/data";

export function TechArsenal() {
  return (
    <section className="hero-tech-panel" aria-labelledby="tech-arsenal-title">
      <div className="hud-panel-heading">
        <span className="hud-kicker">02 / Tech arsenal</span>
        <span className="hud-corner" aria-hidden="true">+</span>
      </div>
      <h2 id="tech-arsenal-title">Tools behind the signal.</h2>
      <div className="tech-chip-grid">
        {heroTechnologies.map((technology) => (
          <div className="tech-chip" key={technology.name} title={technology.name}>
            <span className="tech-chip-mark" aria-hidden="true">{technology.mark}</span>
            <span>{technology.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
