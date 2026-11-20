import {
  Banknote,
  BookOpen,
  Code2,
  Dices,
  Globe,
  GraduationCap,
  MapPin,
  Pin,
  Rocket,
  Swords,
  Terminal,
  UserRound,
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
  pin: Pin,
  graduationCap: GraduationCap,
  bookOpen: BookOpen,
  userRound: UserRound,
  mapPin: MapPin,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
