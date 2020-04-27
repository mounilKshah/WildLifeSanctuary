const HttpError = require("../models/http-error");
const uuid = require("uuid/v4");
const mongoose = require("mongoose");
const Booking = require("../models/booking");
const User = require("../models/user");

const getBookingsByUserId = async (req, res, next) => {
  console.log("hey");
  const user_id = req.params.uid;
  let bookings;
  try {
    bookings = await Booking.find({ creator: user_id });
  } catch (err) {
    const error = new HttpError("Something went wrong user id", 404);
    return next(error);
  }

  if (!bookings || bookings.length === 0) {
    return next(
      new HttpError("Could not find photos for provided user id", 404)
    );
  }
  console.log(bookings);
  console.log("HERE");
  return res.json({
    bookings: bookings.map((booking) => booking.toObject({ getters: true })),
  });
};

const createBooking = async (req, res, next) => {
  const createdBooking = new Booking({
    sanctuary: req.body.sanctuary,
    creator: req.body.creator,
    date: req.body.day,
    creator_name: null,
  });
  console.log(createdBooking);
  console.log(createdBooking.creator);
  let user;
  try {
    // creator = mongoose.Types.ObjectId(creator);
    user = await User.findById(createdBooking.creator);
  } catch (err) {
    return next(new HttpError("Couldnt gind creator for this", 500));
  }

  if (!user) return res.json(createdBooking);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    createdBooking.creator_name = user.name;
    await createdBooking.save({ session: sess });
    user.bookings.push(createdBooking);
    await user.save();
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Something wnt wrong", 500));
  }
  res.status(201).json({ booking: createdBooking });
};

exports.createBooking = createBooking;
exports.getBookingsByUserId = getBookingsByUserId;
