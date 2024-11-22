const mongoose = require("mongoose");

const ChurchSchema = new mongoose.Schema({
  name: String,
  website: String,
  location: String,
});

module.exports = mongoose.model("Church", ChurchSchema);
