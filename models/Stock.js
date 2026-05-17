const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
      enum: [
        'Cement',
        'Iron Bars',
        'Iron Sheets',
        'Nails',
        'Wire Mesh',
        'Barbed Wire',
        'Wheelbarrow'
      ]
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    costPrice: {
      type: Number,
      required: true,
      min: 0
    },

    sellingPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    totalPaid: {
      type: Number
    },

    supplierName: {
      type: String,
      required: true,
      trim: true
    },

    supplierPhone: {
      type: String,
      required: true,
      trim: true
    },

    factoryName: {
      type: String,
      required: true,
      trim: true
    },

    dateReceived: {
      type: Date,
      default: Date.now
    },

    paymentStatus: {
      type: String,
      required: true,
      enum: ['cash', 'credit']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Stock', stockSchema);