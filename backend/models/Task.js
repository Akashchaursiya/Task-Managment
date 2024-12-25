const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: { type: String },
  status: { type: String, enum: ["To Do", "In Progress", "Done"], default: "To Do" },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
  deadline: { type: Date },
});

module.exports = mongoose.model("Task", TaskSchema);
