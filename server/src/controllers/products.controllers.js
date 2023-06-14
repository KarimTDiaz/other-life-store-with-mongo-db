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
    genre,
    mediaCondition,
    trackList,
    format,
    label,
    year,
    country,
    description,
    price,
    likes,
    sellerId,
    sellerUserName
  } = req.body;

  const newProduct = new ProductModel({
    _id: v4(),
    productImage,
    title,
    artist,
    styles,
    genre,
    mediaCondition,
    description,
    trackList,
    format,
    label,
    year,
    country,
    date: new Date().toLocaleString(),
    price,
    likes,
    sellerId,
    sellerUserName
  });
  await userCreatingProduct.products.push(newProduct._id);
  await userCreatingProduct.save();
  await newProduct.save();
  res.send(newProduct);
};

controller.getMyProducts = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  const products = await ProductModel.find();
  const userProducts = products.filter(product =>
    user.products.includes(product._id)
  );
  res.send(userProducts);
};

controller.getMyFavorites = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  const products = await ProductModel.find();
  const userFavorites = products.filter(product =>
    user.favorites.includes(product._id)
  );
  res.send(userFavorites);
};

controller.getMyCart = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  const products = await ProductModel.find();
  const userCart = products.filter(product => user.cart.includes(product._id));
  res.send(userCart);
};

controller.deleteProduct = async (req, res) => {
  try {
    const users = await UserModel.find();
    users.forEach(async user => {
      user.favorites = user.favorites.filter(like => like !== req.params.id);
      user.products = user.products.filter(
        product => product !== req.params.id
      );
      await user.save();
    });

    await ProductModel.findByIdAndRemove(req.params.id);
    res.send({ message: 'Deleted succesfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

controller.purchaseProduct = async (req, res) => {
  try {
    const users = await UserModel.find();
    users.forEach(async user => {
      user.favorites = user.favorites.filter(like => like !== req.params.id);
      user.products = user.products.filter(
        product => product !== req.params.id
      );
      user.cart = user.cart.filter(product => product !== req.params.id);
      await user.save();
    });
    const userSelling = await UserModel.findById(req.body.sellerId);
    const userPurchasing = await UserModel.findById(req.body.buyerId);
    userSelling.sales.push(req.body.record);
    userPurchasing.purchases.push(req.body.record);
    await userSelling.save();
    await userPurchasing.save();
    await ProductModel.findByIdAndRemove(req.params.id);
    res.send({ message: 'purchased product succesfull' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = controller;
