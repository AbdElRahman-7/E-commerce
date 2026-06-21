import { Box, Typography } from "@mui/material";

export default function ProductDescription() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" sx={{ fontWeight: 600, mb: 1 }}>
        Our Approach to fashion design
      </Typography>
      <Typography variant="body1" color="text.secondary">
        at elegant vogue , we blend creativity with craftsmanship to create
        fashion that transcends trends and stands the test of time each design
        is meticulously crafted, ensuring the highest quelity exqulsite
        finish{" "}
      </Typography>
    </Box>
  );
}
