const { v4: uuid } = require("uuid");
const { User } = require("../database/user");

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    throw error;
  }
};

const getOneUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const createNewUser = async (newUser) => {
  try {
    const createdUser = await User.create(newUser);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, changes) => {
  try {
    const user = await User.findByPk(userId);
    if (user) {
      const updatedUser = await user.update(changes);
      return updatedUser;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (user) {
      const deletedUser = await user.destroy();
      return deletedUser;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
