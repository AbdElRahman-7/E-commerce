import {
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sidebarItems } from "@/shared/constants/menu.config";

const SidebarItem = () => {
  return (
    <List disablePadding>
      {sidebarItems.map((section) =>
        section.items.map((item) => {
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
        }),
      )}
    </List>
  );
};

export default SidebarItem;
