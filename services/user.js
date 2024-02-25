const userModel = require("../models/user");

exports.createUser = async (payload) => {
  try {
    if (!payload) {
      console.log("payload should not be empty");
      throw new Error("payload should not be empty");
    }
    const user = await this.getUserByEmail(payload?.email);
    if (!user || user.length <= 0) {
      const user = await userModel.create(payload);
      return user;
    } else {
      throw new Error("user already exist");
    }
  } catch (err) {
    console.log("error in user service", err.message);
    throw err;
  }
};

exports.getUser = async (id) => {
  try {
    const user = await userModel.findById(id);
    return user;
  } catch (err) {
    console.log("error in user service", err.message);
    throw err;
  }
};

exports.getUserByEmail = async (emailId) => {
  try {
    const user = await userModel.findOne({ email: emailId });
    return user;
  } catch (err) {
    console.log("error in user service", err.message);
    throw err;
  }
};

exports.getAllUsers = async () => {
  try {
    const users = await userModel.find({});
    return users;
  } catch (err) {
    console.log("error in user service", err.message);
    throw err;
  }
};

exports.updatePassword = async (emailId, password) => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { email: emailId },
      {
        password: password,
      }
    );
    if (updatedUser) {
      const latestUser = await this.getUserByEmail(updatedUser?.email);
      return latestUser;
    }
  } catch (err) {
    console.log("error in user service", err.message);
    throw err;
  }
};
