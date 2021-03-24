const mongoose = require("mongoose");

const Quiz = new mongoose.Schema({
  category: { type: String, required: true },
  type: { type: String, required: true },
  difficulty: { type: String, required: true },
  question: { type: String, required: true },
  correct_answer: { type: String, required: true },
});

module.exports = mongoose.model("quiz", Quiz);