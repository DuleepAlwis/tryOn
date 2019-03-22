const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const userCustomerSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  info: {
    type: Object,
    required: true
  }
});

userCustomerSchema.plugin(uniqueValidator);
module.exports = mongoose.model("user", userCustomerSchema);
