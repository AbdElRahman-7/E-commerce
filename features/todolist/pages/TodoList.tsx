"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import TodoList from "../components/TodoList";
import { initialTasks } from "../constants/initialtasks";

export default function TodoListPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState("");

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  };

  const toggleFavorite = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, favorite: !task.favorite }
          : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id),
    );
  };

  const addTask = () => {
    if (!taskName.trim()) return;

    setTasks((prev) => [
      {
        id: Date.now(),
        title: taskName,
        completed: false,
        favorite: false,
      },
      ...prev,
    ]);

    setTaskName("");
  };

  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Add New To-Do
        </Typography>

        <Button
          variant="contained"
          onClick={addTask}
          sx={{
            width: 120,
            height: 40,
            borderRadius: 1,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Save
        </Button>
      </Box>

      {/* Input Section */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          border: "1px solid #E5E7EB",
          borderRadius: 1,
        }}
      >
        <TextField
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Write Your task name here"
          variant="outlined"
          sx={{
            maxWidth: 400,

            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
            },
          }}
        />
      </Paper>

      {/* Tasks */}
      <Box>
        {tasks.map((task) => (
          <TodoList
            key={task.id}
            title={task.title}
            completed={task.completed}
            favorite={task.favorite}
            onToggle={() => toggleTask(task.id)}
            onFavorite={() => toggleFavorite(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </Box>
    </Container>
  );
}