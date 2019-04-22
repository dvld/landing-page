
// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      require: true
    },
    subscribed: {
      type: Boolean
    }
  }
);

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;