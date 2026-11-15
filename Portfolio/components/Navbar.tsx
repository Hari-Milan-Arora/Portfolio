"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/lib/data";
import { StatusIndicator } from "@/components/StatusIndicator";
import { ResumeMenu } from "@/components/ResumeMenu";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const renderNavigation = () =>
    navigation.map((item) => {
      const [itemPath, itemHash] = item.href.split("#");
      const isActive = itemHash
        ? pathname === itemPath && activeHash === `#${itemHash}`
        : itemPath === "/"
          ? pathname === itemPath && !activeHash
          : pathname.startsWith(itemPath);

      return (
        <Link
            aria-current={isActive ? "page" : undefined}
          className="nav-link shrink-0"
          data-active={isActive}
          href={item.href}
          key={item.href}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    });

  return (
    <header className="site-header">
      <div className="container-shell">
        <div className="flex min-h-[var(--header-height)] items-center justify-between gap-4">
          <Link
            aria-label={`${siteConfig.brand}, home`}
            className="brand-lockup"
            href="/"
          >
            <span aria-hidden="true" className="brand-mark">
              HMA
            </span>
            <span>
              <span className="brand-wordmark">
                HMA <span aria-hidden="true">{"//"}</span> REDLINE
              </span>
              <span className="brand-caption">AI + software engineer</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <nav
              aria-label="Primary navigation"
              className="desktop-nav flex items-center gap-6"
            >
              {renderNavigation()}
            </nav>

            <StatusIndicator className="hidden xl:inline-flex">Signal active</StatusIndicator>
            <div className="desktop-resume hidden md:block">
              <ResumeMenu />
            </div>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              <span aria-hidden="true" className="mobile-menu-icon" />
            </button>
          </div>
        </div>

        <nav
          aria-label="Mobile primary navigation"
          className="mobile-nav"
          data-open={isMenuOpen}
          id="mobile-navigation"
        >
          {renderNavigation()}
          <ResumeMenu compact />
        </nav>
      </div>
    </header>
  );
}
