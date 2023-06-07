const mongoose = require('mongoose');
// Schemes
const UserSchema = mongoose.Schema({
  _id: String,
  profileImage: String,
  userName: String,
  name: String,
  surName: String,
  date: String,
  email: String,
  gender: String,
  sales: Number,
  direction: {
    country: String,
    city: String,
    poblation: String,
    address: String,
    zipCode: Number
  },
  favorites: Array,
  products: Array,
  purchases: Array,
  cart: Array
});

// Models
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
