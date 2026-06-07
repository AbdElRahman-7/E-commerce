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

const StyledTableCell = styled(TableCell)(({}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffffff",
    color: "#000000",
    textTransform: "uppercase",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const headers = ["Id", "Name", "Address", "Date", "Type", "Status"];
const columns = ["id", "name", "address", "date", "type", "status"] as const;

type OrdersTableProps = {
  statusFilter?: string[];
  typeFilter?: string[];
  dateFilter?: string | null;
};

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Completed":
      return {
        backgroundColor: "#DCFCE7",
        color: "#16A34A",
      };

    case "Processing":
      return {
        backgroundColor: "#F3E8FF",
        color: "#9333EA",
      };

    case "Rejected":
      return {
        backgroundColor: "#FEE2E2",
        color: "#DC2626",
      };

    default:
      return {
        backgroundColor: "#F3F4F6",
        color: "#6B7280",
      };
  }
};

export default function OrdersTable({
  statusFilter = [],
  typeFilter = [],
  dateFilter,
}: OrdersTableProps) {
  const filteredRows = orders.filter((order) => {
    const matchesStatus =
      statusFilter.length === 0 || statusFilter.includes(order.status);
    const matchesType =
      typeFilter.length === 0 || typeFilter.includes(order.type);
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
              <StyledTableCell
                key={header}
                align={index === 0 ? "left" : "right"}
              >
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
                  {column === "status" ? (
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 500,
                        ...getStatusStyle(row.status),
                      }}
                    >
                      {row.status}
                    </span>
                  ) : (
                    row[column]
                  )}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
