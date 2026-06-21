"use client";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from "@mui/material";
import { deals } from "../../constants/data";
import MonthDropdown from "../MonthDropdown";
import { useState } from "react";

export default function DealsTable() {
  const [month, setMonth] = useState("October");

  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        backgroundColor: "#fff",
        borderRadius: 1,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Deals Details
        </Typography>

        <MonthDropdown value={month} onChange={setMonth} />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#F9FAFB",
              }}
            >
              <TableCell>Product Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Date - Time</TableCell>
              <TableCell>Piece</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {deals.map((deal, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Avatar src={deal.image} alt={deal.product} />

                    <Typography>{deal.product}</Typography>
                  </Box>
                </TableCell>

                <TableCell>{deal.location}</TableCell>

                <TableCell>{deal.date}</TableCell>

                <TableCell>{deal.piece}</TableCell>

                <TableCell>{deal.amount}</TableCell>

                <TableCell>
                  <Chip
                    label={deal.status}
                    sx={{
                      backgroundColor: "#00b69b",
                      color: "#ffffff",
                      fontWeight: 600,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
