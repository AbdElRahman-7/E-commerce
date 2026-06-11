import { Stack } from "@mui/material";
import Calendar from "../components/calendar";
import { Events } from "../components/Events";

export const CalendarPage = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
      <Events />
      <Calendar />
    </Stack>
  );
};
