const express = require("express");
const HttpError = require("../models/http-error");
const router = express.Router();
const sanctuaryControllers = require("../controllers/sanctuary-controllers");
const fileUpload = require("../middleware/fileupload");

router.post("/new", sanctuaryControllers.createSanctuary);
router.get("/:sname", sanctuaryControllers.getSanctuary);
module.exports = router;
