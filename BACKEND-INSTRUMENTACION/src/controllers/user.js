const UserService = require("../services/user_service");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserService.getAllUsers();
    res.status(200).send({ status: "OK", data: allUsers });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const getOneUser = async (req, res) => {
  const {
    params: { userId },
  } = req;
  try {
    const user = await UserService.getOneUser(userId);
    res.send({ status: "OK", data: user });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  if (!body.email || !body.username || !body.password) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "The following keys are missing or empty in the request body: 'email', 'username', 'password'",
      },
    });
    return;
  }
  const newUser = {
    email: body.email,
    username: body.username,
    password: body.password,
    // Include other properties as needed
  };
  try {
    const createdUser = await UserService.createNewUser(newUser);
    res.status(201).send({ status: "OK", data: createdUser });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const updateUser = async (req, res) => {
  const {
    body,
    params: { userId },
  } = req;
  if (!userId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':userId' cannot be empty" },
    });
    return;
  }
  try {
    const updatedUser = await UserService.updateUser(userId, body);
    res.send({ status: "OK", data: updatedUser });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const deleteUser = async (req, res) => {
  const {
    params: { userId },
  } = req;
  try {
    const deletedUser = await UserService.deleteUser(userId);
    res.status(204).send({ status: "OK", data: deletedUser });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
