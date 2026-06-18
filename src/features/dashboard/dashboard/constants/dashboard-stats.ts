import {
  UsersRound,
  BadgeDollarSign,
  ShoppingCart,
  Package,

} from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Users",
    value: "40,689",
    growth: "8.5%",
    description: "Up from yesterday",
    icon: UsersRound,
    color: "#1b1ea5",
    bgColor: "#E4E4FF",
    isPositive: true,
  },
  {
    title: "Total Sales",
    value: "$89,000",
    growth: "4.3%",
    description: "Up from yesterday",
    icon: BadgeDollarSign,
    color: "#10B981",
    bgColor: "#FEF2D6",
    isPositive: true,
  },
  {
    title: "Orders",
    value: "10,293",
    growth: "2.1%",
    description: "Up from yesterday",
    icon: ShoppingCart,
    color: "#F59E0B",
    bgColor: "#d9f7e7",
    isPositive: false,
  },
  {
    title: "Products",
    value: "2,040",
    growth: "1.2%",
    description: "Up from yesterday",
    icon: Package,
    color: "#8d4715",
    bgColor: "#ffded2",
    isPositive: false,
  },
];