type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="space-y-8" id={id}>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end">
        <div className="space-y-4">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-5xl">
            {title}
          </h2>
        </div>
        <p className="max-w-xl text-pretty leading-7 text-slate-300">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

