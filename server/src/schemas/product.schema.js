const mongoose = require('mongoose');
const { v4 } = require('uuid');

// Schemes
const ProductSchema = mongoose.Schema({
  _id: String,
  productImage: String,
  title: String,
  artist: String,
  styles: String,
  mediaCondition: String,
  trackList: Array,
  format: String,
  label: String,
  year: Number,
  date: String,
  description: String,
  price: Number,
  likes: Number,
  sellerEmail: String,
  sellerId: String
});

// Models
const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;
