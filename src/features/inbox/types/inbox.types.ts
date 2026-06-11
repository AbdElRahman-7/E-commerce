export type Email = {
  id: number;
  name: string;
  label: string;
  message: string;
  time: string;
  folder: string;
  starred: boolean;
  checked: boolean;
};

export type Label = {
  name: string;
  color: string;
};

export type SidebarItem = {
  title: string;
};

export type SidebarGroup = {
  group: string;
  items: SidebarItem[];
};