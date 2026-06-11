import type { Email, Label, SidebarGroup } from "../types/inbox.types";

export const ROWS_PER_PAGE = 5;

export const colorMap: Record<string, { bg: string; text: string }> = {
  "#4ADE80": { bg: "#DCFCE7", text: "#16A34A" },
  "#60A5FA": { bg: "#DBEAFE", text: "#2563EB" },
  "#FB923C": { bg: "#FFEDD5", text: "#EA580C" },
  "#C084FC": { bg: "#F3E8FF", text: "#9333EA" },
  "#F87171": { bg: "#FEE2E2", text: "#DC2626" },
  "#FBBF24": { bg: "#FEF3C7", text: "#D97706" },
};


export const sidebarItems: SidebarGroup[] = [
  {
    group: "main",
    items: [
      { title: "Inbox" },
      { title: "Starred" },
      { title: "Sent" },
      { title: "Draft" },
      { title: "Spam" },
      { title: "Important" },
      { title: "Bin" },
    ],
  },
];

export const initialLabels: Label[] = [
  { name: "Primary", color: "#4ADE80" },
  { name: "Friends", color: "#60A5FA" },
  { name: "Work", color: "#FB923C" },
  { name: "Important", color: "#C084FC" },
];

export const initialEmails: Email[] = [
  {
    id: 1,
    name: "Julia Jalal",
    label: "Primary",
    message: "Our Bachelor of Commerce program...",
    time: "8:38 AM",
    folder: "Inbox",
    starred: false,
    checked: false,
  },
  {
    id: 2,
    name: "Peter Lewis",
    label: "Friends",
    message: "Vacation Home Rental Success",
    time: "7:52 PM",
    folder: "Inbox",
    starred: true,
    checked: false,
  },
  {
    id: 3,
    name: "Anthony Bingos",
    label: "Work",
    message: "Free Classifieds Using Them...",
    time: "7:52 PM",
    folder: "Inbox",
    starred: false,
    checked: false,
  },
];