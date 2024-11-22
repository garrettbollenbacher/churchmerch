const mongoose = require("mongoose");

const ApparelItemSchema = new mongoose.Schema({
  name: String,
  price: String,
  imageURL: String,
  linkToPurchase: String,
  churchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Church",
  },
});

module.exports = mongoose.model("ApparelItem", ApparelItemSchema);
