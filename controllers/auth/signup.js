const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const { RequestError } = require("../../helpers/index");

const signup = async (req, res) => {
  const { email, password, name } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    email,
    password: hashPassword,
    name,
  });
  res.status(201).json({
    email: result.email,
    name: result.name,
  });
};

module.exports = signup;
