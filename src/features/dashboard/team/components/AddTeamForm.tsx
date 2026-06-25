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

export const AddTeamForm = () => {
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
              label="First Name"
              placeholder=" Enter your first name"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Last Name"
              placeholder=" Enter your last name"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="your Email"
              placeholder="Enter  your email"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="phone"
              placeholder="Enter your phone Number"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label="Position" placeholder="CEO" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField select fullWidth label="Gender" defaultValue="">
              <MenuItem value="male">Male</MenuItem>

              <MenuItem value="female">Female</MenuItem>
            </TextField>
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
