const Users = require("../Models/Users");

exports.findUsers = async (req, res) => {
  const users = await Users.find();
  res.send({ data: users });
};

exports.createUser = async (req, res) => {
  const user = new Users(req.body);
  await user.save();
  res.send({ data: user });
};

exports.findUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.send({ data: user });
  } catch {
    res.status(404).send({ error: "User does not exist!" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    Object.assign(user, req.body);
    user.save();
    res.send({ data: user });
  } catch {
    res.status(404).send({ error: "User does not exist!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    await user.remove();
    res.send("User deleted");
  } catch {
    res.status(404).send({ error: "User does not exist!" });
  }
};
