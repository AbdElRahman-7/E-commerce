"use client";

import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/sidebar";
import Box from "@mui/material/Box";

export default function DashboardWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Navbar setOpenSidebar={setOpenSidebar} />
        <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>{children}</Box>
      </Box>
    </Box>
  );
}