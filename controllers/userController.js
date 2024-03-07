const userService = require("../services/user");
const { Types } = require("mongoose");

exports.getUser = async (req, res) => {
  const id = req?.params?.id;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID" });
  }
  try {
    const user = await userService.getUser(id);
    res.status(200).send(user);
  } catch (err) {
    console.log("Error in controller", err.message);
    res.status(500).send({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).send(users);
  } catch (err) {
    console.log("Error in controller", err.message);
    res.status(500).send({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    if (!user) {
      return res.status(418).send({ message: "user already exist" });
    }
    res.status(200).send(user);
  } catch (err) {
    console.log("Error in controller", err.message);
    res.status(500).send({ message: err.message });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req?.body;

  try {
    const user = await userService.getUserByEmail(email);
    if (user?.password === password) {
      return res.status(200).send({ message: "signin success" });
    }
    res.status(200).send({ message: "signin failed" });
  } catch (err) {
    console.log("Error in controller", err.message);
    res.status(500).send({ message: err.message });
  }
};

exports.updatePassword = async (req, res) => {
  const { email, password } = req?.body;

  try {
    const user = await userService.updatePassword(email, password);
    res.status(200).send(user);
  } catch (err) {
    console.log("Error in controller", err.message);
    res.status(500).send({ message: err.message });
  }
};
