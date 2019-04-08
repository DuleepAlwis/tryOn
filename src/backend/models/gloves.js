const mongoose = require("mongoose");
const gloveSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: Number
  },
  length: {
    type: Number
  },
  width: {
    type: Number
  }


})

module.exports = mongoose.model("gloves", gloveSchema);
