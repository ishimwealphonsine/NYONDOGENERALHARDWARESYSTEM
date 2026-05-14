const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportSchema = new mongoose.Schema(
  {
    fromDate: {
      type: String,
      required: true
    },

    toDate: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Transport', transportFilterSchema);