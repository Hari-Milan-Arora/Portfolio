import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-8">
      <div className="container-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/85">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Built for leverage, not noise.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          {navigation.map((item) => (
            <Link className="hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="hover:text-white" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}

