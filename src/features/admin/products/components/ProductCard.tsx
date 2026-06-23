"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleWishlistItem, Product } from "@/store/wishlistSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isLiked = wishlistItems.some((item) => item.id === product.id);

  const handleToggleLike = () => {
    dispatch(toggleWishlistItem(product));
  };

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <IconButton
        onClick={handleToggleLike}
        color="error"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          bgcolor: "rgba(255,255,255,0.7)",
        }}
      >
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
