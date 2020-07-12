const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const PeopleSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  participation: {
    type: Number,
    required: true,
    validate: (value) => {
      return value <= 100 && value !== 0;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const People = mongoose.model("People", PeopleSchema);

module.exports = People;
