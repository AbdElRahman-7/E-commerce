import { Box } from "@mui/material";

interface ProductColorsProps {
  colors: string[];
}

export default function ProductColors({
  colors,
}: ProductColorsProps) {
  return (
    <Box sx={{display:"flex",gap:1}}>
      {colors.map((color) => (
        <Box
          key={color}
          sx={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            marginTop:2,
            bgcolor: color,
          }}
        />
      ))}
    </Box>
  );
}