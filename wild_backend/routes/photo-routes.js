const express = require("express");
const HttpError = require("../models/http-error");
const router = express.Router();
const photosControllers = require("../controllers/photos-controllers");
const fileUpload = require("../middleware/fileupload");

router.get("/photos_id/:pid", photosControllers.getPhotoById);
router.get("/all", photosControllers.getPhoto);
router.get("/user/:uid", photosControllers.getPhotosByUserId);

router.post("/", fileUpload.single("image"), photosControllers.createPhoto);

router.delete("/:pid", photosControllers.deletePhoto);
module.exports = router;
