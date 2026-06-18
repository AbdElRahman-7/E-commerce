import { GridColDef } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import ProductActions from "./ProductActions";
import ProductColors from "./productColors";


export const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Avatar
        src={params.row.image}
        variant="rounded"
      />
    ),
  },

  {
    field: "name",
    headerName: "Product Name",
    flex: 1,
  },

  {
    field: "category",
    headerName: "Category",
    width: 150,
  },

  {
    field: "price",
    headerName: "Price",
    width: 120,
    renderCell: (params) => `$${params.value}`,
  },

  {
    field: "pieces",
    headerName: "Piece",
    width: 100,
  },

  {
    field: "colors",
    headerName: "Available Color",
    width: 180,
    sortable: false,
    renderCell: (params) => (
      <ProductColors
        colors={params.row.colors}
      />
    ),
  },

  {
    field: "actions",
    headerName: "Action",
    width: 140,
    sortable: false,
    renderCell: () => <ProductActions />,
  },
];