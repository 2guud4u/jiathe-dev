import { BrainCircuit, Briefcase, Building2, Code2, Tent } from "lucide-react";
import type { Card } from "./cards";

// Card pattern: description = "Company · Location", one pill for the dates.
export const work: Card[] = [
  {
    icon: Briefcase,
    title: "Software Engineer",
    description: "Walmart Global Tech · Sunnyvale, CA",
    tags: ["Oct 2025 – Present"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Intern",
    description: "SentiMetrix · Remote",
    tags: ["Oct 2024 – Oct 2025"],
  },
  {
    icon: Briefcase,
    title: "Software Engineer Intern",
    description: "Walmart Global Tech · Sunnyvale, CA",
    tags: ["May 2024 – Jul 2024"],
  },
  {
    icon: Building2,
    title: "Jr. IT Analyst",
    description: "Arch Insurance Group · Remote",
    tags: ["Aug 2023 – May 2024"],
  },
  {
    icon: Code2,
    title: "Full Stack Developer (UFEI)",
    description: "Cal Poly SLO · San Luis Obispo, CA",
    tags: ["May 2023 – May 2024"],
  },
  {
    icon: Code2,
    title: "Web Development Intern (COSAM)",
    description: "Cal Poly SLO · San Luis Obispo, CA",
    tags: ["Mar 2023 – Mar 2024"],
  },
  {
    icon: Tent,
    title: "Summer Camp Counselor",
    description: "Cal Poly EPIC · California",
    tags: ["Jun 2022 – Jul 2022"],
  },
];
