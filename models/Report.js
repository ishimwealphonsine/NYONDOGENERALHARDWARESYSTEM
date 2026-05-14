const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new mongoose.Schema(
  {
    reportType: {
      type: String,
      required: true,
      enum: [
        'Sales Report',
        'Credit Report',
        'Deposit Scheme Report',
        'Transport Report'
      ]
    },

    startDate: {
      type: String,
      required: true
    },

    endDate: {
      type: String,
      required: true
    },

    exportFormat: {
      type: String,
      required: true,
      enum: ['PDF', 'Excel']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Report', reportSchema);