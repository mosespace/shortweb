import { ReactElement } from "react";

type ISidebarLinks = {
  href: string;
  label: string;
  icon: ReactElement;
  badge: string | null;
  active?: boolean;
};
