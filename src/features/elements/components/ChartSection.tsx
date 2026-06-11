import { Card, CardContent, Stack, Typography } from "@mui/material";

type ChartSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ChartSection({ title, children }: ChartSectionProps) {
  return (
    <Card
      elevation={0}
      sx={{
        mb: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ mb: 3 }}>
          {title}
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {children}
        </Stack>
      </CardContent>
    </Card>
  );
}
