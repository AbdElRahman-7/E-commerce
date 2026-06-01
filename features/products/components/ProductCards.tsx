"use client";

import Image from "next/image";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Rating,
} from "@mui/material";

import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

import { products } from "../constants/dataproucts";

export default function ProductCards() {
  return (
    <Box
      sx={{
        display: "grid",
        marginTop: 2,
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(3, 1fr)",
        },
        gap: 3,
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            position: "relative",
            gap: 2,
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: 300,
              backgroundColor: "#F5F6FA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                left: 10,
                backgroundColor: "rgba(255,255,255,0.8)",

                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <ChevronLeft size={18} />
            </IconButton>


            <Box
              sx={{
                position: "relative",
                width: 220,
                height: 220,
              }}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </Box>

            <IconButton
              sx={{
                position: "absolute",
                right: 10,
                backgroundColor: "rgba(255,255,255,0.8)",

                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <ChevronRight size={18} />
            </IconButton>
          </Box>

          <CardContent
            sx={{
              p: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                {product.title}
              </Typography>

              <IconButton
                sx={{
                  border: "1px solid #E5E7EB",
                }}
              >
                <Heart size={18} />
              </IconButton>
            </Box>

            <Typography
              sx={{
                color: "#3B82F6",
                fontWeight: 700,
                fontSize: 22,
                mb: 1,
              }}
            >
              {product.price}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
              }}
            >
              <Rating value={product.rating} readOnly />

              <Typography
                sx={{
                  color: "#9CA3AF",
                }}
              >
                ({product.reviews})
              </Typography>
            </Box>

            
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#EEF2FF",
                color: "#111827",
                borderRadius: "14px",
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#E0E7FF",
                  boxShadow: "none",
                },
              }}
            >
              Edit Product
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
