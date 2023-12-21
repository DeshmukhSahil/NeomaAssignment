const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ['completed', 'in-progress', 'incomplete'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.pre('save', function (next) {
  // Check if status is explicitly provided in the request body
  if (!this.status) {
    this.status = this.completed ? 'completed' : 'incomplete';
  }
  next();
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
