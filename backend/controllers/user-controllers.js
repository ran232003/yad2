const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const User = require("../models/user-model");
app.use(bodyParser.json());

const addUser = async (req, res, next) => {
  const user = req.body;
  try {
    const checkUser = await User.findOne({ email: user.email });
    if (checkUser === null) {
      const newUser = new User(user);
      await newUser.save();
      return res.json({ message: "user added" });
    } else {
      //user exist
      return res.json({ message: "user exist" });
    }
  } catch (error) {
    //
    return res.json({ message: "error" });
  }

  //const userDb = await User.find({ email: user.email });
  console.log("check", user);
  // res.json({ res: "by" });
};

module.exports = {
  addUser: addUser,
};
