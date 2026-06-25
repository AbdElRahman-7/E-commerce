"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button, Paper } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#568AFF",
        p: 1,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f0f2f5",
          textAlign: "center",
          p: { xs: 4, md: 6 },
          borderRadius: 1,
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: 250, md: 350 },
            mb: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/404.png"
            alt="Page Not Found Illustration"
            width={500}
            height={300}
            priority
          />
        </Box>

        <Typography variant="h3" sx={{ mb: 4, maxWidth: 400, fontSize: { xs: "1.8rem", md: "3rem" } }}>
          Looks like you've got lost...
        </Typography>

        <Button
          component={Link}
          href="/"
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#568AFF",
            borderRadius: 1,
            textTransform: "none",
            fontWeight: "bold",
            fontSize: { xs: "1rem", md: "1.1rem" },
            px: 4,
            width: "100%",
            maxWidth: 400,
          }}
        > 
          Back to Home
        </Button>
      </Paper>
    </Box>
  );
}
