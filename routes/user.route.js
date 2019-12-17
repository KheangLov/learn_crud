const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const controller = require('../controllers/user.controller');

router.get('/user', controller.getUsers);

router.post('/user', controller.createUser);

router.put('/user/:id', async (req, res) => {
  const rounds = 10;
  const hash = await bcrypt.hash(req.body.password, rounds);
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.id },
      { 
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          fullname: req.body.firstname + req.body.lastname,
          email: req.body.email,
          password: hash
        } 
      }
    );
    res.json(updateUser);
  } catch (err) {
    res.json(err);
  }
});

router.delete('/user/:id', async (req, res) => {
  try {
    const removeUser = await User.remove(
      { _id: req.params.id }
    );
    res.json(removeUser);
  } catch (err) {
    res.status(201).json({ message: err });
  }
});

module.exports = router;