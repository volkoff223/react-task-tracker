const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  day: { type: Date, required: true },
  reminder: Boolean,
});

module.exports = mongoose.model("Task", taskSchema);
