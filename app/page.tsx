import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FallingHua } from "@/components/FallingHua";
import { SectionTabs } from "@/components/SectionTabs";
import type { Card } from "@/data/cards";
import { projects } from "@/data/projects";
import { about, education } from "@/data/profile";
import { work } from "@/data/work";

function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const inner = (
          <>
            <div className="flex items-center justify-between">
              <Icon className="h-6 w-6 text-[var(--muted)]" />
              {card.url && (
                <ArrowUpRight className="h-4 w-4 text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </div>
            <h3 className="mt-4 font-semibold">{card.title}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {card.description}
            </p>
            {!!card.tags?.filter(Boolean).length && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {card.tags.filter(Boolean).map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </>
        );
        const classes = `card-enter group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors ${
          card.darkOnly ? "card-dashed hidden dark:block" : ""
        } ${card.url ? "hover:border-[var(--muted)]" : ""}`;
        const stagger = { ["--stagger" as string]: `${i * 100}ms` };

        return card.url ? (
          <a
            key={card.title}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            style={stagger}
            className={classes}
          >
            {inner}
          </a>
        ) : (
          <div key={card.title} style={stagger} className={classes}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 pb-10 pt-14 xl:pt-20">
      <div className="my-auto">
      <p className="text-lg text-[var(--muted)]">Hey, I&apos;m</p>
      <h1 className="mt-2 text-6xl font-bold tracking-tight sm:text-8xl">
        <span className="font-bold">Jia</span>
        <FallingHua />
        <span className="font-normal"> Jiang.</span>
      </h1>

      <SectionTabs
        sections={[
          {
            id: "projects",
            label: "Projects",
            content: <CardGrid cards={projects} />,
          },
          {
            id: "education",
            label: "Education",
            content: <CardGrid cards={education} />,
          },
          {
            id: "work",
            label: "Work",
            content: <CardGrid cards={work} />,
          },
          {
            id: "about",
            label: "About me",
            content: <CardGrid cards={about} />,
          },
        ]}
      />

      <ThemeToggle />
      </div>
    </main>
  );
}
