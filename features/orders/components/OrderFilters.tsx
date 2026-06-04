"use client";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import { orders } from "../constants/orders.data";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import { TurntableIcon } from "lucide-react";

type Props = {
  statusFilter: string | null;
  setStatusFilter: (value: string | null) => void;
  typeFilter: string | null;
  setTypeFilter: (value: string | null) => void;
  dateFilter: string | null;
  setDateFilter: (value: string | null) => void;
  resetFilters: () => void;
};

export default function OrderFilters({
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
  dateFilter,
  setDateFilter,
  resetFilters,

}: Props) {
  const statuses = [...new Set(orders.map((order) => order.status))];
  const types = [...new Set(orders.map((order) => order.type))];

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #E5E7EB",
        borderRadius: "16px",
        overflow: "hidden",
        height: 80,
        width: "100%",
      }}
    >
      <Box sx={{ width: 80, borderRight: "1px solid #E5E7EB" }}>
  <TurntableIcon />
</Box>

<Box sx={{ px: 4, borderRight: "1px solid #E5E7EB" }}>
  Filter By
</Box>

<Box sx={{ px: 3, borderRight: "1px solid #E5E7EB" }}>
  Date
</Box>

<Box sx={{ px: 3, borderRight: "1px solid #E5E7EB" }}>
  Order Type
</Box>

<Box sx={{ px: 3, borderRight: "1px solid #E5E7EB" }}>
  Order Status
</Box>

<Box sx={{ px: 4 }}>
  Reset Filter
</Box>
    </Paper>
  );
}
