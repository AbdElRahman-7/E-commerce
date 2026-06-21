import { LucideIcon } from "lucide-react";

export type SidebarProps = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SidebarItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};
