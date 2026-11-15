import Link from "next/link";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`mission-card mission-card-${project.visual} panel card-hover group h-full rounded-[1.85rem] p-6 md:p-7`}>
      <div className="mission-card-visual" aria-hidden="true">
        <span className="mission-card-index">{project.label.split(" /")[0]}</span>
        <span className="mission-card-code">{project.code}</span>
        <strong>{project.visual === "sentinel" ? "SN" : project.visual === "interview" ? "IE" : "CA"}</strong>
      </div>
      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
        <p className="text-pretty leading-7 text-slate-300">{project.summary}</p>
      </div>

      <div className="mt-8 grid gap-4 border-t border-white/8 pt-6 text-sm leading-6 text-slate-300">
        <div>
          <p className="text-redline font-semibold uppercase tracking-[0.14em]">
            Verified stack
          </p>
          <p className="mt-2">{project.techStack.join(" / ")}</p>
        </div>
        <div>
          <p className="text-redline font-semibold uppercase tracking-[0.14em]">
            Signal
          </p>
          <p className="mt-2">{project.capabilities[0]}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a className="button-primary" href={project.repository} target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <Link className="button-secondary" href={`/projects/${project.slug}`}>
          Case study <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
