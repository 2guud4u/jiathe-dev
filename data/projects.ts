import {
  Code2,
  Globe,
  Rocket,
  Terminal,
  Dices,
  Banknote,
  Swords,
  Pin,
  type LucideIcon,
} from "lucide-react";

// To use a new icon: import it above, then add it here.
// Available icons: https://lucide.dev/icons
export const icons = {
  rocket: Rocket,
  globe: Globe,
  code: Code2,
  terminal: Terminal,
  dices: Dices,
  banknote: Banknote,
  swords: Swords,
  pin: Pin
} satisfies Record<string, LucideIcon>;

export type Project = {
  icon: keyof typeof icons;
  name: string;
  description: string;
  tags: string[];
  url: string;
  // Only shown in dark mode, rendered with a dashed border.
  darkOnly?: boolean;
};
export const projects: Project[] = [
  {
    icon: "dices",
    name: "Risky Reign",
    description: "Child of Settlers of Catan and Risk",
    tags: ["Beta"],
    url: "https://riskyreign.com/",
  },
  {
    icon: "banknote",
    name: "WatsTheSplit",
    description: "Split international trip costs",
    tags: ["WIP"],
    darkOnly: true,
    url: "https://jiathe.dev/watsthesplit",
  },
  {
    icon: "swords",
    name: "Slop Battlegrounds",
    description: "Generate and Bet on your Slop Creations",
    tags: ["WIP"],
    url: "https://github.com/2guud4u/Slop-Battlegrounds",
    darkOnly: true,
  },
    {
    icon: "pin",
    name: "Crum6s",
    description: "Discover and drop crum6bs around the world!",
    tags: ["WIP"],
    url: "https://github.com/2guud4u/Crum6s",
    darkOnly: true,
  },
];
