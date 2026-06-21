import { Box, Typography } from "@mui/material";

export default function ProductDescription() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        component="h2"
        sx={{
          maxWidth: "924px",
          mx: "auto",
          mb: 3,
          fontFamily: "Beatrice Deck Trial, serif",
          fontWeight: 400,
          fontSize: "48px",
          lineHeight: "40px",
          letterSpacing: "2px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Our Approach to Fashion Design
      </Typography>

      <Typography
        sx={{
          width: "100%",
          maxWidth: "685px",
          mx: "auto",
          fontFamily: "Beatrice Trial, serif",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        At Elegant Vogue, we blend creativity with craftsmanship to create
        fashion that transcends trends and stands the test of time. Each design
        is meticulously crafted, ensuring the highest quality and exquisite
        finish.
      </Typography>
    </Box>
  );
}
