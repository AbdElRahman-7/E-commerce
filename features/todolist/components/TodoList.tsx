import { Box, Checkbox, IconButton, Paper, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

type TodoListProps = {
  title: string;
  completed: boolean;
  favorite: boolean;
  onToggle: () => void;
  onFavorite: () => void;
  onDelete: () => void;
};

export default function TodoList({
  title,
  completed,
  favorite,
  onToggle,
  onFavorite,
  onDelete,
}: TodoListProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        border: "1px solid",
        borderColor: completed ? "primary.main" : "divider",
        bgcolor: completed ? "primary.main" : "background.paper",
        color: completed ? "white" : "text.primary",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Checkbox
            checked={completed}
            onChange={onToggle}
            sx={{
              color: completed ? "white" : undefined,
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />

          <Typography variant="body2">{title}</Typography>
        </Box>

        <Box>
          <IconButton size="small" onClick={onFavorite}>
            {favorite ? (
              <StarIcon
                sx={{
                  color: completed ? "white" : "#FFC107",
                }}
              />
            ) : (
              <StarBorderIcon
                sx={{
                  color: completed ? "white" : "text.secondary",
                }}
              />
            )}
          </IconButton>

          <IconButton
            size="small"
            onClick={onDelete}
            sx={{
              ml: 1,
              bgcolor: completed ? "rgba(255,255,255,.15)" : "transparent",
            }}
          >
            <DeleteIcon
              fontSize="small"
              sx={{
                color: completed ? "white" : "text.secondary",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}
