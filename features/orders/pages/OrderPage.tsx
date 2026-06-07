"use client";

import { useState } from "react";
import OrderFilters from "../components/OrderFilters";
import OrdersTable from "../components/OrdersTable";
import { Box } from "@mui/material";

export default function OrdersPage() {
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  
const resetFilters = () => {
  setStatusFilter([]);
  setTypeFilter([]);
  setDateFilter(null);
};
  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <h1>Order List</h1>
    </Box>
      <OrderFilters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        resetFilters={resetFilters}
      />
      <OrdersTable
        statusFilter={statusFilter}
        typeFilter={typeFilter}
        dateFilter={dateFilter}
      />
    </>
  );
}