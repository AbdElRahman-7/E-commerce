"use client";

import React, { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { SidebarProps } from "@/shared/types/sidebar";
import { mainMenu, pageItems, settingsItems } from "@/shared/constants/sidebar.data";
import { logout as logoutAction } from "@/actions/auth";




export default function Sidebar({ openSidebar, setOpenSidebar }: SidebarProps) {
  return (
    <>
      {/* Mobile Sidebar */}
      <Drawer
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        variant="temporary"
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
        sx={{
          width: 260,
          minHeight: "100vh",
          borderRight: "1px solid #E5E7EB",
          backgroundColor: "#fff",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <SidebarContent />
      </Box>
    </>
  );
}

function SidebarContent() {
  {/*With the help of AI */}
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
      router.refresh();
    });
  };

  return (
    <Box
      sx={{
        width: 260,
        p: 2,
      }}
    >
      {/* Logo */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 4,
        }}
      >
        DashStack
      </Typography>

      {/* Main Menu */}
      <List>
        {mainMenu.map((item) => {
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.title}
              component={Link}
              href={item.href}
              sx={{
                borderRadius: 2,
                mb: 1,

                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
              }}
            >
              <Icon size={20} />

              <ListItemText primary={item.title} sx={{ ml: 2 }} />
            </ListItemButton>
          );
        })}
      </List>

      <Divider sx={{ my: 3 }} />

      {/* Pages */}
      <Typography
        variant="body2"
        sx={{
          color: "#9CA3AF",
          px: 2,
          mb: 1,
        }}
      >
        PAGES
      </Typography>

      <List>
        {pageItems.map((item) => {
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.title}
              component={Link}
              href={item.href}
              sx={{
                borderRadius: 2,
                mb: 1,

                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
              }}
            >
              <Icon size={20} />

              <ListItemText primary={item.title} sx={{ ml: 2 }} />
            </ListItemButton>
          );
        })}
      </List>

      {/* Settings */}
      <Box
        sx={{
          mt: 5,
        }}
      >
        <List>
          {settingsItems.map((item) => {
            const Icon = item.icon;
            const isLogout = item.title === "Logout";

            if (isLogout) {
              return (
                <ListItemButton
                  key={item.title}
                  onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                    event.preventDefault();
                    handleLogout();
                  }}
                  disabled={isPending}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                >
                  <Icon size={20} />
                  <ListItemText primary={item.title} sx={{ ml: 2 }} />
                </ListItemButton>
              );
            }

            return (
              <ListItemButton
                key={item.title}
                component={Link}
                href={item.href}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  "&:hover": {
                    backgroundColor: "#F3F4F6",
                  },
                }}
              >
                <Icon size={20} />
                <ListItemText primary={item.title} sx={{ ml: 2 }} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
