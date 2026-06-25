"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  MenuItem,
  Select,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );
  const total = subtotal;

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      backgroundColor: "transparent",
      "& fieldset": { borderColor: "#E5E7EB" },
      "&:hover fieldset": { borderColor: "#000" },
      "&.Mui-focused fieldset": { borderColor: "#000", borderWidth: "1px" },
    },
    "& .MuiInputBase-input": { fontSize: "14px", py: 1.5, color: "#000" },
  };

  return (
    <Box sx={{ p: { xs: 1.5, sm: 2, md: 5 }, maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
      
      <Box
        sx={{ mb: 4, cursor: "pointer", display: "inline-block" }}
        onClick={() => window.history.back()}
      >
        <ArrowRightAltIcon sx={{ transform: "rotate(180deg)", fontSize: "32px" }} />
      </Box>

      
      <Typography variant="h3" sx={{ fontWeight: 900, color: "#000", mb: 3, letterSpacing: "-1px" }}>
        CHECKOUT
      </Typography>

      <Box sx={{ display: "flex", gap: 3, mb: 6 }}>
        <Typography sx={{ fontSize: "13px", fontWeight: 800, color: "#000" }}>INFORMATION</Typography>
        <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#9CA3AF" }}>SHIPPING</Typography>
        <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#9CA3AF" }}>PAYMENT</Typography>
      </Box>

      
      <Grid container spacing={8}>
        
         <Grid size={{ xs: 12, md: 7 }}>
          
                    <Typography sx={{ fontSize: "13px", fontWeight: 800, mb: 2 }}>CONTACT INFO</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}>
            <TextField fullWidth placeholder="Email" sx={inputStyles} />
            <TextField fullWidth placeholder="Phone" sx={inputStyles} />
          </Box>

          
          <Typography sx={{ fontSize: "13px", fontWeight: 800, mb: 2 }}>SHIPPING ADDRESS</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <TextField fullWidth placeholder="First Name" sx={inputStyles} />
              <TextField fullWidth placeholder="Last Name" sx={inputStyles} />
            </Box>
            
            <Select displayEmpty defaultValue="" sx={{ ...inputStyles, "& .MuiSelect-select": { py: 1.5, fontSize: "14px", color: "#6B7280" } }}>
              <MenuItem value="" disabled>Country</MenuItem>
              <MenuItem value="EG">Egypt</MenuItem>
              <MenuItem value="SA">Saudi Arabia</MenuItem>
              <MenuItem value="AE">UAE</MenuItem>
            </Select>

            <TextField fullWidth placeholder="State / Region" sx={inputStyles} />
            <TextField fullWidth placeholder="Address" sx={inputStyles} />

            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <TextField fullWidth placeholder="City" sx={inputStyles} />
              <TextField fullWidth placeholder="Postal Code" sx={inputStyles} />
            </Box>
          </Box>

          
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              endIcon={<EastIcon />}
              sx={{
                backgroundColor: "#E5E7EB",
                color: "#000",
                fontWeight: 800,
                fontSize: "14px",
                borderRadius: 0,
                px: 5,
                py: 1.5,
                textTransform: "none",
                "&:hover": { backgroundColor: "#D1D5DB" },
              }}
            >
              Shipping
            </Button>
          </Box>

        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              backgroundColor: "#F8F8F8", 
              border: "1px solid #E5E7EB",
              p: { xs: 3, md: 4 },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 800 }}>YOUR ORDER</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 800, color: "#1D4ED8" }}>({cartItems.length})</Typography>
                <Link href="/cart" style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#1A1A1A", textDecoration: "underline", cursor: "pointer", "&:hover": { color: "#6B7280" } }}>
                    View Cart
                  </Typography>
                </Link>
              </Box>
            </Box>

            {cartItems.length === 0 ? (
              <Typography sx={{ fontSize: "13px", color: "#6B7280", mb: 4, textAlign: "center" }}>
                Your cart is empty.
              </Typography>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
                {cartItems.map(({ product, quantity }) => (
                  <Box key={product.id} sx={{ display: "flex", gap: 2 }}>
                    <Box
                      component="img"
                      src={product.imageUrl}
                      alt={product.name}
                      sx={{ width: "80px", height: "100px", objectFit: "cover", backgroundColor: "#E5E7EB", flexShrink: 0 }}
                    />

                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                          <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#000" }}>{product.name}</Typography>
                        </Box>
                        <Link href="/cart" style={{ textDecoration: "none" }}>
                          <Typography sx={{ fontSize: "12px", fontWeight: 600, cursor: "pointer", textDecoration: "underline", color: "#000", "&:hover": { color: "#6B7280" } }}>
                            Change
                          </Typography>
                        </Link>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <Typography sx={{ fontSize: "13px", fontWeight: 800, color: "#1D4ED8" }}>x{quantity}</Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>$ {(product.price * quantity).toFixed(2)}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>Subtotal</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 800 }}>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>Shipping</Typography>
                <Typography sx={{ fontSize: "11px", color: "#6B7280" }}>Calculated at next step</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>Total</Typography>
              <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>${total.toFixed(2)}</Typography>
            </Box>

          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}