"use client";

import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Box from "@mui/material/Box";
import { SidebarAdmin } from "./sidebar/sidebar";

export default function AdminWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          flex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar setOpenSidebar={setOpenSidebar} />
        <SidebarAdmin
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />

        <Box component="main" sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
