const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pricingSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true
    },

    costPrice: {
      type: Number,
      required: true,
      min: 0
    },

    sellingPrice: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Pricing', pricingSchema);