import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data";
import { StatusIndicator } from "@/components/StatusIndicator";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="brand-wordmark">
            HMA <span aria-hidden="true">{"//"}</span> REDLINE
          </p>
          <p className="mt-2 text-sm text-[var(--color-platinum-soft)]">
            Built for leverage, not noise.
          </p>
          <StatusIndicator className="mt-4">Contact channel</StatusIndicator>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-platinum-soft)]">
          {navigation.map((item) => (
            <Link
              className="hover:text-white focus-visible:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="hover:text-white focus-visible:text-white"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </Link>
          <a
            aria-label="GitHub profile"
            className="hover:text-white focus-visible:text-white"
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            aria-label="LinkedIn profile"
            className="hover:text-white focus-visible:text-white"
            href={siteConfig.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            aria-label="External portfolio"
            className="hover:text-white focus-visible:text-white"
            href={siteConfig.portfolioUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Portfolio
          </a>
          <span className="basis-full text-xs text-[var(--color-steel)] md:basis-auto">
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
