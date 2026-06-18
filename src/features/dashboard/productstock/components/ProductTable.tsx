"use client";

import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../constants/rows";
import { columns } from "./Colums";
import { useState } from "react";
import SearchBox from "@/shared/components/layouDashboard/navbar/SearchBox";
import { Box, Typography } from "@mui/material";

export default function ProductTable() {
  const [search, setSearch] = useState("");

  const filteredProducts = rows.filter((product) =>
    [product.name, product.category, product.price.toString(), product.pieces]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        {" "}
        <Typography variant="h5">Product Stock</Typography>
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search products..."
        />
      </Box>

      <Paper
        sx={{
          width: "100%",
          p: 2,
        }}
      >
        <DataGrid
          rows={filteredProducts}
          columns={columns}
          hideFooter
          disableRowSelectionOnClick
          rowHeight={80}
        />
      </Paper>
    </>
  );
}
