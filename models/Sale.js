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
      type: String,
      required: true,
      enum: [
        'Cement - 50kg',
        'Iron Bars - 12mm',
        'Iron Bars - 16mm',
        'Iron Sheets',
        'Nails - 3 inch',
        'Wire Mesh'
      ]
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    unitPrice: {
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
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Sale', saleSchema);