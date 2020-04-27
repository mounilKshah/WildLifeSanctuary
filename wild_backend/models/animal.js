const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: { type: String, required: true },
  animal_class: { type: String },
  description: { type: String, required: true },
  latitude: { type: Number },
  longitude: { type: Number },
});

module.exports = mongoose.model("Animal", animalSchema);
