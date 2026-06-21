"use client";

import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";

type NavbarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const mainmenus = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "New", path: "/new" },
];

const CenterLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="12,0 0,12 12,24" fill="#D1D5DB" />
    <polygon points="12,0 24,12 12,24" fill="#1A1A1A" />
  </svg>
);

export default function Navbar({ setOpenSidebar }: NavbarProps) {
  const [profileMenuAnchor, setProfileMenuAnchor] =
    useState<HTMLButtonElement | null>(null);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#F8F8F8",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, flex: 1 }}>
          <IconButton
            onClick={() => setOpenSidebar((prev) => !prev)}
            edge="start"
            aria-label="Toggle sidebar"
            sx={{ color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {mainmenus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.path}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontSize: "15px",
                    color: "#333",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { color: "#000" },
                  }}
                >
                  {menu.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/" aria-label="Go to homepage">
            <CenterLogo />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Link href="/wishlist" aria-label="Wishlist">
            <IconButton
              component="span"
              sx={{
                backgroundColor: "#222222",
                color: "#fff",
                width: 44,
                height: 44,
                "&:hover": { backgroundColor: "#000" },
              }}
            >
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Link>

          <Link href="/cart" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#222222",
                borderRadius: "50px",
                padding: "4px 4px 4px 20px",
                gap: 2,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { backgroundColor: "#000" },
              }}
            >
              <Typography
                sx={{ color: "#fff", fontSize: "14px", fontWeight: 500 }}
              >
                Cart
              </Typography>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShoppingBagOutlinedIcon
                  sx={{ color: "#000", fontSize: "18px" }}
                />
              </Box>
            </Box>
          </Link>

          <IconButton
            onClick={(e) => setProfileMenuAnchor(e.currentTarget)}
            aria-label="Open profile menu"
            aria-controls={profileMenuAnchor ? "profile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(profileMenuAnchor)}
            sx={{
              backgroundColor: "#222222",
              color: "#fff",
              width: 44,
              height: 44,
              "&:hover": { backgroundColor: "#000" },
            }}
          >
            <PersonIcon
              sx={{
                width: 40,
                height: 40,
                color: "#f5eeee",
                padding: 1,
              }}
            />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={profileMenuAnchor}
            open={Boolean(profileMenuAnchor)}
            onClose={() => setProfileMenuAnchor(null)}
            sx={{
              "& .MuiPaper-root": {
                mt: 1.5,
                minWidth: 150,
                borderRadius: "12px",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
              },
            }}
          >
            <MenuItem onClick={() => setProfileMenuAnchor(null)}>
              
              <Link href="dashboard/settings"> Profile </Link>
            </MenuItem>
            <MenuItem onClick={() => setProfileMenuAnchor(null)}>
              <Link href='/dashboard'></Link>
              My account
            </MenuItem>
            <MenuItem onClick={() => setProfileMenuAnchor(null)}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}