"use client";

import React, { useState } from "react";
import Navbar from "../layout/navbar/Navbar";
import Sidebar from "./sidebar/sidebar";
import Box from "@mui/material/Box";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <Box
        sx={{
          flex: 1,
        }}
      >
        <Navbar setOpenSidebar={setOpenSidebar} />

        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
