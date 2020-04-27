const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user-routes");
const photoRoutes = require("./routes/photo-routes");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const animalRoutes = require("./routes/animal-routes");
const bookingRoutes = require("./routes/booking-routes");
const sanctuaryRoutes = require("./routes/sanctuary-routes");

app.use(bodyParser());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allowed--Methods", "GET,POST,DELETE");
  next();
});

app.use("/api/photos", photoRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/animals", animalRoutes);

app.use("/api/sanctuaries", sanctuaryRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occured" });
});

mongoose
  .connect(
    "mongodb+srv://AdvaitSankhe:advait2000@cluster0-kaccp.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log("Could not connect to db");
  });
