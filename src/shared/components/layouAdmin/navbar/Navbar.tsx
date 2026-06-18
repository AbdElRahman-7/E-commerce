"use client";

import * as React from "react";

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

type NavbarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const mainmenus = ["Home", "Collections", "New"];

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
  const [mobileMenuAnchor, setMobileMenuAnchor] =
    React.useState<null | HTMLElement>(null);
  const [profileMenuAnchor, setProfileMenuAnchor] =
    React.useState<null | HTMLElement>(null);

  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#F8F8F8",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* LEFT SIDE: Menu Icon & Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3, flex: 1 }}>
            <IconButton
              onClick={() => setOpenSidebar(true)}
              edge="start"
              sx={{ color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
              {mainmenus.map((mainmenu) => (
                <Typography
                  key={mainmenu}
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontSize: "15px",
                    color: "#333",
                    cursor: "pointer",
                    "&:hover": { color: "#000" },
                  }}
                >
                  {mainmenu}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Logo */}
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
            <CenterLogo />
          </Box>

          {/* RIGHT SIDE: Action Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {/* FAVORITE ICON */}
            <IconButton
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

            {/* CART BUTTON (Pill Shape) */}
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

            {/* PROFILE DROPDOWN */}
            <IconButton
              onClick={(event) => setProfileMenuAnchor(event.currentTarget)}
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
                Profile
              </MenuItem>
              <MenuItem onClick={() => setProfileMenuAnchor(null)}>
                My account
              </MenuItem>
              <MenuItem onClick={() => setProfileMenuAnchor(null)}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DROPDOWN */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={closeMobileMenu}
      />
    </>
  );
}
