const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

exports.createUser = async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    fullname: req.body.firstname + req.body.lastname,
    email: req.body.email
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json(err);
  }
};
