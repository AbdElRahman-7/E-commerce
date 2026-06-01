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
    <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: "center" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          value={dateFilter ? dayjs(dateFilter) : null}
          onChange={(value) =>
            setDateFilter(value ? dayjs(value).format("YYYY-MM-DD") : null)
          }
          slotProps={{ textField: { size: "small", sx: { width: 200 } } }}
        />
      </LocalizationProvider>

      <Autocomplete
        options={statuses}
        value={statusFilter}
        onChange={(_, value) => setStatusFilter(value)}
        sx={{ width: 250 }}
        renderInput={(params) => (
          <TextField {...params} label="Status" size="small" />
        )}
      />

      <Autocomplete
        options={types}
        value={typeFilter}
        onChange={(_, value) => setTypeFilter(value)}
        sx={{ width: 250 }}
        renderInput={(params) => (
          <TextField {...params} label="Type" size="small" />
        )}
      />
      <Button variant="outlined" onClick={resetFilters}>
        Reset
      </Button>
    </Stack>
  );
}
