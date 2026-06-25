"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/store";
import { Container, Grid, Typography, Box } from "@mui/material";
import ProductCard from "@/features/admin/products/components/ProductCard";

export default function Page() {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4">My Wishlist</Typography>

      {wishlistItems.length === 0 ? (
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            Your wishlist is currently empty.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {wishlistItems.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
  <ProductCard product={product} />
</Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
