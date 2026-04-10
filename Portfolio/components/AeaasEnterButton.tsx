"use client";

import { useEffect, useRef, useState, useTransition } from "react";

type AeaasEnterButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

export function AeaasEnterButton({
  href,
  label = "Enter AEAAS",
  className = "",
}: AeaasEnterButtonProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [, startTransition] = useTransition();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (isTransitioning) {
      return;
    }

    startTransition(() => {
      setIsTransitioning(true);
    });

    timeoutRef.current = setTimeout(() => {
      window.location.assign(href);
    }, 650);
  };

  return (
    <button className={className} onClick={handleClick} type="button">
      {isTransitioning ? "Entering AEAAS..." : label}
      <span aria-hidden="true">{isTransitioning ? "..." : "->"}</span>
    </button>
  );
}
