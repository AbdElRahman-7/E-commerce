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
import { usePathname, useRouter } from "next/navigation";

type NavbarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const mainmenus = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/products" },
  { name: "New", path: "/products" },
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

const BackArrowIcon = () => (
  <svg
    width="47.5"
    height="12"
    viewBox="0 0 92 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 12H88"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path d="M2 12L10 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M2 12L10 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export default function Navbar({ setOpenSidebar }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [profileMenuAnchor, setProfileMenuAnchor] =
    useState<null | HTMLElement>(null);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  };

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
          {!isHomePage && (
            <IconButton
              onClick={handleBack}
              edge="start"
              aria-label="Go back"
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "#060607",
                borderRadius: 0,
                width: "auto",
                height: "auto",
                p: 0,
                mr: 0.5,
                ml: 0.5,
                alignSelf: "flex-start",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <BackArrowIcon />
            </IconButton>
          )}

          <IconButton
            onClick={() => setOpenSidebar((prev) => !prev)}
            edge="start"
            aria-label="Toggle sidebar"
            sx={{
              color: "#000",
              display: {
                xs: isHomePage ? "inline-flex" : "none",
                md: "inline-flex",
              },
            }}
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
                  sx={{
                    color: "#111827",
                    fontWeight: 600,
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "#2563EB",
                    },
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
          <IconButton
            component={Link}
            href="/wishlist"
            aria-label="Wishlist"
            sx={{
              backgroundColor: "#222222",
              color: "#fff",
              width: { xs: 38, sm: 44 },
              height: { xs: 38, sm: 44 },
              "&:hover": { backgroundColor: "#000" },
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>

          <Box
            component={Link}
            href="/cart"
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#222222",
              borderRadius: "50px",
              padding: "4px 4px 4px 20px",
              gap: 2,
              cursor: "pointer",
              transition: "0.2s",
              textDecoration: "none",
              "&:hover": { backgroundColor: "#000" },
            }}
          >
            <Typography
              sx={{ color: "#fff", fontSize: "14px", fontWeight: 500, display: { xs: "none", sm: "block" } }}
            >
              Cart
            </Typography>

            <Box
              sx={{
                width: { xs: 30, sm: 36 },
                height: { xs: 30, sm: 36 },
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

          <IconButton
            onClick={(e) => setProfileMenuAnchor(e.currentTarget)}
            aria-label="Open profile menu"
            aria-controls={profileMenuAnchor ? "profile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(profileMenuAnchor)}
            sx={{
              backgroundColor: "#222222",
              color: "#fff",
              width: { xs: 38, sm: 44 },
              height: { xs: 38, sm: 44 },
              "&:hover": { backgroundColor: "#000" },
            }}
          >
            <PersonIcon fontSize="small" />
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
            <MenuItem
              component={Link}
              href="/dashboard/settings"
              onClick={() => setProfileMenuAnchor(null)}
            >
              Profile
            </MenuItem>

            <MenuItem
              component={Link}
              href="/dashboard"
              onClick={() => setProfileMenuAnchor(null)}
            >
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
