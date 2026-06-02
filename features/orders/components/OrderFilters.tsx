"use client";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { orders } from "../constants/orders.data";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Stack, Typography, Button, Box } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

  const dividerSx = {
    width: "1px",
    height: "24px",
    backgroundColor: "#e0e0e0",
    mx: 1,
  };

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        mb: 2,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        px: 2,
        py: 0.75,
        backgroundColor: "#fff",
        width: "fit-content",
        gap: 0,
      }}
    >
      <FilterAltOutlinedIcon sx={{ color: "#555", fontSize: 20, mr: 1 }} />

      <Typography
        variant="body2"
        sx={{ color: "#333", fontWeight: 500, whiteSpace: "nowrap", mr: 1 }}
      >
        Filter By
      </Typography>

      
      <Box sx={dividerSx} />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
  slotProps={{
    textField: {
      variant: "standard",
   
      sx: {
        width: 140,
        "& .MuiInputBase-root::before": {
          display: "none",
        },
        "& .MuiInputBase-root::after": {
          display: "none",
        },
      },
    },
  }}
/>
      </LocalizationProvider>

      <Box sx={dividerSx} />

      <Autocomplete
        options={types}
        value={typeFilter}
        onChange={(_, value) => setTypeFilter(value)}
        disableClearable={!typeFilter}
        popupIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
        sx={{
          width: 140,
          "& .MuiOutlinedInput-root": {
            border: "none",
            "& fieldset": { border: "none" },
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#333",
            px: "4px !important",
            py: "0px !important",
          },
          "& .MuiAutocomplete-endAdornment": {
            right: 0,
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Order Type"
            size="small"
            sx={{
              "& .MuiInputBase-input": {
                px: "4px !important",
                py: "4px !important",
              },
            }}
          />
        )}
      />

      <Box sx={dividerSx} />

      <Autocomplete
        options={statuses}
        value={statusFilter}
        onChange={(_, value) => setStatusFilter(value)}
        disableClearable={!statusFilter}
        popupIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
        sx={{
          width: 150,
          "& .MuiOutlinedInput-root": {
            border: "none",
            "& fieldset": { border: "none" },
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#333",
            px: "4px !important",
            py: "0px !important",
          },
          "& .MuiAutocomplete-endAdornment": {
            right: 0,
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Order Status"
            size="small"
            sx={{
              "& .MuiInputBase-input": {
                px: "4px !important",
                py: "4px !important",
              },
            }}
          />
        )}
      />

      <Box sx={dividerSx} />

      <Button
        onClick={resetFilters}
        startIcon={<ReplayOutlinedIcon sx={{ fontSize: "16px !important" }} />}
        sx={{
          color: "#e53935",
          fontWeight: 500,
          fontSize: "0.875rem",
          textTransform: "none",
          border: "none",
          backgroundColor: "transparent",
          "&:hover": { backgroundColor: "transparent", color: "#c62828" },
          px: 1,
          whiteSpace: "nowrap",
          minWidth: "auto",
        }}
      >
        Reset Filter
      </Button>
    </Stack>
  );
}