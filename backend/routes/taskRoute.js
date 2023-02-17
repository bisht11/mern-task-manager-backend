// contains routes for our express app

const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const Task = require("../models/taskmodel");
const router = express.Router();

// Refactored endpoints
router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);


// Plain endpoints

// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask); // route param /:id
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;
