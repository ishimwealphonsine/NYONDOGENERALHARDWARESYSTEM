const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const depositSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    nin: {
      type: String,
      required: true,
      trim: true,
      minlength: 14,
      maxlength: 14
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true
    },

    selectedProduct: {
      type: String,
      required: true,
      enum: ['Cement', 'Iron Sheets', 'Iron Bars']
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    sellingPrice: {
      type: Number,
      required: true,
      min: 0
    },

    moneyDeposited: {
      type: Number,
      required: true,
      min: 0
    },

    customerDistance: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Deposits', depositSchema);