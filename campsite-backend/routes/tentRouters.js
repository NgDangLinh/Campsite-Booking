const express = require('express');
const Tent = require('../models/Tent');
const router = express.Router();

// GET
router.get('/', async (req, res) => {
  try {
    const tents = await Tent.find();
    res.json(tents);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    const newTent = new Tent(req.body);
    await newTent.save();
    res.status(201).json(newTent);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save tent' });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const updatedTent = await Tent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTent) {
      return res.status(404).json({ error: 'Tent not found' });
    }
    res.json(updatedTent);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update tent' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletedTent = await Tent.findByIdAndDelete(req.params.id);
    if (!deletedTent) {
      return res.status(404).json({ error: 'Tent not found' });
    }
    res.json({ message: 'Tent deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete tent' });
  }
});


module.exports = router;
