const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const { RequestError } = require("../../helpers/index");

const register = async (req, res) => {
  const { email, password, firstName } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    email,
    password: hashPassword,
    firstName,
  });
  res.status(201).json({
    email: result.email,
    firstName: result.firstName,
  });
};

module.exports = register;
