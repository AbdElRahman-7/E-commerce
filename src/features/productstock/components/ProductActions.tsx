import { Box, IconButton, Typography } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function ProductActions() {
  return (
  

 <Box
  sx={{
    display: "flex",
    alignItems: "center",
    border: "1px solid #E5E7EB",
    borderRadius: 2,
    overflow: "hidden",
    width: "fit-content",
    marginTop:2
  }}
>
  <IconButton
    size="small"
    sx={{
      borderRadius: 0,
      px: 1.5,

      color: "#6B7280",

      "&:hover": {
        backgroundColor: "#F3F4F6",
      },
    }}
  >
    <EditOutlinedIcon fontSize="small"  />
  </IconButton>

  <IconButton
    size="small"
    sx={{
      borderRadius: 0,
      borderLeft: "1px solid #E5E7EB",
      px: 1.5,
      color: "#EF4444",

      "&:hover": {
        backgroundColor: "#FEF2F2",
      },
    }}
  >
    <DeleteOutlineOutlinedIcon fontSize="small" />
  </IconButton>
</Box>

  );
}