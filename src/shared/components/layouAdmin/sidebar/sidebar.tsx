"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  InputBase,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SidebarProps } from "@/shared/types/sidebar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const menuSidebar = [
  { title: "MEN", href: "/products?category=men" },
  { title: "WOMEN", href: "/products?category=women" },
  { title: "KIDS", href: "/products?category=kids" },
];

export const SidebarAdmin = ({
  openSidebar,
  setOpenSidebar,
  desktopVisible = true,
  mobileVisible = true,
}: SidebarProps) => {
  const [search, setSearch] = useState("");

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const filteredMenu = menuSidebar.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Drawer
        open={openSidebar}
        onClose={handleCloseSidebar}
        variant="temporary"
        sx={{
          display: mobileVisible ? { xs: "block", md: "none" } : "none",
          "& .MuiDrawer-paper": {
            width: "min(82vw, 320px)",
          },
        }}
      >
        <Box sx={{ width: "100%", p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#E5E7EB",
              px: 2,
              py: 1,
              width: "100%",
              mb: 2,
            }}
          >
            <SearchIcon
              sx={{
                color: "#000",
                mr: 1,
                fontSize: 20,
              }}
            />

            <InputBase
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                flex: 1,
                color: "#000",
                fontSize: 14,
                fontWeight: 500,
                "& .MuiInputBase-input": {
                  width: "100%",
                  padding: "0.5rem",
                  cursor: "text",
                },
              }}
            />
          </Box>

          <List>
            {filteredMenu.map((item) => (
              <ListItemButton
                key={item.title}
                component={Link}
                href={item.href}
                onClick={handleCloseSidebar}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{
          width: { md: 280, lg: 350 },
          borderRight: "1px solid #E5E7EB",
          backgroundColor: "#fff",
          display: desktopVisible ? { xs: "none", md: "block" } : "none",
          p: 2,
        }}
      >
        <List>
          {filteredMenu.map((item) => (
            <ListItemButton key={item.title} component={Link} href={item.href}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#E5E7EB",
              px: 2,
              py: 1,
              width: "100%",
            }}
          >
            <SearchIcon
              sx={{
                color: "#000",
                mr: 1,
                fontSize: 20,
              }}
            />

            <InputBase
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                flex: 1,
                color: "#000",
                fontSize: 14,
                fontWeight: 500,
                "& .MuiInputBase-input": {
                  width: "100%",
                  padding: "0.5rem",
                  cursor: "text",
                },
              }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { md: "36px", lg: "48px" },
              letterSpacing: "2px",
            }}
          >
            New Collection
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mt: { md: 8, lg: 17 },
              width: "100%",
            }}
          >
            <Button
              component={Link}
              href="/products"
              sx={{
                backgroundColor: "#e0e0e0",
                color: "#1a1a1a",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "18px",
                height: "52px",
                px: 3,
                borderRadius: 0,
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#d5d5d5",
                },
              }}
            >
              Go To Shop
              <ArrowRightAltIcon
                sx={{ fontSize: 32, ml: 2, fontWeight: 300 }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};