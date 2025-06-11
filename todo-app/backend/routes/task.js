const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  const tasks = await Task.find({ userId: req.user.userId });
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user.userId });
  await task.save();
  res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id, userId: req.user.userId }, req.body, { new: true });
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
  res.status(204).end();
});

module.exports = router;
