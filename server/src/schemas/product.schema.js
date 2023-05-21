const mongoose = require('mongoose');

// Schemes
const ProductSchema = mongoose.Schema({
  _id: String,
  productImage: String,
  title: String,
  artist: String,
  released: String,
  styles: String,
  mediaCondition: String,
  description: String,
  price: Number,
  seller: Object,
  likes: Number
});

// Models
const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;
