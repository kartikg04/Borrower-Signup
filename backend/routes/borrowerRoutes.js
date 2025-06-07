const express = require('express');
const router = express.Router();
const Borrower = require('../models/Borrower');

router.post("/", async (req, res) => {
  try {
    const borrower = new Borrower(req.body);
    await borrower.save();
    res.status(201).json({ message: "Borrower created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
