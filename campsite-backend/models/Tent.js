const mongoose = require('mongoose');

const tentSchema = new mongoose.Schema({
  tentId: String,
  name: String,
  description: String,
  price: String,
  status: String
});

module.exports = mongoose.model('Tent', tentSchema);
