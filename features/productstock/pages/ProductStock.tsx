"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Avatar, Box, IconButton, Paper } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {rows} from "../constants/table";

const columns: GridColDef[] = [
  {
    field: "product",
    headerName: "Product",
    flex: 1,
    renderCell: (params) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          height: "100%",
        }}
      >
        <Avatar src={params.row.image} />

        {params.row.name}
      </Box>
    ),
  },
  {
    field: "productId",
    headerName: "Product Name",
    width: 150,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "pieces",
    headerName: "Pieces",
    width: 150,
  },
  {
    field: "availablecolor",
    headerName: "Available Colors",
    width: 150,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,

    renderCell: () => (
      <>
        <IconButton>
          <EditOutlinedIcon />
        </IconButton>

        <IconButton color="error">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </>
    ),
  },
];

export default function ProductStock() {
  return (
    <Paper
      sx={{
        height: 500,
        width: "100%",
        p: 2,
      }}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
      />
    </Paper>
  );
}
