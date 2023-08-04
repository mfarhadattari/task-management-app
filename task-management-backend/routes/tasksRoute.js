const express = require("express");
const Task = require("../models/task");
const router = express.Router();

// get all task api
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a task api
router.delete("/delete-task/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }
    res.send({ status: 200, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
