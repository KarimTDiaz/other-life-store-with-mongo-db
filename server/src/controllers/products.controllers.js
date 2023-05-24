const { v4 } = require('uuid');
const ProductModel = require('../schemas/product.schema');
const UserModel = require('../schemas/user.schema');
const controller = {};

controller.allProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    res.status(200).send(allProducts);
  } catch (err) {
    res.status(500).send({ error: 'Error al leer la Database' });
  }
};

controller.getSingleProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ error: 'Error al leer la Database' });
  }
};
controller.deleteProduct = async (req, res) => {
  await ProductModel.findByIdAndRemove(req.params.id);
  res.send('Product deleted');
};

controller.createProduct = async (req, res) => {
  const userCreatingProduct = await UserModel.findById(req.params.id);
  const {
    productImage,
    title,
    artist,
    styles,
    mediaCondition,
    description,
    price,
    likes,
    sellerEmail,
    sellerId,
    sellerUserName
  } = req.body;

  const newProduct = new ProductModel({
    _id: v4(),
    productImage,
    title,
    artist,
    styles,
    mediaCondition,
    description,
    price,
    likes,
    sellerEmail,
    sellerId,
    sellerUserName
  });
  await userCreatingProduct.products.push(newProduct);
  await userCreatingProduct.save();
  await newProduct.save();
  res.send(newProduct);
};

module.exports = controller;
