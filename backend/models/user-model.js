const mongoose = require("mongoose");

userSchema = mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  isLoggedIn: Boolean,
  googleLogin: Boolean,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
