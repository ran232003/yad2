const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const User = require("../models/user-model");
app.use(bodyParser.json());

const addUser = async (req, res, next) => {
  const user = req.body;
  const newUser = new User(user);
  await newUser.save();
  //const userDb = await User.find({ email: user.email });
  console.log("check", user);
  res.json({ res: "by" });
};

module.exports = {
  addUser: addUser,
};
