const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    nin: {
      type: String,
      required: true,
      trim: true,
      minlength: 14,
      maxlength: 14
    },

    role: {
      type: String,
      required: true,
      enum: ['Sales Attendant', 'Store Manager', 'Accounts/Admin']
    },

    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);