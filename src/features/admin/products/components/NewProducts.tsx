"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Newproducts } from "../constants/data";
import Link from "next/link";

export default function NewProducts() {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handleSeeAll = () => {
    console.log("Redirecting...");
  };

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        sliderRef.current.scrollLeft -= scrollAmount;
      } else {
        sliderRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <Box sx={{ width: "100%", my: 7 }}>
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
          NEW THIS WEEK <sup>(50)</sup>
        </Typography>
        <Link href="/products">
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: "12px !important" }} />}
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
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {Newproducts.map((newproduct) => (
          <Card
            key={newproduct.id}
            elevation={0}
            sx={{
              minWidth: { xs: 240, sm: 280 },
              maxWidth: { xs: 240, sm: 280 },
              border: "1px solid #E5E7EB",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0px 12px 24px rgba(0,0,0,0.06)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={newproduct.img}
              alt={newproduct.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography variant="subtitle1">{newproduct.title}</Typography>
              <Typography
                variant="body2"
                sx={{ color: "#666", fontWeight: 500 }}
              >
                {newproduct.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: 0,
            backgroundColor: "#fff",
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
            backgroundColor: "#fff",
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
