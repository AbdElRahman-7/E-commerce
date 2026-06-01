"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import MonthDropdown from "@/shared/components/MonthDropdown";
import { data } from "../constants/dashboard.data";


export default function SalesChart() {
  const [month, setMonth] = useState("October");

  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 1,
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
        <MonthDropdown value={month} onChange={setMonth} />
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
