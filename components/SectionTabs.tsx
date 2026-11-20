"use client";

import { useState, type ReactNode } from "react";

export type SectionChild = {
  id: string;
  label: string;
  content: ReactNode;
};

export type SectionTab = {
  id: string;
  label: string;
  // Ignored when the section has children (the first child renders instead).
  content?: ReactNode;
  // Sub-tabs; expand when this section is the active one.
  children?: SectionChild[];
};

// Hierarchy marker in front of every tab: long dash for sections, dot for
// subsections. Kept as a box (not text) so it aligns cleanly at any size.
function Marker({ sub }: { sub?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={
        sub
          ? "h-1 w-1 shrink-0 rounded-full bg-current"
          : "h-px w-6 shrink-0 bg-current opacity-40"
      }
    />
  );
}

export function SectionTabs({ sections }: { sections: SectionTab[] }) {
  const first = sections[0];
  const [active, setActive] = useState(
    first?.children?.[0]?.id ?? first?.id ?? ""
  );

  const activeSection =
    sections.find((s) => s.id === active || s.children?.some((c) => c.id === active)) ?? first;

  const panels: SectionChild[] = sections.flatMap((s) =>
    s.children?.length
      ? s.children
      : [{ id: s.id, label: s.label, content: s.content }]
  );
  const current = panels.find((p) => p.id === active) ?? panels[0];

  const tabClass = (isActive: boolean) =>
    `inline-flex items-center gap-2 text-sm transition-colors ${
      isActive
        ? "font-semibold text-[var(--foreground)]"
        : "text-[var(--muted)] hover:text-[var(--foreground)]"
    }`;

  return (
    <div className="mt-20">
      {/* Below xl: fixed top bar. xl+: fixed rail flush left, vertically
          centered. Content stays centered; the rail only appears once the
          viewport is wide enough that it can't overlap it. */}
      <div
        role="tablist"
        aria-label="Sections"
        className="fixed inset-x-0 top-0 z-10 flex flex-wrap items-center justify-center border-b border-[var(--border)] bg-[var(--background)] px-4 py-3 xl:absolute xl:inset-x-auto xl:left-6 xl:right-auto xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:items-start xl:gap-1 xl:border-0 xl:bg-transparent xl:p-0"
      >
        {sections.map((section) => {
          const expanded = activeSection?.id === section.id;
          return (
            <div
              key={section.id}
              className="contents xl:flex xl:flex-col xl:items-start xl:gap-1"
            >
              <button
                type="button"
                role="tab"
                id={`tab-${section.id}`}
                aria-selected={expanded}
                aria-expanded={section.children?.length ? expanded : undefined}
                aria-controls={`panel-${current?.id}`}
                onClick={() =>
                  setActive(section.children?.[0]?.id ?? section.id)
                }
                className={`${tabClass(expanded)} mx-2.5 xl:mx-0`}
              >
                <Marker />
                {section.label}
              </button>
              {/* Mount on expand so each child replays the card-enter
                  entrance with a stagger, same as the project cards. */}
              {expanded &&
                section.children?.map((child, i) => (
                  <button
                    key={child.id}
                    type="button"
                    role="tab"
                    id={`tab-${child.id}`}
                    aria-selected={active === child.id}
                    aria-controls={`panel-${child.id}`}
                    onClick={() => setActive(child.id)}
                    style={{ ["--stagger" as string]: `${150 + i * 100}ms` }}
                    className={`card-enter mx-2.5 xl:mx-0 xl:pl-5 ${tabClass(active === child.id)}`}
                  >
                    <Marker sub />
                    {child.label}
                  </button>
                ))}
            </div>
          );
        })}
      </div>

      {panels.map((panel) => (
        <div
          key={panel.id}
          role="tabpanel"
          id={`panel-${panel.id}`}
          aria-labelledby={`tab-${panel.id}`}
          hidden={panel.id !== current?.id}
        >
          {panel.content}
        </div>
      ))}
    </div>
  );
}
