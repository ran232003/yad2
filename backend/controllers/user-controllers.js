const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const addUser = (req, res, next) => {
  const user = req.body;
  console.log("check", user);
  res.json({ res: "by" });
};

module.exports = {
  addUser: addUser,
};
