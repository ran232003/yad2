const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const addUser = (req, res, next) => {
  console.log("check");
  res.json({ res: "by" });
};

module.exports = {
  addUser: addUser,
};
