const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  title: { type: String, required: true },
  sanctuary: { type: String, required: true },
  image: { type: String, required: true },
  creator_name: { type: String },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  likes: { type: Number, required: true },
});

module.exports = mongoose.model("Photo", photoSchema);
