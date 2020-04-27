const HttpError = require("../models/http-error");
const uuid = require("uuid/v4");
const mongoose = require("mongoose");
const Photo = require("../models/photo");
const User = require("../models/user");

const getPhoto = async (req, res, next) => {
  let photos;
  try {
    photos = await Photo.find({});
  } catch (err) {
    return next(new HttpError("something wrong", 500));
  }
  res.json({
    photos: photos.map((photo) => photo.toObject({ getters: true })),
  });
};
const getPhotoById = async (req, res, next) => {
  const photo_id = req.params.pid;
  let photo;
  try {
    photo = await Photo.findById(photo_id);
  } catch (err) {
    const error = new HttpError("something went wrong", 500);
    return next(error);
  }
  if (!photo) {
    const error = new HttpError("Could not find photo for provided id", 404);
    return next(error);
  }
  res.json({ photo: photo.toObject({ getters: true }) });
};

const getPhotosByUserId = async (req, res, next) => {
  const user_id = req.params.uid;
  let photos;
  try {
    photos = await Photo.find({ creator: user_id });
  } catch (err) {
    const error = new HttpError("Something went wron user id", 404);
    return next(error);
  }

  if (!photos || photos.length === 0) {
    return next(
      new HttpError("Could not find photos for provided user id", 404)
    );
  }
  return res.json({
    photos: photos.map((photo) => photo.toObject({ getters: true })),
  });
};

const createPhoto = async (req, res, next) => {
  console.log(req.body);
  const { title, sanctuary, creator } = req.body;
  const createdPhoto = new Photo({
    title,
    sanctuary,
    creator,
    creator_name: null,
    image: req.file.path,
    likes: 0,
  });
  console.log(createdPhoto);

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    return next(new HttpError("Couldnt gind creator for this", 500));
  }

  if (!user) return next(new HttpError("Couldnt find user with given id", 404));

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    createdPhoto.creator_name = user.name;
    await createdPhoto.save({ session: sess });
    user.photos.push(createdPhoto);
    await user.save();
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Something wnt wrong", 500));
  }
  res.status(201).json({ photo: createdPhoto });
};

const deletePhoto = async (req, res, next) => {
  const photoId = req.params.pid;
  let photo;
  try {
    photo = await Photo.findById(photoId).populate("creator");
  } catch (err) {
    return next(new HttpError("Something went wrong delete", 500));
  }
  if (!photo) return next(new HttpError("NO PHOTO EXISTS", 500));
  try {
    const sess = await mongoose.startSession();
    await sess.startTransaction();
    await photo.remove({ session: sess });
    photo.creator.photos.pull(photo);
    await photo.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Something went wrong,couldnt  delete", 404));
  }

  res.status(200).json({ message: "Deleted photo" });
};

exports.deletePhoto = deletePhoto;
exports.createPhoto = createPhoto;
exports.getPhoto = getPhoto;
exports.getPhotoById = getPhotoById;
exports.getPhotosByUserId = getPhotosByUserId;
