import type { LucideIcon } from "lucide-react";

// One card type for every section (projects, education, about me).
export type Card = {
  // Any lucide icon: import it in the data file, then `icon: Dices`.
  // https://lucide.dev/icons
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  // Present = rendered as an external link with a hover arrow.
  url?: string;
  // Only shown in dark mode, rendered with a dashed border.
  darkOnly?: boolean;
};
