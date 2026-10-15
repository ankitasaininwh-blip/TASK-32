const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

app.get("/", (req, res) => {
  res.json({ message: "To-Do API is running!" });
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { title, description = "", completed = false } = req.body;

  if (!title || typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  const task = {
    id: nextId++,
    title: title.trim(),
    description,
    completed
  };

  tasks.push(task);
  res.status(201).json(task);
});

app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

app.put("/api/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, description = "", completed = false } = req.body;

  if (!title || typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  task.title = title.trim();
  task.description = description;
  task.completed = completed;

  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});