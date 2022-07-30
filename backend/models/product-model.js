const mongoose = require("mongoose");

productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  type: [],
  year: String,
  condition: string,
  image: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
