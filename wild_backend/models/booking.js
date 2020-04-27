const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  sanctuary: { type: String, required: true },
  date: { type: Date, required: true },
  creator_name: { type: String },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Booking", bookingSchema);
