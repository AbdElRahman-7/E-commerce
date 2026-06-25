"use client";

import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export const AddEvent = () => {
  return (
    <div>
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
            <TextField
              fullWidth
              label="Event Name"
              placeholder=" Enter event Name"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
            fullWidth
            label="Time"
            placeholder=" 12:34 BDT"

            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label="Email" placeholder="Enter email" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              placeholder="11-09-2026"
            />
            
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth  label="Adress" />
          </Grid>


          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
            label="Address"
              placeholder="Enter address"
            />
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
            Add Now
          </Button>
        </Box>
      </Paper>
    </div>
  );
};
