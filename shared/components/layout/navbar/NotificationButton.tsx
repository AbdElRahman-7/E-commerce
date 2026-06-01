import { IconButton, Badge  } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const NotificationButton = () => {
  return (
    <IconButton>
      <Badge badgeContent={6} color="primary">
        <NotificationsNoneIcon
          sx={{
            color: "#111827",
          }}
        />
      </Badge>
    </IconButton>
  );
}

export default NotificationButton