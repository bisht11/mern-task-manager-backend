const mongoose = require("mongoose");

// schema creation
const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a task"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// model initialization
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
