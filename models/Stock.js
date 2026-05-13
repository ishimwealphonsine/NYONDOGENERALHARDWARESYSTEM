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

    unitCost: {
      type: Number,
      required: true,
      min: 0
    },

    unitPrice: {
      type: Number,
      required: true,
      min: 0
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