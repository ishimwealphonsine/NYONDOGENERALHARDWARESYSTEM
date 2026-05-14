const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      required: true,
      enum: ['Sales Attendant', 'Store Manager', 'Admin']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Login', loginSchema);