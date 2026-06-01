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
    isPositive: true,
  },

  {
    title: "Total Sales",
    value: "$89,000",
    growth: "4.3%",
    description: "Up from yesterday",
    icon: BadgeDollarSign,
        isPositive: true,

  },

  {
    title: "Orders",
    value: "10293",
    growth: "2.1%",
    description: "Up from yesterday",
    icon: ShoppingCart,    
    isPositive: false,

  },

  {
    title: "Products",
    value: "2040",
    growth: "1.2%",
    description: "Up from yesterday",
    icon: Package,
    isPositive: false,

  },
];
