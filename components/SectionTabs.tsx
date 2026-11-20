"use client";

import { useState, type ReactNode } from "react";

export type SectionTab = {
  id: string;
  label: string;
  content: ReactNode;
};

export function SectionTabs({ sections }: { sections: SectionTab[] }) {
  const [active, setActive] = useState(sections[0].id);

  const tabs = sections.map(({ id, label }) => {
    const isActive = active === id;
    return (
      <button
        key={id}
        type="button"
        role="tab"
        id={`tab-${id}`}
        aria-selected={isActive}
        aria-controls={`panel-${id}`}
        onClick={() => setActive(id)}
        className={`text-sm transition-colors ${
          isActive
            ? "font-semibold text-[var(--foreground)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
      >
        <span aria-hidden="true" className="text-[var(--muted)]">
          --{" "}
        </span>
        {label}
        <span aria-hidden="true" className="text-[var(--muted)]">
          {" "}
          --
        </span>
      </button>
    );
  });

  return (
    <div className="mt-20">
      {/* Below xl: fixed top bar. xl+: fixed rail flush left, vertically
          centered. Content stays centered; the rail only appears once the
          viewport is wide enough that it can't overlap it. */}
      <div
        role="tablist"
        aria-label="Sections"
        className="fixed inset-x-0 top-0 z-10 flex items-center justify-center gap-5 border-b border-[var(--border)] bg-[var(--background)] px-4 py-3 xl:inset-x-auto xl:left-6 xl:right-auto xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:items-start xl:gap-3 xl:border-0 xl:bg-transparent xl:p-0"
      >
        {tabs}
      </div>

      {sections.map(({ id, content }) => (
        <div
          key={id}
          role="tabpanel"
          id={`panel-${id}`}
          aria-labelledby={`tab-${id}`}
          hidden={id !== active}
        >
          {content}
        </div>
      ))}
    </div>
  );
}
