const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    fullname: {
      type: String,
      maxlength: 128,
      index: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 128
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('users', userSchema);