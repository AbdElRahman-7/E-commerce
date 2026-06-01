"use client";

import {
  Box,
  Checkbox,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";

const emails = [
  {
    id: 1,
    name: "Julia Jalal",
    tag: "Primary",
    message: "Our Bachelor of Commerce program...",
    time: "8:38 AM",
  },

  {
    id: 2,
    name: "Peter Lewis",
    tag: "Friends",
    message: "Vacation Home Rental Success",
    time: "7:52 PM",
  },

  {
    id: 3,
    name: "Anthony Bingos",
    tag: "Work",
    message: "Free Classifieds Using Them...",
    time: "7:52 PM",
  },
];

export default function InboxTable() {
  return (
    <Paper
      sx={{
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {/* Search */}
      <Box sx={{ p: 2 }}>
        <TextField placeholder="Search mail" size="small" fullWidth />
      </Box>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableBody>
            {emails.map((email) => (
              <TableRow key={email.id} hover>
                <TableCell>
                  <Checkbox />
                </TableCell>

                <TableCell>{email.name}</TableCell>

                <TableCell>
                  <Chip label={email.tag} size="small" color="primary" />
                </TableCell>

                <TableCell>{email.message}</TableCell>

                <TableCell>{email.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
