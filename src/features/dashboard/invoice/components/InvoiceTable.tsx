import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {rows} from "../constants/rows.data"


export default function InvoiceTable() {
  return (
    <TableContainer component={Paper} elevation={0} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "action.hover",
            }}
          >
            <TableCell>Serial No.</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Base Cost</TableCell>
            <TableCell align="right">Total Cost</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">${row.cost}</TableCell>
              <TableCell align="right">${row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
