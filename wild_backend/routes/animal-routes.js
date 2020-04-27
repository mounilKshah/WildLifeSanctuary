const express = require("express");
const HttpError = require("../models/http-error");
const router = express.Router();
const animalControllers = require("../controllers/animal-controllers");
const fileUpload = require("../middleware/fileupload");

router.get("/all", animalControllers.getAnimal);
router.post("/", animalControllers.createAnimal);

module.exports = router;
