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

export default function DealsTable() {
  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        backgroundColor: "#fff",
        borderRadius: 4,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
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

        <Box
          sx={{
            px: 2,
            py: 1,
            border: "1px solid #E5E7EB",
            borderRadius: 2,
            fontSize: 14,
            color: "#6B7280",
          }}
        >
          October
        </Box>
      </Box>

      {/* Table */}
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
                      backgroundColor: "#D1FAE5",
                      color: "#059669",
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
