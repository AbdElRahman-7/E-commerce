"use client";
import theme from "@/shared/theme/theme";
import { Button, Divider, Typography, Box } from "@mui/material";
import { useState } from "react";
import { orders } from "../constants/orders.data";
import { KeyboardArrowDown } from "@mui/icons-material";

export const StatusFilter = ({
  statusFilter = [],
  setStatusFilter,
}: {
  statusFilter: string[];
  setStatusFilter: (value: string[]) => void;
}) => {
  const [statusOpen, setStatusOpen] = useState(false);
  const statuses = [...new Set(orders.map((order) => order.status))];

  const safeStatusFilter = statusFilter ?? [];

  const handleStatusToggle = (status: string) => {
    const safeFilter = statusFilter ?? [];
    if (safeFilter.includes(status)) {
      setStatusFilter(safeFilter.filter((s) => s !== status));
    } else {
      setStatusFilter([...safeFilter, status]);
    }
  };

  return (
    <Box style={{ position: "relative" }}>
      <Box
        onClick={() => setStatusOpen((prev) => !prev)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 14px",
          border: "1px solid #E5E7EB",
          borderRadius: 4,
          cursor: "pointer",
          minWidth: 140,
          justifyContent: "space-between",
        }}
      >
        {safeStatusFilter.length > 0
          ? safeStatusFilter.join(", ")
          : "Order Status"}
        <KeyboardArrowDown sx={{ fontSize: 20 }} />
      </Box>

      {statusOpen && (
        <Box
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: 8,
            padding: 16,
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            boxShadow: theme.shadows[3],
            zIndex: 1000,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            minWidth: 300,
          }}
        >
          <Box
            style={{
              gridColumn: "span 3",
              display: "flex",
              marginBottom: 8,
            }}
          >
            <Typography sx={{fontWeight:600,fontSize:16}}>
              Select Order Status
            </Typography>
          </Box>

          {statuses.map((status) => (
            <Button
              key={status}
              variant={safeStatusFilter.includes(status) ? "contained" : "outlined"}
              onClick={() => handleStatusToggle(status)}
              sx={{
                borderRadius: 6,
                textTransform: "none",
                fontSize: 13,
                padding: "6px 12px",
                ...(safeStatusFilter.includes(status)
                  ? {}
                  : {
                      borderColor: "#E5E7EB",
                      color: "#374151",
                      "&:hover": {
                        borderColor: "#D1D5DB",
                        backgroundColor: "#F9FAFB",
                      },
                    }),
              }}
            >
              {status}
            </Button>
          ))}

          <Divider
            sx={{
              gridColumn: "span 3",
              borderColor: "#E5E7EB",
              marginTop: "8px",
            }}
          />

          <Box
            style={{
              gridColumn: "span 3",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: 13,
                alignSelf: "flex-start",
              }}
            >
              *You can choose multiple Order Status
            </Typography>
            <Button
              variant="contained"
              onClick={() => setStatusOpen(false)}
              sx={{
                borderRadius: 6,
                textTransform: "none",
                paddingX: 4,
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};