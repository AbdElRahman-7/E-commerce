import { Box, Typography } from "@mui/material";

import { TrendingUp, TrendingDown } from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string;
  growth: string;
  description: string;
  icon: React.ReactNode;
  isPositive?: boolean;
  bgColor?: string;
};

export default function StatsCard({
  title,
  value,
  growth,
  description,
  icon,
  isPositive,
  bgColor 
}: StatsCardProps) {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 1,
        backgroundColor: "#fff",
        boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          sx={{
            color: "#9CA3AF",
            fontSize: 14,
          }}
        >
          {title}
        </Typography>

<Box
  sx={{
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor,
    borderRadius: 1,
  }}
>
  {icon}
</Box>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 1,
        }}
      >
        {value}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          mb: 1,
        }}
      >
        {isPositive ? (
          <TrendingUp size={18} color="#10B981" />
        ) : (
          <TrendingDown size={18} color="#EF4444" />
        )}

        <Typography
          sx={{
            color: isPositive ? "#10B981" : "#EF4444",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {growth}
        </Typography>

        <Typography
          sx={{
            color: "#6B7280",
            fontSize: 14,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
