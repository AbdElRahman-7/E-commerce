"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { plans } from "../constants/card.data";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing </h1>
      <Box
        sx={{
          p: 4,
          bgcolor: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={3}>
          {plans.map((plan) => (
            <Grid key={plan.id} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  textAlign: "center",
                  boxShadow: "none",
                  overflow: "hidden",

                  border: plan.featured
                    ? "2px solid #4f7cff"
                    : "1px solid #ececec",

                  background: "linear-gradient(to bottom, #ffffff, #fcfcfc)",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {plan.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Monthly Charge
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#4880ff",
                    }}
                  >
                    ${plan.price}
                  </Typography>
                  <Divider
                    sx={{
                      borderColor: "#E5E7EB",
                      padding: 1,
                    }}
                  />

                  <Stack spacing={3} sx={{ my: 6 }}>
                    {plan.features.map((feature) => (
                      <Typography key={feature} variant="body2">
                        {feature}
                      </Typography>
                    ))}
                  </Stack>

                  <Button
                    variant={plan.featured ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      borderRadius: "999px",
                      py: 1.3,
                      mb: 2,
                      textTransform: "none",
                    }}
                  >
                    Get Started
                  </Button>

                  <Typography
                    variant="caption"
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Start Your 30 Day Free Trial
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
