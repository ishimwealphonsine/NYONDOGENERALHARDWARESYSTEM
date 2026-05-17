const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true
    },

    customerPhone: {
      type: String,
      required: true,
      trim: true
    },

    customerAddress: {
      type: String,
      required: true,
      trim: true
    },

    customerDistance: {
      type: Number,
      required: true,
      min: 0
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stock',
      required: true,
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

    paymentMethod: {
      type: String,
      required: true,
      enum: ['Cash', 'Mobile Money']
    },

    transportCharge: {
      type: Number,
      default: 0
    },

    totalAmount: {
      type: Number,
      default: 0
    },

    attendant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
    },

    date: {
      type: Date,
      default: Date.now
    }
  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model('Sale', saleSchema);