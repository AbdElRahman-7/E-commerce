"use client";

import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const items = ["Inbox", "Starred", "Sent", "Draft", "Spam", "Important", "Bin"];

export default function InboxSidebar() {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#fff",
        borderRadius: 4,
        p: 2,
      }}
    >
      <Button
        fullWidth
        variant="contained"
        sx={{
          mb: 4,
          borderRadius: 3,
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
            key={item}
            sx={{
              borderRadius: 2,
              mb: 1,
            }}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
