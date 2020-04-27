const HttpError = require("../models/http-error");
const uuid = require("uuid/v4");
const mongoose = require("mongoose");
const Photo = require("../models/photo");
const User = require("../models/user");
const Sanctuary = require("../models/sanctuary");

const createSanctuary = async (req, res, next) => {
  const createdSanctuary = new Sanctuary({
    name: req.body.name,
    animals_found: req.body.animals_found,
    opening_time: req.body.opening_time,
    closing_time: req.body.closing_time,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  try {
    await createdSanctuary.save();
  } catch (err) {
    return next(new HttpError("Something wernt wrong here", 500));
  }
  res.status(201).json({ Sanctuary: createdSanctuary });
};
const getSanctuary = async (req, res, next) => {
  const sanctuary_name = req.params.sname;
  console.log(sanctuary_name);
  let sanctuary;
  try {
    sanctuary = await Sanctuary.find({ name: sanctuary_name });
  } catch (err) {
    const error = new HttpError("something went wrong", 500);
    return next(error);
  }
  if (!sanctuary) {
    const error = new HttpError("Could not find photo for provided id", 404);
    return next(error);
  }
  res.json({ sanctuary: sanctuary[0].toObject({ getters: true }) });
};

exports.createSanctuary = createSanctuary;
exports.getSanctuary = getSanctuary;
