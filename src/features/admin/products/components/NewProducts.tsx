"use client";

import * as React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Newproducts } from "../constants/data";
import Link from "next/link";
import { CardProducts } from "@/shared/components/Products/card/CardProducts";

type NewProduct = {
  id: number;
  title: string;
  categories: string;
  price: string;
  img: string;
  variants?: number;
};

export default function NewProducts() {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <Box sx={{ width: "100%", my: 7 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          px: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, color: "#1A1A1A" }}>
          NEW THIS WEEK{" "}
          <sup style={{ color: "#000e8a", fontSize: "14px" }}>(50)</sup>
        </Typography>
        <Link href="/products">
          <Button
            variant="text"
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: "12px" }} />}
            sx={{
              color: "#222",
              fontWeight: 600,
              textTransform: "none",
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
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {(Newproducts as NewProduct[]).map((newproduct) => (
          <CardProducts key={newproduct.id} product={newproduct} />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: 0,
            color: "#000",
            "&:hover": { backgroundColor: "#F3F4F6" },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: 0,
            color: "#000",
            "&:hover": { backgroundColor: "#F3F4F6" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
