const UserModel = require('../schemas/user.schema');
const { v4 } = require('uuid');
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
    email,
    gender,
    direction,
    favorites,
    products,
    purchases
  } = req.body;

  const newUser = new UserModel({
    _id,
    profileImage,
    userName,
    name,
    surName,
    email,
    gender,
    direction,
    favorites,
    products,
    purchases
  });
  await newUser.save();
  res.send('User created');
};

controller.updateUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  await ProductModel.updateOne({ _id: user.id }, { $set: { ...req.body } });
  res.send('User Updated');
};

module.exports = controller;
