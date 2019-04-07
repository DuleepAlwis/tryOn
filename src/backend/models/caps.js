const mongoose = require("mongoose");
const capsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: Number
  },
  width: {
    type: Number
  }


})

module.exports = mongoose.model("caps", capsSchema);
