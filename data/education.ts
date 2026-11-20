import { GraduationCap, ScrollText } from "lucide-react";
import type { Card } from "./cards";

export const education: Card[] = [
  {
    icon: GraduationCap,
    title: "M.S. Computer Science",
    description: "Cal Poly San Luis Obispo",
    tags: ["GPA 3.9"],
  },
  {
    icon: ScrollText,
    title: "Master's Thesis",
    description:
      "Video-Based Automation of Physical Therapy Functional Tests: Shoulder Arc Angle Prediction and Balance Test Phase Segmentation",
    tags: ["Computer Vision", "Physical Therapy"],
    // Ships from public/thesis.pdf (copied from ~/Desktop/Thesis/main.pdf).
    url: "/thesis.pdf",
  },
  {
    icon: GraduationCap,
    title: "B.S. Computer Science",
    description: "Cal Poly San Luis Obispo",
    tags: ["GPA 3.87", "Summa Cum Laude"],
  },
];
