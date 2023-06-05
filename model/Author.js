const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const authorSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid,
  },
  name: {
    type: String,
    required: true,
  },   
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
