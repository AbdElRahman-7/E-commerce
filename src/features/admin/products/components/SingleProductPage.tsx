"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  categories: string;
  price: string;
  img: string;
  variants?: number;
}

interface Props {
  product: Product;
}

export default function SingleProductPage({ product }: Props) {
  const router = useRouter();
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2, md: 4 }, py: 6 }}>
      <Link href="/products" style={{ textDecoration: "none" }}>
        <Button
          startIcon={<ArrowBackIosNewIcon sx={{ fontSize: 12 }} />}
          sx={{
            color: "#555",
            textTransform: "none",
            fontWeight: 500,
            mb: 4,
            "&:hover": { backgroundColor: "transparent", color: "#000" },
          }}
        >
          Back to Products
        </Button>
      </Link>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: 480 },
            aspectRatio: "3 / 4",
            backgroundColor: "#EEEEF3",
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={product.img}
            alt={product.title}
            fill
            sizes="(max-width: 600px) 100vw, 480px"
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>

        <Box sx={{ flex: 1, pt: { md: 2 } }}>
          <Typography
            variant="body2"
            sx={{ color: "#6B7280", fontSize: 13, mb: 1, letterSpacing: 1 }}
          >
            {product.categories}
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#1A1A1A", mb: 2 }}
          >
            {product.title}
          </Typography>

          {product.variants && (
            <Typography
              variant="body2"
              sx={{ color: "#6B7280", mb: 2 }}
            >
              +{product.variants} variants available
            </Typography>
          )}

          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#1A1A1A", mb: 3 }}
          >
            ${product.price}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="outlined"
              startIcon={<AddShoppingCartIcon />}
              sx={{
                borderColor: "#1A1A1A",
                color: "#1A1A1A",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              Add to Cart
            </Button>

            <Button
              variant="contained"
              startIcon={<ShoppingBagOutlinedIcon />}
              onClick={() => router.push("/products/checkout")}
              sx={{
                backgroundColor: "#1A1A1A",
                color: "#fff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
