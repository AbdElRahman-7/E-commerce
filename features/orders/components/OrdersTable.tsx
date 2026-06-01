"use client";
import dayjs from "dayjs"; 
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { orders } from "../constants/orders.data";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const headers = ["Id", "Name", "Address", "Date", "Type", "Status"];
const columns = ["id", "name", "address", "date", "type", "status"] as const;

type OrdersTableProps = {
  statusFilter?: string | null;
  typeFilter?: string | null;
  dateFilter?: string | null;
};

export default function OrdersTable({ statusFilter, typeFilter, dateFilter }: OrdersTableProps) {
  const filteredRows = orders.filter((order) => {
    const matchesStatus = !statusFilter || order.status === statusFilter;
    const matchesType = !typeFilter || order.type === typeFilter;
    const matchesDate =
      !dateFilter || dayjs(order.date).format("YYYY-MM-DD") === dateFilter;

    return matchesStatus && matchesType && matchesDate;
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <StyledTableCell key={header} align={index === 0 ? "left" : "right"}>
                {header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row) => (
            <StyledTableRow key={row.id}>
              {columns.map((column) => (
                <StyledTableCell
                  key={column}
                  align={column === "id" ? "left" : "right"}
                >
                  {row[column]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}