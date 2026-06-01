"use client";

import { Box, Typography } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "", sales: 20 },
  { name: "Jan", sales: 48 },
  { name: "Feb", sales: 30 },
  { name: "Mar", sales: 85 },
  { name: "Apr", sales: 52 },
  { name: "May", sales: 88 },
  { name: "Jun", sales: 25 },
  { name: "Jul", sales: 48 },
  { name: "Aug", sales: 72 },
  { name: "Sep", sales: 55 },
  { name: "Oct", sales: 42 },
  { name: "Nov", sales: 56 },
  { name: "Dec", sales: 30 },
];

export default function SalesChart() {
  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 4,
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Sales Details
        </Typography>

        <Box
          sx={{
            px: 2,
            py: 1,
            border: "1px solid #E5E7EB",
            borderRadius: 2,
            fontSize: 14,
            color: "#6B7280",
          }}
        >
          October
        </Box>
      </Box>

      <Box sx={{ width: "100%", height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="3 3"
              vertical={true}
              horizontal={true}
            />

            <XAxis dataKey="name" />

            <YAxis
              ticks={[20, 40, 60, 80, 100]}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#5B8DEF"
              fill="#5B8DEF"
              fillOpacity={0.1}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
