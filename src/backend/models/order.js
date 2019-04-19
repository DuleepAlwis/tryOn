const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const orderSchema = mongoose.Schema({
  date: {
    type: String
    //required: true
  },

  time: {
    type: String
  },

  items: {
    type: Array
  },

  deliverAddress: {
    type: Object
  },

  totalPrice: {
    type: String
  },

  comment: {
    type: String
  },
  status: {
    type: String
  }


});

//clothProductSchema.plugin(uniqueValidator);
module.exports = mongoose.model("order", orderSchema);
