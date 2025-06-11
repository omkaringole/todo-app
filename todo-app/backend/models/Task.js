const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  reminder: Date,
  priority: { type: String, enum: ['Low', 'Medium', 'High'] },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  order: Number
});

module.exports = mongoose.model('Task', TaskSchema);
