import Link from "next/link";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel card-hover group h-full rounded-[1.85rem] p-6 md:p-7">
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
          <p className="font-semibold uppercase tracking-[0.14em] text-sky-200/80">
            Insight
          </p>
          <p className="mt-2">{project.insight}</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.14em] text-sky-200/80">
            Leverage
          </p>
          <p className="mt-2">{project.leverage}</p>
        </div>
      </div>

      <Link
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
        href={`/projects#${project.slug}`}
      >
        View full breakdown
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          {"->"}
        </span>
      </Link>
    </article>
  );
}
