"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Props } from "../types/product";
import { addToCart } from "@/store/cartSlice";
import { AppDispatch, RootState } from "@/store";
import { toggleWishlistItem } from "@/store/wishlistSlice";

export default function SingleProductPage({ product }: Props) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const allImages = product.images?.length
    ? product.images
    : [product.img, product.img, product.img, product.img, product.img];

  const defaultColors = product.colors ?? [
    { label: "Light Gray", hex: "#D1D5DB" },
    { label: "Gray", hex: "#9CA3AF" },
    { label: "Black", hex: "#1A1A1A" },
    { label: "Mint", hex: "#6EE7B7" },
    { label: "White", hex: "#FFFFFF" },
    { label: "Lavender", hex: "#C4B5FD" },
  ];

  const defaultSizes = product.sizes ?? ["XS", "S", "M", "L", "XL", "2X"];

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const activeImg = allImages[activeImgIndex];
  const [selectedColor, setSelectedColor] = useState(defaultColors[0].hex);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const wished = wishlistItems.some((item) => item.id === String(product.id));

  const handleAddToCart = () => {
    const numericPrice =
      Number(String(product.price).replace(/[^\d.]/g, "")) || 0;

    dispatch(
      addToCart({
        id: String(product.id),
        name: product.title,
        price: numericPrice,
        imageUrl: activeImg,
      }),
    );

    router.push("/cart");
  };

  const handleWishlistClick = () => {
    const numericPrice =
      Number(String(product.price).replace(/[^\d.]/g, "")) || 0;

    dispatch(
      toggleWishlistItem({
        id: String(product.id),
        name: product.title,
        price: numericPrice,
        imageUrl: activeImg,
      }),
    );
  };

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
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1.5,
            flexShrink: 0,
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: 380 },
              aspectRatio: "3 / 4",
              backgroundColor: "#EEEEF3",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src={activeImg}
              alt={product.title}
              fill
              sizes="(max-width: 600px) 100vw, 380px"
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {allImages.map((src, index) => (
              <Box
                key={index}
                onClick={() => setActiveImgIndex(index)}
                sx={{
                  position: "relative",
                  width: 70,
                  height: 88,
                  borderRadius: "6px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border:
                    activeImgIndex === index
                      ? "2px solid #1A1A1A"
                      : "2px solid transparent",
                  backgroundColor: "#EEEEF3",
                  flexShrink: 0,
                  opacity: activeImgIndex === index ? 1 : 0.4,
                  transition: "opacity 0.15s, border-color 0.15s",
                  "&:hover": { opacity: 1 },
                }}
              >
                <Image
                  src={src}
                  alt={`${product.title} view ${index + 1}`}
                  fill
                  sizes="70px"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, pt: { md: 1 } }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <Box
              onClick={handleWishlistClick}
              sx={{ cursor: "pointer", color: wished ? "#E53935" : "#9CA3AF" }}
            >
              {wished ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Box>
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1A1A1A",
              mb: 0.5,
              letterSpacing: 0.5,
            }}
          >
            {product.title.toUpperCase()}
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#1A1A1A", mb: 0.5 }}
          >
            ${product.price}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#9CA3AF", mb: 2, fontSize: 12 }}
          >
            MRP incl. of all taxes
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Typography
            variant="body2"
            sx={{ color: "#374151", mb: 3, lineHeight: 1.7 }}
          >
            {product.description ??
              "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front."}
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            Color
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
            {defaultColors.map((defaultColor) => (
              <Box
                key={defaultColor.hex}
                onClick={() => setSelectedColor(defaultColor.hex)}
                title={defaultColor.label}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "4px",
                  backgroundColor: defaultColor.hex,
                  cursor: "pointer",
                  border:
                    selectedColor === defaultColor.hex
                      ? "2.5px solid #1A1A1A"
                      : "2px solid #E5E7EB",
                  transition: "border-color 0.15s",
                  boxSizing: "border-box",
                }}
              />
            ))}
          </Box>

          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            Size
          </Typography>
          <ToggleButtonGroup
            value={selectedSize}
            exclusive
            onChange={(_, val) => val && setSelectedSize(val)}
            sx={{ flexWrap: "wrap", gap: 1, mb: 1 }}
          >
            {defaultSizes.map((defaultSize) => (
              <ToggleButton
                key={defaultSize}
                value={defaultSize}
                sx={{
                  border: "1px solid #E5E7EB !important",
                  borderRadius: "4px !important",
                  px: 2,
                  py: 0.75,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#374151",
                  textTransform: "none",
                  "&.Mui-selected": {
                    backgroundColor: "#1A1A1A !important",
                    color: "#fff !important",
                    borderColor: "#1A1A1A !important",
                  },
                  "&:hover": { backgroundColor: "#F3F4F6" },
                }}
              >
                {defaultSize}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#6B7280",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              FIND YOUR SIZE
            </Typography>
            <Typography variant="caption" sx={{ color: "#6B7280" }}>
              |
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#6B7280",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              MEASUREMENT GUIDE
            </Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "#D1D5DB",
              color: "#1A1A1A",
              borderRadius: 0,
              py: 1.75,
              textTransform: "none",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: 0.5,
              boxShadow: "none",
              "&:hover": { backgroundColor: "#9CA3AF", boxShadow: "none" },
            }}
          >
            ADD
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
