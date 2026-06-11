import { SidebarItem } from "../types/sidebar";
import {
  LayoutDashboard,
  Package,
  Heart,
  Inbox,
  ShoppingCart,
  Boxes,
  BadgeDollarSign,
  Calendar,
  ClipboardList,
  Contact,
  Receipt,
  Puzzle,
  Users,
  Table,
  Settings,
  LogOut,
} from "lucide-react";

export const mainMenu: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Favorites",
    href: "/dashboard/favorites",
    icon: Heart,
  },
  {
    title: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    title: "Order Lists",
    href: "/dashboard/oredrlists",
    icon: ShoppingCart,
  },
  {
    title: "Product Stock",
    href: "/dashboard/productstock",
    icon: Boxes,
  },
];

export const pageItems: SidebarItem[] = [
  {
    title: "Pricing",
    href: "/dashboard/pricing",
    icon: BadgeDollarSign,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "To-Do",
    href: "/dashboard/todo",
    icon: ClipboardList,
  },
  {
    title: "Contact",
    href: "/dashboard/contact",
    icon: Contact,
  },
  {
    title: "Invoice",
    href: "/dashboard/invoice",
    icon: Receipt,
  },
  {
    title: "UI Elements",
    href: "/dashboard/uielements",
    icon: Puzzle,
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Tables",
    href: "/dashboard/tables",
    icon: Table,
  },
];

export const settingsItems: SidebarItem[] = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    href: "/auth/login",
    icon: LogOut,
  },
];
