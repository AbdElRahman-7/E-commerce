"use client";
import AddIcon from "@mui/icons-material/Add";
import TeamCard from "../components/TeamCard";
import { members } from "../constants/members";
import { Box, Button, Grid, Typography } from "@mui/material";



export default function TeamPage() {
  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{fontWeight:700}}>
          Team
        </Typography>

        <Button variant="contained" startIcon={<AddIcon />}>
          Add New Member
        </Button>
      </Box>

      <Grid container spacing={3}>
        {members.map((member) => (
          <Grid
            key={member.id}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <TeamCard {...member} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
