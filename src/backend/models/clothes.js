const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const clothedProductSchema = mongoose.Schema({
  name: {
    type: String
    //required: true
  },
  category: {
    type: String,
    required: true
  },
  large: {
    type: Object
  },
  medium: {
    type: Object

  },
  small: {
    type: Object

  },
  color: {
    type: Array

  }

});

//clothProductSchema.plugin(uniqueValidator);
module.exports = mongoose.model("clothes", clothedProductSchema);
