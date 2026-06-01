import { Avatar, Box, Typography } from '@mui/material';

const ProfileMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "center",

        gap: 1.5,
      }}
    >
      <Avatar src="https://i.pravatar.cc/300" alt="Profile" />

      <Box>
        <Typography
          variant="body2"
          sx={{
            color: "#111827",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Moni Roy
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#6B7280",
          }}
        >
          Admin
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileMenu