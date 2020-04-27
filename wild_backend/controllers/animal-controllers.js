const HttpError = require("../models/http-error");
const uuid = require("uuid/v4");
const mongoose = require("mongoose");
const Photo = require("../models/photo");
const User = require("../models/user");
const Animal = require("../models/animal");

const createAnimal = async (req, res, next) => {
  const createdAnimal = new Animal({
    name: req.body.name,
    animal_class: req.body.animal_class,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  try {
    await createdAnimal.save();
  } catch (err) {
    return next(new HttpError("Something wernt wrong here", 500));
  }
  res.status(201).json({ animal: createdAnimal });
};
const getAnimal = async (req, res, next) => {
  let animals;
  try {
    animals = await Animal.find({});
  } catch (err) {
    return next(new HttpError("something wrong", 500));
  }
  return res.json({
    animals: animals.map((animal) => animal.toObject({ getters: true })),
  });
};
exports.createAnimal = createAnimal;
exports.getAnimal = getAnimal;
