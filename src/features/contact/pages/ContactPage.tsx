"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import AddContactFom from "@/shared/components/form/AddContactForm";
import ContactCard from "../components/ContactCard";
import { contacts } from "../constants/contacts";
import { useState } from "react";

export default function ContactsPage() {
  const router = useRouter();
 
  const [showForm, setShowForm] = useState(false);
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
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Contact
        </Typography>

        
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => router.push("/dashboard/contact/add")}
        >
          Add New Contact
        </Button>
        {showForm && <AddContactFom />}
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
