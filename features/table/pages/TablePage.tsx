"use client";
import DealsTable from "@/shared/components/table/deals-table";
import OrdersTable from "@/features/orders/components/OrdersTable";
import { Stack } from "@mui/material";

const TablePage = () => {
  return (
    <Stack spacing={3}>
      <OrdersTable />
      <DealsTable />
    </Stack>
  );
};

export default TablePage;
