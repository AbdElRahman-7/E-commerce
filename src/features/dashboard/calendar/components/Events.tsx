"use client";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  AvatarGroup,
  Box,
  Stack,
} from "@mui/material";
import { events } from "../constants/events.data";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { AddEvent } from "./AddEvent";

export const Events = () => {
  const [showEvent, setShowEvent] = useState(false);
  const router = useRouter();

  return (
    <Card sx={{ width: 286 }}>
      <CardContent>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => router.push("/dashboard/calendar/add")}
        >
          Add New Contact
        </Button>
        {showEvent && <AddEvent />}

        <Typography sx={{ mt: 3, mb: 2 }}>You are going to</Typography>
        {events.map((event) => (
          <Stack key={event.id} direction="row" spacing={2} sx={{ mb: 3 }}>
            <Avatar />

            <Box>
              <Typography sx={{ fontWeight: 600 }}>{event.title}</Typography>

              <Typography variant="caption" color="text.secondary">
                {event.date}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {event.location}
              </Typography>

              <AvatarGroup max={4}>
                {event.attendees.map((avatar) => (
                  <Avatar key={avatar} src={avatar} />
                ))}
              </AvatarGroup>
            </Box>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
};
