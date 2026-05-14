const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose').default || require('passport-local-mongoose');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
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
  },
  {
    timestamps: true
  }
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});
module.exports = mongoose.model('User', userSchema);