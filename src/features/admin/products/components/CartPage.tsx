"use client";

import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { removeFromCart, updateQuantity } from "@/store/cartSlice"; // استيراد الأوامر
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );
  const shippingCost = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingCost;

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, maxWidth: "1200px", margin: "0 auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 4, mb: 2 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 800,
            color: "#000",
            cursor: "pointer",
          }}
        >
          SHOPPING BAG ({cartItems.length})
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#9CA3AF",
            cursor: "pointer",
            "&:hover": { color: "#000" },
          }}
        >
          <FavoriteBorderIcon fontSize="small" />
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            FAVOURITES
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Divider sx={{ mb: 4 }} />

          {cartItems.length === 0 ? (
            <Typography
              sx={{
                textAlign: "center",
                py: 5,
                color: "#6B7280",
                fontWeight: 600,
              }}
            >
              Your shopping cart is currently empty.
            </Typography>
          ) : (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {cartItems.map((item) => (
                <Box
                  key={item.product.id}
                  sx={{
                    display: "flex",
                    gap: 2,
                    width: { xs: "100%", sm: "calc(50% - 16px)" },
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        position: "relative",
                        backgroundColor: "#F3F4F6",
                        mb: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        sx={{
                          width: "100%",
                          height: "350px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <IconButton
                        sx={{
                          position: "absolute",
                          bottom: 8,
                          right: 8,
                          backgroundColor: "#fff",
                          "&:hover": { backgroundColor: "#F3F4F6" },
                          padding: "6px",
                        }}
                      >
                        <FavoriteBorderIcon
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#6B7280",
                        fontWeight: 500,
                      }}
                    >
                      Category
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: "#111",
                        }}
                      >
                        {item.product.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 800,
                          color: "#111",
                        }}
                      >
                        $ {item.product.price}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      sx={{ color: "#6B7280", "&:hover": { color: "#d32f2f" } }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>

                    <Typography sx={{ fontSize: "14px", fontWeight: 800 }}>
                      L
                    </Typography>

                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#1A1A1A",
                        border: "1px solid #E5E7EB",
                      }}
                    />

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid #E5E7EB",
                        alignItems: "center",
                        width: "30px",
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.product.id,
                              quantity: item.quantity + 1,
                            }),
                          )
                        }
                        sx={{ borderRadius: 0, py: 0.5 }}
                      >
                        <AddIcon sx={{ fontSize: "14px" }} />
                      </IconButton>

                      <Divider flexItem />

                      <Typography
                        sx={{ fontSize: "13px", fontWeight: 600, py: 0.5 }}
                      >
                        {item.quantity}
                      </Typography>

                      <Divider flexItem />

                      <IconButton
                        size="small"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.product.id,
                              quantity: Math.max(1, item.quantity - 1),
                            }),
                          )
                        }
                        disabled={item.quantity <= 1}
                        sx={{ borderRadius: 0, py: 0.5 }}
                      >
                        <RemoveIcon sx={{ fontSize: "14px" }} />
                      </IconButton>
                    </Box>

                    <IconButton
                      size="small"
                      sx={{
                        color: "#6B7280",
                        mt: "auto",
                        "&:hover": { color: "#000" },
                      }}
                    >
                      <AutorenewIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Box>
          )}

          <Divider sx={{ mt: 4 }} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              backgroundColor: "#F8F8F8",
              border: "1px solid #E5E7EB",
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 800,
                mb: 4,
                letterSpacing: "0.5px",
              }}
            >
              ORDER SUMMARY
            </Typography>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  Subtotal
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 800 }}>
                  ${subtotal.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  Shipping
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 800 }}>
                  ${shippingCost.toFixed(2)}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                mb: 4,
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: 800 }}>
                TOTAL{" "}
                <Typography
                  component="span"
                  sx={{ fontSize: "11px", color: "#6B7280", fontWeight: 600 }}
                >
                  {" "}
                  (TAX INCL.)
                </Typography>
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: 900 }}>
                ${total.toFixed(2)}
              </Typography>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{ color: "#D1D5DB", "&.Mui-checked": { color: "#000" } }}
                />
              }
              label={
                <Typography sx={{ fontSize: "12px", color: "#6B7280" }}>
                  I agree to the Terms and Conditions
                </Typography>
              }
              sx={{ mb: 2 }}
            />

            <Button
              fullWidth
              disabled={cartItems.length === 0}
              sx={{
                backgroundColor: cartItems.length === 0 ? "#E5E7EB" : "#111",
                color: cartItems.length === 0 ? "#9CA3AF" : "#fff",
                fontWeight: 800,
                fontSize: "14px",
                borderRadius: 0,
                py: 1.5,
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              CONTINUE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
