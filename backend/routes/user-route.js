const { addUser } = require("../controllers/user-controllers");

express = require("express");
const router = express.Router();

router.post("/newUser", addUser);

module.exports = router;
