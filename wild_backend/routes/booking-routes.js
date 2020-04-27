const express = require("express");
const HttpError = require("../models/http-error");
const router = express.Router();
const bookingControllers = require("../controllers/booking-controllers");
const fileUpload = require("../middleware/fileupload");

router.get("/user/:uid", bookingControllers.getBookingsByUserId);
router.post("/new", bookingControllers.createBooking);

module.exports = router;
