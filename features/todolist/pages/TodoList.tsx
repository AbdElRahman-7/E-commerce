"use client";

import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import TodoList from "../components/TodoList";
import {initialTasks} from "../constants/initialtasks";


export default function TodoListPage() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const toggleFavorite = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, favorite: !task.favorite }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{fontWeight:700}}>
          To-Do List
        </Typography>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: 1,
            px: 2,
            py: 1,
          }}
        >
          Add New Task
        </Button>
      </Box>
      <Container maxWidth="md" sx={{ py: 4 }}>
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
      </Container>
    </>
  );
}