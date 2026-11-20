import { Banknote, Dices, Pin, Swords } from "lucide-react";
import type { Card } from "./cards";

export const projects: Card[] = [
  {
    icon: Dices,
    title: "Risky Reign",
    description: "Child of Settlers of Catan and Risk",
    tags: ["Beta"],
    url: "https://riskyreign.com/",
  },
  {
    icon: Banknote,
    title: "WatsTheSplit",
    description: "Split international trip costs",
    tags: ["Beta"],
    url: "https://jiathe.dev/watsthesplit",
  },
  {
    icon: Swords,
    title: "Slop Battlegrounds",
    description: "Generate and Bet on your Slop Creations",
    tags: ["WIP"],
    url: "https://github.com/2guud4u/Slop-Battlegrounds",
    darkOnly: true,
  },
  {
    icon: Pin,
    title: "Crum6s",
    description: "Discover and drop crum6bs around the world!",
    tags: ["WIP"],
    url: "https://github.com/2guud4u/Crum6s",
    darkOnly: true,
  },
];
