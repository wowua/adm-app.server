const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required for wishes"]
  },
  userId: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("Wish", Schema);
