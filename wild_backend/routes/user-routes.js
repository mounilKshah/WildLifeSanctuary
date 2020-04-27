const express = require("express");
const HttpError = require("../models/http-error");
const router = express.Router();
const usersControllers = require("../controllers/user-controllers");

router.post("/signup", usersControllers.signup);
router.post("/login", usersControllers.login);

module.exports = router;
