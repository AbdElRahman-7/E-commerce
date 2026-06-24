"use client";

import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Box from "@mui/material/Box";
import { SidebarAdmin } from "./sidebar/sidebar";
import { usePathname } from "next/navigation";
import FilterSidebar from "@/features/admin/products/components/FilterSidebar";
import StoreProvider from "../../../store/StoreProvider";

export default function AdminWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  const isProductsPage = pathname === "/products"; 

  return (
    <StoreProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Navbar setOpenSidebar={setOpenSidebar} />

        <Box
          sx={{ display: "flex", flexGrow: 1, minHeight: 0, overflow: "hidden" }}
        >
          {isProductsPage ? (
            <FilterSidebar
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
          ) : (
            <SidebarAdmin
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
          )}

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              minWidth: 0,
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </StoreProvider>
  );
}