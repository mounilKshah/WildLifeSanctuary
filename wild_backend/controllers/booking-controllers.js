const HttpError = require("../models/http-error");
const uuid = require("uuid/v4");
const mongoose = require("mongoose");
const Booking = require("../models/booking");
const User = require("../models/user");

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
