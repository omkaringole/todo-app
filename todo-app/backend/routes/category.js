const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/', async (req, res) => {
  const categories = await Category.find({ userId: req.user.userId });
  res.json(categories);
});

router.post('/', async (req, res) => {
  const category = new Category({ ...req.body, userId: req.user.userId });
  await category.save();
  res.status(201).json(category);
});

router.delete('/:id', async (req, res) => {
  await Category.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
  res.status(204).end();
});

module.exports = router;
