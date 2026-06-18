"use client";
import { Paper } from "@mui/material";
import { Filter } from "lucide-react";
import DataFilter from "./DataFilter";
import TypeFilter from "./TypeFilter";
import { StatusFilter } from "./StatusFilter";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

type Props = {
  statusFilter: string[];
  setStatusFilter: (value: string[]) => void;
  typeFilter: string[];
  setTypeFilter: (value: string[]) => void;
  dateFilter: string | null;
  setDateFilter: (value: string | null) => void;
  resetFilters: () => void;
};

export default function OrderFilters({
  statusFilter,
  setStatusFilter,
  typeFilter = [],
  setTypeFilter,
  dateFilter,
  setDateFilter,
  resetFilters,
}: Props) {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #E5E7EB",
        borderRadius: 1,
        overflow: "visible",
        height: 80,
        mb: 2,
        width: "fit-content",
      }}
    >
      {/* Filter Icon */}
      <div
        style={{
          width: 50,
          borderRight: "1px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 16,
        }}
      >
        <Filter size={30} />
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        {/* Date Filter */}
        <DataFilter dateFilter={dateFilter} setDateFilter={setDateFilter} />

        <div
          style={{
            width: 1,
            height: 60,
            backgroundColor: "#E5E7EB",
            borderRadius: 4,
          }}
        />

        {/* Order Type Filter */}
        <TypeFilter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />

        <div
          style={{
            width: 1,
            height: 60,
            backgroundColor: "#E5E7EB",
            borderRadius: 4,
          }}
        />

        {/* Status Filter */}
        <StatusFilter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        {/* Reset Filter */}

        <div
          style={{
            width: 1,
            height: 60,
            backgroundColor: "#E5E7EB",
            borderRadius: 4,
          }}
        />

        <button
          onClick={resetFilters}
          style={{
            border: "none",
            background: "transparent",
            color: "#DC2626",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontWeight: 500,
          }}
        >
          <RestartAltIcon sx={{ fontSize: 20 }} />
          Reset Filter
        </button>
      </div>
    </Paper>
  );
}
