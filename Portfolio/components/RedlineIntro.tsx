"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

// Also prevents replays when browser storage is unavailable.
let introduced = false;
const storageKey = "redline:introduced";

export function RedlineIntro() {
  const overlay = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const controls = useAnimationControls();

  const dismiss = () => {
    if (overlay.current) overlay.current.dataset.playing = "false";
  };

  useEffect(() => {
    const element = overlay.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let seen = introduced;
    try {
      seen ||= sessionStorage.getItem(storageKey) === "true";
    } catch {
      // The in-memory guard works even when storage is blocked.
    }
    if (!element || (seen && !started.current) || preference.matches || window.location.hash) return;
    // Don't interrupt a visitor who interacted before hydration completed.
    if (document.activeElement !== document.body || window.scrollY > 0) return;

    element.dataset.playing = "true";
    started.current = true;
    introduced = true;
    try {
      sessionStorage.setItem(storageKey, "true");
    } catch {
      // Persistence is an enhancement, never a prerequisite for content.
    }
    void controls.start({
      opacity: [0, 1],
      y: [16, 0],
      transition: { duration: 0.45, ease: [0.21, 1, 0.31, 1] },
    });

    const finish = () => {
      element.dataset.playing = "false";
      if (element.contains(document.activeElement)) {
        document.getElementById("hero-title")?.focus({ preventScroll: true });
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Tab") finish();
    };
    const onFocus = (event: FocusEvent) => {
      if (!element.contains(event.target as Node)) finish();
    };
    const timer = window.setTimeout(finish, 1800);
    window.addEventListener("keydown", onKey);
    window.addEventListener("focusin", onFocus);
    window.addEventListener("pointerdown", finish);
    preference.addEventListener("change", finish);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("focusin", onFocus);
      window.removeEventListener("pointerdown", finish);
      preference.removeEventListener("change", finish);
      element.dataset.playing = "false";
    };
  }, [controls]);

  return (
    <div className="redline-intro" ref={overlay}>
      <div className="intro-console" aria-hidden="true">
        <p className="hero-metadata">Personal interface / initialization</p>
        <motion.p className="intro-emblem" initial={false} animate={controls}>
          HMA <span>{"//"}</span> REDLINE
        </motion.p>
        <div className="intro-track"><span /></div>
        <p className="hero-metadata intro-initializing">Initializing personal interface...</p>
        <p className="hero-metadata intro-online">System status: online</p>
      </div>
      <button className="intro-skip button-secondary" onClick={dismiss} type="button">
        Skip intro <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
