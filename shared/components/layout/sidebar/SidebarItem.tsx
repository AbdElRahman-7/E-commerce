import {
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sidebarItems } from "../../../constants/inboxConfig";

interface SidebarItemProps {
  sectionId: string;
}

const SidebarItem = ({ sectionId }: SidebarItemProps) => {
  const section = sidebarItems.find((s) => s.id === sectionId);

  if (!section) return null;

  return (
    <List disablePadding>
      {section.items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItemButton
              sx={{
                borderRadius: "12px",
                mb: 1,

                "&:hover": {
                  backgroundColor: "#127ed6",
                  color: "#FFFFFF",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "40px",
                }}
              >
                <Icon size={20} />
              </ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItemButton>
          </Link>
        );
      })}
    </List>
  );
};

export default SidebarItem;
