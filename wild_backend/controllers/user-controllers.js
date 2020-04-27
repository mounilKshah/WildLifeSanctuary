const HttpError = require("../models/http-error");
const uuid = require("uuid/v4");
const User = require("../models/user");

const signup = async (req, res, next) => {
  const { name, email, password, gender, age } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Sign up failed", 500));
  }

  if (existingUser) {
    return next(new HttpError("USER Exists already", 422));
  }

  const createdUser = new User({
    id: uuid(),
    name,
    email,
    password,
    photos: [],
    gender,
    age,
    booking: [],
  });
  //DUMMY_USERS.push(createdUser);

  try {
    await createdUser.save();
  } catch (err) {
    return next(new HttpError("Creating user failed, try again", 500));
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Siggn in failed", 500));
  }

  if (!existingUser || existingUser.password != password) {
    return next(new HttpError("combination does not exist", 401));
  }

  res.json({
    message: "logged in",
    user: existingUser.toObject({ getters: true }),
  });
};

exports.login = login;
exports.signup = signup;
