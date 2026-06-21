"use client";

import * as React from "react";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,

} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LanguageSwitcher from "./LanguageSwitcher";
import NotificationButton from "./NotificationButton";
import ProfileMenu from "./ProfileMenu";
import SearchBox from "./SearchBox";





type NavbarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ setOpenSidebar }: NavbarProps) {
  const [mobileMenuAnchor, setMobileMenuAnchor] =
    React.useState<null | HTMLElement>(null);

  const openMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };


  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",

          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "72px",

            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            gap: 2,

            px: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              gap: 2,

              flex: 1,
            }}
          >
            <IconButton
              onClick={() => setOpenSidebar(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "#111827",
              }}
            >
              <MenuIcon />
            </IconButton>

            <SearchBox />
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",

              gap: 3,

              flexShrink: 0,
            }}
          >
            <NotificationButton />

                <LanguageSwitcher />

            <ProfileMenu />
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              onClick={openMobileMenu}
              sx={{
                color: "#111827",
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

    <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={closeMobileMenu}
      >
        <MenuItem>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Badge badgeContent={6} color="primary">
              <NotificationsNoneIcon />
            </Badge>

            <Typography>Notifications</Typography>
          </Box>
        </MenuItem>

        <MenuItem>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>English</Typography>

            <KeyboardArrowDownIcon />
          </Box>
        </MenuItem>

        <MenuItem>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Avatar src="https://i.pravatar.cc/300" alt="Profile" />

            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Moni Roy
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Admin
              </Typography>
              
            </Box>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
}
