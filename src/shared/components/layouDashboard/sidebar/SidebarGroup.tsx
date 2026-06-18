import { sidebarItems } from "../../../../features/dashboard/inbox/constant/inboxConfig";
import { Box, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";

const SidebarGroup = () => {
  return (
    <Box>
      {sidebarItems.map((section) => (
        <Box
          key={section.id}
          sx={{
            mb: 4,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 1.5,
              fontWeight: 600,
            }}
          >
            {section.section}
          </Typography>

          <SidebarItem sectionId={section.id} />
        </Box>
      ))}
    </Box>
  );
};

export default SidebarGroup;
