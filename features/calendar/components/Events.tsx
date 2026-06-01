import { Button, Card, CardContent, Typography } from "@mui/material";
import {events} from "../constants/events.data";
import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";

export  const Events = () => {
  return (
    <Card sx={{ width: 286 }}>
      <CardContent>
        <Button variant="contained" fullWidth>
          + Add New Event
        </Button>

        <Typography sx={{ mt: 3, mb: 2 }}>You are going to</Typography>

        {events.map((event) => (
          <Stack key={event.id} direction="row" spacing={2} sx={{ mb: 3 }}>
            <Avatar />

            <Box>
              <Typography sx={{ fontWeight: 600 }}>{event.title}</Typography>

              <Typography sx={{ variant: "caption", color: "text.secondary" }}>
                {event.date}
              </Typography>

              <Typography sx={{ variant: "body2", color: "text.secondary" }}>
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
}
