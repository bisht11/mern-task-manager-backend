const Task = require("../models/taskmodel");

// Create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all Tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // find all DB data
    res.status(200).json(tasks); //return tasks from DB
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get single Task
const getTask = async (req, res) => {
  try {
    const { id } = req.params; //specific id of a task
    const task = await Task.findById(id);
    // if id doesn't exist
    if (!task) {
      return res.status(404).json(`No task found with id ${id}!`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete a Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    // id does not exist
    if (!task) {
      return res.status(404).json(`No task found with id ${id}!`);
    }

    res.status(200).send("Task Deleted!");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update a Task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    // id does not exist
    if (!task) {
      return res.status(404).json(`No task found with id ${id}!`);
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
