"use client";

import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { collections } from "../constants/collections";
import { CardProducts } from "@/shared/components/Products/card/CardProducts";

export default function AllProducts() {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handleSeeAll = () => {
    console.log("Redirecting...");
  };

  return (
    <Box sx={{ width: "100%", my: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          px: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: "#1A1A1A" }}>
          XIV COLLECTIONS 23-24
        </Typography>
        <Link href="/products">
          <Button
            variant="text"
            endIcon={
              <ArrowForwardIosIcon sx={{ fontSize: "12px !important" }} />
            }
            onClick={handleSeeAll}
            sx={{
              color: "#222",
              fontWeight: 600,
              "&:hover": { backgroundColor: "transparent", color: "#000" },
            }}
          >
            See All
          </Button>
        </Link>
      </Box>

      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          pb: 2,
          px: 1,
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {collections.map((collection) => (
          <CardProducts key={collection.id} product={collection} />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          variant="text"
          endIcon={<ExpandMoreIcon />}
          onClick={handleSeeAll}
          sx={{
            color: "#222222",
            fontWeight: 600,
            fontSize: "15px",
            textTransform: "none",
            gap: 0.5,
            "&:hover": { backgroundColor: "transparent", color: "#000000" },
          }}
        >
          More
        </Button>
      </Box>
    </Box>
  );
}
