import {
  Banknote,
  Brain,
  Dices,
  Ghost,
  Network,
  Notebook,
  Pickaxe,
  Pin,
  Swords,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import type { Card } from "./cards";

export const personal: Card[] = [
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

export const hackathons: Card[] = [
  {
    icon: Network,
    title: "WhoTo@",
    description: "Knowledge graph designed to find POCs at work",
    tags: ["Walmart Global Tech", "Everybody Hacks 2026", "Graphiti", "Neo4j"],
  },
  {
    icon: WandSparkles,
    title: "JiffFusion",
    description: "Utilize Jev as decision maker for diffusion",
    tags: ["Jev Hackathon 2026"],
    url: "https://github.com/mian-abd/jiffusion",
  },
  {
    icon: TrendingUp,
    title: "TrendSpark",
    description: "Crawl through the web to find trending products for sellers",
    tags: ["Walmart Global Tech", "GT Hackathon 2026"],
  },
  {
    icon: Notebook,
    title: "ML assistant",
    description: "VSCode extension to assist in Juypter notebook ML experiments - recommendations, checkpoints, and more",
    tags: ["Nvidia Hackathon 2026"],
    url: "https://github.com/Jsackitey1/Nvidia-agent"
  },
    {
    icon: Pickaxe,
    title: "MOMI",
    description: "Multi-Objective reinforcement learning for Mining Inference",
    tags: ["MARA Hackathon 2025"],
    url: "https://github.com/Eman-Gon/mara-hackathon-2025"
  },
        {
    icon: Ghost,
    title: "Abducted",
    description: "A game where you play as an human abducting aliens",
    tags: ["Cal Poly Hackathon 2023"],
    url: "https://github.com/2guud4u/abducted"
  },
      {
    icon: Brain,
    title: "Hangman AI",
    description: "Unigram-based AI to play Hangman",
    tags: ["Cal Poly Hackathon 2021"],
    url: "https://github.com/2guud4u/hangman_game"
  },

  
];
