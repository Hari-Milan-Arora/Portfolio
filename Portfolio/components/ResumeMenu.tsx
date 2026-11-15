import { resumeOptions } from "@/lib/data";

type ResumeMenuProps = {
  compact?: boolean;
};

export function ResumeMenu({ compact = false }: ResumeMenuProps) {
  return (
    <details className={`resume-menu${compact ? " resume-menu-compact" : ""}`}>
      <summary>
        <span>{compact ? "Resume" : "View resume"}</span>
        <span aria-hidden="true" className="resume-menu-chevron">↘</span>
      </summary>
      <div className="resume-menu-popover">
        <p className="resume-menu-label">Select profile / download PDF</p>
        {resumeOptions.map((resume) => (
          <a
            className="resume-menu-option"
            download
            href={resume.href}
            key={resume.href}
          >
            <span className="resume-menu-mark" aria-hidden="true">{resume.shortLabel}</span>
            <span>
              <strong>{resume.label}</strong>
              <small>{resume.description}</small>
            </span>
            <span aria-hidden="true" className="resume-menu-arrow">↗</span>
          </a>
        ))}
      </div>
    </details>
  );
}
