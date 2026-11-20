import type { IconName } from "./icons";

// One card type for every section (projects, education, about me).
export type Card = {
  icon: IconName;
  title: string;
  description: string;
  tags?: string[];
  // Present = rendered as an external link with a hover arrow.
  url?: string;
  // Only shown in dark mode, rendered with a dashed border.
  darkOnly?: boolean;
};
