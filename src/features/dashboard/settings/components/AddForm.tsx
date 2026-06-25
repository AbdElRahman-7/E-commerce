"use client";

import {
  Avatar,
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export default function AddForm() {
  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <Box sx={{ textAlign: "center" }}>
          <Avatar
            sx={{
              width: 90,
              height: 90,
              mx: "auto",
              mb: 2,
              bgcolor: "#F3F4F6",
            }}
          />

          <Button
            component="label"
            startIcon={<CloudUploadOutlinedIcon />}
            variant="outlined"
          >
            Upload cover photo
            <input hidden type="file" />
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Site Name" placeholder="" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Copy Right" placeholder=" " />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="SEO Title" placeholder="" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            multiline
            label="SEO Description"
            placeholder=""
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="SEO Keywords" />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
}
