"use client";
import theme from "@/shared/theme/theme";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Divider, Typography, Box } from "@mui/material";
import { useState } from "react";
import { orders } from "../constants/orders.data";

const TypeFilter = ({
  typeFilter = [],
  setTypeFilter,
}: {
  typeFilter: string[];
  setTypeFilter: (value: string[]) => void;
}) => {
  const [typeOpen, setTypeOpen] = useState(false);
  const types = [...new Set(orders.map((order) => order.type))];

  const handleTypeToggle = (type: string) => {
    const safeFilter = typeFilter ?? [];
    if (safeFilter.includes(type)) {
      setTypeFilter(safeFilter.filter((t) => t !== type));
    } else {
      setTypeFilter([...safeFilter, type]);
    }
  };

  const safeTypeFilter = typeFilter ?? [];

  return (
    <Box style={{ position: "relative" }}>
      <Box
        onClick={() => setTypeOpen((prev) => !prev)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 16px",
          border: "1px solid #E5E7EB",
          borderRadius: 4,
          cursor: "pointer",
          minWidth: 140,
          justifyContent: "space-between",
        }}
      >
        {safeTypeFilter.length > 0 ? safeTypeFilter.join(", ") : "Order Type"}
        <KeyboardArrowDown fontSize="small" />
      </Box>

      {typeOpen && (
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
            <Typography sx={{fontWeight:600, fontSize:16}}>
              Select Order Type
            </Typography>
          </Box>

          {types.map((type) => (
            <Button
              key={type}
              variant={safeTypeFilter.includes(type) ? "contained" : "outlined"}
              onClick={() => handleTypeToggle(type)}
              sx={{
                borderRadius: 6,
                textTransform: "none",
                fontSize: 13,
                padding: "6px 12px",
                ...(safeTypeFilter.includes(type)
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
              {type}
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
              *You can choose multiple Order type
            </Typography>
            <Button
              variant="contained"
              onClick={() => setTypeOpen(false)}
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

export default TypeFilter;