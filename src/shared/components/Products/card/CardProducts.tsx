"useclient";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { CardProductsProps } from "@/shared/types/card";
import Link from "next/link";

export const CardProducts = ({ product }: CardProductsProps) => {
  return (
    <Link href={`/products/${product.id}`} passHref style={{ textDecoration: 'none' }}>
        <Card
    key={product.id}
      elevation={0}
      sx={{
        minWidth: { xs: 220, sm: 260 },
        maxWidth: { xs: 220, sm: 260 },
        border: "none",
        borderRadius: 0,
        cursor: "pointer",
        backgroundColor: "transparent",
        transition: "transform 0.2s",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 4",
          backgroundColor: "#EEEEF3",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Image
          src={product.img}
          alt={product.title}
          fill
          sizes="(max-width: 600px) 220px, 260px"
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <IconButton
            size="small"
            sx={{
              backgroundColor: "transparent",
              width: 36,
              height: 36,
              borderRadius: 0,
            }}
            onClick={(e) => {
                e.preventDefault(); 
                console.log("Added to cart:", product.id);
              }}
          >
            <AddIcon fontSize="small" sx={{ color: "#7f7f82" }} />
          </IconButton>
        </Box>
      </Box>

      <CardContent sx={{ px: 0, pt: 1.5, pb: 0, "&:last-child": { pb: 0 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 0.5 }}>
          <Typography variant="body2" sx={{ color: "#6B7280", fontSize: "12px" }}>
            {product.categories ?? "Cotton T Shirt"}
          </Typography>
          {product.variants && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid #bebfc1",
                borderRadius: "4px",
                px: 0.5,
                py: 0.1,
              }}
            >
              <Typography sx={{ fontSize: "11px", color: "#6B7280" }}>
                +{product.variants}
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body1" sx={{ fontWeight: 700, color: "#1A1A1A", fontSize: "14px" }}>
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#1A1A1A", fontSize: "14px" }}>
            ${product.price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
    </Link>

  );
};