"use client";

import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import ReportIcon from "@mui/icons-material/Report";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DeleteIcon from "@mui/icons-material/Delete";

const items = [
  { id: 1, text: "Inbox", icon: <InboxIcon /> },
  { id: 2, text: "Starred", icon: <StarBorderIcon /> },
  { id: 3, text: "Sent", icon: <SendIcon /> },
  { id: 4, text: "Draft", icon: <DraftsIcon /> },
  { id: 5, text: "Spam", icon: <ReportIcon /> },
  { id: 6, text: "Important", icon: <LabelImportantIcon /> },
  { id: 7, text: "Bin", icon: <DeleteIcon /> },
];

export default function InboxSidebar() {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#fff",
        borderRadius: 1,
        p: 2,
      }}
    >
      <Button
        fullWidth
        variant="contained"
        sx={{
          mb: 4,
          borderRadius: 1,
        }}
      >
        + Compose
      </Button>

      <Typography
        sx={{
          mb: 2,
          fontWeight: 600,
        }}
      >
        My Email
      </Typography>

      <List>
        {items.map((item) => (
          <ListItemButton
            key={item.id}
            sx={{
              borderRadius: 1,
              mb: 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
