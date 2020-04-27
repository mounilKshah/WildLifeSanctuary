const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sanctuarySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  animals_found: [{ type: String }],
  opening_time: { type: String },
  closing_time: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

module.exports = mongoose.model("Sanctuary", sanctuarySchema);
