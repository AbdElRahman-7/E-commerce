"use client";

import {
  Box,
  Typography,
  Grid,
  InputBase,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const productsData = [
  {
    id: 1,
    type: "Cotton T Shirt",
    name: "Basic Slim Fit T-Shirt",
    price: 199,
    extraColors: 5,
    colorCode: "#F5F5DC",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fit=crop&w=500&h=600",
  },
  {
    id: 2,
    type: "Crewneck T-Shirt",
    name: "Basic Heavy Weight T-Shirt",
    price: 199,
    extraColors: 6,
    colorCode: "#222222",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?fit=crop&w=500&h=600",
  },
  {
    id: 3,
    type: "Cotton T Shirt",
    name: "Full Sleeve Zipper",
    price: 199,
    extraColors: 0,
    colorCode: "",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=500&h=600",
  },
];

const categories = [
  "NEW",
  "SHIRTS",
  "POLO SHIRTS",
  "SHORTS",
  "BEST SELLERS",
  "T-SHIRTS",
  "JEANS",
  "JACKETS",
];

export default function ProductsAdmin() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, width: "100%" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 900,
          color: "#1A1A1A",
          mb: 3,
          letterSpacing: "1px",
        }}
      >
        PRODUCTS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "center" },
          gap: 3,
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#E5E7EB",
            px: 2,
            py: 1,
            width: { xs: "100%", md: "400px" },
          }}
        >
          <SearchIcon sx={{ color: "#000", mr: 1, fontSize: "20px" }} />
          <InputBase
            placeholder="Search"
            sx={{ flex: 1, color: "#000", fontSize: "14px", fontWeight: 500 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: { xs: "flex-start", md: "flex-end" },
            flex: 1,
          }}
        >
          {categories.map((cat, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #D1D5DB",
                px: 2,
                py: 0.5,
                fontSize: "11px",
                fontWeight: cat === "NEW" ? 800 : 600,
                cursor: "pointer",
                transition: "0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "80px",
                "&:hover": { borderColor: "#000", color: "#000" },
              }}
            >
              {cat}
            </Box>
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {productsData.map((product) => (
          <Grid sx={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                borderRadius: 0,
                cursor: "pointer",
                "&:hover img": { transform: "scale(1.03)" },
              }}
            >
              <Box
                sx={{ overflow: "hidden", backgroundColor: "#F3F4F6", mb: 1.5 }}
              >
                <CardMedia
                  component="img"
                  height="450"
                  image={product.img}
                  alt={product.name}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>

              <CardContent sx={{ p: "0 !important" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 0.5,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}
                  >
                    {product.type}
                  </Typography>

                  {product.colorCode && (
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: product.colorCode,
                        border: "1px solid #D1D5DB",
                      }}
                    />
                  )}

                  {product.extraColors > 0 && (
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "#9CA3AF",
                        fontWeight: 600,
                      }}
                    >
                      +{product.extraColors}
                    </Typography>
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: 800, color: "#111" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#111" }}
                  >
                    $ {product.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
