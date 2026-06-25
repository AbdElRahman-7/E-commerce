"use client";

import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Box from "@mui/material/Box";
import { SidebarAdmin } from "./sidebar/sidebar";
import { usePathname } from "next/navigation";
import FilterSidebar from "@/features/admin/products/components/FilterSidebar";
import StoreProvider from "../../../store/StoreProvider";
import Footer from "./footer/Footer";

export default function AdminWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  const isProductsPage = pathname === "/products";
  const isHomePage = pathname === "/";

  return (
    <StoreProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Navbar setOpenSidebar={setOpenSidebar} />

        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            width: "100%",
            alignItems: "stretch",
          }}
        >
          {!isHomePage && (
            <Box sx={{ flexShrink: 0 }}>
              {isProductsPage ? (
                <FilterSidebar
                  openSidebar={openSidebar}
                  setOpenSidebar={setOpenSidebar}
                />
              ) : (
                <SidebarAdmin
                  openSidebar={openSidebar}
                  setOpenSidebar={setOpenSidebar}
                  desktopVisible={true}
                  mobileVisible={true}
                />
              )}
            </Box>
          )}

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              minWidth: 0,
              overflowY: "auto",
              overflowX: "hidden",
              p: pathname === "/" ? 0 : { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            {children}
          </Box>
        </Box>

        <Footer />
      </Box>
    </StoreProvider>
  );
}