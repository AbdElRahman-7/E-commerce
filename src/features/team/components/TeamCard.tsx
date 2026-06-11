import { Avatar, Card, CardContent, Typography } from "@mui/material";

type TeamCardProps = {
  image: string;
  name: string;
  role: string;
  email: string;
};

export default function TeamCard({ image, name, role, email }: TeamCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        textAlign: "center",
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        py: 2,
      }}
    >
      <CardContent>
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 72,
            height: 72,
            mx: "auto",
            mb: 2,
          }}
        />

        <Typography  sx={{fontWeight:600}}>
          {name}
        </Typography>

        <Typography sx={{color:"text.secondary"}}>
          {role}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
}
