"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#EBEBEB",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 8 },
        minHeight: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "'Inter', sans-serif",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: { xs: 6, md: 0 },
          flex: 1,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 10,
              letterSpacing: 2,
              color: "#999",
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            Info
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            {["Pricing", "About", "Contacts"].map((item) => (
              <Link key={item} href="#" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#1A1A1A",
                    letterSpacing: 0.3,
                    "&:hover": { color: "#555" },
                    transition: "color 0.15s",
                  }}
                >
                  {item.toUpperCase()}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ mt: 5 }}>
            <Typography
              sx={{
                fontSize: 10,
                letterSpacing: 2,
                color: "#999",
                mb: 2,
                textTransform: "uppercase",
              }}
            >
              Languages
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
              {[
                { code: "ENG", active: true },
                { code: "ESP", active: false },
                { code: "SVE", active: false },
              ].map(({ code, active }) => (
                <Box key={code} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: active ? "#1A1A1A" : "#999",
                      fontWeight: active ? 600 : 400,
                      cursor: "pointer",
                      "&:hover": { color: "#1A1A1A" },
                      transition: "color 0.15s",
                    }}
                  >
                    {code}
                  </Typography>
                  {active && (
                    <Typography sx={{ fontSize: 11, color: "#bbb", lineHeight: 1 }}>
                      /
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography
            sx={{
              fontSize: 10,
              letterSpacing: 2,
              color: "#999",
              mb: 3,
              textTransform: "uppercase",
            }}
          >
            Technologies
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: -1 }}>
            <Box
              sx={{
                width: 14,
                height: 14,
                backgroundColor: "#1A1A1A",
                transform: "rotate(45deg)",
                mr: 0.8,
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                fontSize: 52,
                fontWeight: 800,
                color: "#D8D8D8",
                lineHeight: 1,
                letterSpacing: -2,
                userSelect: "none",
              }}
            >
              R
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: 52,
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1,
              letterSpacing: -2,
              userSelect: "none",
            }}
          >
            XIV
          </Typography>
          <Typography
            sx={{
              fontSize: 52,
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1,
              letterSpacing: -2,
              userSelect: "none",
            }}
          >
            QR
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            pt: { md: 6 },
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              color: "#555",
              letterSpacing: 0.3,
            }}
          >
            Near-field communication
          </Typography>
          <Box
            sx={{
              height: 28,
              backgroundColor: "#bbb",
              flexShrink: 0,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 4,
          borderTop: "1px solid #D4D4D4",
        }}
      >
        <Typography sx={{ fontSize: 11, color: "#999", letterSpacing: 0.5 }}>
          © 2024 — copyright
        </Typography>
        <Link href="#" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: 11,
              color: "#999",
              letterSpacing: 0.5,
              "&:hover": { color: "#1A1A1A" },
              transition: "color 0.15s",
            }}
          >
            privacy
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}