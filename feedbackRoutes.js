const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const Feedback = require('../models/Feedback');
const { validateFeedback } = require('../validators/feedbackValidator');

router.post('/', validateFeedback, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

module.exports = router;
