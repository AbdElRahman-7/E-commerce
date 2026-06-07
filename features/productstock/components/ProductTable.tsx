"use client";

import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../constants/rows";
import { columns } from "./Colums";


export default function ProductTable() {
  return (
    <Paper
      sx={{
        width: "100%",
        p: 2,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        disableRowSelectionOnClick
        rowHeight={80}
      />
    </Paper>
  );
}