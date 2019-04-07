const mongoose = require("mongoose");
const handbagsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: Number
  }


})

module.exports = mongoose.model("handbags", handbagsSchema);
