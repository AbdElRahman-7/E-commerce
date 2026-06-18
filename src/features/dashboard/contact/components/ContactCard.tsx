import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

type ContactCardProps = {
  name: string;
  email: string;
  image: string;
};

export default function ContactCard({ name, email, image }: ContactCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <CardMedia component="img" height="220" image={image} alt={name} />

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {email}
        </Typography>

        <Button variant="outlined" startIcon={<EmailIcon />} size="small">
          Message
        </Button>
      </CardContent>
    </Card>
  );
}
