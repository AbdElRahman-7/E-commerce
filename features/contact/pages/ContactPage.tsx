import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ContactCard from "../components/ContactCard";
import { contacts } from "../constants/contacts";


export default function ContactsPage() {
  return (
    <>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{fontWeight:700}}>
          Contact
        </Typography>

        <Button variant="contained" startIcon={<AddIcon />}>
          Add New Contact
        </Button>
      </Box>

      <Grid container spacing={3}>
        {contacts.map((contact) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={contact.id}>
            <ContactCard {...contact} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
