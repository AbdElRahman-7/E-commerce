"use client";

import { Box, Typography, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Grid from "@mui/material/Grid";

const productImages = [
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?fit=crop&w=600&h=800",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fit=crop&w=600&h=800",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=600&h=800",
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?fit=crop&w=600&h=800",
  "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?fit=crop&w=600&h=800",
];

const colors = [
  "#D1D5DB",
  "#9CA3AF",
  "#1A1A1A",
  "#A7F3D0",
  "#FFFFFF",
  "#C7D2FE",
];
const sizes = ["XS", "S", "M", "L", "XL", "2X"];

export default function SingleProduct() {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [selectedColor, setSelectedColor] = useState(colors[2]);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, maxWidth: "1200px", margin: "0 auto" }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              gap: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#F3F4F6",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={mainImage}
                alt="Main Product"
                sx={{
                  width: "100%",
                  maxHeight: "700px",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column" },
                gap: 1.5,
                overflowX: { xs: "auto", sm: "visible" },
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {productImages.map((img, index) => (
                <Box
                  key={index}
                  onClick={() => setMainImage(img)}
                  sx={{
                    width: "80px",
                    height: "100px",
                    cursor: "pointer",
                    border:
                      mainImage === img
                        ? "1px solid #000"
                        : "1px solid transparent",
                    opacity: mainImage === img ? 1 : 0.6,
                    transition: "0.2s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{ position: "relative", pt: { xs: 2, md: 4 } }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: { xs: 0, md: 16 },
              right: 0,
              color: "#000",
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>

          <Typography
            sx={{ fontWeight: 800, fontSize: "1.2rem", color: "#111", mb: 1 }}
          >
            ABSTRACT PRINT SHIRT
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: "1.1rem", color: "#111", mb: 0.5 }}
          >
            $99
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#6B7280", mb: 4 }}>
            MRP incl. of all taxes
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              color: "#111",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography sx={{ fontSize: "13px", color: "#6B7280", mb: 1 }}>
              Color
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {colors.map((color) => (
                <Box
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  sx={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: color,
                    cursor: "pointer",
                    border: color === "#FFFFFF" ? "1px solid #D1D5DB" : "none", // لو اللون أبيض حطله حدود
                    outline:
                      selectedColor === color ? "2px solid #000" : "none",
                    outlineOffset: "2px",
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: "13px", color: "#6B7280", mb: 1 }}>
              Size
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {sizes.map((size) => (
                <Box
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  sx={{
                    border: "1px solid",
                    borderColor: selectedSize === size ? "#000" : "#D1D5DB",
                    backgroundColor:
                      selectedSize === size ? "#000" : "transparent",
                    color: selectedSize === size ? "#FFF" : "#000",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": {
                      borderColor: "#000",
                    },
                  }}
                >
                  {size}
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#6B7280",
                cursor: "pointer",
                "&:hover": { color: "#000" },
              }}
            >
              FIND YOUR SIZE
            </Typography>
            <Typography
              sx={{ fontSize: "11px", fontWeight: 600, color: "#6B7280" }}
            >
              |
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#6B7280",
                cursor: "pointer",
                "&:hover": { color: "#000" },
              }}
            >
              MEASUREMENT GUIDE
            </Typography>
          </Box>

          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#E5E7EB", 
              color: "#000",
              borderRadius: 0,
              py: 1.5,
              fontWeight: 800,
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "#D1D5DB",
              },
            }}
          >
            ADD
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
