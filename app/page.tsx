import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FallingHua } from "@/components/FallingHua";
import { icons, projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-lg text-[var(--muted)]">Hey, I&apos;m</p>
      <h1 className="mt-2 text-6xl font-bold tracking-tight sm:text-8xl">
        <span className="font-bold">Jia</span>
        <FallingHua />
        <span className="font-normal"> Jiang.</span>
      </h1>

      <section className="mt-20 grid gap-4 sm:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = icons[project.icon];
          return (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ["--stagger" as string]: `${i * 100}ms` }}
              className={`card-enter group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--muted)] ${
                project.darkOnly ? "card-dashed hidden dark:block" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-[var(--muted)]" />
                <ArrowUpRight className="h-4 w-4 text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h2 className="mt-4 font-semibold">{project.name}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          );
        })}
      </section>

      <ThemeToggle />
    </main>
  );
}
