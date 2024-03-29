const ProductModel = require('../schemas/product.schema');
const UserModel = require('../schemas/user.schema');
const controller = {};

controller.allUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(500).send({ error: 'Error al leer la Database' });
  }
};

controller.getSingleUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ error: 'Error al leer la Database' });
  }
};

controller.deleteUser = async (req, res) => {
  await UserModel.findByIdAndRemove(req.params.id);
  res.send('user deleted');
};

controller.createUser = async (req, res) => {
  const {
    _id,
    profileImage,
    userName,
    name,
    surName,
    date,
    sales,
    email,
    gender,
    direction,
    favorites,
    products,
    purchases,
    cart,
    ratings
  } = req.body;

  const userCheck = await UserModel.findById(req.body._id);
  // const emailCheck = await UserModel.findById(req.body.email);
  if (userCheck) return res.send({ message: 'El id se repite' });

  const userNameCheck = await UserModel.find({
    userName: { $eq: req.body.userName }
  });

  if (userNameCheck.length !== 0)
    return res.send({ message: 'El userName se repite' });

  const newUser = new UserModel({
    _id,
    profileImage,
    userName,
    name,
    surName,
    email,
    date,
    sales,
    gender,
    direction,
    favorites,
    products,
    purchases,
    cart,
    ratings
  });

  const userCreated = await newUser.save();
  res.send(userCreated);
};

controller.updateUser = async (req, res) => {
  const userUpdated = await UserModel.updateOne(
    { _id: req.params.id },
    { $set: { ...req.body } }
  );
  res.send(userUpdated);
};

controller.likeProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.body._id);
    const userLikingProduct = await UserModel.findById(req.params.id);
    const index = userLikingProduct.favorites.indexOf(req.body._id);
    if (index !== -1) {
      userLikingProduct.favorites.splice(index, 1);
      if (product.likes > 0) {
        product.likes = product.likes - 1;
      }
    } else {
      product.likes = product.likes + 1;
      userLikingProduct.favorites.push(req.body._id);
      console.log(product);
    }
    await product.save();
    await userLikingProduct.save();

    res.send({ message: 'liked succesfully' });
  } catch (error) {
    console.log(error);
  }
};

controller.addToCart = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  const index = user.cart.indexOf(req.body._id);
  if (index === -1) {
    user.cart.push(req.body._id);
  } else {
    user.cart.splice(index, 1);
  }

  await user.save();
  res.send({ message: 'Added to cart succesfully' });
};

controller.userRating = async (req, res) => {
  const userRated = await UserModel.findById(req.params.id);
  userRated.ratings.push(req.body);
  await userRated.save();
  res.send({ message: 'Rated succesfullys' });
};

module.exports = controller;
