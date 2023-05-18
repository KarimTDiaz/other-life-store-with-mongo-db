const mongoose = require('mongoose');
// Schemes
const UserSchema = mongoose.Schema({
  _id: String,
  profileImage: String,
  userName: String,
  name: String,
  surName: String,
  email: String,
  gender: String,
  direction: {
    country: String,
    city: String,
    poblation: String,
    address: String,
    zipCode: Number
  },
  favorites: Array,
  products: Array,
  purchases: Array
});

// Models
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
