"use client";

import { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../../../../shared/constants/data";


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 300,
        borderRadius: "20px",
        overflow: "hidden",
        background: slides[current].bg,
        display: "flex",
        alignItems: "center",
        px: {
          xs: 3,
          md: 8,
        },

        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 2px, transparent 2px)",
        backgroundSize: "40px 40px",
      }}
    >
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: 15,
          bgcolor: "white",
          width: 36,
          height: 36,

          "&:hover": {
            bgcolor: "#f3f3f3",
          },
        }}
      >
        <ChevronLeft size={18} />
      </IconButton>

      <Box
        sx={{
          color: "#fff",
          maxWidth: 500,
          ml: {
            xs: 4,
            md: 8,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            opacity: 0.8,
            mb: 1,
          }}
        >
          {slides[current].date}
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: 28,
              md: 40,
            },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          {slides[current].title}
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            opacity: 0.9,
            mb: 3,
          }}
        >
          {slides[current].subtitle}
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#FF8A34",
            borderRadius: "12px",
            px: 3,
            py: 1,

            "&:hover": {
              bgcolor: "#ff7b1a",
            },
          }}
        >
          Get Started
        </Button>
      </Box>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: 15,
          bgcolor: "white",
          width: 36,
          height: 36,

          "&:hover": {
            bgcolor: "#f3f3f3",
          },
        }}
      >
        <ChevronRight size={18} />
      </IconButton>
    </Box>
  );
}
