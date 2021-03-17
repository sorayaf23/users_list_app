const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);