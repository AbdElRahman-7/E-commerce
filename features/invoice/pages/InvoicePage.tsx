"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import SendIcon from "@mui/icons-material/Send";
import InvoiceTable from "../components/InvoiceTable";
import {rows} from "../constants/rows.data"

export default function InvoicePage() {
  const grandTotal = rows.reduce((sum, row) => sum + row.total, 0);
  return (
    <Card
      sx={{
        border: "2px solid",
        borderColor: "primary.main",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: 700, mb: 4 }}>Invoice</Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="body2" color="text.secondary">
              Invoice From :
            </Typography>

            <Typography sx={{ fontWeight: 600 }}>Virginia Walker</Typography>

            <Typography variant="body2" color="text.secondary">
              9694 Krayick Locks Suite 635
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="body2" color="text.secondary">
              Invoice To :
            </Typography>

            <Typography sx={{ fontWeight: 600 }}>Austin Miller</Typography>

            <Typography variant="body2" color="text.secondary">
              Brookview
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography>Invoice Date : 12 Nov 2026</Typography>

            <Typography sx={{ mt: 1 }}>Due Date : 25 Dec 2026</Typography>
          </Grid>
        </Grid>

        <InvoiceTable />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
            mt: 3,
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>Total</Typography>

          <Typography sx={{ fontWeight: 700 }}>{grandTotal}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 4,
          }}
        >
          <IconButton
            sx={{
              bgcolor: "action.hover",
            }}
          >
            <PrintIcon />
          </IconButton>

          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
