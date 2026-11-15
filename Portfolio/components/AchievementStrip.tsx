import { achievements } from "@/lib/data";

export function AchievementStrip() {
  return (
    <section className="achievement-strip" aria-label="Verified profile signals">
      {achievements.map((achievement, index) => (
        <article className="achievement-item" key={achievement.label}>
          <span className="achievement-index">0{index + 1}</span>
          <div>
            <span className={`achievement-icon achievement-icon-${index + 1}`} aria-hidden="true" />
            <strong>{achievement.value}</strong>
            <span>{achievement.label}</span>
            <p>{achievement.detail}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
