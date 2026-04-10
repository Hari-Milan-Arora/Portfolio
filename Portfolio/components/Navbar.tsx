"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(5,8,22,0.72)] backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link className="group inline-flex items-center gap-3" href="/">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white">
              HMA
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/85">
                {siteConfig.name}
              </span>
              <span className="block text-sm text-slate-400">
                Systems builder. AI-first operator.
              </span>
            </span>
          </Link>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <nav className="flex flex-1 items-center gap-5 overflow-x-auto text-sm font-medium sm:flex-initial sm:gap-6">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    className="nav-link shrink-0 py-1"
                    data-active={isActive}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link className="button-secondary hidden sm:inline-flex" href="/aeaas">
              Enter AEAAS
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

