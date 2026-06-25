"use client";

import { useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import Collections from "../components/AllProducts";
import NewCollections from "../components/NewCollections";
import NewProducts from "../components/NewProducts";
import ProductDescription from "../components/ProductDescription";
import WovenImageList from "../components/WovenImageList";
import { SidebarAdmin } from "@/shared/components/layouAdmin/sidebar/sidebar";

const AdminPages = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          px: { xs: 1, sm: 2 },
          pt: 1,
          pb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.25,
            mb: 3,
          }}
        >
          {[
            { label: "MEN", href: "/products?category=men" },
            { label: "WOMEN", href: "/products?category=women" },
            { label: "KIDS", href: "/products?category=kids" },
          ].map((item) => (
            <Box
              key={item.label}
              component={Link}
              href={item.href}
              sx={{
                width: "fit-content",
                textDecoration: "none",
                color: "#1A1A1A",
                fontSize: 18,
                letterSpacing: "0.08em",
                fontWeight: 400,
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            backgroundColor: "#E5E5E5",
            px: 2,
            py: 1.2,
            mb: 4,
            borderRadius: 0.5,
          }}
        >
          <SearchIcon sx={{ color: "#111", fontSize: 20 }} />

          <Typography
            sx={{
              ml: "auto",
              color: "#4B4B4B",
              letterSpacing: "0.2em",
            }}
          >
            Search
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontWeight: 900,
              lineHeight: 0.88,
              fontSize: {
                xs: "3rem",
                sm: "4.3rem",
              },
              letterSpacing: "-0.06em",
              color: "#222",
            }}
          >
            NEW
            <br />
            COLLECTION
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: 20,
              color: "#2A2A2A",
            }}
          >
            Summer
          </Typography>

          <Typography
            sx={{
              fontSize: 20,
              color: "#2A2A2A",
            }}
          >
            2024
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", lg: "grid" },
          gridTemplateColumns: "350px minmax(0, 1fr)",
          gap: 4,
          alignItems: "end",
          mb: 8,
          width: "100%",
        }}
      >
        <SidebarAdmin
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          mobileVisible={false}
        />

        <NewCollections />
      </Box>

      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          mb: 2,
          px: { xs: 1, sm: 2 },
        }}
      >
        <NewCollections />
      </Box>

      <Box
        sx={{
          width: "100%",
          px: { xs: 1, sm: 2, md: 0 },
        }}
      >
        <NewProducts />
        <Collections />
        <ProductDescription />
        <WovenImageList />
      </Box>
    </>
  );
};

export default AdminPages;