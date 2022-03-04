const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  age: String,
  address: String,
});

module.exports = mongoose.model("User", schema);
