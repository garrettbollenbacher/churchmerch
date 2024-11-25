const express = require("express");
const ApparelItem = require("../models/ApparelItems");

const router = express.Router();

// Get all apparel items
router.get("/", async (req, res) => {
  try {
    const items = await ApparelItem.find().populate("churchId");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
