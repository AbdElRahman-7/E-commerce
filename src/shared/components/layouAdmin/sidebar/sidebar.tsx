"use client";

import React from "react";
import { Drawer, Box } from "@mui/material";
import { SidebarProps } from "@/shared/types/sidebar";

export const SidebarAdmin = ({ openSidebar, setOpenSidebar }: SidebarProps) => {
  return (
    <>
      {/* Mobile */}
      <Drawer
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        variant="temporary"
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 260, p: 2 }}>sidebar Admin</Box>
      </Drawer>

      {/* Desktop */}
      <Box
        sx={{
          width: 350,
          minHeight: "100vh",
          borderRight: "1px solid #E5E7EB",
          backgroundColor: "#fff",
          display: { xs: "none", md: "block" },
          p: 2,
        }}
      >
        sidebar Admin
      </Box>
    </>
  );
};
