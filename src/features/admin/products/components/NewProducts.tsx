"use client";

import * as React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Newproducts } from "../constants/data";
import Link from "next/link";
import { CardProducts } from "@/shared/components/Products/card/CardProducts";

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
    <Box
      sx={{
        width: "100%",
        mx: 0,
        my: { xs: 5, md: 7 },
        px: { xs: 1, sm: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: "#1A1A1A",
            lineHeight: 0.95,
            letterSpacing: "-0.5px",
          }}
        >
          NEW THIS WEEK{" "}
          <sup
            style={{
              color: "#000e8a",
              fontSize: "14px",
            }}
          >
            (50)
          </sup>
        </Typography>

        <Link href="/products">
          <Button
            variant="text"
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: "12px" }} />}
            sx={{
              color: "#222",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#000",
              },
            }}
          >
            See All
          </Button>
        </Link>
      </Box>

      <Box
        ref={sliderRef}
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: {
            xs: "78vw",
            sm: "280px",
            md: "calc((100% - 72px) / 4)",
          },
          gap: 3,
          overflowX: "auto",
          pb: 2,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {Newproducts.map((newproduct) => (
          <CardProducts key={newproduct.id} product={newproduct} />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 2.5,
        }}
      >
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: 0,
            color: "#000",
            "&:hover": {
              backgroundColor: "#F3F4F6",
            },
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
            "&:hover": {
              backgroundColor: "#F3F4F6",
            },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}