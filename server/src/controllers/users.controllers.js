const UserModel = require('../schemas/user.schema');
const { v4 } = require('uuid');
const controller = {};

controller.allUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
    console.log(allUsers);
  } catch (err) {
    res.status(500).send({ error: 'Error al leer la Database' });
  }
};

controller.getSingleUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).send(user);
    console.log(user);
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

  const userCheck = await UserModel.findById(req.body._id);
  /* const emailCheck = await UserModel.findById(req.body.email); */
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
    gender,
    direction,
    favorites,
    products,
    purchases
  });

  const userCreated = await newUser.save();

  res.send(userCreated);
};

controller.updateUser = async (req, res) => {
  console.log(req.params.id);
  const user = await UserModel.findById(req.params.id);
  console.log(user);
  /*   await UserModel.updateOne({ _id: user.id }, { $set: { ...req.body } }); */
  res.send('User Updated');
};

module.exports = controller;
