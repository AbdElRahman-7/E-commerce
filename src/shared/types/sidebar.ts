import { LucideIcon } from "lucide-react";

export type SidebarProps = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  desktopVisible?: boolean;
  mobileVisible?: boolean;
};

export type SidebarItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};
